import{c as I}from"./card-e5b523aa.js";import{m as D,a as _,b as k,c as m}from"./modal-9ec9f0d1.js";import{_ as V,h as c,r as g,i as A,o as n,c as b,e as a,F as v,l as B,k as Y,w as l,m as i,n as d,t as o,q as N,p as q,g as z}from"./index-e83cf56c.js";const F=r=>(q("data-v-c643a79c"),r=r(),z(),r),L=F(()=>a("div",{id:"header"},[a("div",{class:"header-text"},"Activity")],-1)),P={class:"content"},j={class:"activity"},E={class:"activity-content"},H={class:"date"},M={class:"header"},R={class:"left-content"},$={class:"logo"},G={class:"modal-title",id:"activity-modal-label`"},J={class:"right-content"},K={class:"header"},O={class:"title"},Q={class:"date"},T={class:"body"},U={__name:"ActivityView",setup(r){const f=c({width:"90%",height:"fit-content",minHeight:"80px",display:"flex",margin:"10px",alignItems:"center",flexDirection:"row"}),w=c({width:"80%",height:"100%",justifyContent:"start",boxSizing:"content-box",padding:"10px 0"}),x=c({width:"20%",height:"100%",alignItems:"center"}),y=c([{id:1,type:"announcement",date:"2023-03-13",header:"Pengumuman Cuti Pengerupukan",body:"Diinfokan kepada seluruh karyawan, kita hanya mendapatkan libur pada hari raya nyepi dan ngembak geni. Sedangkan yang ingin libur pada pengerupukan dapat mengambil cuti tahunan."},{id:2,type:"alert",date:"2023-03-12",header:"Your request time off has been approved",body:"Diinfokan kepada seluruh karyawan, kita hanya mendapatkan libur pada hari raya nyepi dan ngembak geni. Sedangkan yang ingin libur pada pengerupukan dapat mengambil cuti tahunan."},{id:3,type:"checked",date:"2023-03-12",header:"You're clock in at 10:06",body:"Diinfokan kepada seluruh karyawan, kita hanya mendapatkan libur pada hari raya nyepi dan ngembak geni. Sedangkan yang ingin libur pada pengerupukan dapat mengambil cuti tahunan."},{id:4,type:"checked",date:"2023-03-11",header:"You're clock out at 17:44",body:"Diinfokan kepada seluruh karyawan, kita hanya mendapatkan libur pada hari raya nyepi dan ngembak geni. Sedangkan yang ingin libur pada pengerupukan dapat mengambil cuti tahunan."},{id:5,type:"checked",date:"2023-03-11",header:"You're clock in at 09:56",body:"Diinfokan kepada seluruh karyawan, kita hanya mendapatkan libur pada hari raya nyepi dan ngembak geni. Sedangkan yang ingin libur pada pengerupukan dapat mengambil cuti tahunan."}]),e=c({id:"",type:"",date:"",header:"",body:""}),p=g(!1),h=g(null),C=u=>{const s=y.find(t=>t.id==u);e.id=u,e.type=s.type,e.date=s.date,e.header=s.header,e.body=s.body,p.value=!0},S=()=>{p.value=!1};return A(()=>{if(p.value)return h.value.click(),!1}),(u,s)=>(n(),b(v,null,[a("main",null,[L,a("div",P,[a("div",j,[(n(!0),b(v,null,B(y,t=>(n(),i(I,{style:N(f),content_style:w,media_style:x,key:t.id,"data-bs-toggle":"modal","data-bs-target":"#activity-modal",onClick:W=>C(t.id)},{media:l(()=>[t.type=="announcement"?(n(),i(_,{key:0})):d("",!0),t.type=="alert"?(n(),i(k,{key:1})):d("",!0),t.type=="checked"?(n(),i(m,{key:2})):d("",!0)]),content:l(()=>[a("div",E,[a("div",H,o(t.date),1),a("div",M,o(t.header),1)])]),_:2},1032,["style","content_style","media_style","onClick"]))),128))])])]),Y(D,{id:"activity-modal",onModalClosed:S},{header:l(()=>[a("div",R,[a("div",$,[e.type=="announcement"?(n(),i(_,{key:0})):d("",!0),e.type=="alert"?(n(),i(k,{key:1})):d("",!0),e.type=="checked"?(n(),i(m,{key:2})):d("",!0)]),a("div",G,o(e.type),1)]),a("div",J,[a("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",ref_key:"close_button",ref:h},null,512)])]),body:l(()=>[a("div",K,[a("div",O,o(e.header),1),a("div",Q,o(e.date),1)]),a("div",T,o(e.body),1)]),_:1})],64))}},ea=V(U,[["__scopeId","data-v-c643a79c"]]);export{ea as default};
