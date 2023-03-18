import{_ as ut}from"./avatar-1ebbcf02.js";import{_ as A,o as m,c as I,a as ht,b as lt,u as _t,r as at,d as ft,e as u,t as P,f as vt,p as j,g as B,h as U,F as pt,i as mt,j as J,w as it,k as R,n as $t,l as Q}from"./index-c461322c.js";import{c as yt}from"./card-f43a8bc3.js";const gt={},wt=ht('<div class="profile" data-v-7fe7630c><div class="summary" data-v-7fe7630c><div class="company" data-v-7fe7630c><h6 data-v-7fe7630c>PT. Aman Sejahtera</h6></div><div class="user" data-v-7fe7630c><div class="name" data-v-7fe7630c><h5 data-v-7fe7630c>Komang Gede Ksatria Arya Wirawan</h5></div><div class="position" data-v-7fe7630c><span data-v-7fe7630c>Web Developer</span></div></div></div><div class="avatar" data-v-7fe7630c><div class="avatar-wrap" data-v-7fe7630c><img src="'+ut+'" alt="profile" data-v-7fe7630c></div></div></div>',1),Mt=[wt];function xt(o,g){return m(),I("header",null,Mt)}const St=A(gt,[["render",xt],["__scopeId","data-v-7fe7630c"]]);var tt={},Dt={get exports(){return tt},set exports(o){tt=o}};(function(o,g){(function(M,y){o.exports=y()})(lt,function(){var M=1e3,y=6e4,O=36e5,T="millisecond",x="second",p="minute",C="hour",S="day",N="week",$="month",et="quarter",D="year",Y="date",nt="Invalid Date",rt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ot=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ct={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},E=function(s,n,t){var a=String(s);return!a||a.length>=n?s:""+Array(n+1-a.length).join(t)+s},dt={s:E,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),a=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+E(a,2,"0")+":"+E(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var a=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(a,$),r=t-e<0,i=n.clone().add(a+(r?-1:1),$);return+(-(a+(t-e)/(r?e-i:i-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:$,y:D,w:N,d:S,D:Y,h:C,m:p,s:x,ms:T,Q:et}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},V="en",H={};H[V]=ct;var G=function(s){return s instanceof q},Z=function s(n,t,a){var e;if(!n)return V;if(typeof n=="string"){var r=n.toLowerCase();H[r]&&(e=r),t&&(H[r]=t,e=r);var i=n.split("-");if(!e&&i.length>1)return s(i[0])}else{var c=n.name;H[c]=n,e=c}return!a&&e&&(V=e),e||!a&&V},_=function(s,n){if(G(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new q(t)},d=dt;d.l=Z,d.i=G,d.w=function(s,n){return _(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var q=function(){function s(t){this.$L=Z(t.locale,null,!0),this.parse(t)}var n=s.prototype;return n.parse=function(t){this.$d=function(a){var e=a.date,r=a.utc;if(e===null)return new Date(NaN);if(d.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(rt);if(i){var c=i[2]-1||0,l=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,l)):new Date(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,l)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return d},n.isValid=function(){return this.$d.toString()!==nt},n.isSame=function(t,a){var e=_(t);return this.startOf(a)<=e&&e<=this.endOf(a)},n.isAfter=function(t,a){return _(t)<this.startOf(a)},n.isBefore=function(t,a){return this.endOf(a)<_(t)},n.$g=function(t,a,e){return d.u(t)?this[a]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,a){var e=this,r=!!d.u(a)||a,i=d.p(t),c=function(z,v){var k=d.w(e.$u?Date.UTC(e.$y,v,z):new Date(e.$y,v,z),e);return r?k:k.endOf(S)},l=function(z,v){return d.w(e.toDate()[z].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(v)),e)},h=this.$W,f=this.$M,b=this.$D,w="set"+(this.$u?"UTC":"");switch(i){case D:return r?c(1,0):c(31,11);case $:return r?c(1,f):c(0,f+1);case N:var L=this.$locale().weekStart||0,W=(h<L?h+7:h)-L;return c(r?b-W:b+(6-W),f);case S:case Y:return l(w+"Hours",0);case C:return l(w+"Minutes",1);case p:return l(w+"Seconds",2);case x:return l(w+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,a){var e,r=d.p(t),i="set"+(this.$u?"UTC":""),c=(e={},e[S]=i+"Date",e[Y]=i+"Date",e[$]=i+"Month",e[D]=i+"FullYear",e[C]=i+"Hours",e[p]=i+"Minutes",e[x]=i+"Seconds",e[T]=i+"Milliseconds",e)[r],l=r===S?this.$D+(a-this.$W):a;if(r===$||r===D){var h=this.clone().set(Y,1);h.$d[c](l),h.init(),this.$d=h.set(Y,Math.min(this.$D,h.daysInMonth())).$d}else c&&this.$d[c](l);return this.init(),this},n.set=function(t,a){return this.clone().$set(t,a)},n.get=function(t){return this[d.p(t)]()},n.add=function(t,a){var e,r=this;t=Number(t);var i=d.p(a),c=function(f){var b=_(r);return d.w(b.date(b.date()+Math.round(f*t)),r)};if(i===$)return this.set($,this.$M+t);if(i===D)return this.set(D,this.$y+t);if(i===S)return c(1);if(i===N)return c(7);var l=(e={},e[p]=y,e[C]=O,e[x]=M,e)[i]||1,h=this.$d.getTime()+t*l;return d.w(h,this)},n.subtract=function(t,a){return this.add(-1*t,a)},n.format=function(t){var a=this,e=this.$locale();if(!this.isValid())return e.invalidDate||nt;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=d.z(this),c=this.$H,l=this.$m,h=this.$M,f=e.weekdays,b=e.months,w=function(v,k,K,F){return v&&(v[k]||v(a,r))||K[k].slice(0,F)},L=function(v){return d.s(c%12||12,v,"0")},W=e.meridiem||function(v,k,K){var F=v<12?"AM":"PM";return K?F.toLowerCase():F},z={YY:String(this.$y).slice(-2),YYYY:this.$y,M:h+1,MM:d.s(h+1,2,"0"),MMM:w(e.monthsShort,h,b,3),MMMM:w(b,h),D:this.$D,DD:d.s(this.$D,2,"0"),d:String(this.$W),dd:w(e.weekdaysMin,this.$W,f,2),ddd:w(e.weekdaysShort,this.$W,f,3),dddd:f[this.$W],H:String(c),HH:d.s(c,2,"0"),h:L(1),hh:L(2),a:W(c,l,!0),A:W(c,l,!1),m:String(l),mm:d.s(l,2,"0"),s:String(this.$s),ss:d.s(this.$s,2,"0"),SSS:d.s(this.$ms,3,"0"),Z:i};return r.replace(ot,function(v,k){return k||z[v]||i.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,a,e){var r,i=d.p(a),c=_(t),l=(c.utcOffset()-this.utcOffset())*y,h=this-c,f=d.m(this,c);return f=(r={},r[D]=f/12,r[$]=f,r[et]=f/3,r[N]=(h-l)/6048e5,r[S]=(h-l)/864e5,r[C]=h/O,r[p]=h/y,r[x]=h/M,r)[i]||h,e?f:d.a(f)},n.daysInMonth=function(){return this.endOf($).$D},n.$locale=function(){return H[this.$L]},n.locale=function(t,a){if(!t)return this.$L;var e=this.clone(),r=Z(t,a,!0);return r&&(e.$L=r),e},n.clone=function(){return d.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),st=q.prototype;return _.prototype=st,[["$ms",T],["$s",x],["$m",p],["$H",C],["$W",S],["$M",$],["$y",D],["$D",Y]].forEach(function(s){st[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),_.extend=function(s,n){return s.$i||(s(n,q,_),s.$i=!0),_},_.locale=Z,_.isDayjs=G,_.unix=function(s){return _(1e3*s)},_.en=H[V],_.Ls=H,_.p={},_})})(Dt);const X=tt;const bt=o=>(j("data-v-16bf5185"),o=o(),B(),o),kt={class:"quick-menu"},It={class:"card-wrapper"},Ht={class:"menu"},At={class:"information"},Ot={class:"date"},Ct={class:"time"},Yt=bt(()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-box-arrow-in-right",viewBox:"0 0 16 16"},[u("path",{"fill-rule":"evenodd",d:"M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"}),u("path",{"fill-rule":"evenodd",d:"M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})],-1)),zt={__name:"quick-menu",setup(o){const g=_t(),M=at(X().format("DD MMM YYYY")),y=at(X().format("HH:mm"));ft(()=>{setInterval(()=>{y.value=X().format("HH:mm")},1e3)});const O=()=>{g.push("/camera")};return(T,x)=>(m(),I("div",kt,[u("div",It,[u("div",Ht,[u("div",At,[u("div",Ot,P(M.value),1),u("div",Ct,P(y.value),1)]),u("div",{class:"clock-in-btn",onClick:O},[Yt,vt(" Clock In ")])])])]))}},Tt=A(zt,[["__scopeId","data-v-16bf5185"]]);const Vt={},Lt=o=>(j("data-v-4d9ed66c"),o=o(),B(),o),Wt={class:"circle"},jt=Lt(()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-megaphone-fill",viewBox:"0 0 16 16"},[u("path",{d:"M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"})],-1)),Bt=[jt];function Nt(o,g){return m(),I("div",Wt,Bt)}const Zt=A(Vt,[["render",Nt],["__scopeId","data-v-4d9ed66c"]]);const qt={},Ft=o=>(j("data-v-aea93602"),o=o(),B(),o),Ut={class:"circle"},Jt=Ft(()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-bell-fill",viewBox:"0 0 16 16"},[u("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"})],-1)),Pt=[Jt];function Et(o,g){return m(),I("div",Ut,Pt)}const Gt=A(qt,[["render",Et],["__scopeId","data-v-aea93602"]]);const Kt={},Rt=o=>(j("data-v-f22cea51"),o=o(),B(),o),Qt={class:"circle"},Xt=Rt(()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-clipboard-check-fill",viewBox:"0 0 16 16"},[u("path",{d:"M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"}),u("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"})],-1)),te=[Xt];function ee(o,g){return m(),I("div",Qt,te)}const ne=A(Kt,[["render",ee],["__scopeId","data-v-f22cea51"]]);const se=o=>(j("data-v-607ee348"),o=o(),B(),o),ae={class:"content"},ie={class:"content-wrapper"},re=se(()=>u("div",{class:"activity"},[u("h4",null,"Recent Activity"),u("span",null,[u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[u("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])])],-1)),oe={class:"menu"},ce={class:"activity-content"},de={class:"date"},ue={class:"header"},he={__name:"recent-activity",setup(o){const g=U({width:"90%",height:"fit-content",minHeight:"80px",display:"flex",margin:"10px",alignItems:"center",flexDirection:"row"}),M=U({width:"80%",height:"100%",justifyContent:"start",boxSizing:"content-box",padding:"10px 0"}),y=U({width:"20%",height:"100%",alignItems:"center"}),O=U([{id:1,type:"announcement",date:"2023-03-13",header:"Pengumuman Cuti Pengerupukan"},{id:2,type:"alert",date:"2023-03-12",header:"Your request time off has been approved"},{id:3,type:"checked",date:"2023-03-12",header:"You're clock in at 10:06"},{id:4,type:"checked",date:"2023-03-11",header:"You're clock out at 17:44"},{id:5,type:"checked",date:"2023-03-11",header:"You're clock in at 09:56"}]);return(T,x)=>(m(),I("div",ae,[u("div",ie,[re,u("div",oe,[(m(!0),I(pt,null,mt(O,p=>(m(),J(yt,{style:$t(g),content_style:M,media_style:y,key:p.id},{media:it(()=>[p.type=="announcement"?(m(),J(Zt,{key:0})):R("",!0),p.type=="alert"?(m(),J(Gt,{key:1})):R("",!0),p.type=="checked"?(m(),J(ne,{key:2})):R("",!0)]),content:it(()=>[u("div",ce,[u("div",de,P(p.date),1),u("div",ue,P(p.header),1)])]),_:2},1032,["style","content_style","media_style"]))),128))])])]))}},le=A(he,[["__scopeId","data-v-607ee348"]]);const _e={__name:"HomeView",setup(o){return(g,M)=>(m(),I("main",null,[Q(St),Q(Tt),Q(le)]))}},me=A(_e,[["__scopeId","data-v-87eade16"]]);export{me as default};
