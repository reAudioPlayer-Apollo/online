import{m as M,z as V,j as D,y as i,n as c,bq as F,aG as j,c as d,u as a,F as _,a as e,g as h,ay as w,h as q,v as f,f as g,w as G,C as H,d as L,t as x,i as C,k as O,l as A,o as l,bz as J,_ as K}from"./index-01636ea9.js";import{P as Q}from"./PlaylistEntry-847848e5.js";import{P as R}from"./PlaylistHeader-8460e900.js";import{P as U}from"./PlaylistItem-bd3a43dc.js";import"./EditSong.vue_vue_type_script_setup_true_lang-6afc2cb1.js";import"./Form-232bc2b7.js";import"./IconButton-7d1de5c5.js";import"./Dropdown-06281c6a.js";import"./song-31b3adc1.js";import"./playerInPicture-af203fdf.js";import"./Playlist-1ac486a9.js";import"./ExternalEntry-baac14dc.js";const P=u=>(O("data-v-bb572a5b"),u=u(),A(),u),W={class:"bigPlayer"},X={class:"upNow"},Y=P(()=>e("div",{style:{"animation-delay":"0s"},class:"block"},null,-1)),Z={class:"settings"},ss={key:1,class:"no-playlist-selected"},es={class:"wrapper"},ts=P(()=>e("h2",null,"Nothing playing yet...",-1)),as={class:"playlists"},ls=M({__name:"BigPlayer",emits:["maximise"],setup(u,{emit:B}){const t=V(),S=D(),b=i(()=>t.playing),I=i(()=>t.song.cover),$=i(()=>t.song.id),N=i(()=>t.playlist),k=i(()=>`${t.song.title} • ${t.song.artist}`),z=i(()=>S.playlists),v=c(null);document.title=k.value,F(k,r=>{document.title=r}),j(()=>{window.setTimeout(()=>{var o,s;if((o=v.value)!=null&&o.scrollTop)return;const r=(s=document.getElementById(`bplayer-entry-${$.value}`))==null?void 0:s.offsetTop;r>=354&&(v.value.scrollTop=r-354)},1e3)});let p=c(!1);const T=()=>{p.value=!p.value,B("maximise",p.value)},m=c(!1),n=c(!1),y=c(-1);return(r,o)=>(l(),d("div",W,[a(t).loaded?(l(),d(_,{key:0},[e("div",X,[h(q,{class:w([{playing:a(b),animate:n.value},"drop-shadow-2xl"]),src:a(I),type:"track","with-ambient":""},null,8,["class","src"]),e("div",{class:w([{playing:a(b),animate:n.value},"blocks"])},[Y,e("div",{style:f({"animation-delay":".25s"}),class:"block"},null,4),e("div",{style:f({"animation-delay":".5s"}),class:"block"},null,4)],2)]),m.value?L("",!0):(l(),g(H,{key:0,class:"playlistOverflow drop-shadow-2xl relative"},{default:G(()=>[e("div",{ref_key:"playlistScroll",ref:v,class:"playlist"},[h(R),(l(!0),d(_,null,C(a(N).songs,(s,E)=>(l(),g(Q,{id:"bplayer-entry-"+s.id,key:s.source,index:E,selected:y.value==s.id,song:s,"with-cover":"",onClick:os=>y.value==s.id?y.value=-1:y.value=s.id},null,8,["id","index","selected","song","onClick"]))),128))],512)]),_:1})),e("div",Z,[e("span",{class:"iconButton material-symbols-rounded",onClick:T},x(a(p)?"fullscreen_exit":"fullscreen"),1),e("span",{style:f({transform:`rotate(${m.value?0:180}deg)`}),class:"iconButton material-symbols-rounded",onClick:o[0]||(o[0]=()=>m.value=!m.value)},"menu_open",4),e("span",{class:"iconButton material-symbols-rounded",onClick:o[1]||(o[1]=()=>n.value=!n.value)},x(n.value?"motion_photos_off":"animation"),1)])],64)):(l(),d("div",ss,[e("div",es,[ts,e("div",as,[(l(!0),d(_,null,C(a(z),s=>(l(),g(U,{key:s.id,cover:s.cover,description:s.description,title:s.name,onClick:J(()=>a(t).loadPlaylist(s.id),["stop"])},null,8,["cover","description","title","onClick"]))),128))])])]))]))}});const gs=K(ls,[["__scopeId","data-v-bb572a5b"]]);export{gs as default};