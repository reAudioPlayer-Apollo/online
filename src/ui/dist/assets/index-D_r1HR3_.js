import{e as q,a5 as L,j as A,A as u,l as c,B,U as z,o as v,i as S,a as l,x as D,g as f,u as s,K as E,E as F,t as r,aJ as M,a4 as K,d as R,aK as O,_ as T,v as j,f as J,c as $,F as N,w as Q,h as G}from"./index-B5v1OCCB.js";import{_ as H}from"./Playlist.vue_vue_type_script_setup_true_lang-Licz-RCG.js";import{P as W}from"./PlaylistCard-ps2E9799.js";import"./PlaylistEntry-Dqhtt-H9.js";import"./EditSong.vue_vue_type_script_setup_true_lang-B3KiR6Eu.js";import"./playerInPicture-Dfp9IAsf.js";import"./vuedraggable.umd-C6y2baY4.js";const X={class:"fullscreen"},Y={class:"now"},Z={class:"details"},ee={class:"playlist"},se={class:"title text-6xl mb-4"},le={class:"artist text-3xl"},te={class:"progress"},oe={class:"text-xs text-muted text-right cursor-pointer"},ae={class:"text-xs text-muted text-left"},ne={class:"lower"},ie={class:"actions"},re={class:"volume"},ue=q({__name:"BiggerPlayer",emits:["close"],setup(U,{expose:I,emit:a}){const e=L(),C=A(),_=u(()=>e.playing),h=u(()=>e.song.cover),g=u(()=>e.loaded?`${e.song.title} • ${e.song.artist}`:"reAudioPlayer One");u(()=>C.playlists);const w=u(()=>{var p;return(p=e.playlist)==null?void 0:p.name}),x=c(!1),d=c(!1),k=c(0),V=c(null);document.title=g.value,B(g,p=>{document.title=p}),B(()=>e.song.cover,async()=>{V.value=await O(e.song.cover,g.value,1e3)}),B(()=>e.progressPercent,p=>{k.value=p});const y=a,m=()=>{x.value=!0,document.addEventListener("fullscreenchange",b),document.addEventListener("mousemove",P),document.fullscreenEnabled&&document.documentElement.requestFullscreen()},n=()=>{console.log("hiding..."),x.value=!1,document.addEventListener("fullscreenchange",b),document.removeEventListener("mousemove",P),y("close")};I({show:m,hide:n});const i=z.debounce(()=>{d.value=!1},1e3),P=()=>{d.value=!0,i()},b=()=>{document.fullscreenElement||n()};return(p,t)=>x.value?(v(),S(K,{key:0,to:"#fullscreen-target"},[l("div",X,[l("div",{class:"bg-img",style:D({backgroundImage:`url(${h.value})`})},null,4),l("div",Y,[f(F,{name:s(e).song.title,src:h.value,alt:g.value,class:E(["cover",{playing:_.value}])},null,8,["name","src","alt","class"]),l("div",Z,[l("p",ee," playing from "+r(w.value),1),l("h1",se,r(s(e).song.title),1),l("h3",le,r(s(e).song.artist),1)])]),l("div",{class:E(["controls",{showControls:d.value||!_.value}])},[l("div",te,[l("span",oe,r(s(e).displayProgress),1),f(M,{modelValue:k.value,"onUpdate:modelValue":t[0]||(t[0]=o=>k.value=o),max:1e3,onChange:t[1]||(t[1]=o=>s(e).seekPercent(o/10))},null,8,["modelValue"]),l("span",ae,r(s(e).displayDuration),1)]),l("div",ne,[t[10]||(t[10]=l("div",null,null,-1)),l("div",ie,[l("span",{class:"icon cursor-pointer material-symbols-rounded ms-wght-300",onClick:t[2]||(t[2]=(...o)=>s(e).toggleShuffle&&s(e).toggleShuffle(...o))},r(s(e).shuffleIcon),1),l("span",{class:"icon cursor-pointer material-symbols-rounded ms-fill",onClick:t[3]||(t[3]=(...o)=>s(e).previous&&s(e).previous(...o))}," skip_previous "),l("span",{class:"cursor-pointer material-symbols-rounded ms-fill text-5xl",onClick:t[4]||(t[4]=(...o)=>s(e).playPause&&s(e).playPause(...o))},r(s(e).playing?"pause_circle":"play_circle"),1),l("span",{class:"icon cursor-pointer material-symbols-rounded ms-fill",onClick:t[5]||(t[5]=(...o)=>s(e).next&&s(e).next(...o))}," skip_next "),l("span",{class:"icon cursor-pointer material-symbols-rounded ms-wght-300",onClick:t[6]||(t[6]=(...o)=>s(e).toggleRepeat&&s(e).toggleRepeat(...o))},r(s(e).repeat),1)]),l("div",re,[l("span",{class:"icon cursor-pointer material-symbols-rounded ms-fill select-none",onClick:t[7]||(t[7]=(...o)=>s(e).toggleMute&&s(e).toggleMute(...o))},r(s(e).muteIcon),1),f(M,{modelValue:s(e).volume,"onUpdate:modelValue":t[8]||(t[8]=o=>s(e).volume=o),max:100,onChange:t[9]||(t[9]=o=>s(e).setVolume(o))},null,8,["modelValue"])])])],2)])])):R("",!0)}}),ce=T(ue,[["__scopeId","data-v-4dbd10b1"]]),de={class:"bigPlayer"},me={class:"upNow"},pe={class:"settings"},ve={key:1,class:"no-playlist-selected"},ge={class:"wrapper"},ye={class:"playlists"},fe=q({__name:"index",emits:["maximise"],setup(U,{emit:I}){const a=L(),e=A(),C=c(),_=u(()=>a.playing),h=u(()=>a.song.cover),g=u(()=>a.song.id),w=u(()=>a.loaded?`${a.song.title} • ${a.song.artist}`:"reAudioPlayer One"),x=u(()=>e.playlists),d=c(null);document.title=w.value,B(w,n=>{document.title=n}),j(()=>{window.setTimeout(()=>{var n;(n=d.value)!=null&&n.scrollTop||d.value.scrollToSong(g.value)},1e3)});let k=c(!1);const V=()=>{var n;(n=C.value)==null||n.show()},y=c(!1),m=c(!1);return(n,i)=>{const P=J("Card");return v(),$("div",de,[f(ce,{ref_key:"biggerPlayer",ref:C},null,512),s(a).loaded?(v(),$(N,{key:0},[l("div",me,[f(F,{class:E([{playing:_.value,animate:m.value},"drop-shadow-2xl"]),src:h.value,type:"track","with-ambient":"",name:s(a).song.title},null,8,["class","src","name"]),l("div",{class:E([{playing:_.value,animate:m.value},"blocks"])},i[3]||(i[3]=[l("div",{style:{"animation-delay":"0s"},class:"block"},null,-1),l("div",{style:{"animation-delay":".25s"},class:"block"},null,-1),l("div",{style:{"animation-delay":".5s"},class:"block"},null,-1)]),2)]),s(a).queue&&s(a).playlist&&!y.value?(v(),S(P,{class:"playlist-overflow drop-shadow-2xl relative",key:s(a).playlist.id},{default:Q(()=>[f(H,{ref_key:"playlistScroll",ref:d,playlist:{...s(a).playlist,queue:s(a).queue},"use-queue":"",draggable:"",onRearrange:s(a).rearrangeQueue},null,8,["playlist","onRearrange"])]),_:1})):R("",!0),l("div",pe,[l("span",{class:"iconButton material-symbols-rounded",onClick:V},r(s(k)?"fullscreen_exit":"fullscreen"),1),l("span",{style:D({transform:`rotate(${y.value?0:180}deg)`}),class:"iconButton material-symbols-rounded",onClick:i[0]||(i[0]=()=>y.value=!y.value)},"menu_open",4),l("span",{class:"iconButton material-symbols-rounded",onClick:i[1]||(i[1]=()=>m.value=!m.value)},r(m.value?"motion_photos_off":"animation"),1),l("span",{class:"iconButton material-symbols-rounded",onClick:i[2]||(i[2]=b=>n.$router.push("/player/insights"))}," insights ")])],64)):(v(),$("div",ve,[l("div",ge,[i[4]||(i[4]=l("h2",null,"Nothing playing yet...",-1)),l("div",ye,[(v(!0),$(N,null,G(x.value,b=>(v(),S(W,{playlist:b},null,8,["playlist"]))),256))])])]))])}}}),Pe=T(fe,[["__scopeId","data-v-40f8527c"]]);export{Pe as default};