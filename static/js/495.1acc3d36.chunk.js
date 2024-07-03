/*! For license information please see 495.1acc3d36.chunk.js.LICENSE.txt */
(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[495,848,474],{771:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.MainRoles=void 0,function(e){e.ADMIN="ADMIN",e.OWNER="OWNER"}(r||(t.MainRoles=r={}))},3817:(e,t,r)=>{(()=>{"use strict";var t={641:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useAppSelector=t.useAppDispatch=void 0;const n=r(6022);t.useAppDispatch=()=>(0,n.useDispatch)(),t.useAppSelector=n.useSelector},9790:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.removeUsersFromDepartment=t.addUsersToDepartment=t.deleteDepartment=t.editDepartment=t.createDepartment=t.fetchDepartments=void 0;const i=r(5184),a=r(4809),o=r(8065);t.fetchDepartments=(0,i.createAsyncThunk)("departments/fetchDepartments",((e,t)=>n(void 0,void 0,void 0,(function*(){try{const e=(yield a.uspacySdk.tokensService.getUserRoles().catch((()=>{})))||[],t=a.uspacySdk.usersService.hasRole(e,[o.MainRoles.ADMIN,o.MainRoles.OWNER])?"all":void 0;return(yield a.uspacySdk.departmentsService.getDepartments(void 0,"all",t)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.createDepartment=(0,i.createAsyncThunk)("departments/createDepartment",(({name:e,headId:t,description:r,usersIds:i,parentDepartmentId:o,generalDepartmentId:s},c)=>n(void 0,void 0,void 0,(function*(){try{return(yield a.uspacySdk.departmentsService.createDepartment({name:e,headId:t,description:r,usersIds:i,parentDepartmentId:o||s.toString()})).data}catch(e){return c.rejectWithValue("Failure")}})))),t.editDepartment=(0,i.createAsyncThunk)("departments/editDepartment",(({id:e,name:t,headId:r,description:i,usersIds:o,parentDepartmentId:s},c)=>n(void 0,void 0,void 0,(function*(){try{return(yield a.uspacySdk.departmentsService.updateDepartment(e,{name:t,headId:r,description:i,parentDepartmentId:s,usersIds:o})).data}catch(e){return c.rejectWithValue("Failure")}})))),t.deleteDepartment=(0,i.createAsyncThunk)("departments/deleteDepartment",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return a.uspacySdk.departmentsService.deleteDepartment(e)}catch(e){return t.rejectWithValue("Failure")}finally{return e}})))),t.addUsersToDepartment=(0,i.createAsyncThunk)("departments/addUsersToDepartment",(({departmentId:e,usersIds:t},r)=>n(void 0,void 0,void 0,(function*(){try{return a.uspacySdk.departmentsService.addUsersToDepartment(String(e),t)}catch(e){return r.rejectWithValue("Failure")}})))),t.removeUsersFromDepartment=(0,i.createAsyncThunk)("departments/removeUsersFromDepartment",(({departmentId:e,usersIds:t},r)=>n(void 0,void 0,void 0,(function*(){try{return a.uspacySdk.departmentsService.deleteUsersFromDepartment(String(e),t)}catch(e){return r.rejectWithValue("Failure")}}))))},995:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.removeTemplate=t.updateTemplate=t.createTemplate=t.fetchBasicTemplates=t.fetchTemplates=t.removeRequisite=t.updateRequisite=t.fetchRequisites=t.fetchProfile=void 0;const i=r(5184),a=r(4809);t.fetchProfile=(0,i.createAsyncThunk)("profile/fetchProfile",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield a.uspacySdk.profileService.getProfile()).data}catch(e){return t.rejectWithValue(e)}})))),t.fetchRequisites=(0,i.createAsyncThunk)("crm/fetchRequisites",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield a.uspacySdk.profileService.getRequisites()).data}catch(e){return t.rejectWithValue(e)}})))),t.updateRequisite=(0,i.createAsyncThunk)("crm/updateRequisite",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield a.uspacySdk.profileService.updateRequisite(e)).data}catch(e){return t.rejectWithValue(e)}})))),t.removeRequisite=(0,i.createAsyncThunk)("crm/removeRequisite",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return yield a.uspacySdk.profileService.removeRequisite(e),e}catch(e){return t.rejectWithValue(e)}})))),t.fetchTemplates=(0,i.createAsyncThunk)("crm/fetchTemplates",((e,t)=>n(void 0,void 0,void 0,(function*(){const{page:r,list:n}=e;try{return(yield a.uspacySdk.profileService.getTemplates(r,n)).data}catch(e){return t.rejectWithValue(e)}})))),t.fetchBasicTemplates=(0,i.createAsyncThunk)("crm/fetchBasicTemplates",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield a.uspacySdk.profileService.getBasicTemplates()).data}catch(e){return t.rejectWithValue(e)}})))),t.createTemplate=(0,i.createAsyncThunk)("crm/createTemplate",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield a.uspacySdk.profileService.createTemplate(e)).data}catch(e){return t.rejectWithValue(e)}})))),t.updateTemplate=(0,i.createAsyncThunk)("crm/updateTemplate",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield a.uspacySdk.profileService.updateTemplate(e)).data}catch(e){return t.rejectWithValue(e)}})))),t.removeTemplate=(0,i.createAsyncThunk)("crm/removeTemplate",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return yield a.uspacySdk.profileService.removeTemplate(e),e}catch(e){return t.rejectWithValue(e)}}))))},8508:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}c((n=n.apply(e,t||[])).next())}))},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.uploadAvatar=t.deleteInvitation=t.repeatInvitation=t.sendUserInvites=t.activateUser=t.deactivateUser=t.updateUserRoles=t.updateUserPosition=t.updateUser=t.fetchUsers=void 0;const a=r(5184),o=r(4809),s=r(8065);t.fetchUsers=(0,a.createAsyncThunk)("users/fetchUsers",((e,t)=>n(void 0,void 0,void 0,(function*(){try{const e=(yield o.uspacySdk.tokensService.getUserRoles().catch((()=>{})))||[],t=o.uspacySdk.usersService.hasRole(e,[s.MainRoles.ADMIN,s.MainRoles.OWNER])?"all":void 0;return(yield o.uspacySdk.usersService.getUsers(void 0,"all",t)).data}catch(e){return t.rejectWithValue("Failure load users")}})))),t.updateUser=(0,a.createAsyncThunk)("users/updateUser",((e,t)=>n(void 0,void 0,void 0,(function*(){try{const{id:t}=e,r=i(e,["id"]),n=yield o.uspacySdk.usersService.updateUser(t,r);return e.active||e.registered||(n.data.dateOfInvitation=e.dateOfInvitation),n.data}catch(e){return t.rejectWithValue("Failure")}})))),t.updateUserPosition=(0,a.createAsyncThunk)("users/updateUserPosition",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield o.uspacySdk.usersService.updatePosition(e.id,e.position)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.updateUserRoles=(0,a.createAsyncThunk)("users/updateUserRoles",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield o.uspacySdk.usersService.updateRoles(e.id,e.roles)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.deactivateUser=(0,a.createAsyncThunk)("users/deactivateUser",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield o.uspacySdk.usersService.deactivateUser(e)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.activateUser=(0,a.createAsyncThunk)("users/activateUser",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield o.uspacySdk.usersService.activateUser(e)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.sendUserInvites=(0,a.createAsyncThunk)("users/sendUserInvites",(({invites:e,type:r},i)=>n(void 0,void 0,void 0,(function*(){try{return"single"===r?o.uspacySdk.invatesService.createInvates(e.reduce(((e,t)=>t.email.length>0?[...e,{email:t.email,firstName:t.firstName,lastName:t.lastName}]:e),[])):o.uspacySdk.invatesService.createInvatesBatch(e.reduce(((e,t)=>t.email.length>0?[...e,t.email]:e),[]))}catch(e){return i.rejectWithValue("Failure")}finally{return i.dispatch((0,t.fetchUsers)())}})))),t.repeatInvitation=(0,a.createAsyncThunk)("users/repeatInvitation",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return yield o.uspacySdk.invatesService.resendInvateByUserId(e),e}catch(e){return t.rejectWithValue("Failure")}})))),t.deleteInvitation=(0,a.createAsyncThunk)("users/deleteInvitation",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return o.uspacySdk.invatesService.deleteInvateByUserId(e)}catch(e){return t.rejectWithValue("Failure")}finally{return e}})))),t.uploadAvatar=(0,a.createAsyncThunk)("users/uploadAvatar",(({file:e,userId:t,adminRole:r,profileId:i},{rejectWithValue:a})=>n(void 0,void 0,void 0,(function*(){try{return(yield o.uspacySdk.usersService.uploadAvatar({file:e,userId:r&&t!==i?t:i})).data}catch(e){return a("Failure")}}))))},5184:e=>{e.exports=r(9613)},4809:e=>{e.exports=r(5295)},8065:e=>{e.exports=r(771)},6689:e=>{e.exports=r(1527)},6022:e=>{e.exports=r(3512)}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,i),a.exports}var a={};(()=>{var e=a;Object.defineProperty(e,"__esModule",{value:!0});const t=i(6689),r=i(641),n=i(9790),o=i(995),s=i(8508);e.default=()=>{const e=(0,r.useAppDispatch)();return(0,t.useEffect)((()=>{e((0,o.fetchProfile)()),e((0,s.fetchUsers)()),e((0,n.fetchDepartments)())}),[]),null}})(),e.exports=a})()},5495:(e,t,r)=>{"use strict";r.r(t);var n=r(4848),i=r(7988),a=r(3817),o=r.n(a),s=r(5338),c=r(4408),u=r(1527),l=r(2339),d=r(7314),p=(0,d.openDB)("Uspacy"),h=r(3062),f=r.n(h),v=r(612),y=r.n(v);f().use(l.initReactI18next).use(y()((function(e,t,n){r(2096)("./".concat(e,"/").concat(t,".json")).then((function(e){n(null,e)})).catch((function(e){n(e,null)}))}))).init({fallbackLng:"uk"});const m=f();var x=(0,u.createContext)({});const b=function(e){var t=e.children,r=e.userSettings;return(0,n.jsx)(x.Provider,{value:{userSettings:r},children:t})};var g=(0,u.createContext)({});const j=function(e){var t=e.children,r=(0,u.useContext)(x).userSettings;return(0,u.useEffect)((function(){m.changeLanguage(null==r?void 0:r.lang)}),[null==r?void 0:r.lang]),(0,n.jsx)(g.Provider,{value:{userSettings:r},children:(0,n.jsx)(l.I18nextProvider,{i18n:m,children:t})})},S=function(e){var t=e.children,r=e.userSettings;return(0,n.jsx)(b,{userSettings:r,children:(0,n.jsx)(j,{children:t})})};var k=r(3700),T=r.n(k);const I=function(){return(0,n.jsxs)(c.Box,{children:[(0,n.jsx)(T(),{videoId:"RjQomY4YRWs",style:{maxWidth:"100%",display:"flex",justifyContent:"center",marginBottom:"1rem"}}),(0,n.jsxs)(c.Box,{sx:{marginBottom:4},children:[(0,n.jsx)(c.Typography,{gutterBottom:!0,variant:"h5",component:"div",children:"КРОК 1 - підключення Uspacy до акаунту LeadBox"}),(0,n.jsxs)(c.Typography,{gutterBottom:!0,component:"div",children:["Зареєструйте акаунт в сервісі"," ",(0,n.jsx)(c.Link,{href:"https://my.leadbox.com.ua",target:"_blank",children:"my.leadbox.com.ua"}),", якщо вже маєте його, то авторизуйтесь в ньому та перейдіть на сторінку"," ",(0,n.jsx)(c.Link,{href:"https://my.leadbox.com.ua",target:"_blank",children:"Інтеграції"}),"."]}),(0,n.jsx)(c.Typography,{component:"div",children:"Оберіть інтеграцію з Uspacy (якщо створювали її раніше), або ж створіть нову. Для цього:"}),(0,n.jsxs)(c.List,{children:[(0,n.jsx)(c.ListItem,{sx:{paddingY:0},children:(0,n.jsx)(c.ListItemText,{primary:"➡️ оберіть 'Додати інтеграцію'"})}),(0,n.jsx)(c.ListItem,{sx:{paddingY:0},children:(0,n.jsx)(c.ListItemText,{primary:(0,n.jsxs)(n.Fragment,{children:["➡️ оберіть розділ ",(0,n.jsx)("span",{style:{color:"purple"},children:"CRM"})]})})}),(0,n.jsx)(c.ListItem,{sx:{paddingY:0},children:(0,n.jsx)(c.ListItemText,{primary:(0,n.jsxs)(n.Fragment,{children:["➡️ натисніть ",(0,n.jsx)("span",{style:{color:"purple"},children:"Uspacy"})]})})}),(0,n.jsx)(c.ListItem,{sx:{paddingY:0},children:(0,n.jsx)(c.ListItemText,{primary:"➡️ введіть потрібну вам назву"})}),(0,n.jsx)(c.ListItem,{sx:{paddingY:0},children:(0,n.jsx)(c.ListItemText,{primary:(0,n.jsxs)(n.Fragment,{children:["➡️ скопіюте отриманий ",(0,n.jsx)("span",{style:{color:"purple"},children:"Api ключ"})]})})}),(0,n.jsx)(c.ListItem,{sx:{paddingY:0},children:(0,n.jsx)(c.ListItemText,{primary:(0,n.jsxs)(n.Fragment,{children:["➡️ вставте ключ в форму вище і натисніть",(0,n.jsx)("span",{style:{color:"purple",border:"1px solid purple",display:"inline-flex",padding:"0.25rem 1rem",borderRadius:"3px",marginLeft:"0.5rem",letterSpacing:"1px",fontSize:"14px"},children:"Підключити"})]})})})]})]}),(0,n.jsxs)(c.Box,{children:[(0,n.jsx)(c.Typography,{gutterBottom:!0,variant:"h5",component:"div",children:"КРОК 2 - підключення інтеграції Webhook"}),(0,n.jsxs)(c.List,{children:[(0,n.jsx)(c.ListItem,{sx:{paddingY:0},children:(0,n.jsx)(c.ListItemText,{primary:"➡️ Зайдіть на сторінку інтеграції в LeadBox"})}),(0,n.jsx)(c.ListItem,{sx:{paddingY:0},children:(0,n.jsx)(c.ListItemText,{primary:"➡️ Натисніть 'Додати інтеграцію' та оберіть з переліку Web сайт → Webhook"})}),(0,n.jsx)(c.ListItem,{sx:{paddingY:0},children:(0,n.jsx)(c.ListItemText,{primary:"➡️ Дайте назву інтеграції"})}),(0,n.jsx)(c.ListItem,{sx:{paddingY:0},children:(0,n.jsx)(c.ListItemText,{primary:(0,n.jsxs)(n.Fragment,{children:["➡️ Заповніть налаштування згідно з цією"," ",(0,n.jsx)(c.Link,{href:"https://leadbox.crunch.help/uk/intieghratsiyi-z-dzhierielami-otrimannia-zaiavok/pidkliuchiennia-web-hook",target:"_blank",children:"інструкцією"}),"."]})})})]})]}),(0,n.jsxs)(c.Box,{sx:{marginTop:4},children:[(0,n.jsxs)(c.Typography,{component:"div",children:["Якщо у вас виникнуть питання: - пишіть нам в 💬 тех.підтримки у вашому акаунті"," ",(0,n.jsx)(c.Link,{href:"https://my.leadbox.com.ua",target:"_blank",children:"my.leadbox.com.ua"})," ","або:"]}),(0,n.jsxs)(c.Typography,{component:"div",children:["✉️ ",(0,n.jsx)(c.Link,{href:"mailto:office@leadbox.com.ua",children:"office@leadbox.com.ua"})]}),(0,n.jsxs)(c.Typography,{component:"div",children:["📱 ",(0,n.jsx)(c.Link,{href:"tel:+380933164008",children:"+38 (093) 316-40-08"})]})]})]})};var w=function(){return w=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},w.apply(this,arguments)},_=function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}c((n=n.apply(e,t||[])).next())}))},A=function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},R="MISSING_ENV_VAR".AUTH_LEADBOX_URL||"https://auth.dev.leadbox.com.ua",U=function(){var e,t,r,i=(0,u.useState)({installed:!1,apiKey:"",isConnected:!1}),a=i[0],o=i[1],s=(0,u.useState)(!1),d=s[0],h=s[1],f=(0,u.useState)(!1),v=f[0],y=f[1],m=(0,u.useState)(""),x=m[0],b=m[1],g=(0,l.useTranslation)("settings").t,j=function(e,t,r){return _(void 0,void 0,void 0,(function(){return A(this,(function(n){return[2,new Promise((function(n){var i={"Accept-Language":"uk","Content-Type":"application/json"};t&&(i.Authorization="Bearer ".concat(t)),fetch(e,w({headers:i},r)).then((function(e){return e.json()})).then(n).catch((function(){n({apiKey:"",isConnected:!1,installed:!1})}))}))]}))}))},S=function(){return _(void 0,void 0,void 0,(function(){var e,t,r;return A(this,(function(n){switch(n.label){case 0:return[4,("token",i=void 0,a=void 0,o=void 0,s=function(){return function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(e){switch(e.label){case 0:return[4,p];case 1:return[4,e.sent().get("tokens","token")];case 2:return[2,e.sent()]}}))},new(o||(o=Promise))((function(e,t){function r(e){try{c(s.next(e))}catch(e){t(e)}}function n(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(r,n)}c((s=s.apply(i,a||[])).next())})))];case 1:return e=n.sent(),[4,j("/apps/v1/apps?code[]=do_it_well_lead_box",e)];case 2:return t=n.sent(),[4,k()];case 3:return n.sent(),[2,(null===(r=null==t?void 0:t.data[0])||void 0===r?void 0:r.integration_token)||""]}var i,a,o,s}))}))},k=function(e){return void 0===e&&(e=1e3),new Promise((function(t){return setTimeout(t,e)}))};(0,u.useEffect)((function(){_(void 0,void 0,void 0,(function(){var e,t;return A(this,(function(r){switch(r.label){case 0:return h(!0),[4,S()];case 1:return e=r.sent(),[4,j("".concat(R,"/portals/settings"),e)];case 2:return t=r.sent(),o(t),h(!1),[2]}}))}))}),[]);var T=(null==a?void 0:a.isConnected)?{backgroundColor:"#d2f7b6",color:"#58ca00"}:{backgroundColor:"#ffdada",color:"#f00"};return(0,n.jsxs)(c.Box,{children:[(0,n.jsxs)(c.Box,{children:[(0,n.jsx)(c.Box,{sx:{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"1rem"},children:(0,n.jsx)(c.Typography,{sx:w(w({},T),{display:"inline-flex",fontSize:"12px",letterSpacing:"1px",padding:"0.1rem 0.75rem",borderRadius:"1rem"}),children:(null==a?void 0:a.isConnected)?g("connected"):g("notConnected")})}),(0,n.jsx)(c.Typography,{variant:"subtitle2",sx:{fontWeight:"bold",paddingLeft:"1rem"},children:g("LABEL_API_KEY")}),(0,n.jsxs)(c.Box,{sx:{display:"flex",justifyContent:"center",gap:"1rem"},component:"form",onSubmit:function(e){return _(void 0,void 0,void 0,(function(){var t,r,n;return A(this,(function(i){switch(i.label){case 0:return e.preventDefault(),h(!0),[4,S()];case 1:return t=i.sent(),[4,j("".concat(R,"/portals/settings"),t,{method:"POST",body:JSON.stringify({apiKey:null===(n=a.apiKey)||void 0===n?void 0:n.trim()})})];case 2:return(r=i.sent()).error?b(r.message):o(r),h(!1),y(!1),[2]}}))}))},children:[(0,n.jsx)(c.Input,{sx:{width:"100%",border:"1px solid #ddd",outline:"none",borderRadius:"4px",paddingLeft:"1rem",paddingRight:"1rem","&:before":{content:"none"},"&:after":{content:"none"}},disabled:d,placeholder:g("integrationApiKey"),value:a.apiKey||"",onChange:function(e){b(""),o(w(w({},a),{apiKey:e.target.value})),y(!0)}}),(0,n.jsxs)(c.Button,{disableElevation:!0,variant:(null===(e=a.apiKey)||void 0===e?void 0:e.trim())&&v?"contained":"outlined",type:"submit",disabled:d||!(null===(t=a.apiKey)||void 0===t?void 0:t.trim())||!v,sx:{backgroundColor:"#58ca00",border:"1px solid #58ca00",padding:"5px 2rem",textTransform:"none",letterSpacing:"1px","&:hover":{backgroundColor:"#58ca00"},"&:disabled":{backgroundColor:(null===(r=a.apiKey)||void 0===r?void 0:r.trim())&&v?"#d2f7b6":"transparent",color:"#58ca00",borderColor:"#58ca00"}},children:[g("connect"),d&&(0,n.jsx)(c.CircularProgress,{size:22,sx:{color:"#58ca00",position:"absolute",zIndex:1}})]})]}),(0,n.jsx)(c.Box,{sx:{position:"relative",height:"1rem",marginBottom:"1rem"},children:(0,n.jsx)(c.Typography,{variant:"subtitle2",sx:{color:"red",position:"absolute",left:0,top:0,fontSize:"11px",paddingLeft:"1rem"},children:g(x)})&&x})]}),(0,n.jsx)(I,{})]})};const L=function(e){var t=e.userSettings;return(0,n.jsx)(S,{userSettings:t,children:(0,n.jsx)(U,{})})};var D,P,O=r(5295);P=function(){var e;return function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(t){switch(t.label){case 0:return[4,(r="MISSING_ENV_VAR".PORTAL_AUTH_EMAIL,a="MISSING_ENV_VAR".PORTAL_AUTH_PASSWORD,new Promise((function(e,t){return n=void 0,i=void 0,s=function(){var n;return function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(i){switch(i.label){case 0:return[2,e()];case 1:return i.trys.push([1,3,,4]),[4,O.uspacySdk.authService.login({email:r,password:a})];case 2:return i.sent(),e(),[3,4];case 3:return n=i.sent(),t(n),[3,4];case 4:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{c(s.next(e))}catch(e){t(e)}}function a(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,a)}c((s=s.apply(n,i||[])).next())}));var n,i,o,s})))];case 1:return t.sent(),e=document.getElementById("root"),(0,s.H)(e).render((0,n.jsxs)(i.StoreProvider,{children:[(0,n.jsx)(o(),{}),(0,n.jsx)(L,{})]})),[2]}var r,a}))},new((D=void 0)||(D=Promise))((function(e,t){function r(e){try{i(P.next(e))}catch(e){t(e)}}function n(e){try{i(P.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof D?i:new D((function(e){e(i)}))).then(r,n)}i((P=P.apply(void 0,[])).next())}))},5338:(e,t,r)=>{"use strict";var n=r(5929);t.H=n.createRoot,n.hydrateRoot},1020:(e,t,r)=>{"use strict";var n=r(1527),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,a={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:u,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},4848:(e,t,r)=>{"use strict";e.exports=r(1020)},2096:(e,t,r)=>{var n={"./en-US/settings.json":[2127,127],"./en-US/translation.json":[9833,833],"./pl/settings.json":[4031,31],"./pl/translation.json":[7561,561],"./pt-BR/settings.json":[2512,512],"./pt-BR/translation.json":[5804,804],"./uk/settings.json":[3559,559],"./uk/translation.json":[6769,769]};function i(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return r.e(t[1]).then((()=>r.t(i,19)))}i.keys=()=>Object.keys(n),i.id=2096,e.exports=i}}]);
//# sourceMappingURL=495.1acc3d36.chunk.js.map