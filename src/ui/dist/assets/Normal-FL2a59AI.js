import{e as i,z as n,j as p,A as m,o as c,i as l}from"./index-CTxjSbok.js";import{T as d}from"./Template-B3y8aqn2.js";import"./PlaylistEntry-DrzB4VXk.js";import"./EditSong.vue_vue_type_script_setup_true_lang-DjK7BvWu.js";import"./playerInPicture-Dfp9IAsf.js";import"./vuedraggable.umd-pw-5IPtN.js";import"./FactCard-CcCpkYQW.js";import"./gistClient-DbxNDpvo.js";import"./Markdown.vue_vue_type_style_index_0_lang-Dj9oziRW.js";const P=i({__name:"Normal",setup(u){const e=n(),r=p(),t=m(()=>e.params.id),s=async(a,o)=>{await fetch(`/api/playlists/${t.value}/tracks`,{method:"PUT",body:JSON.stringify({songOldIndex:a,songNewIndex:o})}),await r.fetchPlaylists()};return(a,o)=>(c(),l(d,{id:t.value,onRearrange:s},null,8,["id"]))}});export{P as default};