import{e as y,n as s,E as w,o as b,i as _,w as h,g as x,v as S,a9 as k,cT as q,ar as F}from"./index-ffaf8705.js";const T=y({__name:"EditSong",props:{song:{type:Object,required:!0}},emits:["close","update"],setup(u,{expose:l,emit:p}){const o=u,m=p,i=async(t,e)=>{const a=new FormData,v="."+e.name.split(".").pop();var g=e.slice(0,e.size,e.type),f=new File([g],o.song.id+v,{type:e.type});return a.append("file",f),await(await fetch(t,{method:"POST",body:a})).text()},n=s([{name:"source",type:"upload",icon:"music_note",accept:"audio/mp3",required:!0,onUpload:t=>{i("/api/config/tracks",t).then(e=>n.value.find(a=>a.name=="source").value=e)},value:o.song.source},{name:"title",type:"text",icon:"title",required:!0,value:o.song.title},{name:"artist",type:"text",icon:"person",required:!0,value:o.song.artist},{name:"album",type:"text",icon:"album",value:o.song.album.name},{name:"cover",type:"upload",icon:"art_track",accept:"image/*",imagePreview:!0,value:o.song.cover,onUpload:t=>{i("/api/config/images",t).then(e=>n.value.find(a=>a.name=="cover").value=e)}}]),d=async()=>{const t=c.value.toObject();await q({...o.song,...t}),m("update"),F.addSuccess(t.title,"Updated",3e3)},r=s(null),c=s(null);return l({show:()=>{r.value.show()}}),w(o,()=>{var t;for(const e of n.value.map(a=>a.name))n.value.find(a=>a.name==e).value=(t=o.song)==null?void 0:t[e]},{deep:!0}),(t,e)=>(b(),_(k,{ref_key:"modal",ref:r,submit:{label:"Save",icon:"save"},name:"Edit Song",onClose:e[0]||(e[0]=a=>t.$emit("close")),onSubmit:d},{default:h(()=>[x(S,{ref_key:"form",ref:c,options:n.value},null,8,["options"])]),_:1},512))}});export{T as _};