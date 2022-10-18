import{_,o as i,c as o,a as r,b as v,t as y,d as h,r as I,H as $,e as w,f as u,n as C,w as d,g as c,M as g,p as H,h as O,F as f,i as p}from"./index.644d6423.js";import{A as M}from"./AddAlbumToPlaylist.190eda28.js";import{A as j}from"./AddSongToPlaylist.1998b567.js";import{S as b}from"./SpotifyPlaylistHeader.045ace2c.js";import{L as S}from"./LightPlaylistEntry.095b08ab.js";import"./MiniPlayer.5afae591.js";import"./FindSources.19ea5ddc.js";import"./EditSong.78fef466.js";const T={name:"FlexShelf",props:{heading:String,icon:String}},A={class:"shelf"},F={class:"header"},N={key:0},R={key:0,class:"icon material-symbols-round"},B={class:"items"};function D(e,s,n,l,t,a){return i(),o("div",A,[r("div",F,[n.heading||n.icon?(i(),o("h2",N,[v(y(n.heading),1),n.icon?(i(),o("span",R,y(n.icon),1)):h("",!0)])):h("",!0)]),r("div",B,[I(e.$slots,"default",{},void 0,!0)])])}const m=_(T,[["render",D],["__scopeId","data-v-b884f5aa"]]);const E={name:"FlexShelf",props:{name:String,cover:String,href:String},methods:{redirect(){this.$router.push(this.href)}}},L=["src"];function V(e,s,n,l,t,a){return i(),o("div",{onClick:s[0]||(s[0]=(...P)=>a.redirect&&a.redirect(...P)),class:"home-playlist drop-shadow-md"},[r("img",{src:n.cover},null,8,L),r("h2",null,y(n.name),1)])}const G=_(E,[["render",V],["__scopeId","data-v-8c3205be"]]);const q=e=>(H("data-v-c1c073bb"),e=e(),O(),e),J={class:"home-track-compact-wrapper drop-shadow-md"},x=q(()=>r("div",{class:"play"},[r("span",{class:"material-symbols-rounded"},"play_arrow")],-1)),z=[x],K={class:"info"},Q={class:"title"},U=["href"],W={class:"artist"},X=new $("reapOne.track",22),Y={name:"FlexShelf",props:{title:String,artist:String,cover:String,id:Number,href:String},methods:{play(e){e.stopPropagation(),this.$emit("play")},openModal(){var e;console.log(this.href),this.href||this.$router.push(this.trackHref),(e=this.href)!=null&&e.includes("spotify")?this.$refs.addRelease.showModal=!0:this.$refs.addSong.showModal=!0}},computed:{trackId(){return X.encode(this.id)},trackHref(){return`/track/${this.trackId}`}}},Z=Object.assign(Y,{setup(e){return(s,n)=>{const l=w("router-link");return i(),o("div",J,[e.href?(i(),u(M,{key:0,id:e.href.replace("https://open.spotify.com/album/",""),cover:e.cover,title:e.title,artist:e.artist,href:e.href,ref:"addRelease"},null,8,["id","cover","title","artist","href"])):h("",!0),e.href?(i(),u(j,{key:1,href:e.href,cover:e.cover,title:e.title,artist:e.artist,preview:s.preview,ref:"addSong"},null,8,["href","cover","title","artist","preview"])):h("",!0),r("div",{class:"home-track-compact",onClick:n[1]||(n[1]=(...t)=>s.openModal&&s.openModal(...t))},[r("div",{onClick:n[0]||(n[0]=(...t)=>s.play&&s.play(...t)),class:"cover",style:C({backgroundImage:`url(${e.cover})`})},z,4),r("div",K,[r("span",Q,[e.href?(i(),o("a",{key:1,href:e.href,class:"linkOnHover"},[c(g,{text:e.title},null,8,["text"])],8,U)):(i(),u(l,{key:0,class:"linkOnHover",to:s.trackHref},{default:d(()=>[c(g,{text:e.title},null,8,["text"])]),_:1},8,["to"]))]),c(l,{class:"linkOnHover",to:`/search/artist:${e.artist}`},{default:d(()=>[r("span",W,y(e.artist),1)]),_:1},8,["to"])])])])}}}),k=_(Z,[["__scopeId","data-v-c1c073bb"]]);const ee=e=>(H("data-v-1a40acad"),e=e(),O(),e),te={class:"home"},se={class:"main"},ie={key:0,class:"playlists"},ae={key:1,class:"liked"},oe={key:2,class:"breaking"},re={class:"side"},ne={key:0,class:"releases"},le={key:1,class:"disovery"},ce={key:2,class:"recommendations"},de=ee(()=>r("h2",null,"Recommendations",-1)),he=new $("reapOne.playlist",22),ue={name:"Home",data(){const e=new Date;return{greeting:e.getHours()<12?"Good morning":e.getHours()<18?"Good afternoon":"Good evening",releases:[],playlists:[],picks:[],songs:[],liked:[],breaking:[],recommendations:[],releases:[]}},mounted(){fetch("/api/config").then(e=>{e.status==400&&this.$router.push("/welcome")}),fetch("/api/releases").then(e=>e.json()).then(e=>{this.releases=e.slice(0,3)}),fetch("/api/playlists").then(e=>e.json()).then(async e=>{var s,n;for(let l=0;l<e.length;l++){const a=await(await fetch(`/api/playlists/${l}`)).json();this.playlists.push({name:a.name,description:a.description,cover:a.cover||((n=(s=a.songs)==null?void 0:s[0])==null?void 0:n.cover)||"/assets/img/music_placeholder.png",href:`/playlist/${he.encode(l)}`,songs:a.songs})}this.pick()}),fetch("/api/me/liked").then(e=>e.json()).then(e=>{this.liked=e.songs.slice(0,3)}),fetch("/api/me/new").then(e=>e.json()).then(e=>{this.breaking=e.songs.slice(0,3)})},methods:{playDiscover(e){fetch("/api/player/load",{method:"POST",body:JSON.stringify({id:e.id,type:"track"})})},playRecommendation(e){const s=new CustomEvent("player.play",{detail:{artist:e.artist,title:e.title,source:e.src||e.url}});window.dispatchEvent(s)},pick(){this.songs=this.playlists.map(e=>e.songs).flat();for(let e=0;e<3;e++)this.picks.push(this.songs[Math.floor(Math.random()*this.songs.length)]);fetch("/api/spotify/recommendations",{method:"POST",body:JSON.stringify({query:`${this.picks[0].artist} ${this.picks[0].title}`})}).then(e=>e.json()).then(e=>{this.recommendations=e.slice(0,3)})}}},fe=Object.assign(ue,{setup(e){return(s,n)=>{const l=w("router-link");return i(),o("div",te,[r("div",se,[s.playlists.length?(i(),o("div",ie,[r("h2",null,[c(l,{to:"/collection/playlists",class:"linkOnHover"},{default:d(()=>[v("Playlists")]),_:1})]),c(m,null,{default:d(()=>[(i(!0),o(f,null,p(s.playlists,(t,a)=>(i(),u(G,{key:a,name:t.name,cover:t.cover,href:t==null?void 0:t.href},null,8,["name","cover","href"]))),128))]),_:1})])):h("",!0),s.liked.length?(i(),o("div",ae,[r("h2",null,[c(l,{to:"/collection/tracks",class:"linkOnHover"},{default:d(()=>[v("Liked Songs")]),_:1})]),c(b),(i(!0),o(f,null,p(s.liked,(t,a)=>(i(),u(S,{key:a,index:a,loadAt:{type:"collection"},source:t.source,id:t.id,title:t.title,playing:t.playing,album:t.album,artist:t.artist,cover:t.cover,favourite:t.favourite,duration:t.duration},null,8,["index","source","id","title","playing","album","artist","cover","favourite","duration"]))),128))])):h("",!0),s.breaking.length?(i(),o("div",oe,[r("h2",null,[c(l,{to:"/collection/tracks/breaking",class:"linkOnHover"},{default:d(()=>[v("Breaking Songs")]),_:1})]),c(b),(i(!0),o(f,null,p(s.breaking,(t,a)=>(i(),u(S,{key:a,index:a,loadAt:{type:"collection/breaking"},source:t.source,id:t.id,title:t.title,playing:t.playing,album:t.album,artist:t.artist,cover:t.cover,favourite:t.favourite,duration:t.duration},null,8,["index","source","id","title","playing","album","artist","cover","favourite","duration"]))),128))])):h("",!0)]),r("div",re,[s.releases.length?(i(),o("div",ne,[r("h2",null,[c(l,{to:"/collection/releases",class:"linkOnHover"},{default:d(()=>[v("Out now")]),_:1})]),c(m,null,{default:d(()=>[(i(!0),o(f,null,p(s.releases,(t,a)=>(i(),u(k,{onPlay:()=>s.playRecommendation(t),key:a,artist:t.artist,title:t.title,cover:t.cover,href:t.url},null,8,["onPlay","artist","title","cover","href"]))),128))]),_:1})])):h("",!0),s.picks.length?(i(),o("div",le,[r("h2",null,[c(l,{to:"/discover",class:"linkOnHover"},{default:d(()=>[v("Discover")]),_:1})]),c(m,null,{default:d(()=>[(i(!0),o(f,null,p(s.picks,(t,a)=>(i(),u(k,{onPlay:()=>s.playDiscover(t),key:a,artist:t.artist,title:t.title,cover:t.cover,id:t.id},null,8,["onPlay","artist","title","cover","id"]))),128))]),_:1})])):h("",!0),s.recommendations.length?(i(),o("div",ce,[de,c(m,null,{default:d(()=>[(i(!0),o(f,null,p(s.recommendations,(t,a)=>(i(),u(k,{onPlay:()=>s.playRecommendation(t),key:a,artist:t.artist,title:t.title,cover:t.cover,href:t.src},null,8,["onPlay","artist","title","cover","href"]))),128))]),_:1})])):h("",!0)])])}}}),Se=_(fe,[["__scopeId","data-v-1a40acad"]]);export{Se as default};