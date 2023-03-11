import{m as E,o as a,f as n,w as x,b as A,t as v,_ as N,A as B,n as h,z as S,aU as F,c as l,bP as L,d as _,g as c,P as z,a as t,h as U,D as j,F as p,i as y,T as D,E as H,L as R,k as q,l as M,bO as O,q as W,bz as Y,bS as G}from"./index-2fc95183.js";import{F as V}from"./FactCard-55dee023.js";import{P as J}from"./PlaylistHeader-15a8a669.js";import{P as K}from"./PlaylistEntry-329affc8.js";import{C as w}from"./Card-3ca661b0.js";import{E as Q}from"./ExternalEntry-e73c466b.js";import"./EditSong.vue_vue_type_script_setup_true_lang-4aa0458e.js";import"./Form-92818e8b.js";import"./IconButton-19096469.js";import"./Dropdown-4fcbaecf.js";import"./song-910f5498.js";import"./playerInPicture-af203fdf.js";const X=E({__name:"Tag",props:{tag:{type:String,required:!0},withHash:{type:Boolean,default:!1}},setup(i){return(k,b)=>(a(),n(w,{class:"tag px-4 py-2 cursor-pointer","with-hover":""},{default:x(()=>[A(v(i.withHash?"#":"")+v(i.tag),1)]),_:1}))}});const Z=N(X,[["__scopeId","data-v-2712639d"]]),g=i=>(q("data-v-d1a2d1cb"),i=i(),M(),i),ee={key:1,class:"fill-page"},te={key:2,class:"artist p-4"},ae={class:"wrap"},se={class:"artist__data"},le={class:"upper"},oe={class:"trac__info__details__normal"},re={key:0,class:"mt-0 mb-2 flex flex-row gap-2"},ne={class:"flex flew-row items-center"},ie={class:"font-black text-5xl ml-4"},ce={class:"features flex flex-row gap-4 mt-4 overflow-x-auto"},de={class:"spotify-infos pt-4 pb-2"},ue={class:"meta items-center"},_e={class:"flex flex-row align-items"},pe=g(()=>t("span",{class:"material-symbols-rounded ms-fill mr-2"},"local_fire_department",-1)),me={class:"font-bold"},ve=g(()=>t("hr",{class:"mb-4"},null,-1)),fe={class:"items"},he={key:0,class:"spotify-suggestions mt-4"},ye=g(()=>t("h2",null,"Top Tracks",-1)),xe={class:"items"},we=g(()=>t("h2",null,"Related Artists",-1)),ge={class:"flex flex-row items-center gap-4"},ke={class:"flex flex-col"},be={class:"font-bold"},Ce=E({__name:"Artist",setup(i){const k=O();W();const b=B(()=>k.params.name),e=h(null),m=h(null),d=h(null),f=h("url"),C=async()=>{const r=await fetch(`/api/artists/${b.value}`);e.value=await r.json(),m.value=null,d.value="https://open.spotify.com/artist/"+e.value.metadata.id,f.value="link"};S(d,()=>{var r,o;if(((o=(r=e.value)==null?void 0:r.metadata)==null?void 0:o.id)==G(d.value,"artist")){f.value="link";return}f.value="save"});const P=()=>{R(d.value)};return F(C),S(()=>k.params.name,()=>{e.value=null,C()}),(r,o)=>{var I,T,$;return a(),l(p,null,[e.value?(a(),n(L,{key:0,src:e.value.cover,class:"-z-10"},null,8,["src"])):_("",!0),e.value?(a(),l("div",te,[t("div",ae,[t("div",se,[t("div",le,[c(U,{src:e.value.cover,class:"max-w-sm rounded-xl",placeholder:"person"},null,8,["src"]),t("div",{class:j([{"justify-end":e.value.metadata,"justify-center":!e.value.metadata},"track__info__details flex flex-col"])},[t("div",oe,[(I=e.value.metadata)!=null&&I.genres?(a(),l("div",re,[(a(!0),l(p,null,y(e.value.metadata.genres,s=>(a(),n(Z,{tag:s,"with-hash":""},null,8,["tag"]))),256))])):_("",!0),t("div",ne,[t("h1",ie,v(e.value.name),1)])]),e.value.metadata?(a(),l(p,{key:0},[t("div",ce,[c(V,{"primary-text":e.value.metadata.followers.toLocaleString(),class:"w-full","secondary-text":"Followers"},null,8,["primary-text"]),c(V,{"primary-text":e.value.songs.length,class:"w-full","secondary-text":"Tracks in Your Library"},null,8,["primary-text"])]),t("div",de,[t("div",ue,[t("span",_e,[pe,t("span",me,v(e.value.metadata.popularity),1)])]),c(D,{modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=s=>d.value=s),icon:f.value,onClick:P},null,8,["modelValue","icon"])])],64)):_("",!0)],2)]),c(J,{class:"hideIfMobile mt-8","with-album":"","with-more":""}),ve,t("div",fe,[(a(!0),l(p,null,y(e.value.songs,s=>H((a(),n(K,{index:e.value.songs.findIndex(u=>u.source==s.source),selected:m.value==s.id,song:s,"playlist-id":"track","with-album":"","with-cover":"","with-more":"",onClick:u=>m.value==s.id?m.value=-1:m.value=s.id,onUpdate:o[1]||(o[1]=u=>r.$emit("update"))},null,8,["index","selected","song","onClick"])),[[Y,!0]])),256))]),e.value.metadata?(a(),l("div",he,[(T=e.value.metadata.topTracks)!=null&&T.length?(a(),n(w,{key:0,class:"p-4"},{default:x(()=>[ye,t("div",xe,[(a(!0),l(p,null,y(e.value.metadata.topTracks,(s,u)=>(a(),n(Q,{index:u,song:s,"can-import":"","cannot-add":"","with-album":"","with-cover":"","with-more":"",onUpdate:o[2]||(o[2]=Ie=>r.$emit("update"))},null,8,["index","song"]))),256))])]),_:1})):_("",!0),($=e.value.metadata.related)!=null&&$.length?(a(),n(w,{key:1,class:"p-4 flex flex-col gap-2 related overflow-y-auto"},{default:x(()=>[we,(a(!0),l(p,null,y(e.value.metadata.related,s=>(a(),n(w,{class:"cursor-pointer px-4 py-2","with-hover":"",onClick:u=>r.$router.push(`/artist/${s.name}`)},{default:x(()=>[t("div",ge,[c(U,{src:s.cover,class:"w-8 h-8 rounded-xl",placeholder:"person"},null,8,["src"]),t("div",ke,[t("h3",be,v(s.name),1)])])]),_:2},1032,["onClick"]))),256))]),_:1})):_("",!0)])):_("",!0)])])])):(a(),l("div",ee,[c(z)]))],64)}}});const ze=N(Ce,[["__scopeId","data-v-d1a2d1cb"]]);export{ze as default};