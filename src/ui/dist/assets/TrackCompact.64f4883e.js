import{_ as p,x as S,q as f,e as _,o as s,c as h,f as c,d as m,a as t,H as x,u as C,i as w,w as u,g as r,M as k,t as I,k as b,l as $}from"./index.8ecb160a.js";import{_ as H}from"./ImportSpotifyAlbum.vue_vue_type_script_setup_true_lang.e90005d0.js";import{_ as T}from"./ImportSpotifySong.vue_vue_type_script_setup_true_lang.fa319cab.js";const B=e=>(b("data-v-c3161368"),e=e(),$(),e),N={class:"home-track-compact-wrapper drop-shadow-md"},D=B(()=>t("div",{class:"play"},[t("span",{class:"material-symbols-rounded"},"play_arrow")],-1)),M=[D],O={class:"info"},V={class:"title"},q=["href"],R={class:"artist"},z={__name:"TrackCompact",props:{title:String,artist:String,cover:String,id:Number,href:String},emits:["play"],setup(e,{emit:v}){const o=e,l=`/track/${S(String(o.id))}`,n=f(null),i=f(null),y=a=>{a.stopPropagation(),v("play")},g=()=>{var a;o.href||this.$router.push(l),(a=o.href)!=null&&a.includes("spotify")?i.show():n.show()};return(a,P)=>{const d=_("router-link");return s(),h("div",N,[e.href?(s(),c(H,{key:0,album:{cover:e.cover,name:e.title,artist:e.artist,id:e.href.replace("https://open.spotify.com/album/",""),href:e.href,releaseDate:null},ref_key:"addRelease",ref:i},null,8,["album"])):m("",!0),e.href?(s(),c(T,{key:1,song:{cover:e.cover,title:e.title,artist:e.artist,id:e.href.replace("https://open.spotify.com/track/",""),href:e.href,releaseDate:null},ref_key:"addSong",ref:n},null,8,["song"])):m("",!0),t("div",{class:"home-track-compact",onClick:g},[t("div",{onClick:y,class:"cover",style:x({backgroundImage:`url(${C(w)(e.cover)})`})},M,4),t("div",O,[t("span",V,[e.href?(s(),h("a",{key:1,href:e.href,class:"linkOnHover"},[r(k,{text:e.title},null,8,["text"])],8,q)):(s(),c(d,{key:0,class:"linkOnHover",to:l},{default:u(()=>[r(k,{text:e.title},null,8,["text"])]),_:1}))]),r(d,{class:"linkOnHover",to:`/search/artist:${e.artist}`},{default:u(()=>[t("span",R,I(e.artist),1)]),_:1},8,["to"])])])])}}},G=p(z,[["__scopeId","data-v-c3161368"]]);export{G as T};