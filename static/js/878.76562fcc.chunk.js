/*! For license information please see 878.76562fcc.chunk.js.LICENSE.txt */
(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[878,848],{3589:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(4848),i=n(645),o=n(7216);const a=function(e){var t=e.children,n=e.userSettings;return(0,r.jsx)(o.Ay,{userSettings:n,children:(0,r.jsx)(i.A,{children:t})})}},5878:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(4848),i=n(4408),o=n(1527),a=n(2339),s=n(1277),c=n(3589),l=n(6994),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)},d=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},p=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},f="MISSING_ENV_VAR".AUTH_LEADBOX_URL||"https://auth.dev.leadbox.com.ua",h=function(){var e,t,n,c=(0,o.useState)({installed:!1,apiKey:"",isConnected:!1}),h=c[0],x=c[1],v=(0,o.useState)(!1),y=v[0],m=v[1],b=(0,o.useState)(!1),j=b[0],g=b[1],k=(0,o.useState)(""),L=k[0],w=k[1],C=(0,a.useTranslation)("settings").t,S=function(e,t,n){return d(void 0,void 0,void 0,(function(){return p(this,(function(r){return[2,new Promise((function(r){var i={"Accept-Language":"uk","Content-Type":"application/json"};t&&(i.Authorization="Bearer ".concat(t)),fetch(e,u({headers:i},n)).then((function(e){return e.json()})).then(r).catch((function(){r({apiKey:"",isConnected:!1,installed:!1})}))}))]}))}))},_=function(){return d(void 0,void 0,void 0,(function(){var e,t,n;return p(this,(function(r){switch(r.label){case 0:return[4,(0,s.kP)("token")];case 1:return e=r.sent(),[4,S("/apps/v1/apps?code[]=do_it_well_lead_box",e)];case 2:return t=r.sent(),[4,I()];case 3:return r.sent(),[2,(null===(n=null==t?void 0:t.data[0])||void 0===n?void 0:n.integration_token)||""]}}))}))},I=function(e){return void 0===e&&(e=1e3),new Promise((function(t){return setTimeout(t,e)}))};(0,o.useEffect)((function(){d(void 0,void 0,void 0,(function(){var e,t;return p(this,(function(n){switch(n.label){case 0:return m(!0),[4,_()];case 1:return e=n.sent(),[4,S("".concat(f,"/portals/settings"),e)];case 2:return t=n.sent(),x(t),m(!1),[2]}}))}))}),[]);var T=(null==h?void 0:h.isConnected)?{backgroundColor:"#d2f7b6",color:"#58ca00"}:{backgroundColor:"#ffdada",color:"#f00"};return(0,r.jsxs)(i.Box,{children:[(0,r.jsxs)(i.Box,{children:[(0,r.jsx)(i.Box,{sx:{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"1rem"},children:(0,r.jsx)(i.Typography,{sx:u(u({},T),{display:"inline-flex",fontSize:"12px",letterSpacing:"1px",padding:"0.1rem 0.75rem",borderRadius:"1rem"}),children:(null==h?void 0:h.isConnected)?C("connected"):C("notConnected")})}),(0,r.jsx)(i.Typography,{variant:"subtitle2",sx:{fontWeight:"bold",paddingLeft:"1rem"},children:C("LABEL_API_KEY")}),(0,r.jsxs)(i.Box,{sx:{display:"flex",justifyContent:"center",gap:"1rem"},component:"form",onSubmit:function(e){return d(void 0,void 0,void 0,(function(){var t,n,r;return p(this,(function(i){switch(i.label){case 0:return e.preventDefault(),m(!0),[4,_()];case 1:return t=i.sent(),[4,S("".concat(f,"/portals/settings"),t,{method:"POST",body:JSON.stringify({apiKey:null===(r=h.apiKey)||void 0===r?void 0:r.trim()})})];case 2:return(n=i.sent()).error?w(n.message):x(n),m(!1),g(!1),[2]}}))}))},children:[(0,r.jsx)(i.Input,{sx:{width:"100%",border:"1px solid #ddd",outline:"none",borderRadius:"4px",paddingLeft:"1rem",paddingRight:"1rem","&:before":{content:"none"},"&:after":{content:"none"}},disabled:y,placeholder:C("integrationApiKey"),value:h.apiKey||"",onChange:function(e){w(""),x(u(u({},h),{apiKey:e.target.value})),g(!0)}}),(0,r.jsxs)(i.Button,{disableElevation:!0,variant:(null===(e=h.apiKey)||void 0===e?void 0:e.trim())&&j?"contained":"outlined",type:"submit",disabled:y||!(null===(t=h.apiKey)||void 0===t?void 0:t.trim())||!j,sx:{backgroundColor:"#58ca00",border:"1px solid #58ca00",padding:"5px 2rem",textTransform:"none",letterSpacing:"1px","&:hover":{backgroundColor:"#58ca00"},"&:disabled":{backgroundColor:(null===(n=h.apiKey)||void 0===n?void 0:n.trim())&&j?"#d2f7b6":"transparent",color:"#58ca00",borderColor:"#58ca00"}},children:[C("connect"),y&&(0,r.jsx)(i.CircularProgress,{size:22,sx:{color:"#58ca00",position:"absolute",zIndex:1}})]})]}),(0,r.jsx)(i.Box,{sx:{position:"relative",height:"1rem",marginBottom:"1rem"},children:(0,r.jsx)(i.Typography,{variant:"subtitle2",sx:{color:"red",position:"absolute",left:0,top:0,fontSize:"11px",paddingLeft:"1rem"},children:C(L)})&&L})]}),(0,r.jsx)(l.A,{})]})};const x=function(e){var t=e.userSettings;return(0,r.jsx)(c.A,{userSettings:t,children:(0,r.jsx)(h,{})})}},6994:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(4848),i=n(4408);const o=function(){return(0,r.jsxs)(i.Container,{maxWidth:"md",children:[(0,r.jsx)(i.Card,{variant:"outlined",sx:{marginBottom:4},children:(0,r.jsxs)(i.CardContent,{children:[(0,r.jsx)(i.Typography,{gutterBottom:!0,variant:"h5",component:"div",children:"КРОК 1 - підключення Uspacy до акаунту LeadBox"}),(0,r.jsxs)(i.Typography,{variant:"body1",component:"div",children:["Зареєструйте акаунт в сервісі"," ",(0,r.jsx)(i.Link,{href:"https://my.leadbox.com.ua",target:"_blank",children:"my.leadbox.com.ua"}),", якщо вже маєте його, то авторизуйтесь в ньому та перейдіть на сторінку"," ",(0,r.jsx)(i.Link,{href:"https://my.leadbox.com.ua",target:"_blank",children:"Інтеграції"}),"."]}),(0,r.jsxs)(i.List,{children:[(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{primary:"Оберіть інтеграцію з Uspacy (якщо створювали її раніше), або ж створіть нову. Для цього:"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{primary:"→ оберіть 'Додати інтеграцію'"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{primary:"→ оберіть розділ CRM"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{primary:"→ натисніть на Uspacy"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{primary:"→ введіть потрібну вам назву"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{primary:"Заповніть поле Api key, яке ви бачите вище даними із Secret Key,\n\t\t\t\t\t\t\t\tякий ви отримаєте на сторінці інтeграції Uspacy в сервісі LeadBox"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{primary:"Натисніть [Підключити]"})})]})]})}),(0,r.jsx)(i.Card,{variant:"outlined",children:(0,r.jsxs)(i.CardContent,{children:[(0,r.jsx)(i.Typography,{gutterBottom:!0,variant:"h5",component:"div",children:"КРОК 2 - підключення інтеграції Webhook"}),(0,r.jsxs)(i.List,{children:[(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{primary:"Зайдіть на сторінку інтеграції в LeadBox"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{primary:"Натисніть 'Додати інтеграцію' та оберіть з переліку Web сайт → Webhook"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{primary:"Дайте назву інтеграції"})}),(0,r.jsx)(i.ListItem,{children:(0,r.jsx)(i.ListItemText,{primary:(0,r.jsxs)(r.Fragment,{children:["Заповніть налаштування згідно з інструкцією:",(0,r.jsx)(i.Link,{href:"https://leadbox.crunch.help/uk/intieghratsiyi-z-dzhierielami-otrimannia-zaiavok/pidkliuchiennia-web-hook",target:"_blank",children:"інструкцією"}),"."]})})})]})]})}),(0,r.jsx)(i.Card,{variant:"outlined",sx:{marginTop:4},children:(0,r.jsx)(i.CardContent,{children:(0,r.jsxs)(i.Typography,{variant:"body1",component:"div",children:["Якщо у вас виникнуть питання - пишіть нам в чат тех.підтримки у вашому акаунті",(0,r.jsx)(i.Link,{href:"https://my.leadbox.com.ua",target:"_blank",children:"my.leadbox.com.ua"}),"або на пошту",(0,r.jsx)(i.Link,{href:"mailto:office@leadbox.com.ua",children:"office@leadbox.com.ua"})," або дзвоніть +380933164008."]})})})]})}},645:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(4848),i=n(1527),o=n(2339),a=n(177),s=n(7216),c=(0,i.createContext)({});const l=function(e){var t=e.children,n=(0,s.dk)().userSettings;return(0,i.useEffect)((function(){a.A.changeLanguage(null==n?void 0:n.lang)}),[null==n?void 0:n.lang]),(0,r.jsx)(c.Provider,{value:{userSettings:n},children:(0,r.jsx)(o.I18nextProvider,{i18n:a.A,children:t})})}},7216:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>s,dk:()=>a});var r=n(4848),i=n(1527),o=(0,i.createContext)({}),a=function(){return(0,i.useContext)(o)};const s=function(e){var t=e.children,n=e.userSettings;return(0,r.jsx)(o.Provider,{value:{userSettings:n},children:t})}},1277:(e,t,n)=>{"use strict";n.d(t,{kP:()=>o});var r=n(7314),i=(0,r.openDB)("Uspacy"),o=function(e){return t=void 0,n=void 0,o=function(){return function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(t){switch(t.label){case 0:return[4,i];case 1:return[4,t.sent().get("tokens",e)];case 2:return[2,t.sent()]}}))},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}));var t,n,r,o}},177:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(3062),i=n.n(r),o=n(612),a=n.n(o),s=n(2339);i().use(s.initReactI18next).use(a()((function(e,t,r){n(2096)("./".concat(e,"/").concat(t,".json")).then((function(e){r(null,e)})).catch((function(e){r(e,null)}))}))).init({fallbackLng:"uk"});const c=i()},1020:(e,t,n)=>{"use strict";var r=n(1527),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},4848:(e,t,n)=>{"use strict";e.exports=n(1020)},2096:(e,t,n)=>{var r={"./en-US/settings.json":[2127,127],"./en-US/translation.json":[9833,833],"./pl/settings.json":[4031,31],"./pl/translation.json":[7561,561],"./pt-BR/settings.json":[2512,512],"./pt-BR/translation.json":[5804,804],"./uk/settings.json":[3559,559],"./uk/translation.json":[6769,769]};function i(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((()=>n.t(i,19)))}i.keys=()=>Object.keys(r),i.id=2096,e.exports=i}}]);
//# sourceMappingURL=878.76562fcc.chunk.js.map