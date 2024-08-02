/*! For license information please see 878.33055e0c.chunk.js.LICENSE.txt */
(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[878,848],{3589:(e,n,t)=>{"use strict";t.d(n,{A:()=>s});var r=t(4848),i=t(645),o=t(7216);const s=function(e){var n=e.children,t=e.userSettings;return(0,r.jsx)(o.Ay,{userSettings:t,children:(0,r.jsx)(i.A,{children:n})})}},5878:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>v});var r=t(4848),i=t(4408),o=t(1527),s=t(2339),a=t(1277),c=t(3589),l=t(6994),d=function(){return d=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},d.apply(this,arguments)},u=function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,a)}c((r=r.apply(e,n||[])).next())}))},p=function(e,n){var t,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(t=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=n.call(e,s)}catch(e){a=[6,e],r=0}finally{t=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};function h(e){var n="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===n.length)return n.pop().split(";").shift()}function x(){var e=window.location.href;return new URL(e).hostname}var f,m=(f=x()).endsWith("staging.uspacy.tech")?"https://auth.dev.leadbox.com.ua":"localhost"===f?"http://localhost:6904":"https://auth.leadbox.com.ua",y="webhook",g=function(){var e,n,t,c=(0,o.useState)({installed:!1,apiKey:"",isConnected:!1}),f=c[0],g=c[1],v=(0,o.useState)(!0),j=v[0],b=v[1],k=(0,o.useState)(!1),L=k[0],w=k[1],T=(0,o.useState)(""),I=T[0],S=T[1],_=(0,s.useTranslation)("settings").t,B=function(e,n,t){return u(void 0,void 0,void 0,(function(){return p(this,(function(r){return[2,new Promise((function(r){var i={"Accept-Language":"uk","Content-Type":"application/json"};n&&(i.Authorization="Bearer ".concat(n)),fetch(e,d({headers:i},t)).then((function(e){return e.json()})).then(r).catch((function(){r({apiKey:"",isConnected:!1,installed:!1})}))}))]}))}))},C=function(){return u(void 0,void 0,void 0,(function(){var e,n,t;return p(this,(function(r){switch(r.label){case 0:return"localhost"===x()?[2,h("usAppToken")]:[4,(0,a.kP)("token")];case 1:return e=r.sent(),[4,B("/apps/v1/apps?code[]=".concat("do_it_well_lead_box"),e)];case 2:return n=r.sent(),[4,A()];case 3:return r.sent(),[2,(null===(t=null==n?void 0:n.data[0])||void 0===t?void 0:t.integration_token)||""]}}))}))},A=function(e){return void 0===e&&(e=2e3),new Promise((function(n){return setTimeout(n,e)}))};(0,o.useEffect)((function(){u(void 0,void 0,void 0,(function(){var e,n;return p(this,(function(t){switch(t.label){case 0:return b(!0),[4,C()];case 1:return e=t.sent(),[4,B("".concat(m,"/uspacy/").concat(y,"/settings"),e)];case 2:return n=t.sent(),g(n),b(!1),[2]}}))}))}),[]);var E=j?{color:"#ccc",fontStyle:"italic"}:(null==f?void 0:f.isConnected)?{color:"#58ca00"}:{color:"#ccc"};return(0,r.jsxs)(i.Box,{children:[(0,r.jsxs)(i.Box,{children:[!f.installed&&!j&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.Box,{sx:{backgroundColor:"",color:"#f00",textAlign:"center",marginBottom:"1rem",padding:"1rem",borderRadius:"0.25rem"},children:[(0,r.jsx)(i.Typography,{sx:{fontWeight:"bold"},children:_("WARNING")}),(0,r.jsx)(i.Typography,{children:_("WIDGET_INSTALL_ERROR")})]})}),(0,r.jsx)(i.Box,{sx:{width:"100%",display:"none",justifyContent:"flex-end",marginBottom:"1rem"},children:(0,r.jsx)(i.Typography,{sx:d(d({},E),{display:"inline-flex",fontSize:"12px",letterSpacing:"1px",padding:"0.1rem 0.75rem",borderRadius:"1rem"}),children:j?_("loading"):(null==f?void 0:f.isConnected)?_("connected"):_("notConnected")})}),(0,r.jsxs)(i.Box,{sx:{padding:f.isConnected?"2rem 1rem":"2rem 1rem 1rem",border:"1px dashed #ddd",borderRadius:"1rem",marginBottom:"2rem"},children:[f.isConnected&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.Typography,{sx:{fontWeight:"600",paddingLeft:"1rem"},children:[_("LABEL_API_KEY"),":",(0,r.jsx)(i.Box,{component:"span",sx:{fontWeight:"normal",marginLeft:"1rem"},children:f.apiKey}),(0,r.jsx)(i.Link,{component:"span",sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"24px",height:"24px",fontWeight:"normal",marginLeft:"1rem",color:"red",textDecoration:"none",cursor:"pointer"},onClick:function(e){return u(void 0,void 0,void 0,(function(){var n,t,r;return p(this,(function(i){switch(i.label){case 0:return e.preventDefault(),j?[2]:(b(!0),S(""),[4,C()]);case 1:return n=i.sent(),[4,B("".concat(m,"/uspacy/").concat(y,"/settings"),n,{method:"DELETE",body:JSON.stringify({apiKey:null===(r=f.apiKey)||void 0===r?void 0:r.trim()})})];case 2:return(t=i.sent()).error?S(t.message):g(t),b(!1),w(!1),[2]}}))}))},children:"✕"})]})}),!f.isConnected&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Typography,{variant:"subtitle2",sx:{fontWeight:"bold",paddingLeft:"1rem"},children:[_("LABEL_API_KEY"),(0,r.jsx)(i.Box,{component:"span",sx:d({fontWeight:"normal",marginLeft:"1rem"},E),children:j?"":(null==f?void 0:f.isConnected)?_("connected"):_("notConnected")})]}),(0,r.jsxs)(i.Box,{sx:{display:"flex",justifyContent:"center",gap:"1rem"},component:"form",onSubmit:function(e){return u(void 0,void 0,void 0,(function(){var n,t,r;return p(this,(function(i){switch(i.label){case 0:return e.preventDefault(),b(!0),S(""),[4,C()];case 1:return n=i.sent(),[4,B("".concat(m,"/uspacy/").concat(y,"/settings"),n,{method:"POST",body:JSON.stringify({apiKey:null===(r=f.apiKey)||void 0===r?void 0:r.trim()})})];case 2:return(t=i.sent()).error?S(t.message):g(t),b(!1),w(!1),[2]}}))}))},children:[(0,r.jsx)(i.Input,{sx:{width:"100%",border:"1px solid #ddd",outline:"none",borderRadius:"4px",paddingLeft:"1rem",paddingRight:"1rem","&:before":{content:"none"},"&:after":{content:"none"}},disabled:j||!f.installed,placeholder:_("integrationApiKey"),value:f.apiKey||"",onChange:function(e){S(""),g(d(d({},f),{apiKey:e.target.value})),w(!0)}}),(0,r.jsxs)(i.Button,{disableElevation:!0,variant:(null===(e=f.apiKey)||void 0===e?void 0:e.trim())&&L?"contained":"outlined",type:"submit",disabled:j||!(null===(n=f.apiKey)||void 0===n?void 0:n.trim())||!L||!f.installed,sx:{backgroundColor:"#58ca00",border:"1px solid #58ca00",padding:"5px 2rem",textTransform:"none",letterSpacing:"1px","&:hover":{backgroundColor:"#58ca00"},"&:disabled":{backgroundColor:(null===(t=f.apiKey)||void 0===t?void 0:t.trim())&&L?"#d2f7b6":"transparent",color:j||!f.installed?"#a6a6a8":"#58ca00",borderColor:j||!f.installed?"#a6a6a8":"#58ca00"}},children:[_("connect"),j&&(0,r.jsx)(i.CircularProgress,{size:22,sx:{color:"#a6a6a8",position:"absolute",zIndex:1}})]})]}),(0,r.jsx)(i.Box,{sx:{position:"relative",height:"1rem",marginBottom:"1rem"},children:I&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Typography,{variant:"subtitle2",sx:{color:"red",position:"absolute",left:0,top:0,fontSize:"11px",paddingLeft:"1rem"},children:_(I)})})})]})]})]}),(0,r.jsx)(l.A,{})]})};const v=function(e){var n=e.userSettings;return(0,r.jsx)(c.A,{userSettings:n,children:(0,r.jsx)(g,{})})}},6994:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var r=t(4848),i=t(4408),o=t(3700),s=t.n(o);const a=function(){var e={fontWeight:500,color:"#9c27b0"},n={color:e.color,border:"1px solid ".concat(e.color),display:"inline-flex",padding:"0.25rem 1rem",borderRadius:"3px",marginLeft:"0.5rem",letterSpacing:"1px",fontSize:"14px"},t={color:"#03a9f4"};return(0,r.jsxs)(i.Box,{children:[(0,r.jsx)(s(),{videoId:"BF1E3O2IfUI",style:{maxWidth:"1000px",display:"flex",justifyContent:"center",marginBottom:"2rem",aspectRatio:"16/9"},opts:{height:"100%",width:"100%",playerVars:{autoplay:0,controls:0,rel:0,showinfo:0,iv_load_policy:3}}}),(0,r.jsxs)(i.Box,{sx:{marginBottom:6},children:[(0,r.jsx)(i.Typography,{gutterBottom:!0,variant:"h5",component:"div",children:"КРОК 1 - підключення Uspacy до акаунту LeadBox"}),(0,r.jsxs)(i.Typography,{gutterBottom:!0,component:"div",children:["Зареєструйте акаунт в сервісі"," ",(0,r.jsx)(i.Link,{href:"https://my.leadbox.com.ua",sx:t,target:"_blank",children:"my.leadbox.com.ua"}),", якщо вже маєте його, то авторизуйтесь в ньому та перейдіть на сторінку"," ",(0,r.jsx)(i.Link,{href:"https://my.leadbox.com.ua",sx:t,target:"_blank",children:"Інтеграції"}),"."]}),(0,r.jsx)(i.Typography,{component:"div",children:"Оберіть інтеграцію з Uspacy (якщо створювали її раніше), або ж створіть нову. Для цього:"}),(0,r.jsxs)(i.List,{children:[(0,r.jsx)(i.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(i.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ оберіть ",(0,r.jsx)("span",{style:e,children:"Додати інтеграцію"})]})})}),(0,r.jsx)(i.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(i.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ оберіть розділ ",(0,r.jsx)("span",{style:e,children:"CRM"})]})})}),(0,r.jsx)(i.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(i.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ натисніть ",(0,r.jsx)("span",{style:e,children:"Uspacy"})]})})}),(0,r.jsx)(i.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(i.ListItemText,{primary:"➡️ введіть потрібну вам назву"})}),(0,r.jsx)(i.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(i.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ скопіюте отриманий ",(0,r.jsx)("span",{style:e,children:"Api ключ"})]})})}),(0,r.jsx)(i.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(i.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ вставте ключ в форму вище і натисніть",(0,r.jsx)("span",{style:n,children:"Підключити"})]})})})]})]}),(0,r.jsxs)(i.Box,{children:[(0,r.jsx)(i.Typography,{gutterBottom:!0,variant:"h5",component:"div",children:"КРОК 2 - підключення інтеграції Webhook"}),(0,r.jsxs)(i.List,{children:[(0,r.jsx)(i.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(i.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ зайдіть на сторінку інтеграцій в ",(0,r.jsx)("span",{style:e,children:"LeadBox"})]})})}),(0,r.jsx)(i.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(i.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ натисніть ",(0,r.jsx)("span",{style:e,children:"Додати інтеграцію"})," та оберіть з переліку"," ",(0,r.jsx)("span",{style:e,children:"Web сайт → Webhook"})]})})}),(0,r.jsx)(i.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(i.ListItemText,{primary:"➡️ Дайте назву інтеграції"})}),(0,r.jsx)(i.ListItem,{sx:{paddingY:0},children:(0,r.jsx)(i.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["➡️ Заповніть налаштування згідно з цією"," ",(0,r.jsx)(i.Link,{href:"https://leadbox.crunch.help/uk/intieghratsiyi-z-dzhierielami-otrimannia-zaiavok/pidkliuchiennia-web-hook",sx:t,target:"_blank",children:"інструкцією"}),"."]})})})]})]}),(0,r.jsxs)(i.Box,{sx:{marginTop:4},children:[(0,r.jsxs)(i.Typography,{component:"div",children:["Якщо у вас виникнуть питання: - пишіть нам в 💬 тех.підтримку на"," ",(0,r.jsx)(i.Link,{href:"https://my.leadbox.com.ua",sx:t,target:"_blank",children:"my.leadbox.com.ua"})," ","або:"]}),(0,r.jsxs)(i.Typography,{component:"div",children:["✉️"," ",(0,r.jsx)(i.Link,{href:"mailto:office@leadbox.com.ua",sx:t,children:"office@leadbox.com.ua"})]}),(0,r.jsxs)(i.Typography,{component:"div",children:["📱"," ",(0,r.jsx)(i.Link,{href:"tel:+380933164008",sx:t,children:"+38 (093) 316-40-08"})]})]})]})}},645:(e,n,t)=>{"use strict";t.d(n,{A:()=>l});var r=t(4848),i=t(1527),o=t(2339),s=t(177),a=t(7216),c=(0,i.createContext)({});const l=function(e){var n=e.children,t=(0,a.dk)().userSettings;return(0,i.useEffect)((function(){s.A.changeLanguage(null==t?void 0:t.lang)}),[null==t?void 0:t.lang]),(0,r.jsx)(c.Provider,{value:{userSettings:t},children:(0,r.jsx)(o.I18nextProvider,{i18n:s.A,children:n})})}},7216:(e,n,t)=>{"use strict";t.d(n,{Ay:()=>a,dk:()=>s});var r=t(4848),i=t(1527),o=(0,i.createContext)({}),s=function(){return(0,i.useContext)(o)};const a=function(e){var n=e.children,t=e.userSettings;return(0,r.jsx)(o.Provider,{value:{userSettings:t},children:n})}},1277:(e,n,t)=>{"use strict";t.d(n,{kP:()=>o});var r=t(7314),i=(0,r.openDB)("Uspacy"),o=function(e){return n=void 0,t=void 0,o=function(){return function(e,n){var t,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(t=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=n.call(e,s)}catch(e){a=[6,e],r=0}finally{t=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(n){switch(n.label){case 0:return[4,i];case 1:return[4,n.sent().get("tokens",e)];case 2:return[2,n.sent()]}}))},new((r=void 0)||(r=Promise))((function(e,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(n,t||[])).next())}));var n,t,r,o}},177:(e,n,t)=>{"use strict";t.d(n,{A:()=>c});var r=t(3062),i=t.n(r),o=t(612),s=t.n(o),a=t(2339);i().use(a.initReactI18next).use(s()((function(e,n,r){t(2096)("./".concat(e,"/").concat(n,".json")).then((function(e){r(null,e)})).catch((function(e){r(e,null)}))}))).init({fallbackLng:"uk"});const c=i()},1020:(e,n,t)=>{"use strict";var r=t(1527),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:d,props:o,_owner:a.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},4848:(e,n,t)=>{"use strict";e.exports=t(1020)},2096:(e,n,t)=>{var r={"./en-US/settings.json":[2127,127],"./en-US/translation.json":[9833,833],"./pl/settings.json":[4031,31],"./pl/translation.json":[7561,561],"./pt-BR/settings.json":[2512,512],"./pt-BR/translation.json":[5804,804],"./uk/settings.json":[3559,559],"./uk/translation.json":[6769,769]};function i(e){if(!t.o(r,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],i=n[0];return t.e(n[1]).then((()=>t.t(i,19)))}i.keys=()=>Object.keys(r),i.id=2096,e.exports=i}}]);
//# sourceMappingURL=878.33055e0c.chunk.js.map