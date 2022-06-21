import{S as v,E as p}from"./EditSong.470270d6.js";import{H as f,_ as x,M as _,b as u,o as k,i as P,f as c,e as r,a as l,n,t as h}from"./index.2f14e5a2.js";const b=new f("reapOne.track",22),S=new f("reapOne.playlist",22),w={name:"PlaylistEntry",components:{SongCtx:v,EditSong:p,Marquee:_},props:{index:Number,id:Number,source:String,artist:{type:String,default:"N/A"},cover:{type:String,default:"/assets/img/music_placeholder.png"},title:{type:String,default:"N/A"},album:{type:String,default:"N/A"},duration:{type:String,default:"N/A"},favourite:{type:Boolean,default:!1},playing:{type:Boolean,default:!1}},data(){return{highlighted:!1,favourited:this.favourite,isAutoPlaylist:this.$route.path=="/collection/tracks"}},computed:{trackId(){return b.encode(this.id)}},methods:{getPlaylistId(){return S.decode(this.$route.params.id)},download(){this.$emit("download",this.index)},addToPlaylist(s){fetch("/api/add",{method:"POST",body:JSON.stringify({id:s,source:this.source})}).then(e=>{e.status==200&&this.$emit("requestUpdate")})},remove(){fetch("/api/remove",{method:"POST",body:JSON.stringify({playlistId:Number(this.getPlaylistId()),songId:this.id})}).then(s=>{s.status==200&&this.$emit("requestUpdate")})},update(){this.$refs.editSongPopup.showModal=!0},hideCtxMenu(){this.$refs.ctxMenu.hide()},showCtxMenu(s){console.log("show"),this.$refs.ctxMenu.show(s)},onselect(){this.highlighted=!this.highlighted,this.hideCtxMenu()},displayPlay(){const s=this.$refs.idOrPlay;s.innerHTML="play_arrow",s.classList.add("material-icons-round")},displayId(){const s=this.$refs.idOrPlay;s.innerHTML=this.index+1,s.classList.remove("material-icons-round")},playAt(){console.log(this.$route.path);const s={index:this.index};this.$route.path.includes("/playlist/")&&(s.playlistIndex=Number(this.getPlaylistId())),this.$route.path.includes("/collection/tracks")&&(s.type="collection"),this.$route.path.includes("/collection/tracks/breaking")&&(s.type="collection/breaking"),fetch("/api/at",{method:"POST",body:JSON.stringify(s)})},setFavourite(){fetch("/api/updateSong",{method:"POST",body:JSON.stringify({id:this.id,favourite:this.favourited,album:this.album,artist:this.artist,title:this.title,duration:this.duration,cover:this.cover,source:this.source})})}},watch:{favourited(){this.setFavourite()},favourite(){this.favourited=this.favourite,this.highlighted=!1}}},C={class:"track"},M=["src"],A={class:"trackwrapper"},O={class:"duration"},I={class:"mobilePlaylist showIfMobile"},N={class:"track"},T=["src"],E={class:"trackwrapper"};function H(s,e,t,q,o,i){const g=u("EditSong"),d=u("Marquee"),y=u("router-link"),m=u("SongCtx");return k(),P(m,{artist:t.artist,src:t.source,title:t.title,onDownload:i.download,onAddto:i.addToPlaylist,onRemove:i.remove,onUpdate:i.update,onLike:e[9]||(e[9]=a=>o.favourited=!o.favourited),isAutoPlaylist:o.isAutoPlaylist,liked:o.favourited,ref:"ctxMenu"},{default:c(()=>[r(g,{onClose:s.updatePlaylist,ref:"editSongPopup",cover:t.cover,id:t.id,title:t.title,album:t.album,artist:t.artist,source:t.source},null,8,["onClose","cover","id","title","album","artist","source"]),l("div",{onDblclick:e[3]||(e[3]=()=>{i.playAt(),i.onselect()}),onClick:e[4]||(e[4]=(...a)=>i.onselect&&i.onselect(...a)),onMouseover:e[5]||(e[5]=(...a)=>i.displayPlay&&i.displayPlay(...a)),onMouseleave:e[6]||(e[6]=(...a)=>i.displayId&&i.displayId(...a)),class:n(["playlistEntry hideIfMobile",{selected:o.highlighted}])},[l("span",{onClick:e[0]||(e[0]=(...a)=>i.playAt&&i.playAt(...a)),ref:"idOrPlay",class:n([{playing:t.playing},"id"])},h(t.index+1),3),l("div",C,[l("img",{src:t.cover||"/assets/img/music_placeholder.png"},null,8,M),l("div",A,[l("span",{class:n(["title",{playing:t.playing}])},[r(y,{class:"linkOnHover",to:`/track/${i.trackId}`},{default:c(()=>[r(d,{text:t.title},null,8,["text"])]),_:1},8,["to"])],2),l("span",{class:n(["artist",{playing:t.playing}])},[r(y,{class:"linkOnHover",to:`/search/${t.artist}`},{default:c(()=>[r(d,{text:t.artist},null,8,["text"])]),_:1},8,["to"])],2)])]),l("span",{class:n(["album",{playing:t.playing}])},[r(d,{text:t.album},null,8,["text"])],2),l("span",{onClick:e[1]||(e[1]=a=>o.favourited=!o.favourited),class:n(["favourite material-icons-round",{showfavourite:o.favourited||o.highlighted}])},h(o.favourited?"favorite":"favorite_border"),3),l("span",O,h(t.duration),1),l("span",{onClick:e[2]||(e[2]=(...a)=>i.showCtxMenu&&i.showCtxMenu(...a)),class:n(["more material-icons-round",{hidden:!o.highlighted}])},"more_horiz",2)],34),l("div",I,[l("div",N,[l("img",{onClick:e[7]||(e[7]=(...a)=>i.playAt&&i.playAt(...a)),src:t.cover||"/assets/img/music_placeholder.png"},null,8,T),l("div",E,[l("span",{class:n(["title",{playing:t.playing}])},[r(d,{text:t.title},null,8,["text"])],2),l("span",{class:n(["artist",{playing:t.playing}])},[r(d,{text:t.artist},null,8,["text"])],2)])]),l("span",{onClick:e[8]||(e[8]=(...a)=>i.showCtxMenu&&i.showCtxMenu(...a)),class:"more material-symbols-rounded"},"more_horiz")])]),_:1},8,["artist","src","title","onDownload","onAddto","onRemove","onUpdate","isAutoPlaylist","liked"])}var D=x(w,[["render",H],["__scopeId","data-v-6ee2ba79"]]);export{D as P};