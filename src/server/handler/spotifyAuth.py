# -*- coding: utf-8 -*-
"""reAudioPlayer ONE"""
from __future__ import annotations
__copyright__ = ("Copyright (c) 2022 https://github.com/reAudioPlayer")

import os
import json
from time import time
import webbrowser
import base64
from typing import Optional, Tuple
import asyncio

import aiohttp
from aiohttp import web
from spotipy.oauth2 import  SpotifyOAuth # type: ignore

from config.runtime import Runtime
from helper.dictTool import DictEx


SCOPE = "user-library-read user-follow-read user-follow-modify"
REDIRECT = "http://localhost:1234/api/spotify/callback"


class SpotifyAuth:
    """Handles Spotify Authentication"""
    def __init__(self) -> None:
        self._attemptedClientAuth = False

        if self.shouldAuth():
            self._openSpotifyAuth()

    def shouldAuth(self) -> bool:
        """Returns if the user should be authenticated"""
        if SpotifyAuth.isDisabled():
            print("Spotify is disabled")
            return False

        if not os.path.isfile(".cache"):
            print("Spotify is not authenticated")
            return True

        with open(".cache", "r", encoding = "utf8") as file:
            data = json.loads(file.read())

        return DictEx(data).ensure("expires_at", int) < time()

    def isAuth(self) -> bool:
        """Returns if the user is authenticated"""
        return os.path.isfile(".cache")

    @property
    def authorizeUrl(self) -> str:
        """Returns the Spotify Authorize Url"""
        clientId, _ = SpotifyAuth._getSpotifyAuthData()
        return f"https://accounts.spotify.com/authorize?client_id={clientId}&response_type=code&redirect_uri={REDIRECT}&scope={SCOPE}" # pylint: disable=line-too-long

    def _openSpotifyAuth(self) -> None:
        webbrowser.open(self.authorizeUrl)

    @staticmethod
    def isDisabled() -> bool:
        """Returns True if Spotify is disabled"""
        return "restricted" in SpotifyAuth._getSpotifyAuthData()

    @staticmethod
    async def _getClientData() -> Optional[bytes]:
        """Returns the client_id and client_secret as bytes"""
        id_, secret = SpotifyAuth._getSpotifyAuthData()
        if "restricted" in (id_, secret):
            return None
        return base64.b64encode(f"{id_}:{secret}".encode("utf-8"))

    @staticmethod
    def _getSpotifyAuthData() -> Tuple[str, str]:
        """Returns the client_id and client_secret"""
        spotifyConfig = Runtime.spotifyConfig() or DictEx()
        return spotifyConfig.ensureString("id"), spotifyConfig.ensureString("secret")

    @staticmethod
    def getSpotifyAuth() -> Optional[SpotifyOAuth]: # pylint: disable=invalid-name
        """Returns the SpotifyOAuth object"""
        if SpotifyAuth.isDisabled():
            return None
        return SpotifyOAuth("", "", "localhost", scope = SCOPE)

    async def clientSideAuthHandler(self, _: web.Request) -> web.Response:
        """Returns the client side auth data"""
        if os.path.isfile(".cache"):
            return web.HTTPNoContent()
        if not self.shouldAuth():
            return web.HTTPExpectationFailed()
        if self._attemptedClientAuth:
            return web.HTTPUnauthorized()

        async def _reset() -> None:
            await asyncio.sleep(10)
            self._attemptedClientAuth = False

        asyncio.create_task(_reset())

        self._attemptedClientAuth = True

        # redirect to spotify auth
        return web.Response(text = self.authorizeUrl)

    async def callbackHandler(self, request: web.Request) -> web.Response:
        """Handles the callback from Spotify"""
        code = request.query.get("code")

        if not isinstance(code, str):
            return web.HTTPBadRequest()

        await self.getSpotifyToken(code)

        # redirect to /
        return web.HTTPFound("/")

    async def getSpotifyToken(self, code: str) -> Optional[str]:
        """Returns the Spotify Token"""
        if SpotifyAuth.isDisabled():
            return None

        clientId, secret = SpotifyAuth._getSpotifyAuthData()

        async with aiohttp.ClientSession() as session:
            async with session.post("https://accounts.spotify.com/api/token", data = {
                "grant_type": "authorization_code",
                "code": code,
                "redirect_uri": REDIRECT
            }, headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + base64.b64encode(f"{clientId}:{secret}".encode("utf-8"))
                                                  .decode("utf-8")
            }) as resp:
                print("getSpotifyData", resp.status)
                if resp.status == 200:
                    data = await resp.json()

                    data["expires_at"] = data["expires_in"] + int(time())

                    with open(".cache", "w", encoding = "utf8") as file:
                        file.write(json.dumps(data))

                    return DictEx(data).ensure("access_token", str)

                return None

    async def invalidate(self) -> None:
        if os.path.isfile(".cache"):
            os.remove(".cache")