import{_ as o,o as i,c as r,a as c,t as p,d}from"./index.7a0dd187.js";const y={name:"MiniPlayer",props:{src:String,artist:String,title:String,display:{type:Boolean,default:!0}},data(){return{playing:!1}},methods:{get(e){fetch(`/api/${e}`)},pause(){this.get("pause")},play(){this.get("play")},playPause(){this.$refs.player.onended||(this.$refs.player.onended=()=>{this.playing=!1});const e=new CustomEvent("player.play",{detail:{title:this.title,artist:this.artist,source:this.src}});window.dispatchEvent(e)}}},_={class:"miniPlayer"},u=["src"];function f(e,t,a,h,n,s){return i(),r("div",_,[c("audio",{src:a.src,ref:"player"},null,8,u),a.display?(i(),r("span",{key:0,onClick:t[0]||(t[0]=(...l)=>s.playPause&&s.playPause(...l)),class:"material-icons-round circle"},p(n.playing?"pause":"play_arrow"),1)):d("",!0)])}const m=o(y,[["render",f],["__scopeId","data-v-cde15e0a"]]);export{m as M};