import{T as v}from"./TrackCompact.527346b7.js";import{_ as C,n as f,J as P,o,c,a as t,F as i,i as r,g as u,h as S,M as y,f as k,u as b,k as j,l as D}from"./index.458fd4ed.js";import"./ImportSpotifyAlbum.vue_vue_type_script_setup_true_lang.7787e36c.js";import"./song.d5ee386f.js";import"./Dropdown.e2c0f0a4.js";import"./Playlist.07136cc4.js";import"./TrackInfo.3d368c6c.js";import"./ImportSpotifySong.vue_vue_type_script_setup_true_lang.55933031.js";const g=l=>(j("data-v-92bb3e6a"),l=l(),D(),l),T={class:"wrap"},$={class:"covers"},B=g(()=>t("h2",null,"Local covers",-1)),I={class:"items grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"},N={class:"flex justify-between w-full mb-4"},J={class:"overflow-hidden"},F=["onClick"],M={class:"tracks"},O=g(()=>t("h2",null,"Local tracks",-1)),V={class:"items grid grid-cols-2 md:grid-cols-4 gap-4"},q={class:"flex justify-between w-full mb-4"},z={class:"overflow-hidden"},A=["onClick"],G={class:"flex justify-center w-full mb-4"},H=["src"],K={__name:"LocalData",setup(l){const p=f([]),m=f([]),x=P(),n=()=>{fetch("/api/config/images").then(e=>e.json()).then(e=>p.value=e),fetch("/api/config/tracks").then(e=>e.json()).then(e=>m.value=e)},w=async e=>{await fetch("/api/config/images",{method:"DELETE",body:JSON.stringify({name:e})}),n()},L=async e=>{fetch("/api/config/tracks",{method:"DELETE",body:JSON.stringify({name:e})}),n()},h=e=>{x.loadPlaylist("track",e)};return n(),(e,Q)=>(o(),c("div",T,[t("div",$,[B,t("div",I,[(o(!0),c(i,null,r(p.value,(a,d)=>(o(),c("div",{class:"cover-wrapper",key:d},[u(S,{src:a.name,class:"rounded-xl mb-4"},null,8,["src"]),t("div",N,[t("p",J,[u(y,{text:a.name},null,8,["text"])]),t("span",{class:"ml-2 material-symbols-rounded cursor-pointer",onClick:s=>w(a.name)},"delete",8,F)]),(o(!0),c(i,null,r(a.songs,(s,_)=>(o(),k(b(v),{key:_,artist:s.artist,title:s.title,cover:s.cover,id:s.id,onPlay:E=>h(s.id)},null,8,["artist","title","cover","id","onPlay"]))),128))]))),128))])]),t("div",M,[O,t("div",V,[(o(!0),c(i,null,r(m.value,(a,d)=>(o(),c("div",{class:"track",key:d},[t("div",q,[t("p",z,[u(y,{text:a.name},null,8,["text"])]),t("span",{class:"material-symbols-rounded cursor-pointer",onClick:s=>L(a.name)},"delete",8,A)]),t("div",G,[t("audio",{controls:"",src:"/api/"+a.name.replace("local:","/src/tracks/")},null,8,H)]),(o(!0),c(i,null,r(a.songs,(s,_)=>(o(),k(b(v),{key:_,artist:s.artist,title:s.title,cover:s.cover,id:s.id,onPlay:E=>h(s.id)},null,8,["artist","title","cover","id","onPlay"]))),128))]))),128))])])]))}},se=C(K,[["__scopeId","data-v-92bb3e6a"]]);export{se as default};