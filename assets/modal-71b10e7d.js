import{_,r as i,b as r,o as c,c as m,d,D as s}from"./index-514171d5.js";const u=["id","aria-labelledby"],p={class:"modal-dialog"},v={class:"modal-content"},b={class:"modal-header"},f={class:"modal-body"},h={__name:"modal",props:["id","ref_modal"],emits:["modalClosed"],setup(l,{emit:t}){const o=l,a=i(null);return r(()=>{var e;(e=a.value)==null||e.addEventListener("hidden.bs.modal",n=>{t("modalClosed")})}),(e,n)=>(c(),m("div",{class:"modal fade",id:o.id,tabindex:"-1","aria-labelledby":`${o.id}-label`,"aria-hidden":"true",ref_key:"my_modal",ref:a},[d("div",p,[d("div",v,[d("div",b,[s(e.$slots,"header",{},void 0,!0)]),d("div",f,[s(e.$slots,"body",{},void 0,!0)])])])],8,u))}},k=_(h,[["__scopeId","data-v-d00c4471"]]);export{k as m};