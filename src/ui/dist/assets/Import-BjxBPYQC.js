import{e as F,A as G,o as d,c as v,g as E,E as V,a as u,M as z,H,t as S,F as O,h as D,K as N,d as h,_ as L,i as $,w as T,b as q,C as I,l as P,j as K,B as W,v as Z,I as Q,L as R,aA as U,s as X,Z as Y,$ as ee,aB as te,aC as se,aD as le}from"./index-CTxjSbok.js";import{G as J}from"./gistClient-DbxNDpvo.js";const ae=(e,r)=>{const t={source:e.source,id:e.id,changed:{}},l=t.changed,o=["id","href","duration","plays","artists"];for(const a of Object.keys(e))if(!o.includes(a)){if(a==="metadata"){const y=e.metadata,m=r.metadata;if(y&&m){if(!y.spotify&&!m.spotify)continue;if(!y.spotify&&m.spotify){l.metadata={from:y,to:m};continue}if(y.spotify&&!m.spotify){l.metadata={from:y,to:m};continue}y.spotify.id!==m.spotify.id&&(l.metadata={from:y,to:m})}else(y||m)&&(l.metadata={from:y,to:m});continue}a!=="id"&&e[a]!==r[a]&&(l[a]={from:e[a],to:r[a]})}return Object.keys(l).length?t:null},ne=(e,r)=>{const t={name:e.playlist.name,id:e.playlist.id,added:[],removed:[],modified:[]};if(e.playlist.type!==r.playlist.type)return null;if(e.playlist.type==="smart"){const l=e.playlist,o=r.playlist;return JSON.stringify(l.definition)!==JSON.stringify(o.definition)?t:null}if(r.playlist.type!=="smart"){for(const l of e.playlist.songs){const o=r.playlist.songs.find(a=>a.source===l.source);if(o){const a=ae(l,o);a&&t.modified.push(a)}else t.removed.push(l)}for(const l of r.playlist.songs)e.playlist.songs.find(a=>a.source===l.source)||t.added.push(l);return t.added.length||t.removed.length||t.modified.length?t:null}},ie=(e,r)=>{const t={added:[],removed:[],modified:[]};for(const l of e.collection){const o=r.collection.find(a=>a.playlist.name===l.playlist.name);if(o){const a=ne(l,o);a&&t.modified.push(a)}else t.removed.push(l)}for(const l of r.collection)e.collection.find(a=>a.playlist.name===l.playlist.name)||t.added.push(l);return t},oe={class:"overflow-hidden"},de={class:"title my-0"},ce={key:0,class:"info"},re={class:"key"},ue={class:"value"},fe=F({__name:"SongDiff",props:{song:{type:Object,required:!0},diff:{type:Object,required:!0},isBase:{type:Boolean,required:!1},expanded:{type:Object,required:!1}},emits:["exclude","toggle-expanded"],setup(e,{emit:r}){const t=e,l=G(()=>t.diff.removed.some(i=>i.source===t.song.source)?"removed":t.diff.modified.some(i=>i.source===t.song.source)?"modified":t.isBase?"base":t.diff.added.some(i=>i.source===t.song.source)?"added":"base"),o=r,a=()=>{o("toggle-expanded",t.song)},y=["title","artist","album","source","cover","favourite","metadata"],m=i=>{var b,k,w;const f=(k=(b=t.diff.modified.find(C=>C.source===t.song.source))==null?void 0:b.changed)==null?void 0:k[i],x=t.isBase?"from":"to",g=(f==null?void 0:f[x])??t.song[i];return i=="metadata"?(w=g==null?void 0:g.spotify)==null?void 0:w.id:g};return(i,f)=>{var x,g;return!e.isBase&&l.value=="removed"?h("",!0):(d(),v("div",{key:0,class:N([l.value,"song px-4 py-2"])},[E(V,{src:e.song.cover,class:"rounded-md"},null,8,["src"]),u("div",oe,[u("p",de,[E(z,{text:e.song.title},null,8,["text"])]),E(H,{artist:e.song.artist,class:"artist text-muted"},null,8,["artist"])]),u("span",{class:"material-symbols-rounded cursor-pointer",onClick:a},S(((x=e.expanded)==null?void 0:x.source)==e.song.source?"expand_less":"expand_more"),1),((g=e.expanded)==null?void 0:g.source)==e.song.source?(d(),v("div",ce,[(d(),v(O,null,D(y,b=>{var k,w;return u("div",{key:b,class:N([{modified:(w=(k=e.diff.modified.find(C=>C.source===e.song.source))==null?void 0:k.changed)==null?void 0:w[b]},"info__table"])},[u("span",re,S(b),1),u("span",ue,S(m(b)),1)],2)}),64))])):h("",!0)],2))}}}),pe=L(fe,[["__scopeId","data-v-1805c709"]]),ye={class:"info"},me={class:"title"},ge={key:0,class:"material-symbols-rounded"},ve={key:0,class:"text-muted"},xe={class:"flex flex-row justify-between items-center"},he={key:0,class:"text-very-muted"},be={key:0},ke=F({__name:"PlaylistDiff",props:{playlist:{type:Object,required:!0},diff:{type:Object,required:!0},isBase:{type:Boolean,required:!1},expanded:{type:Boolean,required:!1},expandedSong:{type:Object,required:!1}},emits:["exclude","toggle-expanded","toggle-expanded-song"],setup(e,{emit:r}){const t=e,l=G(()=>t.diff.removed.some(i=>i.playlist.name===t.playlist.name)?"removed":t.diff.modified.some(i=>i.name===t.playlist.name)?"modified":t.isBase?"base":t.diff.added.some(i=>i.playlist.name===t.playlist.name)?"added":"base"),o=r,a=()=>{o("toggle-expanded",t.playlist)},y=i=>{o("toggle-expanded-song",i)},m=i=>{const f=t.diff.modified.find(x=>x.name===i.name);return f||{name:i.name,added:[],removed:[],modified:[]}};return(i,f)=>(d(),$(I,{class:N([l.value,"playlist p-4 rounded-xl relative"])},{default:T(()=>{var x;return[E(V,{src:e.playlist.cover,class:"rounded-xl self-start"},null,8,["src"]),u("div",ye,[u("div",me,[e.playlist.type!="classic"?(d(),v("span",ge,S(e.playlist.type=="smart"?"neurology":"bolt"),1)):h("",!0),u("h2",null,S(e.playlist.name),1)]),e.playlist.description?(d(),v("p",ve,S(e.playlist.description),1)):h("",!0),u("div",xe,[e.playlist.type==="classic"?(d(),v("p",he,[u("strong",null,S((x=e.playlist.songs)==null?void 0:x.length),1),f[1]||(f[1]=q(" tracks "))])):h("",!0),u("span",{class:"material-symbols-rounded cursor-pointer",title:"Expand",onClick:a},S(e.expanded?"expand_less":"expand_more"),1)])]),e.expanded?(d(),$(I,{key:0,class:"col-span-2 flex flex-col gap-2 z-10 p-4"},{default:T(()=>[e.playlist.type==="classic"?(d(!0),v(O,{key:0},D(e.playlist.songs,g=>(d(),$(pe,{key:g.source,diff:m(e.playlist),expanded:e.expandedSong,"is-base":e.isBase,song:g,onToggleExpanded:y},null,8,["diff","expanded","is-base","song"]))),128)):h("",!0),u("pre",null,[f[2]||(f[2]=q("                ")),e.playlist.type==="smart"?(d(),v("code",be,`
`+S(JSON.stringify(e.playlist.definition,null,4))+`
                `,1)):h("",!0),f[3]||(f[3]=q(`
            `))])]),_:1})):h("",!0),l.value!="base"?(d(),v("span",{key:1,class:"material-symbols-rounded exclude",title:"Exclude",onClick:f[0]||(f[0]=g=>i.$emit("exclude",e.playlist))}," block ")):h("",!0)]}),_:1},8,["class"]))}}),M=L(ke,[["__scopeId","data-v-51b40518"]]),Se={class:"pb-4 pr-4 flex flex-col gap-4 h-full"},Pe={class:"flex flex-row justify-end"},Ee={key:1,class:"fill-page"},we={key:1,class:"fill-page !grid !grid-cols-2 gap-4"},Be=F({__name:"Import",setup(e){const r=P(!1),t=P(null),l=P({}),o=P({}),a=G(()=>ie(l.value,o.value)),y=K();let m=!1;const i=async()=>{var c;if(r.value||m)return;m=!0;const n=[];for(const s of(c=y.playlists)==null?void 0:c.filter(p=>p.type!="special")){const p=Object.assign({},s);n.push(p)}l.value=await U(n),m=!1};W(()=>y.playlists,i),Z(i);const f=n=>{l.value.collection=l.value.collection.filter(c=>c.playlist.name!==n.name),o.value.collection=o.value.collection.filter(c=>c.playlist.name!==n.name)},x=P(null),g=P(null),b=n=>{var c;((c=x.value)==null?void 0:c.name)===n.name?x.value=null:x.value=n},k=n=>{var c;((c=g.value)==null?void 0:c.id)===n.id?g.value=null:g.value=n},w=async()=>{r.value=!0;const n=[],c=s=>{n.push(te(s.id,s.added));for(const p of s.removed)n.push(se(s.id,p.id));for(const p of s.modified)for(const B of Object.keys(p.changed))n.push(le(p.id,B,p.changed[B].to))};for(const s of a.value.added)s.playlist.type!=="special"&&(l.value.collection.push(s),n.push(X(s.playlist.type,s.playlist.name,s.playlist.description,s.playlist.cover).then(p=>{s.playlist.id=p,s.playlist.type==="classic"?c({id:s.playlist.id,name:s.playlist.name,added:s.playlist.songs,removed:[],modified:[]}):s.playlist.type==="smart"&&n.push(Y(s.playlist.id,s.playlist.definition))})));for(const s of a.value.modified)c(s);for(const s of a.value.removed)n.push(ee(s.playlist.id));await Promise.all(n),window.setTimeout(async()=>{await y.fetchPlaylists(),r.value=!1,await i()},1e3)},C=P(!1);J.connected().then(n=>C.value=n);const _=async()=>{const n=document.createElement("input");n.type="file",n.accept=".one.*",n.name="my.one.collection",n.onchange=async()=>{if(!n.files)return;const s=await n.files[0].text(),p=JSON.parse(s);o.value=p,t.value="file"},n.click()},A=async()=>{o.value=await J.getContent(),t.value="gist"};return P(null),(n,c)=>(d(),v("div",Se,[u("div",Pe,[E(Q,{icon:"merge",label:"Merge",onClick:w})]),t.value?(d(),v(O,{key:0},[r.value?(d(),v("div",Ee,[E(R)])):(d(),v(O,{key:0},[c[0]||(c[0]=u("div",{class:"grid grid-cols-2 gap-4"},[u("h1",null,"Local"),u("h1",null,"Incoming")],-1)),(d(!0),v(O,null,D(l.value.collection,s=>{var p,B;return d(),v("div",{key:s.playlist.name,class:"grid grid-cols-2 gap-4"},[l.value.collection.some(j=>j.playlist.name===s.playlist.name)?(d(),$(M,{key:0,diff:a.value,expanded:((p=x.value)==null?void 0:p.name)===s.playlist.name,"expanded-song":g.value,playlist:s.playlist,class:"grid-1","is-base":"",onExclude:f,onToggleExpanded:b,onToggleExpandedSong:k},null,8,["diff","expanded","expanded-song","playlist"])):h("",!0),o.value.collection.some(j=>j.playlist.name===s.playlist.name)?(d(),$(M,{key:1,diff:a.value,expanded:((B=x.value)==null?void 0:B.name)===s.playlist.name,"expanded-song":g.value,playlist:o.value.collection.find(j=>j.playlist.name===s.playlist.name).playlist,class:"grid-2",onExclude:f,onToggleExpanded:b,onToggleExpandedSong:k},null,8,["diff","expanded","expanded-song","playlist"])):h("",!0)])}),128)),(d(!0),v(O,null,D(a.value.added,s=>{var p;return d(),v("div",{key:s.playlist.name,class:"grid grid-cols-2 gap-4"},[o.value.collection.some(B=>B.playlist.name===s.playlist.name)?(d(),$(M,{key:0,diff:a.value,expanded:((p=x.value)==null?void 0:p.name)===s.playlist.name,"expanded-song":g.value,playlist:s.playlist,class:"grid-2",onExclude:f,onToggleExpanded:b,onToggleExpandedSong:k},null,8,["diff","expanded","expanded-song","playlist"])):h("",!0)])}),128))],64))],64)):(d(),v("div",we,[E(I,{"with-hover":"",class:"cursor-pointer",onClick:_},{default:T(()=>c[1]||(c[1]=[u("h2",null,[u("span",{class:"material-symbols-rounded"},"file_upload"),q(" From File ")],-1)])),_:1}),E(I,{disabled:!C.value,"with-hover":"",class:"cursor-pointer",onClick:A},{default:T(()=>c[2]||(c[2]=[u("h2",null,[u("span",{class:"material-symbols-rounded"},"cloud_download"),q(" GitHub Gist ")],-1)])),_:1},8,["disabled"])]))]))}}),$e=L(Be,[["__scopeId","data-v-3e5b815e"]]);export{$e as default};