import{i as f,o as l,c as s,F as m,j as g,a as n,t as C,u,cj as V,g as o,T as _,p as k,bZ as i,h as p,d as U,f as v,J as b,bA as w,_ as x}from"./index-3242661c.js";import{D as F}from"./Dropdown-fe54ca26.js";const $={class:"form"},j={class:"content"},D=["onClick"],q=["accept","onChange"],B={key:0,class:"imagePreview"},I=["onUpdate:modelValue","type","onChange"],N=f({__name:"Form",props:{options:{type:Array,required:!0}},setup(d,{expose:h}){const y=d;return h({toObject:()=>{const c={};return y.options.forEach(r=>{c[r.name]=r.value}),c}}),(c,r)=>(l(),s("div",$,[(l(!0),s(m,null,g(d.options,e=>(l(),s("div",{key:e.name,class:"option"},[n("h4",null,C(u(V)(e.name)),1),n("div",j,[e.type=="upload"?(l(),s(m,{key:0},[n("span",{class:"material-symbols-rounded icon-button",onClick:()=>{var a,t;return(t=(a=c.$refs["upload-"+e.name])==null?void 0:a[0])==null?void 0:t.click()}}," file_upload ",8,D),n("input",{ref_for:!0,ref:"upload-"+e.name,accept:e.accept,style:{display:"none"},type:"file",onChange:a=>e==null?void 0:e.onUpload(a.target.files[0])},null,40,q),o(_,{ref_for:!0,ref:"cover",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,icon:e.icon,class:"addSong cover",type:"text",onChange:a=>e==null?void 0:e.onChange(e.value)},null,8,["modelValue","onUpdate:modelValue","icon","onChange"]),e.imagePreview?(l(),s("div",B,[o(p,{src:u(k)(e.value),class:"cover",onClick:a=>u(i)(e.value)},null,8,["src","onClick"])])):U("",!0)],64)):e.type=="dropdown"?(l(),v(F,{key:1,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,icon:e.icon,options:e.options},null,8,["modelValue","onUpdate:modelValue","icon","options"])):e.type=="text"?(l(),v(_,{key:2,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,icon:e.icon,placeholder:e.placeholder,required:e.required,type:e.type,onChange:a=>e.onChange?e==null?void 0:e.onChange(e.value):null},null,8,["modelValue","onUpdate:modelValue","icon","placeholder","required","type","onChange"])):b((l(),s("input",{key:3,"onUpdate:modelValue":a=>e.value=a,type:e.type,onChange:a=>e.onChange?e==null?void 0:e.onChange(e.value):null},null,40,I)),[[w,e.value]])])]))),128))]))}});const O=x(N,[["__scopeId","data-v-f7f90291"]]);export{O as F};