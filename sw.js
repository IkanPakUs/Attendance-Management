if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const o=e=>s(e,n),b={module:{uri:n},exports:r,require:o};i[n]=Promise.all(a.map((e=>b[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-cd3ac1e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AccountView-20f94bf8.js",revision:"879552bc57e57e975a86d78fb1931303"},{url:"assets/AccountView-7ee94a32.css",revision:"0301a4fa58494e29fb56d105e66636a9"},{url:"assets/avatar-1ebbcf02.js",revision:"6880976dedebad7a5feb0af20b2791bc"},{url:"assets/CameraView-3fc643f1.js",revision:"264aada7c1935245894e4c6441ccb212"},{url:"assets/CameraView-687a8072.css",revision:"546a2c7a2ab1bffacdbb21461b3b63a0"},{url:"assets/card-b8f0da0e.css",revision:"2fccef31e5a6ccd69456eb5d1919b079"},{url:"assets/card-d02976d4.js",revision:"37afeebc656efb4d077e130126e5e2c4"},{url:"assets/HistoryView-23ee9aeb.js",revision:"75878fe75baea1f69f422d031d95fbe1"},{url:"assets/HistoryView-3582e535.css",revision:"8ba5b1efcbf7e37bde14e17922888d11"},{url:"assets/HomeView-7ef4c731.css",revision:"96f270761bed5aa621f29d5ad7cf809d"},{url:"assets/HomeView-b5b7dc76.js",revision:"e64f763d3d57263e93055b04ae03375c"},{url:"assets/index-1805e7b6.css",revision:"58dcc09a882bf7568065a17bfd669b3c"},{url:"assets/index-ff802c37.js",revision:"9546d3ea0aa836de4257ee514a541f6e"},{url:"assets/RequestView-0d9985eb.js",revision:"ec30abcabc521586e8faf6b5ba8cb06c"},{url:"assets/RequestView-7496fa11.css",revision:"bab30c82656cb94631d48bf85f2b7ad5"},{url:"img/avatar.png",revision:"5803c31c7781dfe6523aa9a9f150aa6b"},{url:"img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"img/icons/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"index.html",revision:"3f6ae9540f774579db9eae9d8832fa9b"},{url:"myattendancefix.png",revision:"355036f16ab2e787c5f36545d3e6e6b4"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map