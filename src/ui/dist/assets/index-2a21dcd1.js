import{T as i,_ as l,F as r}from"./index.vue_vue_type_script_setup_true_lang-ba86f86f.js";import{P as n}from"./PlaylistEntry-18ad8a22.js";import{P as d}from"./PlaylistHeader-40afea3c.js";import{_ as p,B as c,p as _,D as y,e as m,o as f,f as u}from"./index-1856ec92.js";const x={components:{Template:i,Index:l,PlaylistEntry:n,FixedPlaylistHeader:r,PlaylistHeader:d},props:{id:{type:String,required:!0},icon:{type:String,required:!1,default:"favorite"}},data(){return this.updateTracks(),{fixedHeaderHidden:!0,playlist:{},store:c(),selectedSongId:-1}},methods:{parseCover:_,download(a){var e;const t=(e=this.playlist)==null?void 0:e[a];window.open(`/api/tracks/${t.id}/download`)},async updateTracks(){this.playlist=await y(this.id)},loadPlaylist(){this.store.loadPlaylist(playlistId)}}};function P(a,t,e,h,s,v){const o=m("Template");return f(),u(o,{"cover-icon":e.icon,playlist:s.playlist,"playlist-id":e.id},null,8,["cover-icon","playlist","playlist-id"])}const w=p(x,[["render",P],["__scopeId","data-v-89911faa"]]);export{w as I};