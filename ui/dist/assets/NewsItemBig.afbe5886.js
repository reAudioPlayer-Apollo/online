import{_ as d,o as i,c as n,a as s,j as u,t as c}from"./index.5f2d432e.js";const o={name:"NewsItemBig",methods:{redirect(){this.$router.push(this.href)}},computed:{updatedTimestamp(){const e=new Date(this.updated),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${a[e.getUTCDay()]} ${e.getUTCDate()} ${t[e.getUTCMonth()]} ${e.getUTCFullYear()} ${e.getUTCHours()}.${e.getUTCMinutes()} GMT`}},props:{image:String,title:String,summary:String,href:String,updated:String,source:String}},m={class:"itemBig"},l=["src"],g={class:"wrapper"},p=["innerHTML"],h={class:"small"};function T(e,a,t,S,v,r){return i(),n("div",m,[s("div",{class:"item",onClick:a[0]||(a[0]=(..._)=>r.redirect&&r.redirect(..._))},[t.image?(i(),n("img",{key:0,src:t.image},null,8,l)):u("",!0),s("div",g,[s("h4",null,c(t.title),1),s("p",{innerHTML:t.summary,class:"newsSummary"},null,8,p),s("p",h,c(`${r.updatedTimestamp}, ${t.source}`),1)])])])}var M=d(o,[["render",T],["__scopeId","data-v-edcb69e4"]]);export{M as N};