import{S as p,E as k}from"./EditSong.32997447.js";import{H as g,_ as x,M as _,e as u,o as P,f as b,w as c,g as r,a as l,j as h,k as n,t as y}from"./index.7a0dd187.js";const w=new g("reapOne.track",22),M=new g("reapOne.playlist",22),S={name:"PlaylistEntry",components:{SongCtx:p,EditSong:k,Marquee:_},props:{playlists:Array,index:Number,id:Number,source:String,artist:{type:String,default:"N/A"},cover:{type:String,default:"/assets/img/music_placeholder.png"},title:{type:String,default:"N/A"},album:{type:String,default:"N/A"},duration:{type:String,default:"N/A"},favourite:{type:Boolean,default:!1},playing:{type:Boolean,default:!1}},data(){return{highlighted:!1,favourited:this.favourite,isAutoPlaylist:this.$route.path=="/collection/tracks"}},computed:{trackId(){return w.encode(this.id)}},methods:{getPlaylistId(){return M.decode(this.$route.params.id)},download(){this.$emit("download",this.index)},addToPlaylist(s){fetch(`/api/playlists/${s}/tracks`,{method:"POST",body:JSON.stringify({source:this.source})}).then(e=>{e.status==200&&this.$emit("requestUpdate")})},remove(){fetch(`/api/playlists/${this.getPlaylistId()}/tracks`,{method:"DELETE",body:JSON.stringify({songId:this.id})}).then(s=>{s.status==200&&this.$emit("requestUpdate")})},update(){this.$refs.editSongPopup.showModal=!0},hideCtxMenu(){this.$refs.ctxMenu.hide()},showCtxMenu(s){console.log("show"),this.$refs.ctxMenu.show(s)},onselect(){this.highlighted=!this.highlighted,this.hideCtxMenu()},displayPlay(){const s=this.$refs.idOrPlay;s.innerHTML="play_arrow",s.classList.add("material-icons-round")},displayId(){const s=this.$refs.idOrPlay;s.innerHTML=this.index+1,s.classList.remove("material-icons-round")},playAt(){console.log(this.$route.path);const s={index:this.index};this.$route.path.includes("/playlist/")&&(s.playlistIndex=Number(this.getPlaylistId())),this.$route.path.includes("/collection/tracks")&&(s.type="collection"),this.$route.path.includes("/collection/tracks/breaking")&&(s.type="collection/breaking"),fetch("/api/player/at",{method:"POST",body:JSON.stringify(s)})},setFavourite(){fetch(`/api/tracks/${this.id}`,{method:"PUT",body:JSON.stringify({favourite:this.favourited,album:this.album,artist:this.artist,title:this.title,duration:this.duration,cover:this.cover,source:this.source})})}},watch:{favourited(){this.setFavourite()},favourite(){this.favourited=this.favourite,this.highlighted=!1}}},C={class:"track"},A=["src"],I={class:"trackwrapper"},N={class:"duration"},O={class:"mobilePlaylist showIfMobile"},E={class:"track"},T=["src"],H={class:"trackwrapper"};function L(s,e,t,q,o,i){const m=u("EditSong"),d=u("Marquee"),f=u("router-link"),v=u("SongCtx");return P(),b(v,{playlists:t.playlists,artist:t.artist,src:t.source,title:t.title,onDownload:i.download,onAddto:i.addToPlaylist,onRemove:i.remove,onUpdate:i.update,onLike:e[9]||(e[9]=a=>o.favourited=!o.favourited),isAutoPlaylist:o.isAutoPlaylist,liked:o.favourited,ref:"ctxMenu"},{default:c(()=>[r(m,{onClose:s.updatePlaylist,ref:"editSongPopup",cover:t.cover,id:t.id,title:t.title,album:t.album,artist:t.artist,source:t.source},null,8,["onClose","cover","id","title","album","artist","source"]),l("div",{onDblclick:e[3]||(e[3]=()=>{i.playAt(),i.onselect()}),onClick:e[4]||(e[4]=(...a)=>i.onselect&&i.onselect(...a)),onMouseover:e[5]||(e[5]=(...a)=>i.displayPlay&&i.displayPlay(...a)),onMouseleave:e[6]||(e[6]=(...a)=>i.displayId&&i.displayId(...a)),class:n(["playlistEntry hideIfMobile",{selected:o.highlighted}])},[l("span",{onClick:e[0]||(e[0]=h((...a)=>i.playAt&&i.playAt(...a),["stop"])),ref:"idOrPlay",class:n([{playing:t.playing},"id"])},y(t.index+1),3),l("div",C,[l("img",{src:t.cover||"/assets/img/music_placeholder.png"},null,8,A),l("div",I,[l("span",{class:n(["title",{playing:t.playing}])},[r(f,{class:"linkOnHover",to:`/track/${i.trackId}`},{default:c(()=>[r(d,{text:t.title},null,8,["text"])]),_:1},8,["to"])],2),l("span",{class:n(["artist",{playing:t.playing}])},[r(f,{class:"linkOnHover",to:`/search/artist:${t.artist}`},{default:c(()=>[r(d,{text:t.artist},null,8,["text"])]),_:1},8,["to"])],2)])]),l("span",{class:n(["album",{playing:t.playing}])},[r(d,{text:t.album},null,8,["text"])],2),l("span",{onClick:e[1]||(e[1]=h(a=>o.favourited=!o.favourited,["stop"])),class:n(["favourite material-icons-round",{showfavourite:o.favourited||o.highlighted}])},y(o.favourited?"favorite":"favorite_border"),3),l("span",N,y(t.duration),1),l("span",{onClick:e[2]||(e[2]=(...a)=>i.showCtxMenu&&i.showCtxMenu(...a)),class:n(["more material-icons-round",{hidden:!o.highlighted}])},"more_horiz",2)],34),l("div",O,[l("div",E,[l("img",{onClick:e[7]||(e[7]=h((...a)=>i.playAt&&i.playAt(...a),["stop"])),src:t.cover||"/assets/img/music_placeholder.png"},null,8,T),l("div",H,[l("span",{class:n(["title",{playing:t.playing}])},[r(d,{text:t.title},null,8,["text"])],2),l("span",{class:n(["artist",{playing:t.playing}])},[r(d,{text:t.artist},null,8,["text"])],2)])]),l("span",{onClick:e[8]||(e[8]=(...a)=>i.showCtxMenu&&i.showCtxMenu(...a)),class:"more material-symbols-rounded"},"more_horiz")])]),_:1},8,["playlists","artist","src","title","onDownload","onAddto","onRemove","onUpdate","isAutoPlaylist","liked"])}const U=x(S,[["render",L],["__scopeId","data-v-d7cd7854"]]);export{U as P};