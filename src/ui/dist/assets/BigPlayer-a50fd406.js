import{n as V,B as z,j as A,A as i,q as c,bs as D,aI as F,c as d,u as a,F as _,a as e,g as w,aA as b,h as j,y as f,f as g,w as q,C as H,d as L,t as x,i as B,l as O,m as G,o as l,bB as J,_ as K}from"./index-9cceea94.js";import{P as Q}from"./PlaylistEntry-ca9fa468.js";import{P as R}from"./PlaylistHeader-82176345.js";import{P as U}from"./PlaylistItem-85ea8d89.js";import"./EditSong.vue_vue_type_script_setup_true_lang-b988dc83.js";import"./Form-c4c24b56.js";import"./IconButton-fe58ca13.js";import"./Dropdown-4abf0b15.js";import"./song-ce5e4895.js";import"./playerInPicture-af203fdf.js";import"./Playlist-0655ca19.js";import"./ExternalEntry-ac317c2b.js";const C=u=>(O("data-v-175a7d05"),u=u(),G(),u),W={class:"bigPlayer"},X={class:"upNow"},Y=C(()=>e("div",{style:{"animation-delay":"0s"},class:"block"},null,-1)),Z={class:"settings"},ss={key:1,class:"no-playlist-selected"},es={class:"wrapper"},ts=C(()=>e("h2",null,"Nothing playing yet...",-1)),as={class:"playlists"},ls=V({__name:"BigPlayer",emits:["maximise"],setup(u,{emit:P}){const t=z(),S=A(),k=i(()=>t.playing),I=i(()=>t.song.cover),$=i(()=>t.song.id),N=i(()=>t.playlist),h=i(()=>`${t.song.title} • ${t.song.artist}`),T=i(()=>S.playlists),v=c(null);document.title=h.value,D(h,r=>{document.title=r}),F(()=>{window.setTimeout(()=>{var o,s;if((o=v.value)!=null&&o.scrollTop)return;const r=(s=document.getElementById(`bplayer-entry-${$.value}`))==null?void 0:s.offsetTop;r>=354&&(v.value.scrollTop=r-354)},1e3)});let p=c(!1);const E=()=>{p.value=!p.value,P("maximise",p.value)},m=c(!1),n=c(!1),y=c(-1);return(r,o)=>(l(),d("div",W,[a(t).loaded?(l(),d(_,{key:0},[e("div",X,[w(j,{class:b([{playing:a(k),animate:n.value},"drop-shadow-2xl"]),src:a(I),type:"track","with-ambient":""},null,8,["class","src"]),e("div",{class:b([{playing:a(k),animate:n.value},"blocks"])},[Y,e("div",{style:f({"animation-delay":".25s"}),class:"block"},null,4),e("div",{style:f({"animation-delay":".5s"}),class:"block"},null,4)],2)]),m.value?L("",!0):(l(),g(H,{key:0,class:"playlistOverflow drop-shadow-2xl relative"},{default:q(()=>[e("div",{ref_key:"playlistScroll",ref:v,class:"playlist"},[w(R),(l(!0),d(_,null,B(a(N).songs,(s,M)=>(l(),g(Q,{id:"bplayer-entry-"+s.id,key:s.source,index:M,selected:y.value==s.id,song:s,"with-cover":"",onClick:os=>y.value==s.id?y.value=-1:y.value=s.id},null,8,["id","index","selected","song","onClick"]))),128))],512)]),_:1})),e("div",Z,[e("span",{class:"iconButton material-symbols-rounded",onClick:E},x(a(p)?"fullscreen_exit":"fullscreen"),1),e("span",{style:f({transform:`rotate(${m.value?0:180}deg)`}),class:"iconButton material-symbols-rounded",onClick:o[0]||(o[0]=()=>m.value=!m.value)},"menu_open",4),e("span",{class:"iconButton material-symbols-rounded",onClick:o[1]||(o[1]=()=>n.value=!n.value)},x(n.value?"motion_photos_off":"animation"),1)])],64)):(l(),d("div",ss,[e("div",es,[ts,e("div",as,[(l(!0),d(_,null,B(a(T),s=>(l(),g(U,{key:s.id,cover:s.cover,description:s.description,title:s.name,onClick:J(()=>a(t).loadPlaylist(s.id),["stop"])},null,8,["cover","description","title","onClick"]))),128))])])]))]))}});const gs=K(ls,[["__scopeId","data-v-175a7d05"]]);export{gs as default};