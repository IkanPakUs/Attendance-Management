import{_ as g,u as b,r,i as C,o as l,c as _,d as e,l as y,w as x,m as d,p as V,f as I}from"./index-514171d5.js";const S=t=>(V("data-v-9f61075f"),t=t(),I(),t),B=S(()=>e("div",{class:"header"},[e("div",{class:"header-text"},"Attendance")],-1)),R={class:"camera-wrapper"},L={key:1,class:"image-capture"},N=["src"],U={__name:"CameraView",setup(t){const p=b(),c=r(),a=r(!1),s=r(""),h={video:{width:1920,height:1080,facingMode:"user"}},m=async()=>{var u;const o=c.value.stream.getVideoTracks()[0].getSettings(),i=o.width,n=o.height,k=await((u=c.value)==null?void 0:u.snapshot({width:i,height:n})),w=URL.createObjectURL(k);a.value=!0,s.value=w},f=()=>{a.value=!1,s.value=""},v=()=>{p.push("/history")};return(o,i)=>{const n=C("camera");return l(),_("main",null,[B,e("div",R,[a.value?d("",!0):(l(),y(n,{key:0,playsinline:!1,constraints:h,ref_key:"stream",ref:c,autoplay:""},{default:x(()=>[e("div",{class:"btn-wrapper"},[e("button",{class:"full-btn",onClick:m})])]),_:1},512)),a.value&&s.value!==""?(l(),_("div",L,[e("img",{src:s.value,alt:"captured"},null,8,N),e("div",{class:"btn-wrapper"},[e("button",{class:"half-btn retake",onClick:f},"Retake"),e("button",{class:"half-btn clock",onClick:v},"Clock in")])])):d("",!0)])])}}},A=g(U,[["__scopeId","data-v-9f61075f"]]);export{A as default};
