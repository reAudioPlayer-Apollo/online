import{T as r,_ as i,F as l}from"./index.vue_vue_type_script_setup_true_lang-803b55d4.js";import{P as d}from"./PlaylistEntry-1faddfe0.js";import{P as n}from"./PlaylistHeader-10349651.js";import{_ as p,N as c,p as _,e as y,o as m,f as u}from"./index-bcfdc045.js";const f={components:{Template:r,Index:i,PlaylistEntry:d,FixedPlaylistHeader:l,PlaylistHeader:n},props:{src:{type:String,required:!0},id:{type:Number,required:!0}},data(){return this.updateTracks(),{fixedHeaderHidden:!0,playlist:{},store:c(),selectedSongId:-1}},methods:{parseCover:_,download(e){var t;const s=(t=this.playlist)==null?void 0:t[e];window.open(`/api/tracks/${s.id}/download`)},updateTracks(){fetch(this.src).then(e=>e.json()).then(e=>{this.playlist=e})},loadPlaylist(){fetch("/api/player/load",{method:"POST",body:JSON.stringify({type:"collection"})})}}};function h(e,s,t,x,a,P){const o=y("Template");return m(),u(o,{playlist:a.playlist,"playlist-id":t.id},null,8,["playlist","playlist-id"])}const S=p(f,[["render",h],["__scopeId","data-v-40923d95"]]);export{S as I};