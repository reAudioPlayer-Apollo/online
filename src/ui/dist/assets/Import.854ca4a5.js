import{C as h}from"./CloudPlaylist.3c450e08.js";import{_,j as y,o as r,c as d,a as o,b as u,d as f,F as v,i as k,f as P,e as $,k as C,l as F}from"./index.99c2f1f8.js";const w={name:"import",methods:{login(){window.location=`https://eu-apollo.herokuapp.com/user/accessToken?redirect=${encodeURIComponent(window.location.origin+"/#/import/<token>")}`}},mounted(){this.$refs.upFile.addEventListener("change",()=>{var t,i,l,n;const s=(t=this.$refs.upFile.files)==null?void 0:t[0];if(!!s){this.uploadedCoverName=(n=(l=(i=this.$refs.upFile)==null?void 0:i.files)==null?void 0:l[0])==null?void 0:n.name;var e=new FileReader;e.onloadend=()=>{this.cloudPlaylists=JSON.parse(e.result)},e.readAsText(s)}})},data(){const s=y();if(this.$route.params.data){const e=this.$route.params.data;fetch(`https://eu-apollo.herokuapp.com/user/${e}`).then(async t=>{this.userData=await t.json(),this.cloudPlaylists=this.userData.data.playlists})}for(let e=0;e<s.playlists.length;e++)fetch(`/api/playlists/${e}`).then(t=>t.json()).then(t=>this.localPlaylists.push(t));return{localPlaylists:[],cloudPlaylists:[],userData:{},dataStore:s}},components:{CloudPlaylist:h}},c=s=>(C("data-v-2c50d3c5"),s=s(),F(),s),I={class:"import"},g={class:"action"},S=c(()=>o("h1",null,"Restore From File",-1)),T={type:"file",ref:"upFile",style:{display:"none"},accept:"application/json"},b=c(()=>o("span",{class:"material-symbols-rounded"},"file_upload",-1)),x=c(()=>o("span",{class:"material-symbols-rounded"},"done",-1)),E={class:"data"};function N(s,e,t,i,l,n){const m=$("CloudPlaylist");return r(),d("div",I,[o("div",g,[S,o("input",T,null,512),o("button",{onClick:e[0]||(e[0]=()=>s.$refs.upFile.click()),class:"iconWithText"},[b,u(" Upload")]),o("button",{onClick:e[1]||(e[1]=p=>s.$refs.playlistsElements.forEach(a=>a.import())),class:"iconWithText"},[x,u(" Apply")])]),f("",!0),o("div",E,[(r(!0),d(v,null,k(l.cloudPlaylists,(p,a)=>(r(),P(m,{onRemove:()=>l.cloudPlaylists.splice(a,1),ref_for:!0,ref:"playlistsElements",key:a,playlist:p,localPlaylists:l.localPlaylists},null,8,["onRemove","playlist","localPlaylists"]))),128))])])}const B=_(w,[["render",N],["__scopeId","data-v-2c50d3c5"]]);export{B as default};