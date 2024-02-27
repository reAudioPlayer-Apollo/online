import{e as Q,n as v,q as H,E as w,B as P,D as K,o as u,c,g as p,L as z,i as T,N as U,d as m,a as s,J as Y,M as A,O as F,t as C,H as x,w as G,Q as y,b as W,F as X,h as Z,C as ee,R as L,l as te,m as se,_ as le}from"./index-fdf9afdc.js";import{C as ae}from"./CollectionHeader-ccd0d4ee.js";import{p as oe}from"./playerInPicture-af203fdf.js";const I=g=>(te("data-v-d49357a3"),g=g(),se(),g),re={key:0,class:"fill-page"},ne={key:1,class:"p-4 overflow-hidden h-full"},ue={class:"releases w-full"},ie={class:"current"},ce={key:0,class:"w-max flex flex-col gap-4"},de={class:"flex justify-between w-full items-center"},ve={class:"flex gap-4 items-center"},pe={class:"info"},me={key:0},fe={key:1,class:"m-0 text-muted text-sm"},_e=["title"],he={class:"actions"},xe={key:1,class:"h-96 flex flex-col justify-center"},ye=I(()=>s("span",{class:"italic text-sm text-muted"}," Nothing to preview ",-1)),ge=[ye],ke={class:"flex items-center gap-4 w-max"},we={key:0,class:"flex justify-end mb-2"},Ce=I(()=>s("span",{class:"material-symbols-rounded"}," done_all ",-1)),De={class:"entries overflow-y-auto flex flex-col gap-2"},$e=["onClick"],be={class:"info overflow-hidden"},Re={class:"m-0 overflow-hidden"},Se={class:"m-0 overflow-hidden text-sm text-muted"},Me=["title"],Ie=["onClick"],Ee=["onClick"],Ne=["onClick"],qe={key:1,class:"flex flex-col items-center"},je=I(()=>s("span",{class:"italic text-sm text-muted"}," No releases in this queue ",-1)),Be=[je],S="reap.releases.seen",M="reap.releases.remember",Pe=Q({__name:"Releases",setup(g){const D=v(!0),r=v("unseen"),E=t=>{const e=new Date(t),o=Math.floor((Date.now()-e.getTime())/1e3/60/60/24);return o==0?"Today":o==1?"Yesterday":o<100?`${o} days ago`:o<365?`${Math.floor(o/30)} months ago`:e.toLocaleDateString()},O=H();w(r,t=>{const e={queue:t};O.replace({query:e})});const _=P(()=>{switch(r.value){case"unseen":return h.value.filter(t=>!d.value.includes(t.url));case"out-today":return V.value;case"watching":return i.value;case"all":return h.value;case"seen":return d.value.map(t=>h.value.find(e=>e.url==t)).filter(t=>t)}}),$=t=>{oe(t.artist,t.title,t.url)},n=v(null),N=v(null),b=new Date,h=v([]),q=t=>{n.value=t,L(()=>{var e;(e=N.value)==null||e.show()})},V=P(()=>h.value.filter(t=>{const e=new Date(t.releaseDate);return b.getMonth()==e.getMonth()&&b.getDate()==e.getDate()&&b.getFullYear()==e.getFullYear()})),j=t=>{i.value.find(e=>e.url==t.url)||i.value.push(t)},B=t=>{i.value=i.value.filter(e=>e.url!=t.url)},R=t=>{var o;let e=!1;t.url===((o=a.value)==null?void 0:o.url)&&(e=!0),d.value.includes(t.url)||d.value.push(t.url),e&&L(()=>$(a.value))},d=v([]),i=v([]),a=v(null);return K(async()=>{var e;D.value=!0;const t=await fetch("/api/releases");h.value=await t.json(),D.value=!1,d.value=((e=localStorage.getItem(S))==null?void 0:e.split(","))??[],d.value=d.value.filter(o=>h.value.find(k=>k.url==o)),i.value=JSON.parse(localStorage.getItem(M)??"[]")}),w(_,t=>{a.value=t[0]??null}),w(d,t=>{t.length?localStorage.setItem(S,t.join(",")):localStorage.removeItem(S)},{deep:!0}),w(i,t=>{t.length?localStorage.setItem(M,JSON.stringify(t)):localStorage.removeItem(M)},{deep:!0}),(t,e)=>{var o,k;return D.value?(u(),c("div",re,[p(z)])):(u(),c("div",ne,[n.value?(u(),T(U,{key:0,id:(o=n.value.url)==null?void 0:o.replace("https://open.spotify.com/album/",""),ref_key:"addReleaseRef",ref:N,album:{id:(k=n.value.url)==null?void 0:k.replace("https://open.spotify.com/album/",""),title:n.value.title,artist:n.value.artists.join(", "),cover:n.value.cover,href:n.value.url,releaseDate:n.value.releaseDate},artist:n.value.artist,cover:n.value.cover,href:n.value.url,title:n.value.title},null,8,["id","album","artist","cover","href","title"])):m("",!0),p(ae),s("div",ue,[s("div",ie,[a.value?(u(),c("div",ce,[a.value?(u(),T(Y,{key:0,class:"rounded-3xl",src:a.value.cover},null,8,["src"])):m("",!0),s("div",de,[s("div",ve,[s("span",{class:"preview material-symbols-rounded ms-fill text-5xl cursor-pointer",onClick:e[0]||(e[0]=l=>$(a.value))}," play_circle "),s("div",pe,[a.value?(u(),c("h3",me,[p(A,{text:a.value.title},null,8,["text"])])):m("",!0),a.value?(u(),c("p",fe,[p(F,{artist:a.value.artist},null,8,["artist"])])):m("",!0),a.value?(u(),c("p",{key:2,class:"m-0 text-muted text-xs",title:a.value.releaseDate},C(E(a.value.releaseDate)),9,_e)):m("",!0)])]),s("div",he,[s("span",{class:"material-symbols-rounded cursor-pointer text-muted hover:text-primary",onClick:e[1]||(e[1]=x(l=>q(a.value),["stop"])),title:"Add to playlist"}," add "),s("span",{class:"material-symbols-rounded cursor-pointer text-muted hover:text-primary",onClick:e[2]||(e[2]=x(l=>i.value.find(f=>f.url===a.value.url)?B(a.value):j(a.value),["stop"])),title:"Pin"},C(i.value.find(l=>l.url===a.value.url)?"playlist_remove":"push_pin"),1),s("span",{class:"material-symbols-rounded cursor-pointer text-muted hover:text-primary",onClick:e[3]||(e[3]=x(l=>R(a.value),["stop"])),title:"Mark as seen"}," done_all ")])])])):(u(),c("div",xe,ge))]),p(ee,{class:"queue w-full p-2 h-full flex flex-col gap-2 relative"},{default:G(()=>[s("div",ke,[s("h5",{class:y(["cursor-pointer",{selected:r.value=="unseen"}]),onClick:e[4]||(e[4]=l=>r.value="unseen")}," Unseen ",2),s("h5",{class:y(["cursor-pointer",{selected:r.value=="out-today"}]),onClick:e[5]||(e[5]=l=>r.value="out-today")}," Out Today ",2),s("h5",{class:y(["cursor-pointer",{selected:r.value=="watching"}]),onClick:e[6]||(e[6]=l=>r.value="watching")}," Pinned ",2),s("h5",{class:y(["cursor-pointer",{selected:r.value=="seen"}]),onClick:e[7]||(e[7]=l=>r.value="seen")}," Seen ",2),s("h5",{class:y(["cursor-pointer",{selected:r.value=="all"}]),onClick:e[8]||(e[8]=l=>r.value="all")}," All ",2)]),r.value==="unseen"&&_.value.length?(u(),c("div",we,[s("span",{class:"cursor-pointer text-sm text-muted hover:text-primary flex items-center gap-2",onClick:e[9]||(e[9]=l=>_.value.forEach(R))},[W(" Mark all as seen "),Ce])])):m("",!0),s("div",De,[_.value.length?(u(!0),c(X,{key:0},Z(_.value,l=>(u(),c("div",{class:"entry",onClick:f=>{a.value=l,$(l)}},[p(Y,{class:"rounded-xl",src:l.cover},null,8,["src"]),s("div",be,[s("p",Re,[p(A,{text:l.title},null,8,["text"])]),s("p",Se,[p(F,{artist:l.artist},null,8,["artist"])])]),s("p",{class:"text-sm m-0 text-muted",title:l.releaseDate},C(E(l.releaseDate)),9,Me),s("span",{class:"material-symbols-rounded cursor-pointer text-muted hover:text-primary",onClick:x(f=>q(l),["stop"]),title:"Add to playlist"}," add ",8,Ie),s("span",{class:"material-symbols-rounded cursor-pointer text-muted hover:text-primary",onClick:x(f=>i.value.find(J=>J.url===l.url)?B(l):j(l),["stop"]),title:"Pin"},C(i.value.find(f=>f.url===l.url)?"playlist_remove":"push_pin"),9,Ee),s("span",{class:"material-symbols-rounded cursor-pointer text-muted hover:text-primary",onClick:x(f=>R(l),["stop"]),title:"Mark as seen"}," done_all ",8,Ne)],8,$e))),256)):m("",!0)]),_.value.length?m("",!0):(u(),c("div",qe,Be))]),_:1})])]))}}});const Fe=le(Pe,[["__scopeId","data-v-d49357a3"]]);export{Fe as default};