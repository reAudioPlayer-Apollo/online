# -*- coding: utf-8 -*-
"""reAudioPlayer ONE"""
__copyright__ = "Copyright (c) 2022 https://github.com/reAudioPlayer"

from typing import Any, Dict, List, Optional
import logging

from aiohttp import web
from pyaddict import JDict
from pyaddict.schema import Object, String, Integer, Array, Boolean

from db.database import Database
from db.table.artists import ArtistModel, SpotifyArtistData
from db.table.songs import SongModel
from helper.asyncThread import asyncRunInThreadWithReturn
from helper.cacheDecorator import useCache
from helper.payloadParser import withObjectPayload
from meta.metadata import Metadata
from meta.releases import Releases
from meta.search import Search, SearchScope
from meta.spotify import Spotify, SpotifyResult, SpotifyTrack
from dataModel.track import SpotifyPlaylist
from dataModel.song import Song
from dataModel.metadata import SongMetadata
from config.runtime import Runtime
from config.customData import LocalTrack, LocalCover


class MetaHandler:  # pylint: disable=too-many-public-methods
    """handler for different 'meta' features (e.g. metadata, spotify, search)"""

    __slots__ = ("_spotify", "_dbManager", "_logger")

    def __init__(self, spotify: Spotify) -> None:
        self._spotify = spotify
        self._dbManager = Database()
        self._logger = logging.getLogger(MetaHandler.__name__)

    @withObjectPayload(Object({"url": String().url()}), inBody=True)
    async def getMetadata(self, payload: Dict[str, Any]) -> web.Response:
        """post(/api/browse/track)"""
        metadata = await asyncRunInThreadWithReturn(Metadata, self._spotify, payload["url"])
        if not metadata:
            return web.HTTPNotFound(text="no metadata found")
        response = await metadata.toExtendedDict()
        return web.json_response(data=response)

    @withObjectPayload(Object({"id": Integer().coerce()}), inPath=True)
    async def getTrack(self, payload: Dict[str, Any]) -> web.Response:
        """get(/api/tracks/{id})"""
        id_: int = payload["id"]
        song = await self._dbManager.songs.byId(id_)
        if not song:
            return web.HTTPNotFound(text="no track found")
        return web.json_response(data=Song(song).toDict())

    async def putArtist(
        self, request: web.Request
    ) -> web.Response:  # pylint: disable=too-many-locals
        """put(/api/artists/{name})"""
        inputArtist = request.match_info["name"]
        payload = await request.json()

        tracks = Song.list(await self._dbManager.songs.byArtist(inputArtist))
        artistName = Song.autoCorrectArtist(tracks, inputArtist)
        artistModel = await ArtistModel.fetch(artistName, self._spotify, self._dbManager, tracks)

        if not artistModel:
            return web.HTTPNotFound(text="artist not found")

        spotifyId = payload["spotifyId"]

        if isinstance(spotifyId, str):
            if not len(spotifyId) == 22:
                return web.HTTPBadRequest(text="invalid spotify id")
            artistModel.spotifyModel = SpotifyArtistData.fromId(spotifyId)
            return web.Response()
        if isinstance(spotifyId, bool):
            if spotifyId:
                await self._dbManager.artists.delete(artistModel)
            else:
                artistModel.image = ""
                artistModel.spotifyModel = SpotifyArtistData.disabled()
            return web.Response()
        return web.HTTPBadRequest(text="invalid spotify id")

    async def getArtists(self, _: web.Request) -> web.Response:
        """get(/api/artists)"""
        artists = await self._dbManager.artists.all()
        return web.json_response(data=[artist.toDict() for artist in artists])

    @withObjectPayload(Object({"name": String().min(1)}), inPath=True)
    async def getArtist(
        self, payload: Dict[str, Any]
    ) -> web.Response:  # pylint: disable=too-many-locals
        """get(/api/artists/{name})"""
        inputArtist: str = payload["name"]
        tracks = Song.list(await self._dbManager.songs.byArtist(inputArtist))
        artistName = Song.autoCorrectArtist(tracks, inputArtist)
        artistModel = await ArtistModel.fetch(artistName, self._spotify, self._dbManager, tracks)

        metaDict: Optional[Dict[str, Any]] = None

        if artistModel and artistModel.spotifyModel:
            metaDict = artistModel.spotifyModel.toDict()

        return web.json_response(
            data={
                "name": artistName,
                "cover": artistModel.image if artistModel else None,
                "metadata": metaDict,
                "songs": [track.toDict() for track in tracks],
            }
        )

    @withObjectPayload(Object({"albumHash": String().min(1)}), inPath=True)
    async def putAlbum(
        self, payload: Dict[str, Any]
    ) -> web.Response:  # pylint: disable=too-many-locals
        """put(/api/albums/{albumHash})"""
        albumHash: str = payload["albumHash"]
        tracks = Song.list(await self._dbManager.songs.byAlbum(albumHash))
        albumModel = await self._dbManager.albums.byId(albumHash)
        if not albumModel:
            return web.HTTPNotFound(text="album not found")
        response = albumModel.toDict()
        response["songs"] = [track.toDict() for track in tracks]
        return web.json_response(data=response)

    @withObjectPayload(Object({"albumHash": String().min(1)}), inPath=True)
    async def getAlbum(
        self, payload: Dict[str, Any]
    ) -> web.Response:  # pylint: disable=too-many-locals
        """get(/api/albums/{albumHash})"""
        albumHash: str = payload["albumHash"]
        tracks = Song.list(await self._dbManager.songs.byAlbum(albumHash))
        albumModel = await self._dbManager.albums.byId(albumHash)
        if not albumModel:
            return web.HTTPNotFound(text="album not found")
        response = albumModel.toDict(tracks)
        response["songs"] = [track.toDict() for track in tracks]
        return web.json_response(data=response)

    async def getAlbums(self, _: web.Request) -> web.Response:
        """get(/api/albums)"""
        albums = await self._dbManager.albums.all()
        return web.json_response(data=[album.toDict() for album in albums])

    @withObjectPayload(
        Object(
            {
                "query": String().min(1),
                "scope": Array(
                    String().enum(
                        "local",
                        "spotify",
                        "audius",
                        "youtube",
                        "song",
                        "album",
                        "artist",
                        "playlist",
                    )
                ).optional(),
            }
        ),
        inBody=True,
    )
    async def search(self, payload: Dict[str, Any]) -> web.Response:
        """post(/api/search)"""
        query: str = payload["query"]
        scope = SearchScope(payload.get("scope", None))

        search = Search(self._spotify, query, scope)
        await search.execute()
        return web.json_response(data=search.toDict())

    @withObjectPayload(Object({"id": String().min(22).max(22)}), inPath=True)
    async def spotifyAlbum(self, payload: Dict[str, Any]) -> web.Response:
        """post(/api/spotify/albums/{id})"""
        id_: str = payload["id"]

        def _implement() -> SpotifyResult[List[Dict[str, Any]]]:
            result = self._spotify.albumTracks(id_)
            if not result:
                return result.transform([])

            tracks = result.unwrap()
            metadatas = [Metadata(self._spotify, track.url) for track in tracks]
            return result.transform([(metadata.toDict()) for metadata in metadatas])

        data = await asyncRunInThreadWithReturn(_implement)

        if not data:
            return data.httpResponse()

        return web.json_response(data=data.unwrap())

    @useCache(900)  # type: ignore
    async def spotifyPlaylists(self, _: web.Request) -> web.Response:
        """get(/api/spotify/playlists)"""

        def _implement() -> SpotifyResult[List[SpotifyPlaylist]]:
            result = self._spotify.userPlaylists()
            if not result:
                return result.transform([])

            return result

        data = await asyncRunInThreadWithReturn(_implement)

        if not data:
            return data.httpResponse()

        return web.json_response(data=[pl.toDict() for pl in data.unwrap()])

    @withObjectPayload(Object({"id": String().min(22).max(22)}), inPath=True)
    async def spotifyPlaylist(self, payload: Dict[str, Any]) -> web.Response:
        """get(/api/spotify/playlists/{id})"""
        id_: str = payload["id"]

        def _implement() -> SpotifyResult[List[Dict[str, Any]]]:
            result = self._spotify.playlistTracks(id_)
            if not result:
                return result.transform([])

            tracks = result.unwrap()
            metadatas = [Metadata(self._spotify, track.url) for track in tracks]

            return result.transform([(metadata.toDict()) for metadata in metadatas])

        data = await asyncRunInThreadWithReturn(_implement)

        if not data:
            return data.httpResponse()

        return web.json_response(data=data.unwrap())

    @useCache(0)  # type: ignore
    async def releases(self, _: web.Request) -> web.Response:
        """get(/api/releases)"""
        data = await asyncRunInThreadWithReturn(Releases, self._spotify)
        return web.json_response(data=data.toDict())

    @useCache(900)  # type: ignore
    async def spotifyArtists(self, _: web.Request) -> web.Response:
        """get(/api/spotify/artists)"""

        def _implement() -> SpotifyResult[List[Dict[str, Any]]]:
            result = self._spotify.allUserArtists()
            if not result:
                return result.transform([])

            return result.transform([artist.toDict() for artist in result.unwrap()])

        data = await asyncRunInThreadWithReturn(_implement)

        if not data:
            return data.httpResponse()

        return web.json_response(data=data.unwrap())

    @useCache(900)  # type: ignore
    async def spotifyLiked(self, _: web.Request) -> web.Response:
        """get(/api/spotify/tracks)"""

        def _implement() -> SpotifyResult[List[Dict[str, Any]]]:
            result = self._spotify.likedTracks()
            if not result:
                return result.transform([])

            tracks = result.unwrap()
            metadatas = [Metadata(self._spotify, track.url) for track in tracks]

            return result.transform([(metadata.toDict()) for metadata in metadatas])

        data = await asyncRunInThreadWithReturn(_implement)

        if not data:
            return data.httpResponse()

        return web.json_response(data=data.unwrap())

    @withObjectPayload(Object({"id": String().min(22).max(22)}), inPath=True)
    async def spotifyArtist(self, payload: Dict[str, Any]) -> web.Response:
        """post(/api/spotify/artists/{id})"""
        id_: str = payload["id"]

        def _implement() -> SpotifyResult[List[Dict[str, Any]]]:
            result = self._spotify.artistTracks(id_)
            if not result:
                return result.transform([])

            tracks = result.unwrap()
            metadatas = [Metadata(self._spotify, track.url) for track in tracks]
            return result.transform([metadata.toDict() for metadata in metadatas])

        data = await asyncRunInThreadWithReturn(_implement)

        if not data:
            return data.httpResponse()

        return web.json_response(data=data.unwrap())

    async def spotifyFollow(self, request: web.Request) -> web.Response:
        """post(/api/spotify/following)"""
        jdata = await request.json()
        self._spotify.follow(jdata.get("artistId"))
        return web.json_response(status=200)

    async def spotifyUnfollow(self, request: web.Request) -> web.Response:
        """delete(/api/spotify/following)"""
        jdata = await request.json()
        self._spotify.unfollow(jdata.get("artistId"))
        return web.json_response(status=200)

    async def upload(self, request: web.Request) -> web.Response:
        """post(/api/config/images)"""
        if not Runtime.args.withDocker:
            return web.HTTPExpectationFailed(text="must run in docker")

        async for obj in await request.multipart():
            if obj.filename:
                file = LocalCover.createNew(obj.filename)
                file.write(await obj.read())
                return web.Response(text=file.displayPath)
        return web.Response(status=400)

    async def uploadSong(self, request: web.Request) -> web.Response:
        """post(/api/config/tracks)"""
        if not Runtime.args.withDocker:
            return web.HTTPExpectationFailed(text="must run in docker")

        async for obj in await request.multipart():
            if obj.filename:
                file = LocalTrack.createNew(obj.filename)
                file.write(await obj.read())
                return web.Response(text=file.displayPath)
        return web.Response(status=400)

    @withObjectPayload(
        Object(
            {
                "id": Integer().min(1).optional(),
                "forceFetch": Boolean().optional(),
                "spotifyId": String().optional().min(22).max(22),
            }
        ),
        inBody=True,
    )
    async def fetchSongMeta(self, payload: Dict[str, Any]) -> web.Response:
        """post(/api/spotify/meta)"""
        id_: Optional[int] = payload.get("id")
        forceFetch = payload.get("forceFetch", False)

        if id_:
            model = await self._dbManager.songs.byId(id_)
            if not model:
                return web.HTTPNotFound(text="song not found")
        else:
            model = SongModel.empty()

        song = Song(model)

        if not forceFetch:
            if song.metadata and song.metadata.spotify:
                return web.json_response(song.metadata.toDict())

        spotifyId: Optional[str] = None
        if song.metadata and song.metadata.spotify:
            spotifyId = song.metadata.spotify.id
        spotifyId = JDict(payload).optionalGet("spotifyId", str) or spotifyId

        spotifySong = await SpotifyTrack.fetch(
            self._spotify, spotifyId, song.model.artist, song.model.name, forceFetch
        )
        if not spotifySong:
            return web.HTTPNotFound(text="song not found")

        metadata = await SongMetadata.fetch(self._spotify, spotifySong, song.metadata)
        if not metadata:
            return web.HTTPNotFound(text="metadata not found")

        song.metadata = metadata
        return web.json_response(metadata.toDict())

    async def _searchOnSpotify(self, query: str, limit: int) -> SpotifyResult[List[SpotifyTrack]]:
        def _implement() -> SpotifyResult[List[SpotifyTrack]]:
            return self._spotify.searchTrack(query, limit)

        return await asyncRunInThreadWithReturn(_implement)

    @withObjectPayload(Object({"id": Integer().min(1).coerce()}), inPath=True)
    async def spotifyRecommendSong(self, payload: Dict[str, Any]) -> web.Response:
        """get(/api/spotify/recommendations/{id})"""
        id_: int = payload["id"]
        model = await self._dbManager.songs.byId(id_)
        if not model:
            return web.HTTPNotFound(text="song not found")
        song = Song(model)
        if not song.metadata:
            return web.HTTPNotFound(text="metadata not found")
        if not song.metadata.spotify:
            return web.HTTPNotFound(text="spotify metadata not found")
        if not song.metadata.spotify.id:
            return web.HTTPNotFound(text="spotify id not found")

        result = self._spotify.recommendations(
            [artist.id for artist in song.metadata.spotify.artists or []],
            [song.metadata.spotify.id],
            [],
        )
        if not result:
            return result.httpResponse()
        tracks = result.unwrap()
        return web.json_response([track.toDict() for track in tracks])

    @withObjectPayload(
        Object(
            {
                "query": String().min(1).optional(),
                "artists": Array(String().min(22).max(22)).optional(),
                "tracks": Array(String().min(22).max(22)).optional(),
                "genres": Array(String().min(1)).optional(),
            }
        ),
        inBody=True,
    )
    async def spotifyRecommend(self, payload: Dict[str, Any]) -> web.Response:
        """post(/api/spotify/recommendations)"""

        def _implement() -> SpotifyResult[List[Dict[str, Any]]]:
            dex = JDict(payload)
            query = dex.optionalGet("query", str)

            artists = dex.ensure("artists", list)
            tracks = dex.ensure("tracks", list)
            genres = dex.ensure("genres", list)

            if query:  # find track first
                result = self._spotify.searchTrack(query)
                if result:
                    queryTracks = result.unwrap()
                    if len(queryTracks) > 0:
                        tracks.append(queryTracks[0].id)

            result = self._spotify.recommendations(artists, tracks, genres)

            if not result:
                return result.transform([])

            return result.transform([track.toDict() for track in result.unwrap()])

        data = await asyncRunInThreadWithReturn(_implement)

        if not data:
            return data.httpResponse()

        return web.json_response(data=data.unwrap())
