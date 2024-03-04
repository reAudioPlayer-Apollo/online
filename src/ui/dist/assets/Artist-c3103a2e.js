import{e as F,o as t,i as n,w as x,b as H,t as v,C as w,_ as L,B as j,q,D,n as h,E as U,y as R,c as o,a7 as z,d as i,g as y,L as M,a,H as V,O as B,F as p,h as g,u as O,Z as J,P as W,a2 as Y,al as Z,ap as E,aq as G,ag as K,l as Q,m as X}from"./index-ffaf8705.js";import{F as A}from"./FactCard-5d1184d9.js";import{P as ee}from"./PlaylistEntry-f28bfbb2.js";import{s as te}from"./spotify-4c8cd740.js";import"./EditSong.vue_vue_type_script_setup_true_lang-32414f57.js";import"./playerInPicture-af203fdf.js";const ae=F({__name:"Tag",props:{tag:{type:String,required:!0},withHash:{type:Boolean,default:!1}},setup(c){return(b,C)=>(t(),n(w,{class:"tag px-4 py-2 cursor-pointer","with-hover":""},{default:x(()=>[H(v(c.withHash?"#":"")+v(c.tag),1)]),_:1}))}});const se=L(ae,[["__scopeId","data-v-2712639d"]]),k=c=>(Q("data-v-13b2922c"),c=c(),X(),c),le={key:1,class:"fill-page"},oe={key:2,class:"artist p-4"},ne={class:"wrap"},re={class:"artist__data"},ie={class:"upper"},ue={class:"trac__info__details__normal"},de={key:0,class:"mt-0 mb-2 flex flex-row gap-2"},ce={class:"flex flew-row items-center"},_e={class:"font-black text-5xl ml-4"},pe={class:"features flex flex-row gap-4 mt-4 overflow-x-auto"},ve={class:"spotify-infos pt-4 pb-2"},me={class:"meta items-center"},fe={key:0,class:"flex flex-row align-items"},he=k(()=>a("span",{class:"material-symbols-rounded ms-fill mr-2"},"local_fire_department",-1)),ye={class:"font-bold"},ge=k(()=>a("hr",{class:"mb-4"},null,-1)),xe={class:"items"},we={key:0,class:"spotify-suggestions mt-4"},ke=k(()=>a("h2",null,"Top Tracks",-1)),be={class:"items"},Ce=k(()=>a("h2",null,"Related Artists",-1)),$e={class:"flex flex-row items-center gap-4"},Ie={class:"flex flex-col"},Se={class:"font-bold"},Te=F({__name:"Artist",setup(c){const b=j();q();const C=D(()=>b.params.name),e=h(null),m=h(null),u=h(null),f=h("url"),d=h(!1),$=async()=>{const r=await fetch(`/api/artists/${C.value}`);e.value=await r.json(),m.value=null,u.value="",d.value=!1,e.value.metadata.id.length==22&&(u.value="https://open.spotify.com/artist/"+e.value.metadata.id,d.value=!0),f.value="link"},I=async r=>{await fetch(`/api/artists/${C.value}`,{method:"PUT",body:JSON.stringify({spotifyId:r})}),e.value=null,await $()};U(u,()=>{var r,l;if(((l=(r=e.value)==null?void 0:r.metadata)==null?void 0:l.id)==E(u.value,"artist")){f.value="link";return}f.value="save"});const P=()=>{if(f.value=="link"){G(u.value);return}I(E(u.value,"artist"))};return R($),U(()=>b.params.name,()=>{e.value=null,$()}),(r,l)=>{var S,T,N;return t(),o(p,null,[e.value?(t(),n(z,{key:0,src:e.value.cover,class:"-z-10"},null,8,["src"])):i("",!0),e.value?(t(),o("div",oe,[a("div",ne,[a("div",re,[a("div",ie,[y(V,{src:e.value.cover,class:"max-w-sm rounded-xl",placeholder:"person"},null,8,["src"]),a("div",{class:B([{"justify-end":e.value.metadata,"justify-center":!e.value.metadata},"track__info__details flex flex-col"])},[a("div",ue,[(S=e.value.metadata)!=null&&S.genres?(t(),o("div",de,[(t(!0),o(p,null,g(e.value.metadata.genres,s=>(t(),n(se,{tag:s,"with-hash":""},null,8,["tag"]))),256))])):i("",!0),a("div",ce,[a("h1",_e,v(e.value.name),1)])]),e.value.metadata?(t(),o(p,{key:0},[a("div",pe,[e.value.metadata.followers?(t(),n(A,{key:0,"primary-text":e.value.metadata.followers.toLocaleString(),class:"w-full","secondary-text":"Followers"},null,8,["primary-text"])):i("",!0),e.value.songs.length?(t(),n(A,{key:1,"primary-text":e.value.songs.length,class:"w-full","secondary-text":"Tracks in Your Library"},null,8,["primary-text"])):i("",!0)]),a("div",ve,[a("div",me,[e.value.metadata.popularity?(t(),o("span",fe,[he,a("span",ye,v(e.value.metadata.popularity),1)])):i("",!0)]),y(O(te),{class:B([{enabled:d.value},"spotify-enable"]),onClick:l[0]||(l[0]=s=>d.value=!d.value)},null,8,["class"]),d.value?(t(),n(J,{key:0,modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=s=>u.value=s),icon:f.value,onClick:P},null,8,["modelValue","icon"])):i("",!0),a("span",{class:"material-symbols-rounded cursor-pointer",onClick:l[2]||(l[2]=s=>d.value?I(!1):I(!0))},v(d.value?"delete":"search"),1)])],64)):i("",!0)],2)]),y(W,{class:"hideIfMobile mt-8","with-album":"","with-more":""}),ge,a("div",xe,[(t(!0),o(p,null,g(e.value.songs,s=>Y((t(),n(ee,{index:e.value.songs.findIndex(_=>_.source==s.source),selected:m.value==s.id,song:s,"playlist-id":"artist","with-album":"","with-cover":"","with-more":"",artist:e.value.name,onClick:_=>m.value==s.id?m.value=-1:m.value=s.id,onUpdate:l[3]||(l[3]=_=>r.$emit("update"))},null,8,["index","selected","song","artist","onClick"])),[[K,!0]])),256))]),e.value.metadata?(t(),o("div",we,[(T=e.value.metadata.topTracks)!=null&&T.length?(t(),n(w,{key:0,class:"p-4"},{default:x(()=>[ke,a("div",be,[(t(!0),o(p,null,g(e.value.metadata.topTracks,(s,_)=>(t(),n(Z,{index:_,song:s,"can-import":"","cannot-add":"","with-album":"","with-cover":"","with-more":"",onUpdate:l[4]||(l[4]=Ne=>r.$emit("update"))},null,8,["index","song"]))),256))])]),_:1})):i("",!0),(N=e.value.metadata.related)!=null&&N.length?(t(),n(w,{key:1,class:"p-4 flex flex-col gap-2 related overflow-y-auto"},{default:x(()=>[Ce,(t(!0),o(p,null,g(e.value.metadata.related,s=>(t(),n(w,{class:"cursor-pointer px-4 py-2","with-hover":"",onClick:_=>r.$router.push(`/artist/${s.name}`)},{default:x(()=>[a("div",$e,[y(V,{src:s.cover,class:"w-8 h-8 rounded-xl",placeholder:"person"},null,8,["src"]),a("div",Ie,[a("h3",Se,v(s.name),1)])])]),_:2},1032,["onClick"]))),256))]),_:1})):i("",!0)])):i("",!0)])])])):(t(),o("div",le,[y(M)]))],64)}}});const Le=L(Te,[["__scopeId","data-v-13b2922c"]]);export{Le as default};