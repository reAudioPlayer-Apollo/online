import{S as v,E as p}from"./EditSong.3dc10917.js";import{H as f,_ as x,M as _,b as d,o as P,i as S,f as h,e as r,a as o,n,t as c}from"./index.a89d717f.js";const k=new f("reapOne.track",22),b=new f("reapOne.playlist",22),w={name:"PlaylistEntry",components:{SongCtx:v,EditSong:p,Marquee:_},props:{index:Number,id:Number,source:String,artist:{type:String,default:"N/A"},cover:{type:String,default:"/assets/img/music_placeholder.png"},title:{type:String,default:"N/A"},album:{type:String,default:"N/A"},duration:{type:String,default:"N/A"},favourite:{type:Boolean,default:!1},playing:{type:Boolean,default:!1}},data(){return{highlighted:!1,favourited:this.favourite,isAutoPlaylist:this.$route.path=="/collection/tracks"}},computed:{trackId(){return k.encode(this.id)}},methods:{getPlaylistId(){return b.decode(this.$route.params.id)},download(){this.$emit("download",this.index)},addToPlaylist(i){fetch("/api/add",{method:"POST",body:JSON.stringify({id:i,source:this.source})}).then(e=>{e.status==200&&this.$emit("requestUpdate")})},remove(){fetch("/api/remove",{method:"POST",body:JSON.stringify({playlistId:Number(this.getPlaylistId()),songId:this.id})}).then(i=>{i.status==200&&this.$emit("requestUpdate")})},update(){this.$refs.editSongPopup.showModal=!0},hideCtxMenu(){this.$refs.ctxMenu.hide()},showCtxMenu(i){console.log("show"),this.$refs.ctxMenu.show(i)},onselect(){this.highlighted=!this.highlighted,this.hideCtxMenu()},displayPlay(){const i=this.$refs.idOrPlay;i.innerHTML="play_arrow",i.classList.add("material-icons-round")},displayId(){const i=this.$refs.idOrPlay;i.innerHTML=this.index+1,i.classList.remove("material-icons-round")},playAt(){console.log(this.$route.path);const i={index:this.index};this.$route.path.includes("/playlist/")&&(i.playlistIndex=Number(this.getPlaylistId())),this.$route.path.includes("/collection/tracks")&&(i.type="collection"),fetch("/api/at",{method:"POST",body:JSON.stringify(i)})},setFavourite(){fetch("/api/updateSong",{method:"POST",body:JSON.stringify({id:this.id,favourite:this.favourited,album:this.album,artist:this.artist,title:this.title,duration:this.duration,cover:this.cover,source:this.source})})}},watch:{favourited(){this.setFavourite()},favourite(){console.log("mounted",this.title,this.favourite,this.favourited),this.favourited=this.favourite,this.highlighted=!1}}},C={class:"track"},M=["src"],O={class:"trackwrapper"},A={class:"duration"};function N(i,e,t,I,a,s){const g=d("EditSong"),u=d("Marquee"),y=d("router-link"),m=d("SongCtx");return P(),S(m,{artist:t.artist,src:t.source,title:t.title,onDownload:s.download,onAddto:s.addToPlaylist,onRemove:s.remove,onUpdate:s.update,onLike:e[7]||(e[7]=l=>a.favourited=!a.favourited),isAutoPlaylist:a.isAutoPlaylist,liked:a.favourited,ref:"ctxMenu"},{default:h(()=>[r(g,{onClose:i.updatePlaylist,ref:"editSongPopup",cover:t.cover,id:t.id,title:t.title,album:t.album,artist:t.artist,source:t.source},null,8,["onClose","cover","id","title","album","artist","source"]),o("div",{onDblclick:e[3]||(e[3]=()=>{s.playAt(),s.onselect()}),onClick:e[4]||(e[4]=(...l)=>s.onselect&&s.onselect(...l)),onMouseover:e[5]||(e[5]=(...l)=>s.displayPlay&&s.displayPlay(...l)),onMouseleave:e[6]||(e[6]=(...l)=>s.displayId&&s.displayId(...l)),class:n(["playlistEntry",{selected:a.highlighted}])},[o("span",{onClick:e[0]||(e[0]=(...l)=>s.playAt&&s.playAt(...l)),ref:"idOrPlay",class:n([{playing:t.playing},"id"])},c(t.index+1),3),o("div",C,[o("img",{src:t.cover||"/assets/img/music_placeholder.png"},null,8,M),o("div",O,[o("span",{class:n(["title",{playing:t.playing}])},[r(y,{class:"linkOnHover",to:`/track/${s.trackId}`},{default:h(()=>[r(u,{text:t.title},null,8,["text"])]),_:1},8,["to"])],2),o("span",{class:n(["artist",{playing:t.playing}])},[r(y,{class:"linkOnHover",to:`/search/${t.artist}`},{default:h(()=>[r(u,{text:t.artist},null,8,["text"])]),_:1},8,["to"])],2)])]),o("span",{class:n(["album",{playing:t.playing}])},[r(u,{text:t.album},null,8,["text"])],2),o("span",{onClick:e[1]||(e[1]=l=>a.favourited=!a.favourited),class:n(["favourite material-icons-round",{showfavourite:a.favourited||a.highlighted}])},c(a.favourited?"favorite":"favorite_border"),3),o("span",A,c(t.duration),1),o("span",{onClick:e[2]||(e[2]=(...l)=>s.showCtxMenu&&s.showCtxMenu(...l)),class:n(["more material-icons-round",{hidden:!a.highlighted}])},"more_horiz",2)],34)]),_:1},8,["artist","src","title","onDownload","onAddto","onRemove","onUpdate","isAutoPlaylist","liked"])}var H=x(w,[["render",N],["__scopeId","data-v-ab7295e0"]]);export{H as P};