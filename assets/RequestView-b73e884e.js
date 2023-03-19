import{_ as S,r as C,s as O,o as a,c as n,d as e,v as b,x as k,m as u,g as w,t as c,F as D,k as R,l as V,w as x,n as U,e as E,p as z,f as H,h as L,z as G,i as J,j as F,A as M,B as j,C as A}from"./index-514171d5.js";import{c as K}from"./card-f60b190e.js";import{_ as Q}from"./avatar-1ebbcf02.js";import{m as B}from"./modal-71b10e7d.js";import{d as W}from"./dayjs.min-3643be03.js";const X={class:"filter-option"},Z={class:"type"},ee={key:0,class:"content-filter"},te={key:1,class:"content-filter"},se={__name:"request-filter",props:["section","filter"],emits:["switchSection","switchFilter"],setup(f,{emit:_}){const v=f,h=C(v.section),m=O(v,"filter"),s=q=>{h.value=q,_("switchSection",q)},g=q=>{_("switchFilter",q)};return(q,i)=>(a(),n("div",X,[e("div",Z,[e("div",{class:b(["menu-option",{active:h.value=="request"}]),onClick:i[0]||(i[0]=o=>s("request"))}," My Request ",2),e("div",{class:b(["menu-option",{active:h.value=="approve"}]),onClick:i[1]||(i[1]=o=>s("approve"))}," My Approval ",2)]),h.value=="request"?(a(),n("div",ee,[e("div",{class:b(["filter-menu",{active:k(m)=="all"}]),onClick:i[2]||(i[2]=o=>g("all"))}," All ",2),e("div",{class:b(["filter-menu",{active:k(m)=="approved"}]),onClick:i[3]||(i[3]=o=>g("approved"))}," Approved ",2),e("div",{class:b(["filter-menu",{active:k(m)=="waiting"}]),onClick:i[4]||(i[4]=o=>g("waiting"))}," Waiting ",2),e("div",{class:b(["filter-menu",{active:k(m)=="declined"}]),onClick:i[5]||(i[5]=o=>g("declined"))}," Declined ",2)])):u("",!0),h.value=="approve"?(a(),n("div",te,[e("div",{class:b(["filter-menu",{active:k(m)=="pending"}]),onClick:i[6]||(i[6]=o=>g("pending"))}," Pending ",2),e("div",{class:b(["filter-menu",{active:k(m)=="approved"}]),onClick:i[7]||(i[7]=o=>g("approved"))}," Approved ",2),e("div",{class:b(["filter-menu",{active:k(m)=="declined"}]),onClick:i[8]||(i[8]=o=>g("declined"))}," Declined ",2)])):u("",!0)]))}},oe=S(se,[["__scopeId","data-v-45feeb3d"]]);const ae={class:"date-categories"},ne={class:"date-month"},ie={class:"left-content"},le={class:"request"},re={class:"date"},de={class:"right-content"},ce={__name:"request-categories",props:["categories"],emits:["modalOpened"],setup(f,{emit:_}){const v=f,h=w({width:"90%",height:"fit-content",minHeight:"80px",display:"flex",margin:"5px",alignItems:"center",justifyContent:"center",flexDirection:"row",padding:"5px 20px"}),m=w({alignItems:"center",justifyContent:"space-between",width:"100%",fontWeight:"500"}),s=O(v,"categories"),g=q=>{_("modalOpened",q)};return(q,i)=>(a(),n("div",ae,[e("div",ne,c(k(s).month_year),1),(a(!0),n(D,null,R(k(s).requests,o=>(a(),V(K,{style:U(h),content_style:m,key:o.index,"data-bs-toggle":"modal","data-bs-target":"#request-modal",onClick:$=>g(o.id)},{content:x(()=>[e("div",ie,[e("div",le,c(o.request),1),e("div",re,c(o.date),1),e("div",{class:b(["type",o.type])},c(o.type),3)]),e("div",de,[e("div",{class:b(["status",o.status])},c(o.status),3)])]),_:2},1032,["style","content_style","onClick"]))),128))]))}},ue=S(ce,[["__scopeId","data-v-43ef2d90"]]);const _e=f=>(z("data-v-ae7344dd"),f=f(),H(),f),pe={class:"date-categories"},ve={class:"date-month"},me=_e(()=>e("div",{class:"avatar"},[e("img",{src:Q,alt:"profile"})],-1)),ye={class:"name"},fe={class:"content"},he={class:"date"},ge={class:"request"},qe={__name:"approve-categories",props:["categories"],emits:["modalOpened"],setup(f,{emit:_}){const v=f,h=w({width:"90%",height:"fit-content",minHeight:"80px",display:"flex",margin:"10px",alignItems:"center",justifyContent:"space-between",flexDirection:"row",padding:"5px 20px"}),m=w({alignItems:"center",justifyContent:"end",width:"50%",fontWeight:"500"}),s=O(v,"categories"),g=q=>{_("modalOpened",q)};return(q,i)=>(a(),n("div",pe,[e("div",ve,c(k(s).month_year),1),(a(!0),n(D,null,R(k(s).requests,o=>(a(),V(K,{style:U(h),content_style:m,key:o.index,"data-bs-toggle":"modal","data-bs-target":"#request-modal",onClick:$=>g(o.id)},{media:x(()=>[me,e("div",ye,[E(c(o.employment)+" ",1),e("span",null,c(o.employment_type),1)])]),content:x(()=>[e("div",fe,[e("div",he,c(o.date),1),e("div",{class:b(["type",o.type])},c(o.type),3),e("div",ge,c(o.request),1)])]),_:2},1032,["style","content_style","onClick"]))),128))]))}},be=S(qe,[["__scopeId","data-v-ae7344dd"]]);const l=f=>(z("data-v-d869990c"),f=f(),H(),f),ke={id:"header"},we=l(()=>e("div",{class:"header-text"},"Request",-1)),Ce={class:"add-btn"},xe=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#8085ee",class:"bi bi-plus-circle-fill",viewBox:"0 0 16 16"},[e("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"})],-1)),Me=[xe],$e={class:"content"},Fe={key:0,class:"menu"},De={key:1,class:"menu"},Re={class:"header"},Ve={class:"date"},Se={class:"request-status"},Ie={class:"content-body"},Ae={key:0,class:"option"},Oe=l(()=>e("div",{class:"title"},"Employment",-1)),Pe={class:"value"},Te={key:1,class:"option"},Ye=l(()=>e("div",{class:"title"},"Time off date",-1)),je={class:"value"},Be={class:"option"},We=l(()=>e("div",{class:"title"},"Type",-1)),Ue={class:"value"},ze={class:"option"},He=l(()=>e("div",{class:"title"},"Request type",-1)),Ke={class:"value"},Ne={key:2,class:"option"},Ee=l(()=>e("div",{class:"title"},"Taken",-1)),Le=l(()=>e("div",{class:"value"},"1 day",-1)),Ge=[Ee,Le],Je={key:3,class:"option"},Qe=l(()=>e("div",{class:"title"},"Reason",-1)),Xe=l(()=>e("div",{class:"value"},"Pengerupukan",-1)),Ze=[Qe,Xe],et={key:4,class:"option"},tt=l(()=>e("div",{class:"title"},"Description",-1)),st={class:"value"},ot={key:5,class:"decision-btn"},at=l(()=>e("button",{class:"approve"},"Approve",-1)),nt=l(()=>e("button",{class:"decline"},"Decline",-1)),it=[at,nt],lt=l(()=>e("div",{class:"title"},"Request",-1)),rt={class:"form-group"},dt=l(()=>e("label",{class:"form-label"},"Request type",-1)),ct=l(()=>e("option",{value:"1"},"Full day request",-1)),ut=l(()=>e("option",{value:"2"},"Half day request",-1)),_t=l(()=>e("option",{value:"3"},"Reimbusement",-1)),pt=[ct,ut,_t],vt={class:"form-group"},mt=l(()=>e("label",{class:"form-label"},"Type",-1)),yt={key:0,value:"1"},ft={key:1,value:"2"},ht={key:2,value:"3"},gt={key:3,value:"3"},qt={key:4,value:"3"},bt={key:0,class:"form-group"},kt=l(()=>e("label",{class:"form-label"},"Time off date",-1)),wt={key:1,class:"form-group"},Ct=l(()=>e("label",{class:"form-label"},"Duration",-1)),xt={key:2,class:"form-group"},Mt=l(()=>e("label",{class:"form-label"},"Value",-1)),$t={class:"form-group"},Ft={class:"form-label"},Dt=l(()=>e("div",{class:"request-btn"},[e("button",null,"Request")],-1)),Rt={__name:"RequestView",setup(f){const _=C("request"),v=C("all"),h=C(!1),m=C(null),s=w({id:"",request:"",date:"",type:"",status:""}),g=y=>{_.value=y,y=="approve"&&(v.value="pending"),y=="request"&&(v.value="all")},q=y=>{v.value=y};let i=w([{month_year:"March 2023",requests:[{id:1,request:"Half Day Request",date:"Mon, 19 Mar",type:"leave",status:"waiting",start_time_off:"21 Mar 2023",taken:"1 day",reason:"Pengerupukan"}]},{month_year:"February 2023",requests:[{id:2,request:"Full Day Request",date:"Wed, 17 Feb",type:"sick",status:"approved",start_time_off:"22 Mar 2023",taken:"1 day",reason:"Pengerupukan"},{id:3,request:"reimbusement",date:"Wed, 17 Feb",type:"trasnport claim",status:"approved",value:"20.000",slip:"-",description:"Meeting ke jimmbaran"},{id:4,request:"Full Day Request",date:"Fri, 04 Feb",type:"leave",status:"declined",start_time_off:"21 Mar 2023",taken:"1 day",reason:"Pengerupukan"}]}]),o=w([{month_year:"March 2023",requests:[{id:1,request:"Half Day Request",date:"Mon, 19 Mar",type:"leave",employment:"Komang Arya",employment_type:"Office",status:"pending",start_time_off:"21 Mar 2023",taken:"1 day",reason:"Pengerupukan"}]},{month_year:"February 2023",requests:[{id:2,request:"Full Day Request",date:"Wed, 17 Feb",type:"sick",employment:"Komang Arya",employment_type:"Office",status:"approved",start_time_off:"21 Mar 2023",taken:"1 day",reason:"Pengerupukan"},{id:3,request:"Reimbusement",date:"Wed, 17 Feb",type:"trasnport claim",employment:"Komang Arya",employment_type:"Office",status:"approved",start_time_off:"21 Mar 2023",taken:"1 day",reason:"Pengerupukan"},{id:4,request:"Full Day Request",date:"Fri, 04 Feb",type:"leave",employment:"Komang Arya",employment_type:"Office",status:"declined",start_time_off:"21 Mar 2023",taken:"1 day",reason:"Pengerupukan"}]}]),$=C(i),P=C(o);const d=w({request_type:1,type:1,time_off_date:W().format("YYYY-MM-DD"),duration:1,value:0,reason:""}),N=y=>W(y).format("YYYY-MM-DD"),T=()=>{h.value=!1},Y=y=>{let t={};_.value=="request"&&(t=i.flatMap(p=>p.requests).find(p=>p.id==y)),_.value=="approve"&&(t=o.flatMap(p=>p.requests).find(p=>p.id==y),s.status=t.status,s.employment=t.employment),s.id=t.id,s.request=t.request,s.date=t.date,s.type=t.type,s.status=t.status,t.request=="reimbusement"?(s.value=t.value,s.slip=t.slip,s.description=t.description):(s.start_time_off=t.start_time_off,s.taken=t.taken,s.reason=t.reason),h.value=!0};return L(()=>{if(h.value)return m.value.click(),!1}),G(()=>v.value,()=>{if(_.value=="request"){const y=i.map(t=>{const p={...t},r=[...p.requests].filter(I=>v.value=="all"?!0:I.status==v.value);return p.requests=r,p}).filter(t=>t.requests.length);$.value=y}if(_.value=="approve"){const y=o.map(t=>{const p={...t},r=[...p.requests].filter(I=>I.status==v.value);return p.requests=r,p}).filter(t=>t.requests.length);P.value=y}}),(y,t)=>{const p=J("VueDatePicker");return a(),n("main",null,[e("div",ke,[we,e("div",Ce,[e("button",{"data-bs-toggle":"modal","data-bs-target":"#form-modal",onClick:t[0]||(t[0]=r=>h.value=!0)},Me)])]),F(oe,{section:_.value,filter:v.value,onSwitchSection:g,onSwitchFilter:q},null,8,["section","filter"]),e("div",$e,[_.value=="request"?(a(),n("div",Fe,[(a(!0),n(D,null,R(k($),r=>(a(),V(ue,{categories:r,key:r.index,onModalOpened:Y},null,8,["categories"]))),128))])):u("",!0),_.value=="approve"?(a(),n("div",De,[(a(!0),n(D,null,R(k(P),r=>(a(),V(be,{categories:r,key:r.index,onModalOpened:Y},null,8,["categories"]))),128))])):u("",!0)]),F(B,{id:"request-modal",onModalClosed:T},{header:x(()=>[e("div",Re,[e("div",Ve,c(s.date),1),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",ref_key:"close_button",ref:m},null,512)])]),body:x(()=>[e("div",Se,[e("div",{class:b(["status",[s.status]])},c(s.status),3)]),e("div",Ie,[_.value=="approve"?(a(),n("div",Ae,[Oe,e("div",Pe,c(s.employment),1)])):u("",!0),s.request!="reimbusement"?(a(),n("div",Te,[Ye,e("div",je,c(s.start_time_off),1)])):u("",!0),e("div",Be,[We,e("div",Ue,c(s.request),1)]),e("div",ze,[He,e("div",Ke,c(s.type),1)]),s.request!="reimbusement"?(a(),n("div",Ne,Ge)):u("",!0),s.request!="reimbusement"?(a(),n("div",Je,Ze)):u("",!0),s.request=="reimbusement"?(a(),n("div",et,[tt,e("div",st,c(s.description),1)])):u("",!0),_.value=="approve"&&s.status=="pending"?(a(),n("div",ot,it)):u("",!0)])]),_:1}),F(B,{id:"form-modal",onModalClosed:T},{header:x(()=>[lt,e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",ref_key:"close_button",ref:m},null,512)]),body:x(()=>[e("div",rt,[dt,M(e("select",{class:"form-control",id:"request-type","onUpdate:modelValue":t[1]||(t[1]=r=>d.request_type=r)},pt,512),[[j,d.request_type]])]),e("div",vt,[mt,M(e("select",{class:"form-control",id:"type","onUpdate:modelValue":t[2]||(t[2]=r=>d.type=r)},[d.request_type!=3?(a(),n("option",yt,"Leave")):u("",!0),d.request_type!=3?(a(),n("option",ft,"Sick")):u("",!0),d.request_type==3?(a(),n("option",ht,"Transport Claim")):u("",!0),d.request_type==3?(a(),n("option",gt,"Entertain Claim")):u("",!0),d.request_type==3?(a(),n("option",qt,"Medical Claim")):u("",!0)],512),[[j,d.type]])]),d.request_type!=3?(a(),n("div",bt,[kt,F(p,{modelValue:d.time_off_date,"onUpdate:modelValue":t[3]||(t[3]=r=>d.time_off_date=r),format:N,"text-input":""},null,8,["modelValue"])])):u("",!0),d.request_type!=3?(a(),n("div",wt,[Ct,M(e("input",{type:"number",id:"number",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=r=>d.duration=r)},null,512),[[A,d.duration]])])):u("",!0),d.request_type==3?(a(),n("div",xt,[Mt,M(e("input",{type:"number",id:"number",class:"form-control","onUpdate:modelValue":t[5]||(t[5]=r=>d.value=r)},null,512),[[A,d.value]])])):u("",!0),e("div",$t,[e("label",Ft,c(d.request_type==3?"Description":"Reason"),1),M(e("textarea",{id:"reason",rows:"10",class:"form-control","onUpdate:modelValue":t[6]||(t[6]=r=>d.reason=r)},null,512),[[A,d.reason]])]),Dt]),_:1})])}}},Pt=S(Rt,[["__scopeId","data-v-d869990c"]]);export{Pt as default};
