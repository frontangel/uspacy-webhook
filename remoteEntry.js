var LeadBox;(()=>{"use strict";var e,t,r,n,a,o,i,l,u,d,f,c,s,h,p,v,m,b,g,y,w,P={9232:(e,t,r)=>{var n={"./app":()=>Promise.all([r.e(527),r.e(228),r.e(196)]).then((()=>()=>r(8196))),"./settings":()=>Promise.all([r.e(527),r.e(228),r.e(314),r.e(878)]).then((()=>()=>r(5878)))},a=(e,t)=>(r.R=t,t=r.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var n="default",a=r.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[n]=e,r.I(n,t)}};r.d(t,{get:()=>a,init:()=>o})}},x={};function j(e){var t=x[e];if(void 0!==t)return t.exports;var r=x[e]={id:e,loaded:!1,exports:{}};return P[e](r,r.exports,j),r.loaded=!0,r.exports}j.m=P,j.c=x,j.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return j.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,j.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var a=Object.create(null);j.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,j.d(a,o),a},j.d=(e,t)=>{for(var r in t)j.o(t,r)&&!j.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},j.f={},j.e=e=>Promise.all(Object.keys(j.f).reduce(((t,r)=>(j.f[r](e,t),t)),[])),j.u=e=>"static/js/"+e+"."+{31:"0076c4df",118:"93cfec67",127:"54a75ae7",175:"72efccf4",196:"16371d3b",228:"3e87f24b",235:"074cf88a",300:"bbbf4308",314:"d3662d1e",341:"4ff24181",389:"e3246a22",394:"7902c7c8",474:"f42f71eb",479:"7b51c414",491:"ad66ea88",512:"5f1298c7",527:"edc53129",540:"c70a1707",550:"551e48b8",559:"8c7f9c11",561:"0e45b59d",602:"becf7501",635:"79847ecd",678:"4c28b9d4",722:"d1f8ba05",733:"f6c34c9d",769:"708f4ffb",804:"f7c5cd83",833:"7b0a220c",848:"22d0ca88",860:"d12e69d5",878:"861ff93e",929:"c2170117",961:"e4e023cd",976:"ab5588a7"}[e]+".chunk.js",j.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),j.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="container:",j.l=(e,t,a,o)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+a){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,j.nc&&i.setAttribute("nonce",j.nc),i.setAttribute("data-webpack",n+a),i.src=e),r[e]=[t];var c=(t,n)=>{i.onerror=i.onload=null,clearTimeout(s);var a=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),l&&document.head.appendChild(i)}},j.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{j.S={};var e={},t={};j.I=(r,n)=>{n||(n=[]);var a=t[r];if(a||(a=t[r]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[r])return e[r];j.o(j.S,r)||(j.S[r]={});var o=j.S[r],i="container",l=(e,t,r,n)=>{var a=o[e]=o[e]||{},l=a[t];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[t]={get:r,from:i,eager:!!n})},u=[];return"default"===r&&(l("@emotion/react","11.11.4",(()=>Promise.all([j.e(300),j.e(527),j.e(341)]).then((()=>()=>j(5722))))),l("@emotion/styled","11.11.5",(()=>Promise.all([j.e(527),j.e(678),j.e(860)]).then((()=>()=>j(1479))))),l("@mui/material","5.15.18",(()=>Promise.all([j.e(300),j.e(175),j.e(527),j.e(929),j.e(678),j.e(118),j.e(848)]).then((()=>()=>j(2175))))),l("@reduxjs/toolkit","1.9.7",(()=>j.e(976).then((()=>()=>j(9976))))),l("@uspacy/sdk","0.0.54",(()=>j.e(491).then((()=>()=>j(491))))),l("@uspacy/store","0.0.66",(()=>Promise.all([j.e(394),j.e(527),j.e(550),j.e(474)]).then((()=>()=>j(8394))))),l("i18next-resources-to-backend","1.2.1",(()=>j.e(235).then((()=>()=>j(1235))))),l("i18next","23.11.5",(()=>j.e(635).then((()=>()=>j(2635))))),l("idb","8.0.0",(()=>j.e(602).then((()=>()=>j(602))))),l("react-dom","18.2.0",(()=>Promise.all([j.e(961),j.e(527)]).then((()=>()=>j(961))))),l("react-i18next","13.5.0",(()=>Promise.all([j.e(389),j.e(527)]).then((()=>()=>j(2389))))),l("react-redux","8.1.3",(()=>Promise.all([j.e(733),j.e(527),j.e(929)]).then((()=>()=>j(9733))))),l("react","18.2.0",(()=>j.e(540).then((()=>()=>j(6540)))))),e[r]=u.length?Promise.all(u).then((()=>e[r]=1)):1}}})(),(()=>{var e;j.g.importScripts&&(e=j.g.location+"");var t=j.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),j.p=e})(),a=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},o=(e,t)=>{e=a(e),t=a(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var i=t[r],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;r++}},i=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return r}var o=[];for(a=1;a<e.length;a++){var l=e[a];o.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?o.pop()+" "+o.pop():i(l))}return u();function u(){return o.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,t)=>{if(0 in e){t=a(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var o=0,i=1,u=!0;;i++,o++){var d,f,c=i<e.length?(typeof e[i])[0]:"";if(o>=t.length||"o"==(f=(typeof(d=t[o]))[0]))return!u||("u"==c?i>r&&!n:""==c!=n);if("u"==f){if(!u||"u"!=c)return!1}else if(u)if(c==f)if(i<=r){if(d!=e[i])return!1}else{if(n?d>e[i]:d<e[i])return!1;d!=e[i]&&(u=!1)}else if("s"!=c&&"n"!=c){if(n||i<=r)return!1;u=!1,i--}else{if(i<=r||f<c!=n)return!1;u=!1}else"s"!=c&&"n"!=c&&(u=!1,i--)}}var s=[],h=s.pop.bind(s);for(o=1;o<e.length;o++){var p=e[o];s.push(1==p?h()|h():2==p?h()&h():p?l(p,t):!h())}return!!h()},u=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&o(e,t)?t:e),0)},d=(e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+i(n)+")",f=(e,t,r,n)=>{var a=u(e,r);return l(n,a)||s(d(e,r,a,n)),h(e[r][a])},c=(e,t,r)=>{var n=e[t];return(t=Object.keys(n).reduce(((e,t)=>!l(r,t)||e&&!o(e,t)?e:t),0))&&n[t]},s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},h=e=>(e.loaded=1,e.get()),v=(p=e=>function(t,r,n,a){var o=j.I(t);return o&&o.then?o.then(e.bind(e,t,j.S[t],r,n,a)):e(t,j.S[t],r,n,a)})(((e,t,r,n,a)=>t&&j.o(t,r)?f(t,0,r,n):a())),m=p(((e,t,r,n,a)=>{var o=t&&j.o(t,r)&&c(t,r,n);return o?h(o):a()})),b={},g={1527:()=>v("default","react",[4,18,2,0],(()=>j.e(540).then((()=>()=>j(6540))))),1678:()=>v("default","@emotion/react",[1,11,11,0],(()=>Promise.all([j.e(300),j.e(722)]).then((()=>()=>j(5722))))),5929:()=>v("default","react-dom",[4,18,2,0],(()=>j.e(961).then((()=>()=>j(961))))),4118:()=>v("default","@emotion/styled",[1,11,11,0],(()=>j.e(479).then((()=>()=>j(1479))))),3512:()=>v("default","react-redux",[1,8,1,3],(()=>Promise.all([j.e(733),j.e(929)]).then((()=>()=>j(9733))))),5295:()=>v("default","@uspacy/sdk",[3,0,0,54],(()=>j.e(491).then((()=>()=>j(491))))),9613:()=>v("default","@reduxjs/toolkit",[1,1,9,7],(()=>j.e(976).then((()=>()=>j(9976))))),612:()=>m("default","i18next-resources-to-backend",[1,1,1,4],(()=>j.e(235).then((()=>()=>j(1235))))),2339:()=>m("default","react-i18next",[1,13,2,2],(()=>j.e(389).then((()=>()=>j(2389))))),3062:()=>m("default","i18next",[1,23,4,6],(()=>j.e(635).then((()=>()=>j(2635))))),4408:()=>v("default","@mui/material",[1,5,13,0],(()=>Promise.all([j.e(300),j.e(175),j.e(929),j.e(678),j.e(118)]).then((()=>()=>j(2175))))),7314:()=>m("default","idb",[1,8,0,0],(()=>j.e(602).then((()=>()=>j(602)))))},y={118:[4118],228:[612,2339,3062,4408],314:[7314],527:[1527],550:[3512,5295,9613],678:[1678],929:[5929]},w={},j.f.consumes=(e,t)=>{j.o(y,e)&&y[e].forEach((e=>{if(j.o(b,e))return t.push(b[e]);if(!w[e]){var r=t=>{b[e]=0,j.m[e]=r=>{delete j.c[e],r.exports=t()}};w[e]=!0;var n=t=>{delete b[e],j.m[e]=r=>{throw delete j.c[e],t}};try{var a=g[e]();a.then?t.push(b[e]=a.then(r).catch(n)):r(a)}catch(e){n(e)}}}))},(()=>{var e={576:0};j.f.j=(t,r)=>{var n=j.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^((11|22|67)8|314|527|550|929)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=j.p+j.u(t),i=new Error;j.l(o,(r=>{if(j.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,o=r[0],i=r[1],l=r[2],u=0;if(o.some((t=>0!==e[t]))){for(n in i)j.o(i,n)&&(j.m[n]=i[n]);l&&l(j)}for(t&&t(r);u<o.length;u++)a=o[u],j.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkcontainer=self.webpackChunkcontainer||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var k=j(9232);LeadBox=k})();
//# sourceMappingURL=remoteEntry.js.map