import{m as B,n as i,bq as f,y as C,o as n,c as l,a as d,t as r,d as _,u as V,ay as D,bz as w,f as S,F as q,i as L,T as R,ax as T,_ as z}from"./index-01636ea9.js";const E={class:"flex flex-row gap-2"},F={key:0,class:"material-symbols-rounded ms-wght-200"},N={class:"material-symbols-rounded"},$=["onClick"],A={class:"material-symbols-rounded"},H={key:0,class:"material-symbols-rounded"},I=B({__name:"Dropdown",props:{modelValue:{type:String,required:!0},options:{type:Array,required:!0},icon:{type:String,required:!1}},emits:["update:modelValue"],setup(c,{emit:h}){const p=c,u=i(p.modelValue),o=i(!1);f(p,t=>{u.value=t.modelValue},{deep:!0});const g=t=>{u.value=t,h("update:modelValue",t),o.value=!1},x=C(()=>{const t=p.options.find(a=>a.value==u.value);return t?t.label:""}),s=i(null),v=i(null);return f(o,t=>{T(()=>{if(t){const a=s.value.getBoundingClientRect(),e=v.value.getBoundingClientRect(),m=e.top,y=e.bottom,k=window.innerHeight-y,b=e.width;s.value.style.width=b+"px",s.value.style.left=e.left+"px",k>a.height?(s.value.style.top=y+"px",s.value.style.bottom="auto"):(s.value.style.top="auto",s.value.style.bottom=m-a.height+"px")}})}),window.addEventListener("click",()=>{o.value=!1}),(t,a)=>(n(),l("div",{ref_key:"container",ref:v,class:"dropdown"},[d("div",{class:D([{expanded:o.value},"dropdown__selected"]),onClick:a[0]||(a[0]=w(e=>o.value=!o.value,["stop"]))},[d("div",E,[c.icon?(n(),l("span",F,r(c.icon),1)):_("",!0),d("span",null,r(V(x)),1)]),d("i",N,r(o.value?"expand_less":"expand_more"),1)],2),(n(),S(R,{to:"#dropdown-target"},[o.value?(n(),l("div",{key:0,ref_key:"trueDropdown",ref:s,class:"dropdown__options"},[(n(!0),l(q,null,L(c.options,e=>(n(),l("div",{key:e.value,class:"dropdown__option",onClick:w(m=>g(e.value),["stop"])},[d("span",A,r(e.icon),1),d("span",null,r(e.label),1),u.value==e.value?(n(),l("span",H,"check")):_("",!0)],8,$))),128))],512)):_("",!0)]))],512))}});const j=z(I,[["__scopeId","data-v-186027d9"]]);export{j as D};