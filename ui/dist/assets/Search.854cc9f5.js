import{A as x}from"./ArtistItem.c2cffce4.js";import{I as P}from"./ReleaseItem.dabb67ba.js";import{M}from"./MiniPlayer.46c4e227.js";import{_ as S,b as h,d as C,o,c,e as k,f as y,a as r,w as I,v as V,F as f,h as v,t as _,p as q,k as N,g as B,j as m,l as D,i as d}from"./index.5f2d432e.js";import{S as O}from"./Shelf.cf574a94.js";import"./FindSources.02ceec45.js";import"./SpotifyPlaylistEntry.2654ff5b.js";import"./SpotifyPlaylistHeader.edfdc325.js";import"./AddAlbumToPlaylist.a2bfff22.js";const j={components:{MiniPlayer:M},name:"AddSongToPlaylist",props:{cover:String,artist:String,title:String,href:String,preview:String},data(){return{showModal:!1,selectedPlaylist:-1,track:{},playlists:[]}},methods:{share(){window.open(this.href)},close(){this.showModal=!1,this.$emit("close")},loadMetadata(){fetch("/api/browse/track",{method:"POST",body:JSON.stringify({url:this.href})}).then(t=>t.json()).then(t=>{this.track=t})},openInNewTab(){window.open(this.cover?this.cover:"/assets/img/music_placeholder.png")},add(){const t=this.track,s=this.playlists.findIndex(i=>i==this.selectedPlaylist);if(console.log(t,s),s<0){alert("no playlist selected");return}fetch(`/api/playlists/${s}/tracks`,{method:"POST",body:JSON.stringify({source:t.src,title:t.title,artist:t.artists.join(", "),album:this.title,cover:this.cover})}).then(i=>{i.status==200&&(t.added=!0,this.close())})}},watch:{showModal(){!this.showModal||(fetch("/api/playlists").then(t=>t.json()).then(t=>{this.playlists.length=0,this.playlists.push(...t)}),this.loadMetadata())}}},w=t=>(q("data-v-4c0d815c"),t=t(),N(),t),F={class:"wrapper"},J={class:"header"},U=w(()=>r("h3",null,"Add song",-1)),E=w(()=>r("span",{class:"material-icons-round"}," close ",-1)),K=[E],L=w(()=>r("h4",null,"To Playlist",-1)),R=w(()=>r("br",null,null,-1)),Y=["src"],z={class:"details"},G={class:"detailswrapper"},H=B("Song"),Q={class:"confirm"};function W(t,s,i,T,l,n){const p=h("h7"),u=h("mini-player"),g=h("vue-final-modal"),b=C("observe-visibility");return o(),c("div",null,[k(g,{modelValue:l.showModal,"onUpdate:modelValue":s[5]||(s[5]=a=>l.showModal=a),classes:"modal-container","content-class":"addAlbumToPlaylistPopup"},{default:y(()=>[r("div",F,[r("div",J,[U,r("button",{class:"modal-close",onClick:s[0]||(s[0]=(...a)=>n.close&&n.close(...a))},K)]),L,I(r("select",{"onUpdate:modelValue":s[1]||(s[1]=a=>l.selectedPlaylist=a)},[(o(!0),c(f,null,v(l.playlists,a=>(o(),c("option",{key:a},_(a),1))),128))],512),[[V,l.selectedPlaylist]]),R,r("div",null,[I((o(),c("div",{class:"padding-20 playlisteditor",onClick:s[3]||(s[3]=(...a)=>t.editPlaylist&&t.editPlaylist(...a))},[r("img",{class:"cover",src:i.cover},null,8,Y),r("div",z,[r("div",G,[k(p,null,{default:y(()=>[H]),_:1}),r("span",{class:"material-icons-round share",onClick:s[2]||(s[2]=(...a)=>n.share&&n.share(...a))},"share")]),r("h1",null,_(i.title),1),r("h5",null,_(i.artist),1)])])),[[b,t.headerVisibilityChanged]])]),r("div",Q,[k(u,{class:"miniPlayer",src:i.preview},null,8,["src"]),r("button",{onClick:s[4]||(s[4]=(...a)=>n.add&&n.add(...a)),class:"negative"},"Add")])])]),_:1},8,["modelValue"])])}var X=S(j,[["render",W],["__scopeId","data-v-4c0d815c"]]);const Z={components:{AddSongToPlaylist:X},name:"SearchItem",methods:{redirect(){this.$refs.addAlbum.showModal=!0}},props:{cover:String,title:String,artist:String,releaseDate:String,href:String,preview:String}},$={class:"wrapper"},tt=["src"],et={key:0,class:"note"};function st(t,s,i,T,l,n){const p=h("add-song-to-playlist");return o(),c("div",$,[k(p,{href:i.href,cover:i.cover,title:i.title,artist:i.artist,preview:i.preview,ref:"addAlbum"},null,8,["href","cover","title","artist","preview"]),r("div",{class:"item",onClick:s[0]||(s[0]=(...u)=>n.redirect&&n.redirect(...u))},[r("img",{src:i.cover},null,8,tt),r("h4",null,_(i.title),1),r("p",null,_(i.artist),1),i.releaseDate?(o(),c("p",et,"Released on "+_(i.releaseDate),1)):m("",!0)])])}var rt=S(Z,[["render",st],["__scopeId","data-v-22efcb8d"]]);const it={name:"TrackItem",methods:{redirect(){console.log("redirect"),this.$router.push(this.href)}},props:{cover:String,title:String,artist:String,href:String}},ot={class:"wrapper"},lt=["src"];function at(t,s,i,T,l,n){return o(),c("div",ot,[r("div",{class:"item",onClick:s[0]||(s[0]=(...p)=>n.redirect&&n.redirect(...p))},[r("img",{src:i.cover},null,8,lt),r("h4",null,_(i.title),1),r("p",null,_(i.artist),1)])])}var nt=S(it,[["render",at],["__scopeId","data-v-7c9e5298"]]);const ct={name:"Search",components:{Shelf:O,Item:P,SearchItem:rt,ArtistItem:x,TrackItem:nt},data(){return{query:"",spotifyTracks:[],spotifyArtists:[],tracks:[],artists:[],youtubeTracks:[]}},methods:{search(){this.query=this.$route.params.query,this.query&&fetch("/api/search",{method:"POST",body:JSON.stringify({query:this.query})}).then(t=>t.json()).then(t=>{this.spotifyTracks.length=0,this.spotifyArtists.length=0,this.tracks.length=0,this.artists.length=0,this.youtubeTracks.length=0,this.spotifyTracks.push(...t.spotifyTracks||[]),this.spotifyArtists.push(...t.spotifyArtists||[]),this.tracks.push(...t.tracks||[]),this.artists.push(...t.artists||[]),this.youtubeTracks.push(...t.youtubeTracks||[])})},enterText(t){t.key==="Enter"&&this.$router.push("/search/"+this.query)}},watch:{$route(){this.search()}},mounted(){this.search(),this.$refs.searchBox.focus()}},dt={class:"search"};function ut(t,s,i,T,l,n){const p=h("TrackItem"),u=h("Shelf"),g=h("search-item"),b=h("Item"),a=h("artist-item");return o(),c("div",dt,[I(r("input",{onKeyup:s[0]||(s[0]=(...e)=>n.enterText&&n.enterText(...e)),ref:"searchBox","onUpdate:modelValue":s[1]||(s[1]=e=>l.query=e),type:"text"},null,544),[[D,l.query]]),l.tracks.length?(o(),d(u,{key:0,heading:"Songs"},{default:y(()=>[(o(!0),c(f,null,v(l.tracks,e=>(o(),d(p,{key:e.url,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["cover","href","artist","title"]))),128))]),_:1})):m("",!0),l.spotifyTracks.length?(o(),d(u,{key:1,heading:"Songs (Spotify)"},{default:y(()=>[(o(!0),c(f,null,v(l.spotifyTracks,e=>(o(),d(g,{key:e.url,preview:e.preview,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["preview","cover","href","artist","title"]))),128))]),_:1})):m("",!0),l.youtubeTracks.length?(o(),d(u,{key:2,heading:"Songs (Youtube)"},{default:y(()=>[(o(!0),c(f,null,v(l.youtubeTracks,e=>(o(),d(g,{key:e.url,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["cover","href","artist","title"]))),128))]),_:1})):m("",!0),l.artists.length?(o(),d(u,{key:3,heading:"Artists"},{default:y(()=>[(o(!0),c(f,null,v(l.artists,e=>(o(),d(b,{key:e.url,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["cover","href","artist","title"]))),128))]),_:1})):m("",!0),l.spotifyArtists.length?(o(),d(u,{key:4,heading:"Artists (Spotify)"},{default:y(()=>[(o(!0),c(f,null,v(l.spotifyArtists,(e,A)=>(o(),d(a,{key:A,cover:e.cover,description:e.description,name:e.name,id:e.id,showFollowButton:!0},null,8,["cover","description","name","id"]))),128))]),_:1})):m("",!0)])}var St=S(ct,[["render",ut],["__scopeId","data-v-3ff096c2"]]);export{St as default};