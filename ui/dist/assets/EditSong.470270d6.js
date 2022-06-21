import{_ as x,b as _,d as A,w as m,o as v,c as f,r as T,e as l,f as d,g as a,t as g,i as w,j as V,F as E,h as N,a as o,l as p,p as M,k as F}from"./index.2f14e5a2.js";import{F as B}from"./FindSources.23aed4a7.js";const I={name:"SongCtx",props:{liked:Boolean,isAutoPlaylist:Boolean,src:String,artist:String,title:String},data(){return fetch("/api/playlists").then(t=>t.json()).then(t=>{this.playlists.length=0,this.playlists.push(...t)}),{playlists:[]}},methods:{preview(){const t=new CustomEvent("player.play",{detail:{title:this.title,artist:this.artist,source:this.src}});window.dispatchEvent(t),this.$refs.contextmenu.hide()},hide(){this.$refs.contextmenu.hide()},show(t){const e=this.$refs.box.getBoundingClientRect(),c={top:e.height+e.top+window.scrollY,left:e.width+e.left+window.scrollX};this.$refs.contextmenu.show(c),t==null||t.stopPropagation()},like(){this.$emit("like")},remove(){this.$emit("remove")},addto(t){if(t==="new"){fetch("/api/playlist/create").then(e=>e.text()).then(e=>{this.$emit("addto",Number(e.replace("/playlist/","")))});return}this.$emit("addto",t)},download(){this.$emit("download")},update(){this.$emit("update")}}},U={ref:"box"},P=a("Preview"),D=a("Remove from this playlist"),O=a("Add to new playlist"),R=a("Update Metadata"),J=a("Download");function L(t,e,c,C,i,n){const r=_("v-contextmenu-item"),h=_("v-contextmenu-divider"),s=_("v-contextmenu-submenu"),k=_("v-contextmenu"),y=A("contextmenu");return m((v(),f("div",U,[T(t.$slots,"default"),l(k,{ref:"contextmenu"},{default:d(()=>[l(r,{onClick:n.preview},{default:d(()=>[P]),_:1},8,["onClick"]),l(h),l(r,{onClick:n.like},{default:d(()=>[a(g((c.liked?"Remove from":"Save to")+" your Liked Songs"),1)]),_:1},8,["onClick"]),c.isAutoPlaylist?V("",!0):(v(),w(r,{key:0,onClick:n.remove},{default:d(()=>[D]),_:1},8,["onClick"])),l(s,{title:"Add to playlist"},{default:d(()=>[l(r,{onClick:e[0]||(e[0]=()=>n.addto("new"))},{default:d(()=>[O]),_:1}),l(h),(v(!0),f(E,null,N(i.playlists,(b,S)=>(v(),w(r,{key:S,onClick:()=>n.addto(S)},{default:d(()=>[a(g(b),1)]),_:2},1032,["onClick"]))),128))]),_:1}),l(h),l(r,{onClick:n.update},{default:d(()=>[R]),_:1},8,["onClick"]),l(h),l(r,{onClick:n.download},{default:d(()=>[J]),_:1},8,["onClick"])]),_:1},512)])),[[y,void 0,"contextmenu"]])}var ct=x(I,[["render",L]]);const X={name:"EditSong",components:{FindSources:B},props:{cover:String,album:String,artist:String,source:String,title:String,id:Number},data(){return{showModal:!1,dCover:this.cover,dAlbum:this.album,dArtist:this.artist,dTitle:this.title,dSource:this.source}},methods:{opencontextmenu(t){this.$refs.findSourcesEdit.show(t)},hideFindSourcesCtx(){this.$refs.findSourcesEdit.hide()},add(){this.showModal=!1,console.log("fetch"),fetch("/api/updateSong",{method:"POST",body:JSON.stringify({id:this.id,source:this.dSource,title:this.dTitle,artist:this.dArtist,album:this.dAlbum,cover:this.dCover})}).then(t=>{console.log(t),this.$emit("close")})},loadMetadata(){fetch("/api/metadata",{method:"POST",body:JSON.stringify({url:this.$refs.source.value})}).then(t=>t.json()).then(t=>{console.log(t),this.dTitle=t.title,this.dAlbum=t.album,this.dArtist=t.artists.join(", "),this.dCover=t.cover,this.dSource=t.src})},openInNewTab(){window.open(this.cover?this.cover:"/assets/img/music_placeholder.png")}},watch:{id(){this.dCover=this.cover,this.dAlbum=this.album,this.dArtist=this.artist,this.dTitle=this.title,this.dSource=this.source}}},u=t=>(M("data-v-c9c88918"),t=t(),F(),t),Y={class:"wrapper"},q={class:"header"},z=u(()=>o("h3",null,"Edit song",-1)),G=u(()=>o("span",{class:"material-icons-round"}," close ",-1)),H=[G],K=u(()=>o("h4",null,"Source",-1)),Q={class:"content"},W=u(()=>o("h4",null,"Title",-1)),Z={class:"content"},j=u(()=>o("h4",null,"Album",-1)),$={class:"content"},tt=u(()=>o("h4",null,"Artist",-1)),et={class:"content"},ot=u(()=>o("h4",null,"Cover",-1)),st={class:"content"},it=["src"],nt={class:"confirm"};function lt(t,e,c,C,i,n){const r=_("FindSources"),h=_("vue-final-modal");return v(),f("div",null,[l(h,{onClick:n.hideFindSourcesCtx,modelValue:i.showModal,"onUpdate:modelValue":e[9]||(e[9]=s=>i.showModal=s),classes:"modal-container","content-class":"modal-content"},{default:d(()=>[o("div",Y,[o("div",q,[z,o("button",{class:"modal-close",onClick:e[0]||(e[0]=s=>i.showModal=!1)},H)]),K,l(r,{ref:"findSourcesEdit",src:i.dSource,title:i.dTitle,artist:i.dArtist},{default:d(()=>[o("div",Q,[m(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>i.dSource=s),type:"text",ref:"source"},null,512),[[p,i.dSource]]),o("span",{class:"material-icons-round more",ref:"sourceMore",onClick:e[2]||(e[2]=(...s)=>n.opencontextmenu&&n.opencontextmenu(...s))},"more_vert",512)])]),_:1},8,["src","title","artist"]),W,o("div",Z,[m(o("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>i.dTitle=s),type:"text"},null,512),[[p,i.dTitle]])]),j,o("div",$,[m(o("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>i.dAlbum=s),type:"text",ref:"album"},null,512),[[p,i.dAlbum]])]),tt,o("div",et,[m(o("input",{"onUpdate:modelValue":e[5]||(e[5]=s=>i.dArtist=s),type:"text"},null,512),[[p,i.dArtist]])]),ot,o("div",st,[m(o("input",{type:"text",class:"addSong cover","onUpdate:modelValue":e[6]||(e[6]=s=>i.dCover=s),ref:"cover"},null,512),[[p,i.dCover]]),o("img",{onClick:e[7]||(e[7]=(...s)=>n.openInNewTab&&n.openInNewTab(...s)),class:"addSong cover",src:c.cover?c.cover:"/assets/img/music_placeholder.png"},null,8,it)]),o("div",nt,[o("button",{onClick:e[8]||(e[8]=(...s)=>n.add&&n.add(...s)),class:"negative"},"Save")])])]),_:1},8,["onClick","modelValue"])])}var at=x(X,[["render",lt],["__scopeId","data-v-c9c88918"]]);export{at as E,ct as S};