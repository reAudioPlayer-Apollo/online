import{_ as I,f as E,o,c as _,g as v,w as h,l as te,m as se,a as t,C as Q,H as K,i as y,t as b,d as x,e as M,n as f,y as j,E as P,r as ie,L as le,h as A,F as D,j as re,D as L,q as ue,J as ce,M as X,K as Z,N as C,O as R,b as de,Q as ee,B as _e,R as pe}from"./index-4a15a213.js";import{F}from"./FullShelf-b2b7ffe5.js";import{E as ve}from"./Error-e5e93467.js";import{P as Y}from"./PlaylistCard-915b2cc1.js";import{p as me}from"./playerInPicture-af203fdf.js";const fe={name:"CollectionHeader",props:{href:String}},q=c=>(te("data-v-a26d5560"),c=c(),se(),c),he={class:"wrapper"},ye=q(()=>t("div",{class:"collection"},"Playlists",-1)),ge=q(()=>t("div",{class:"collection"},"Releases",-1)),xe=q(()=>t("div",{class:"collection"},"Artists",-1)),we=q(()=>t("div",{class:"collection"},"Albums",-1));function ke(c,i,e,d,m,n){const u=E("router-link");return o(),_("div",he,[v(u,{class:"link",to:"/collection/playlists"},{default:h(()=>[ye]),_:1}),v(u,{class:"link",to:"/collection/releases"},{default:h(()=>[ge]),_:1}),v(u,{class:"link",to:"/collection/artists"},{default:h(()=>[xe]),_:1}),v(u,{class:"link",to:"/collection/albums"},{default:h(()=>[we]),_:1})])}const $e=I(fe,[["render",ke],["__scopeId","data-v-a26d5560"]]),Ce={components:{Card:Q,Cover:K},name:"CardWithImageAndText",props:{cover:String,title:String,description:String,playlistType:{type:String,default:null},imageType:{type:String,default:"playlist"}}};const be={class:"item"},Se={class:"title"},Ie={key:0,class:"material-symbols-rounded"},Te=["title"],Ae=["title","innerHTML"];function De(c,i,e,d,m,n){const u=E("Cover"),l=E("Card");return o(),y(l,{class:"wrapper drop-shadow-md","with-hover":""},{default:h(()=>[t("div",be,[v(u,{src:e.cover,type:e.imageType,name:e.title},null,8,["src","type","name"]),t("div",null,[t("div",Se,[[null,"classic"].includes(e.playlistType)?x("",!0):(o(),_("span",Ie,b(e.playlistType=="smart"?"neurology":"bolt"),1)),t("h4",{title:e.title},b(e.title),9,Te)]),t("p",{class:"text-muted text-xs hideIfMobile",title:e.description,innerHTML:e.description},null,8,Ae)])])]),_:1})}const ae=I(Ce,[["render",De],["__scopeId","data-v-19795e3d"]]),B=M({__name:"FetchLoader",props:{response:{type:Promise,required:!0},error:{type:Function,default:c=>`Failed to fetch (${c.status})`}},setup(c){const i=c,e=f(!1),d=f(""),m=async()=>{if(!i.response)return;e.value=!0,d.value="";const n=await i.response;e.value=!1,n.ok||(d.value=i.error(n))};return j(m),P(()=>i.response,m),(n,u)=>e.value?(o(),y(le,{key:0})):d.value?(o(),y(ve,{key:1,msg:d.value},null,8,["msg"])):c.response?ie(n.$slots,"default",{key:2}):x("",!0)}}),Me={class:"albums"},Re=M({__name:"Albums",setup(c){const i=f([]),e=f(null);return j(async()=>{e.value=fetch("/api/albums");const m=await(await e.value).json();i.value=m.sort((n,u)=>n.name.localeCompare(u.name))}),(d,m)=>(o(),y(B,{response:e.value},{default:h(()=>[t("div",Me,[v(F,{heading:"In your library"},{default:h(()=>[(o(!0),_(D,null,A(i.value,n=>(o(),y(ae,{title:n.name,description:n.artists.join(", "),cover:n.image,onClick:u=>d.$router.push(n.href),imageType:"album"},null,8,["title","description","cover","onClick"]))),256))]),_:1})])]),_:1},8,["response"]))}});const Pe=I(Re,[["__scopeId","data-v-d9f5e245"]]),Ee={class:"playlists"},Fe=M({__name:"Playlists",setup(c){const i=re(),e=L(()=>i.playlists),d=f([]),m=f(null);return j(async()=>{m.value=fetch("/api/spotify/playlists");const u=await(await m.value).json();d.value=u}),(n,u)=>(o(),_("div",Ee,[e.value.length?(o(),y(F,{key:0,heading:"Playlists"},{default:h(()=>[(o(!0),_(D,null,A(e.value,l=>(o(),y(Y,{playlist:l},null,8,["playlist"]))),256))]),_:1})):x("",!0),v(B,{response:m.value,error:l=>`Failed to fetch Spotify playlists (${l.status})`},{default:h(()=>[d.value.length?(o(),y(F,{key:0,heading:"Import From Spotify"},{default:h(()=>[v(Y,{playlist:{href:"/liked",name:"Liked",description:"your liked tracks",type:"classic",cover:null,id:"liked",plays:0},"is-spotify":""}),(o(!0),_(D,null,A(d.value,l=>(o(),y(Y,{playlist:{...l,href:`https://open.spotify.com/playlist/${l.id}`,type:"classic"},"is-spotify":""},null,8,["playlist"]))),256))]),_:1})):x("",!0)]),_:1},8,["response","error"])]))}}),W=c=>(te("data-v-a22e8b2e"),c=c(),se(),c),je={key:0,class:"fill-page"},Ne={key:1,class:"p-4 overflow-hidden h-full"},Le={class:"releases w-full"},Be={class:"current"},qe={key:0,class:"w-max flex flex-col gap-4"},He={class:"flex justify-between w-full items-center"},Oe={class:"flex gap-4 items-center"},Ye={class:"info"},Je={key:0},Ve={key:1,class:"m-0 text-muted text-sm"},Ke=["title"],Qe={class:"actions"},We={key:1,class:"h-96 flex flex-col justify-center"},ze=W(()=>t("span",{class:"italic text-sm text-muted"}," Nothing to preview ",-1)),Ue=[ze],Ge={class:"flex items-center gap-4 w-max"},Xe={key:0,class:"flex justify-end mb-2"},Ze=W(()=>t("span",{class:"material-symbols-rounded"}," done_all ",-1)),et={class:"entries overflow-y-auto flex flex-col gap-2"},tt=["onClick"],st={class:"info overflow-hidden"},lt={class:"m-0 overflow-hidden"},at={class:"m-0 overflow-hidden text-sm text-muted"},ot=["title"],nt=["onClick"],it=["onClick"],rt=["onClick"],ut={key:1,class:"flex flex-col items-center"},ct=W(()=>t("span",{class:"italic text-sm text-muted"}," No releases in this queue ",-1)),dt=[ct],J="reap.releases.seen",V="reap.releases.remember",_t=M({__name:"Releases",setup(c){const i=f(!0),e=f("unseen"),d=a=>{const s=new Date(a),g=Math.floor((Date.now()-s.getTime())/1e3/60/60/24);return g==0?"Today":g==1?"Yesterday":g<100?`${g} days ago`:g<365?`${Math.floor(g/30)} months ago`:s.toLocaleDateString()},m=ue();P(e,a=>{const s={queue:a};m.replace({query:s})});const n=L(()=>{switch(e.value){case"unseen":return T.value.filter(a=>!$.value.includes(a.url));case"out-today":return oe.value;case"watching":return k.value;case"all":return T.value;case"seen":return $.value.map(a=>T.value.find(s=>s.url==a)).filter(a=>a)}}),u=a=>{me(a.artist,a.title,a.url)},l=f(null),w=f(null),H=new Date,T=f([]),z=a=>{l.value=a,ee(()=>{var s;(s=w.value)==null||s.show()})},oe=L(()=>T.value.filter(a=>{const s=new Date(a.releaseDate);return H.getMonth()==s.getMonth()&&H.getDate()==s.getDate()&&H.getFullYear()==s.getFullYear()})),U=a=>{k.value.find(s=>s.url==a.url)||k.value.push(a)},G=a=>{k.value=k.value.filter(s=>s.url!=a.url)},O=a=>{var g;let s=!1;a.url===((g=p.value)==null?void 0:g.url)&&(s=!0),$.value.includes(a.url)||$.value.push(a.url),s&&ee(()=>u(p.value))},$=f([]),k=f([]),p=f(null);return j(async()=>{var s;i.value=!0;const a=await fetch("/api/releases");T.value=await a.json(),i.value=!1,$.value=((s=localStorage.getItem(J))==null?void 0:s.split(","))??[],$.value=$.value.filter(g=>T.value.find(N=>N.url==g)),k.value=JSON.parse(localStorage.getItem(V)??"[]")}),P(n,a=>{p.value=a[0]??null}),P($,a=>{a.length?localStorage.setItem(J,a.join(",")):localStorage.removeItem(J)},{deep:!0}),P(k,a=>{a.length?localStorage.setItem(V,JSON.stringify(a)):localStorage.removeItem(V)},{deep:!0}),(a,s)=>{var g,N;return i.value?(o(),_("div",je,[v(le)])):(o(),_("div",Ne,[l.value?(o(),y(ce,{key:0,id:(g=l.value.url)==null?void 0:g.replace("https://open.spotify.com/album/",""),ref_key:"addReleaseRef",ref:w,album:{id:(N=l.value.url)==null?void 0:N.replace("https://open.spotify.com/album/",""),title:l.value.title,artist:l.value.artists.join(", "),cover:l.value.cover,href:l.value.url,releaseDate:l.value.releaseDate},artist:l.value.artist,cover:l.value.cover,href:l.value.url,title:l.value.title},null,8,["id","album","artist","cover","href","title"])):x("",!0),t("div",Le,[t("div",Be,[p.value?(o(),_("div",qe,[p.value?(o(),y(K,{key:0,class:"rounded-3xl",src:p.value.cover},null,8,["src"])):x("",!0),t("div",He,[t("div",Oe,[t("span",{class:"preview material-symbols-rounded ms-fill text-5xl cursor-pointer",onClick:s[0]||(s[0]=r=>u(p.value))}," play_circle "),t("div",Ye,[p.value?(o(),_("h3",Je,[v(X,{text:p.value.title},null,8,["text"])])):x("",!0),p.value?(o(),_("p",Ve,[v(Z,{artist:p.value.artist},null,8,["artist"])])):x("",!0),p.value?(o(),_("p",{key:2,class:"m-0 text-muted text-xs",title:p.value.releaseDate},b(d(p.value.releaseDate)),9,Ke)):x("",!0)])]),t("div",Qe,[t("span",{class:"material-symbols-rounded cursor-pointer text-muted hover:text-primary",onClick:s[1]||(s[1]=C(r=>z(p.value),["stop"])),title:"Add to playlist"}," add "),t("span",{class:"material-symbols-rounded cursor-pointer text-muted hover:text-primary",onClick:s[2]||(s[2]=C(r=>k.value.find(S=>S.url===p.value.url)?G(p.value):U(p.value),["stop"])),title:"Pin"},b(k.value.find(r=>r.url===p.value.url)?"playlist_remove":"push_pin"),1),t("span",{class:"material-symbols-rounded cursor-pointer text-muted hover:text-primary",onClick:s[3]||(s[3]=C(r=>O(p.value),["stop"])),title:"Mark as seen"}," done_all ")])])])):(o(),_("div",We,Ue))]),v(Q,{class:"queue w-full p-2 h-full flex flex-col gap-2 relative"},{default:h(()=>[t("div",Ge,[t("h5",{class:R(["cursor-pointer",{selected:e.value=="unseen"}]),onClick:s[4]||(s[4]=r=>e.value="unseen")}," Unseen ",2),t("h5",{class:R(["cursor-pointer",{selected:e.value=="out-today"}]),onClick:s[5]||(s[5]=r=>e.value="out-today")}," Out Today ",2),t("h5",{class:R(["cursor-pointer",{selected:e.value=="watching"}]),onClick:s[6]||(s[6]=r=>e.value="watching")}," Pinned ",2),t("h5",{class:R(["cursor-pointer",{selected:e.value=="seen"}]),onClick:s[7]||(s[7]=r=>e.value="seen")}," Seen ",2),t("h5",{class:R(["cursor-pointer",{selected:e.value=="all"}]),onClick:s[8]||(s[8]=r=>e.value="all")}," All ",2)]),e.value==="unseen"&&n.value.length?(o(),_("div",Xe,[t("span",{class:"cursor-pointer text-sm text-muted hover:text-primary flex items-center gap-2",onClick:s[9]||(s[9]=r=>n.value.forEach(O))},[de(" Mark all as seen "),Ze])])):x("",!0),t("div",et,[n.value.length?(o(!0),_(D,{key:0},A(n.value,r=>(o(),_("div",{class:"entry",onClick:S=>{p.value=r,u(r)}},[v(K,{class:"rounded-xl",src:r.cover},null,8,["src"]),t("div",st,[t("p",lt,[v(X,{text:r.title},null,8,["text"])]),t("p",at,[v(Z,{artist:r.artist},null,8,["artist"])])]),t("p",{class:"text-sm m-0 text-muted",title:r.releaseDate},b(d(r.releaseDate)),9,ot),t("span",{class:"material-symbols-rounded cursor-pointer text-muted hover:text-primary",onClick:C(S=>z(r),["stop"]),title:"Add to playlist"}," add ",8,nt),t("span",{class:"material-symbols-rounded cursor-pointer text-muted hover:text-primary",onClick:C(S=>k.value.find(ne=>ne.url===r.url)?G(r):U(r),["stop"]),title:"Pin"},b(k.value.find(S=>S.url===r.url)?"playlist_remove":"push_pin"),9,it),t("span",{class:"material-symbols-rounded cursor-pointer text-muted hover:text-primary",onClick:C(S=>O(r),["stop"]),title:"Mark as seen"}," done_all ",8,rt)],8,tt))),256)):x("",!0)]),n.value.length?x("",!0):(o(),_("div",ut,dt))]),_:1})])]))}}});const pt=I(_t,[["__scopeId","data-v-a22e8b2e"]]);const vt={components:{Card:Q},name:"ArtistItem",methods:{follow(c){c.stopPropagation();const i=this.following?"DELETE":"POST";fetch("/api/spotify/following",{method:i,body:JSON.stringify({artistId:this.id})}).then(e=>{e.status==200&&(this.following=!this.following)})}},data(){return{following:this.initiallyFollowing}},props:{cover:String,name:String,description:String,id:String,initiallyFollowing:Boolean,showFollowButton:Boolean}},mt={class:"item"},ft=["src"],ht={class:"flex gap-2 items-center justify-between"},yt=["innerHTML"];function gt(c,i,e,d,m,n){const u=E("add-artist-to-playlist"),l=E("Card");return o(),y(l,{class:"wrapper","with-hover":"",onClick:i[1]||(i[1]=C(w=>c.$router.push("/artist/"+e.name),["stop"]))},{default:h(()=>[v(u,{ref:"import",artist:{id:e.id,name:e.name,href:`https://open.spotify.com/artist/${e.id}`,image:e.cover}},null,8,["artist"]),t("div",mt,[t("img",{src:e.cover},null,8,ft),t("div",ht,[t("div",null,[t("h4",null,b(e.name),1),t("p",{innerHTML:e.description},null,8,yt)]),e.showFollowButton?(o(),_("span",{key:0,class:"material-symbols-rounded text-muted text-md",onClick:i[0]||(i[0]=C((...w)=>n.follow&&n.follow(...w),["stop"]))},b(m.following?"person_check":"person_add"),1)):x("",!0)])])]),_:1})}const xt=I(vt,[["render",gt],["__scopeId","data-v-8fde1a37"]]),wt={class:"artists"},kt=M({__name:"Artists",setup(c){const i=f([]),e=f([]),d=f(null),m=f(null);return j(async()=>{d.value=fetch("/api/artists");let n=await d.value,u=await n.json();e.value=u.sort((l,w)=>l.name.localeCompare(w.name)),m.value=fetch("/api/spotify/artists"),n=await m.value,u=await n.json(),i.value=u.sort((l,w)=>l.name.localeCompare(w.name))}),(n,u)=>(o(),_("div",wt,[v(B,{response:d.value},{default:h(()=>[v(F,{heading:"In your library"},{default:h(()=>[(o(!0),_(D,null,A(e.value,l=>(o(),y(ae,{title:l.name,cover:l.image,onClick:w=>n.$router.push(`/artist/${l.name}`),imageType:"artist"},null,8,["title","cover","onClick"]))),256))]),_:1})]),_:1},8,["response"]),v(B,{response:m.value},{default:h(()=>[v(F,{heading:"Following on Spotify"},{default:h(()=>[(o(!0),_(D,null,A(i.value,(l,w)=>(o(),y(xt,{id:l.id,key:w,cover:l.cover,description:l.description,name:l.name,"initially-following":"","show-follow-button":""},null,8,["id","cover","description","name"]))),128))]),_:1})]),_:1},8,["response"])]))}});const $t=I(kt,[["__scopeId","data-v-16f47b6f"]]),Ct={class:"parent"},bt={class:"collection"},St=M({__name:"index",setup(c){const i=_e(),e=L(()=>{switch(i.path.split("/")[2]){case"albums":return Pe;case"playlists":return Fe;case"releases":return pt;case"artists":return $t}});return(d,m)=>(o(),_("div",Ct,[v($e,{class:"header"}),t("main",bt,[(o(),y(pe(e.value)))])]))}});const Rt=I(St,[["__scopeId","data-v-433b7137"]]);export{Rt as default};