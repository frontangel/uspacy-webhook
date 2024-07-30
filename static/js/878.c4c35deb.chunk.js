/*! For license information please see 878.c4c35deb.chunk.js.LICENSE.txt */
(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[878,848],{3589:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(4848),o=n(645),i=n(7216);const s=function(e){var t=e.children,n=e.userSettings;return(0,r.jsx)(i.Ay,{userSettings:n,children:(0,r.jsx)(o.A,{children:t})})}},5878:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(4848),o=n(4408),i=n(1527),s=n(2339),a=n(1277),c=n(3589),l=n(6994),d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d.apply(this,arguments)},u=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))},p=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};function h(e){var t="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===t.length)return t.pop().split(";").shift()}function x(){var e=window.location.href;return new URL(e).hostname}var f,m=(f=x()).endsWith("staging.uspacy.tech")?"https://auth.dev.leadbox.com.ua":"localhost"===f?"http://localhost:6904":"https://auth.leadbox.com.ua",y=function(){var e,t,n,c=(0,i.useState)({installed:!1,apiKey:"",isConnected:!1}),f=c[0],y=c[1],g=(0,i.useState)(!1),v=g[0],j=g[1],b=(0,i.useState)(!1),k=b[0],w=b[1],L=(0,i.useState)(""),T=L[0],S=L[1],I=(0,s.useTranslation)("settings").t,_=function(e,t,n){return u(void 0,void 0,void 0,(function(){return p(this,(function(r){return[2,new Promise((function(r){var o={"Accept-Language":"uk","Content-Type":"application/json"};t&&(o.Authorization="Bearer ".concat(t)),fetch(e,d({headers:o},n)).then((function(e){return e.json()})).then(r).catch((function(){r({apiKey:"",isConnected:!1,installed:!1})}))}))]}))}))},C=function(){return u(void 0,void 0,void 0,(function(){var e,t,n;return p(this,(function(r){switch(r.label){case 0:return"localhost"===x()?[2,h("usAppToken")]:[4,(0,a.kP)("token")];case 1:return e=r.sent(),[4,_("/apps/v1/apps?code[]=do_it_well_lead_box",e)];case 2:return t=r.sent(),[4,B()];case 3:return r.sent(),[2,(null===(n=null==t?void 0:t.data[0])||void 0===n?void 0:n.integration_token)||""]}}))}))},B=function(e){return void 0===e&&(e=1e3),new Promise((function(t){return setTimeout(t,e)}))};(0,i.useEffect)((function(){u(void 0,void 0,void 0,(function(){var e,t;return p(this,(function(n){switch(n.label){case 0:return j(!0),[4,C()];case 1:return e=n.sent(),[4,_("".concat(m,"/portals/settings"),e)];case 2:return t=n.sent(),y(t),j(!1),[2]}}))}))}),[]);var A=v?{backgroundColor:"#efefef",color:"#a6a6a8"}:(null==f?void 0:f.isConnected)?{backgroundColor:"#d2f7b6",color:"#58ca00"}:{backgroundColor:"#ffdada",color:"#f00"};return(0,r.jsxs)(o.Box,{children:[(0,r.jsxs)(o.Box,{children:[(0,r.jsx)(o.Box,{sx:{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"1rem"},children:(0,r.jsx)(o.Typography,{sx:d(d({},A),{display:"inline-flex",fontSize:"12px",letterSpacing:"1px",padding:"0.1rem 0.75rem",borderRadius:"1rem"}),children:v?I("loading"):(null==f?void 0:f.isConnected)?I("connected"):I("notConnected")})}),(0,r.jsx)(o.Typography,{variant:"subtitle2",sx:{fontWeight:"bold",paddingLeft:"1rem"},children:I("LABEL_API_KEY")}),(0,r.jsxs)(o.Box,{sx:{display:"flex",justifyContent:"center",gap:"1rem"},component:"form",onSubmit:function(e){return u(void 0,void 0,void 0,(function(){var t,n,r;return p(this,(function(o){switch(o.label){case 0:return e.preventDefault(),j(!0),[4,C()];case 1:return t=o.sent(),[4,_("".concat(m,"/portals/settings"),t,{method:"POST",body:JSON.stringify({apiKey:null===(r=f.apiKey)||void 0===r?void 0:r.trim()})})];case 2:return(n=o.sent()).error?S(n.message):y(n),j(!1),w(!1),[2]}}))}))},children:[(0,r.jsx)(o.Input,{sx:{width:"100%",border:"1px solid #ddd",outline:"none",borderRadius:"4px",paddingLeft:"1rem",paddingRight:"1rem","&:before":{content:"none"},"&:after":{content:"none"}},disabled:v,placeholder:I("integrationApiKey"),value:f.apiKey||"",onChange:function(e){S(""),y(d(d({},f),{apiKey:e.target.value})),w(!0)}}),(0,r.jsxs)(o.Button,{disableElevation:!0,variant:(null===(e=f.apiKey)||void 0===e?void 0:e.trim())&&k?"contained":"outlined",type:"submit",disabled:v||!(null===(t=f.apiKey)||void 0===t?void 0:t.trim())||!k,sx:{backgroundColor:"#58ca00",border:"1px solid #58ca00",padding:"5px 2rem",textTransform:"none",letterSpacing:"1px","&:hover":{backgroundColor:"#58ca00"},"&:disabled":{backgroundColor:(null===(n=f.apiKey)||void 0===n?void 0:n.trim())&&k?"#d2f7b6":"transparent",color:v?"#a6a6a8":"#58ca00",borderColor:v?"#a6a6a8":"#58ca00"}},children:[I("connect"),v&&(0,r.jsx)(o.CircularProgress,{size:22,sx:{color:"#a6a6a8",position:"absolute",zIndex:1}})]})]}),(0,r.jsx)(o.Box,{sx:{position:"relative",height:"1rem",marginBottom:"1rem"},children:(0,r.jsx)(o.Typography,{variant:"subtitle2",sx:{color:"red",position:"absolute",left:0,top:0,fontSize:"11px",paddingLeft:"1rem"},children:I(T)})&&T})]}),(0,r.jsx)(l.A,{})]})};const g=function(e){var t=e.userSettings;return(0,r.jsx)(c.A,{userSettings:t,children:(0,r.jsx)(y,{})})}},6994:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(4848),o=n(4408),i=n(3700),s=n.n(i);const a=function(){var e={fontWeight:500,color:"#9c27b0"},t={color:e.color,border:"1px solid ".concat(e.color),display:"inline-flex",padding:"0.25rem 1rem",borderRadius:"3px",marginLeft:"0.5rem",letterSpacing:"1px",fontSize:"14px"},n={color:"#03a9f4"};return(0,r.jsxs)(o.Box,{children:[(0,r.jsx)(s(),{videoId:"BF1E3O2IfUI",style:{maxWidth:"1000px",display:"flex",justifyContent:"center",marginBottom:"2rem",aspectRatio:"16/9"},opts:{height:"100%",width:"100%",playerVars:{autoplay:0,controls:0,rel:0,showinfo:0,iv_load_policy:3}}}),(0,r.jsxs)(o.Box,{sx:{marginBottom:6},children:[(0,r.jsx)(o.Typography,{gutterBottom:!0,variant:"h5",component:"div",children:"КРОК 1 - підключення Uspacy до акаунту LeadBox"}),(0,r.jsxs)(o.Typography,{gutterBottom:!0,component:"div",children:["Зареєструйте акаунт в сервісі"," ",(0,r.jsx)(o.Link,{href:"https://my.leadbox.com.ua",sx:n,target:"_blank",children:"my.leadbox.com.ua"}),", якщо вже маєте його, то авторизуйтесь в ньому та перейдіть на сторінку"," ",(0,r.jsx)(o.Link,{href:"https://my.leadbox.com.ua",sx:n,target:"_blank",children:"Інтеграції"}),"."]}),(0,r.jsx)(o.Typography,{component:"div",children:"Оберіть інтеграцію з Uspacy (якщо створювали її раніше), або ж створіть нову. Для цього:"}),(0,r.jsxs)(o.List,{children:[(0,r.jsx)(o.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(o.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ оберіть ",(0,r.jsx)("span",{style:e,children:"Додати інтеграцію"})]})})}),(0,r.jsx)(o.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(o.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ оберіть розділ ",(0,r.jsx)("span",{style:e,children:"CRM"})]})})}),(0,r.jsx)(o.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(o.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ натисніть ",(0,r.jsx)("span",{style:e,children:"Uspacy"})]})})}),(0,r.jsx)(o.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(o.ListItemText,{primary:"➡️ введіть потрібну вам назву"})}),(0,r.jsx)(o.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(o.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ скопіюте отриманий ",(0,r.jsx)("span",{style:e,children:"Api ключ"})]})})}),(0,r.jsx)(o.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(o.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ вставте ключ в форму вище і натисніть",(0,r.jsx)("span",{style:t,children:"Підключити"})]})})})]})]}),(0,r.jsxs)(o.Box,{children:[(0,r.jsx)(o.Typography,{gutterBottom:!0,variant:"h5",component:"div",children:"КРОК 2 - підключення інтеграції Webhook"}),(0,r.jsxs)(o.List,{children:[(0,r.jsx)(o.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(o.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ зайдіть на сторінку інтеграцій в ",(0,r.jsx)("span",{style:e,children:"LeadBox"})]})})}),(0,r.jsx)(o.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(o.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ натисніть ",(0,r.jsx)("span",{style:e,children:"Додати інтеграцію"})," та оберіть з переліку"," ",(0,r.jsx)("span",{style:e,children:"Web сайт → Webhook"})]})})}),(0,r.jsx)(o.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(o.ListItemText,{primary:"➡️ Дайте назву інтеграції"})}),(0,r.jsx)(o.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(o.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ Заповніть налаштування згідно з цією"," ",(0,r.jsx)(o.Link,{href:"https://leadbox.crunch.help/uk/intieghratsiyi-z-dzhierielami-otrimannia-zaiavok/pidkliuchiennia-web-hook",sx:n,target:"_blank",children:"інструкцією"}),"."]})})})]})]}),(0,r.jsxs)(o.Box,{sx:{marginTop:4},children:[(0,r.jsxs)(o.Typography,{component:"div",children:["Якщо у вас виникнуть питання: - пишіть нам в 💬 тех.підтримку на"," ",(0,r.jsx)(o.Link,{href:"https://my.leadbox.com.ua",sx:n,target:"_blank",children:"my.leadbox.com.ua"})," ","або:"]}),(0,r.jsxs)(o.Typography,{component:"div",children:["✉️"," ",(0,r.jsx)(o.Link,{href:"mailto:office@leadbox.com.ua",sx:n,children:"office@leadbox.com.ua"})]}),(0,r.jsxs)(o.Typography,{component:"div",children:["📱"," ",(0,r.jsx)(o.Link,{href:"tel:+380933164008",sx:n,children:"+38 (093) 316-40-08"})]})]})]})}},645:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(4848),o=n(1527),i=n(2339),s=n(177),a=n(7216),c=(0,o.createContext)({});const l=function(e){var t=e.children,n=(0,a.dk)().userSettings;return(0,o.useEffect)((function(){s.A.changeLanguage(null==n?void 0:n.lang)}),[null==n?void 0:n.lang]),(0,r.jsx)(c.Provider,{value:{userSettings:n},children:(0,r.jsx)(i.I18nextProvider,{i18n:s.A,children:t})})}},7216:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>a,dk:()=>s});var r=n(4848),o=n(1527),i=(0,o.createContext)({}),s=function(){return(0,o.useContext)(i)};const a=function(e){var t=e.children,n=e.userSettings;return(0,r.jsx)(i.Provider,{value:{userSettings:n},children:t})}},1277:(e,t,n)=>{"use strict";n.d(t,{kP:()=>i});var r=n(7314),o=(0,r.openDB)("Uspacy"),i=function(e){return t=void 0,n=void 0,i=function(){return function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(t){switch(t.label){case 0:return[4,o];case 1:return[4,t.sent().get("tokens",e)];case 2:return[2,t.sent()]}}))},new((r=void 0)||(r=Promise))((function(e,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,a)}c((i=i.apply(t,n||[])).next())}));var t,n,r,i}},177:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(3062),o=n.n(r),i=n(612),s=n.n(i),a=n(2339);o().use(a.initReactI18next).use(s()((function(e,t,r){n(2096)("./".concat(e,"/").concat(t,".json")).then((function(e){r(null,e)})).catch((function(e){r(e,null)}))}))).init({fallbackLng:"uk"});const c=o()},1020:(e,t,n)=>{"use strict";var r=n(1527),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},4848:(e,t,n)=>{"use strict";e.exports=n(1020)},2096:(e,t,n)=>{var r={"./en-US/settings.json":[2127,127],"./en-US/translation.json":[9833,833],"./pl/settings.json":[4031,31],"./pl/translation.json":[7561,561],"./pt-BR/settings.json":[2512,512],"./pt-BR/translation.json":[5804,804],"./uk/settings.json":[3559,559],"./uk/translation.json":[6769,769]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n.t(o,19)))}o.keys=()=>Object.keys(r),o.id=2096,e.exports=o}}]);
//# sourceMappingURL=878.c4c35deb.chunk.js.map