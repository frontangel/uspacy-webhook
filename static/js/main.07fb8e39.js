(()=>{"use strict";var e,t,r,n,a,o,i,l,u,c,f,s,d,h,p,m,b,v,g,y,P,j={8129:(e,t,r)=>{Promise.all([r.e(527),r.e(929),r.e(228),r.e(550),r.e(435),r.e(694)]).then(r.bind(r,4694))}},k={};function x(e){var t=k[e];if(void 0!==t)return t.exports;var r=k[e]={id:e,loaded:!1,exports:{}};return j[e](r,r.exports,x),r.loaded=!0,r.exports}x.m=j,x.c=k,x.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return x.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,x.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var a=Object.create(null);x.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,x.d(a,o),a},x.d=(e,t)=>{for(var r in t)x.o(t,r)&&!x.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},x.f={},x.e=e=>Promise.all(Object.keys(x.f).reduce(((t,r)=>(x.f[r](e,t),t)),[])),x.u=e=>"static/js/"+e+"."+{31:"0076c4df",118:"93cfec67",127:"54a75ae7",175:"72efccf4",228:"3e87f24b",235:"074cf88a",300:"bbbf4308",341:"4ff24181",389:"e3246a22",394:"7902c7c8",435:"5c816340",447:"8f2e19c3",474:"f42f71eb",479:"7b51c414",491:"ad66ea88",512:"5f1298c7",527:"edc53129",540:"c70a1707",550:"551e48b8",559:"8c7f9c11",561:"0e45b59d",602:"becf7501",635:"79847ecd",678:"4c28b9d4",694:"5c068af1",722:"d1f8ba05",733:"f6c34c9d",769:"708f4ffb",804:"f7c5cd83",833:"7b0a220c",848:"22d0ca88",860:"d12e69d5",929:"c2170117",961:"e4e023cd",976:"ab5588a7"}[e]+".chunk.js",x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),x.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="container:",x.l=(e,t,a,o)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+a){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,x.nc&&i.setAttribute("nonce",x.nc),i.setAttribute("data-webpack",n+a),i.src=e),r[e]=[t];var s=(t,n)=>{i.onerror=i.onload=null,clearTimeout(d);var a=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},x.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{x.S={};var e={},t={};x.I=(r,n)=>{n||(n=[]);var a=t[r];if(a||(a=t[r]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[r])return e[r];x.o(x.S,r)||(x.S[r]={});var o=x.S[r],i="container",l=(e,t,r,n)=>{var a=o[e]=o[e]||{},l=a[t];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[t]={get:r,from:i,eager:!!n})},u=[];return"default"===r&&(l("@emotion/react","11.11.4",(()=>Promise.all([x.e(300),x.e(527),x.e(341)]).then((()=>()=>x(5722))))),l("@emotion/styled","11.11.5",(()=>Promise.all([x.e(527),x.e(678),x.e(860)]).then((()=>()=>x(1479))))),l("@mui/material","5.15.18",(()=>Promise.all([x.e(300),x.e(175),x.e(527),x.e(929),x.e(678),x.e(118),x.e(848)]).then((()=>()=>x(2175))))),l("@reduxjs/toolkit","1.9.7",(()=>x.e(976).then((()=>()=>x(9976))))),l("@uspacy/sdk","0.0.54",(()=>x.e(491).then((()=>()=>x(491))))),l("@uspacy/store","0.0.66",(()=>Promise.all([x.e(394),x.e(527),x.e(550),x.e(474)]).then((()=>()=>x(8394))))),l("axios","1.7.2",(()=>x.e(447).then((()=>()=>x(4447))))),l("i18next-resources-to-backend","1.2.1",(()=>x.e(235).then((()=>()=>x(1235))))),l("i18next","23.11.5",(()=>x.e(635).then((()=>()=>x(2635))))),l("idb","8.0.0",(()=>x.e(602).then((()=>()=>x(602))))),l("react-dom","18.2.0",(()=>Promise.all([x.e(961),x.e(527)]).then((()=>()=>x(961))))),l("react-i18next","13.5.0",(()=>Promise.all([x.e(389),x.e(527)]).then((()=>()=>x(2389))))),l("react-redux","8.1.3",(()=>Promise.all([x.e(733),x.e(527),x.e(929)]).then((()=>()=>x(9733))))),l("react","18.2.0",(()=>x.e(540).then((()=>()=>x(6540)))))),e[r]=u.length?Promise.all(u).then((()=>e[r]=1)):1}}})(),(()=>{var e;x.g.importScripts&&(e=x.g.location+"");var t=x.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),x.p=e+"../../"})(),a=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},o=(e,t)=>{e=a(e),t=a(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var i=t[r],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;r++}},i=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return r}var o=[];for(a=1;a<e.length;a++){var l=e[a];o.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?o.pop()+" "+o.pop():i(l))}return u();function u(){return o.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,t)=>{if(0 in e){t=a(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var o=0,i=1,u=!0;;i++,o++){var c,f,s=i<e.length?(typeof e[i])[0]:"";if(o>=t.length||"o"==(f=(typeof(c=t[o]))[0]))return!u||("u"==s?i>r&&!n:""==s!=n);if("u"==f){if(!u||"u"!=s)return!1}else if(u)if(s==f)if(i<=r){if(c!=e[i])return!1}else{if(n?c>e[i]:c<e[i])return!1;c!=e[i]&&(u=!1)}else if("s"!=s&&"n"!=s){if(n||i<=r)return!1;u=!1,i--}else{if(i<=r||f<s!=n)return!1;u=!1}else"s"!=s&&"n"!=s&&(u=!1,i--)}}var d=[],h=d.pop.bind(d);for(o=1;o<e.length;o++){var p=e[o];d.push(1==p?h()|h():2==p?h()&h():p?l(p,t):!h())}return!!h()},u=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&o(e,t)?t:e),0)},c=(e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+i(n)+")",f=(e,t,r,n)=>{var a=u(e,r);return l(n,a)||d(c(e,r,a,n)),h(e[r][a])},s=(e,t,r)=>{var n=e[t];return(t=Object.keys(n).reduce(((e,t)=>!l(r,t)||e&&!o(e,t)?e:t),0))&&n[t]},d=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},h=e=>(e.loaded=1,e.get()),m=(p=e=>function(t,r,n,a){var o=x.I(t);return o&&o.then?o.then(e.bind(e,t,x.S[t],r,n,a)):e(t,x.S[t],r,n,a)})(((e,t,r,n,a)=>t&&x.o(t,r)?f(t,0,r,n):a())),b=p(((e,t,r,n,a)=>{var o=t&&x.o(t,r)&&s(t,r,n);return o?h(o):a()})),v={},g={1527:()=>m("default","react",[4,18,2,0],(()=>x.e(540).then((()=>()=>x(6540))))),5929:()=>m("default","react-dom",[4,18,2,0],(()=>x.e(961).then((()=>()=>x(961))))),612:()=>b("default","i18next-resources-to-backend",[1,1,1,4],(()=>x.e(235).then((()=>()=>x(1235))))),2339:()=>b("default","react-i18next",[1,13,2,2],(()=>x.e(389).then((()=>()=>x(2389))))),3062:()=>b("default","i18next",[1,23,4,6],(()=>x.e(635).then((()=>()=>x(2635))))),4408:()=>m("default","@mui/material",[1,5,13,0],(()=>Promise.all([x.e(300),x.e(175),x.e(929),x.e(678),x.e(118)]).then((()=>()=>x(2175))))),3512:()=>m("default","react-redux",[1,8,1,3],(()=>Promise.all([x.e(733),x.e(929)]).then((()=>()=>x(9733))))),5295:()=>m("default","@uspacy/sdk",[3,0,0,54],(()=>x.e(491).then((()=>()=>x(491))))),9613:()=>m("default","@reduxjs/toolkit",[1,1,9,7],(()=>x.e(976).then((()=>()=>x(9976))))),5364:()=>b("default","axios",[1,1,4,0],(()=>x.e(447).then((()=>()=>x(4447))))),7314:()=>b("default","idb",[1,8,0,0],(()=>x.e(602).then((()=>()=>x(602))))),7988:()=>m("default","@uspacy/store",[3,0,0,66],(()=>x.e(394).then((()=>()=>x(8394))))),1678:()=>m("default","@emotion/react",[1,11,11,0],(()=>Promise.all([x.e(300),x.e(722)]).then((()=>()=>x(5722))))),4118:()=>m("default","@emotion/styled",[1,11,11,0],(()=>x.e(479).then((()=>()=>x(1479)))))},y={118:[4118],228:[612,2339,3062,4408],435:[5364,7314],527:[1527],550:[3512,5295,9613],678:[1678],694:[7988],929:[5929]},P={},x.f.consumes=(e,t)=>{x.o(y,e)&&y[e].forEach((e=>{if(x.o(v,e))return t.push(v[e]);if(!P[e]){var r=t=>{v[e]=0,x.m[e]=r=>{delete x.c[e],r.exports=t()}};P[e]=!0;var n=t=>{delete v[e],x.m[e]=r=>{throw delete x.c[e],t}};try{var a=g[e]();a.then?t.push(v[e]=a.then(r).catch(n)):r(a)}catch(e){n(e)}}}))},(()=>{var e={792:0};x.f.j=(t,r)=>{var n=x.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^((11|22|67)8|435|527|550|929)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=x.p+x.u(t),i=new Error;x.l(o,(r=>{if(x.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,o=r[0],i=r[1],l=r[2],u=0;if(o.some((t=>0!==e[t]))){for(n in i)x.o(i,n)&&(x.m[n]=i[n]);l&&l(x)}for(t&&t(r);u<o.length;u++)a=o[u],x.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkcontainer=self.webpackChunkcontainer||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),x(8129)})();
//# sourceMappingURL=main.07fb8e39.js.map