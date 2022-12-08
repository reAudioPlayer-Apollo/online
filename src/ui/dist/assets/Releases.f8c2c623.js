import{F as k}from"./FullShelf.fc4ab340.js";import{_ as I,I as B}from"./ReleaseItem.92b7274e.js";import{_ as b,e as n,o as s,c as u,g as w,a as c,t as g,d as h,f as i,w as v,F as y,h as D}from"./index.aa38e9d2.js";import{C as A}from"./CollectionHeader.01bcdaaa.js";import"./song.91ac9cb9.js";import"./AlbumHeader.2e910121.js";import"./MiniPlayer.b906dbb1.js";const C={components:{AddAlbumToPlaylist:I},name:"ReleaseItemBig",methods:{redirect(){this.$refs.addAlbum.show()}},props:{cover:String,title:String,artist:String,href:String,releaseDate:String}},N={class:"itemBig drop-shadow-md"},x=["src"],R={class:"wrapper"},F={key:0,class:"note"};function j(_,o,t,r,a,f){var d,l;const m=n("add-album-to-playlist");return s(),u("div",N,[w(m,{id:(d=this.href)==null?void 0:d.replace("https://open.spotify.com/album/",""),cover:t.cover,title:t.title,artist:t.artist,href:t.href,ref:"addAlbum",album:{id:(l=this.href)==null?void 0:l.replace("https://open.spotify.com/album/",""),title:this.title,artist:this.artist,cover:this.cover,href:this.href}},null,8,["id","cover","title","artist","href","album"]),c("div",{class:"item",onClick:o[0]||(o[0]=(...p)=>f.redirect&&f.redirect(...p))},[c("img",{src:t.cover},null,8,x),c("div",R,[c("h4",null,g(t.title),1),c("p",null,g(t.artist),1),t.releaseDate?(s(),u("p",F,"Released on "+g(t.releaseDate),1)):h("",!0)])])])}const H=b(C,[["render",j],["__scopeId","data-v-a2c6818e"]]);const V={components:{CollectionHeader:A,FullShelf:k,Item:B,ItemBig:H},name:"Releases",data(){return{outSoon:[],outNow:[],outAlready:[]}},mounted(){fetch("/api/releases").then(_=>_.json()).then(_=>{const o=new Date;for(const t of _){const r=new Date(t.releaseDate);o<r?this.outSoon.push(t):o.getMonth()==r.getMonth()&&o.getDate()==r.getDate()&&o.getFullYear()==r.getFullYear()?this.outNow.push(t):this.outAlready.push(t)}})}},M={class:"padding-20"},O={class:"releases"};function Y(_,o,t,r,a,f){const m=n("CollectionHeader"),d=n("item-big"),l=n("full-shelf"),p=n("ItemBig"),S=n("Item");return s(),u("div",M,[w(m),c("div",O,[a.outSoon.length?(s(),i(l,{key:0,heading:"Out Soon"},{default:v(()=>[(s(!0),u(y,null,D(a.outSoon,e=>(s(),i(d,{key:e.url,releaseDate:e.releaseDate,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["releaseDate","cover","href","artist","title"]))),128))]),_:1})):h("",!0),a.outNow.length?(s(),i(l,{key:1,heading:"Out Now"},{default:v(()=>[(s(!0),u(y,null,D(a.outNow,e=>(s(),i(p,{key:e.url,releaseDate:e.releaseDate,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["releaseDate","cover","href","artist","title"]))),128))]),_:1})):h("",!0),a.outAlready.length?(s(),i(l,{key:2,heading:"Releases"},{default:v(()=>[(s(!0),u(y,null,D(a.outAlready,e=>(s(),i(S,{key:e.url,releaseDate:e.releaseDate,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["releaseDate","cover","href","artist","title"]))),128))]),_:1})):h("",!0)])])}const J=b(V,[["render",Y],["__scopeId","data-v-aaa9aa10"]]);export{J as default};