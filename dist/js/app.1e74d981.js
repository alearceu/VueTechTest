(function(e){function t(t){for(var a,r,s=t[0],l=t[1],d=t[2],u=0,c=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(t);while(c.length)c.shift()();return n.push.apply(n,d||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,s=1;s<o.length;s++){var l=o[s];0!==i[l]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=o[0]))}return e}var a={},i={app:0},n=[];function r(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=a,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var m=l;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"05b5":function(e,t,o){},"44c0":function(e,t,o){"use strict";var a=o("7053"),i=o.n(a);i.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"centered-container"},[o("md-content",{staticClass:"md-elevation-3"},[o("PersonalData"),o("Dialog")],1),o("div",{staticClass:"background"})],1)])},n=[],r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("form",{staticClass:"md-layout",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.validateUser(t)}}},[o("md-card",[o("md-card-header",[o("div",{staticClass:"md-subheading"},[e._v("Datos personales")])]),o("md-card-content",[o("div",{staticClass:"md-layout md-gutter"},[o("div",{staticClass:"md-layout-item md-size-15"},[o("md-avatar",{staticClass:"md-avatar-icon md-large"},[o("font-awesome-icon",{attrs:{icon:"camera"}})],1)],1),o("div",{staticClass:"md-layout-item md-large-size-40 md-medium-size-40 md-small-size-40 md-xsmall-size-100"},[o("md-field",{class:e.getValidationClass("firstName")},[o("md-input",{staticClass:"biggerLabel",attrs:{id:"name",placeholder:"Nombre*",disabled:e.sending},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}}),e.$v.form.firstName.required?e.$v.form.firstName.minlength?e._e():o("span",{staticClass:"md-error"},[e._v("Nombre inválido")]):o("span",{staticClass:"md-error"},[e._v("El nombre es requerido")])],1)],1),o("div",{staticClass:"md-layout-item md-large-size-40 md-medium-size-40 md-small-size-40 md-xsmall-size-100"},[o("md-field",[o("md-input",{staticClass:"biggerLabel",attrs:{id:"name",placeholder:"Apellidos",disabled:e.sending},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})],1)],1)]),o("div",{staticClass:"md-layout md-gutter"},[o("div",{staticClass:"md-layout-item md-size-15"}),o("div",{staticClass:"md-layout-item md-large-size-55 md-medium-size-55 md-small-size-55 md-xsmall-size-100"},[o("ul",[o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],attrs:{type:"radio",id:"radioFem",value:"Femenino"},domProps:{checked:e._q(e.form.gender,"Femenino")},on:{change:function(t){return e.$set(e.form,"gender","Femenino")}}}),o("label",{staticClass:"genderLabel",attrs:{id:"radioLabel",for:"radioFem"}},[o("font-awesome-icon",{attrs:{icon:"female"}}),e._v(" Femenino")],1)]),o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],attrs:{type:"radio",id:"radioMale",value:"Masculino"},domProps:{checked:e._q(e.form.gender,"Masculino")},on:{change:function(t){return e.$set(e.form,"gender","Masculino")}}}),o("label",{staticClass:"genderLabel",attrs:{id:"radioLabel",for:"radioMale"}},[o("font-awesome-icon",{attrs:{icon:"male"}}),e._v(" Masculino")],1)])])])]),o("div",{staticClass:"md-layout md-gutter"},[o("div",{staticClass:"md-layout-item md-large-size-55 md-medium-size-55 md-small-size-55 md-xsmall-size-100"},[o("md-field",[o("label",{attrs:{for:"idType"}},[e._v("Tipo de identificación")]),o("md-select",{attrs:{id:"idType","md-dense":"",disabled:e.sending},model:{value:e.form.idType,callback:function(t){e.$set(e.form,"idType",t)},expression:"form.idType"}},e._l(e.selectOptions,(function(t){return o("md-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1)],1),o("md-button",{staticClass:"button-add",style:{visibility:e.hideButton},attrs:{disabled:e.sending},on:{click:function(t){e.active=!0}}},[e._v("AGREGAR OTRA IDENTIFICACIÓN")])],1),o("div",{staticClass:"md-layout-item md-large-size-40 md-medium-size-40 md-small-size-40 md-xsmall-size-100"},[o("md-field",[o("label",{attrs:{for:"idNumber"}},[e._v("Número de identificación")]),o("md-input",{attrs:{id:"idNumber",disabled:e.sending},model:{value:e.form.idNumber,callback:function(t){e.$set(e.form,"idNumber",t)},expression:"form.idNumber"}})],1)],1)]),o("md-dialog-prompt",{attrs:{"md-active":e.active,"md-title":"Nuevo tipo de identificacioón","md-input-placeholder":"Escriba el tipo de identificación...","md-confirm-text":"Done"},on:{"update:mdActive":function(t){e.active=t},"update:md-active":function(t){e.active=t},"md-confirm":e.addSelectOption},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),o("div",{staticClass:"md-layout"},[o("div",{staticClass:"md-layout-item md-large-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100"},[o("label",{attrs:{id:"labelfor",for:"radioLabel"}},[e._v("Tipo de sangre")]),o("ul",{staticClass:"bloodList"},[o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bloodType,expression:"form.bloodType"}],attrs:{type:"radio",id:"radioOPlus",value:"O+"},domProps:{checked:e._q(e.form.bloodType,"O+")},on:{change:function(t){return e.$set(e.form,"bloodType","O+")}}}),o("label",{attrs:{id:"radioLabel",for:"radioOPlus"}},[e._v("O+")])]),o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bloodType,expression:"form.bloodType"}],attrs:{type:"radio",id:"radioOMinus",value:"O-"},domProps:{checked:e._q(e.form.bloodType,"O-")},on:{change:function(t){return e.$set(e.form,"bloodType","O-")}}}),o("label",{attrs:{id:"radioLabel",for:"radioOMinus"}},[e._v("O-")])]),o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bloodType,expression:"form.bloodType"}],attrs:{type:"radio",id:"radioAPlus",value:"A+"},domProps:{checked:e._q(e.form.bloodType,"A+")},on:{change:function(t){return e.$set(e.form,"bloodType","A+")}}}),o("label",{attrs:{id:"radioLabel",for:"radioAPlus"}},[e._v("A+")])]),o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bloodType,expression:"form.bloodType"}],attrs:{type:"radio",id:"radioAMinus",value:"A-"},domProps:{checked:e._q(e.form.bloodType,"A-")},on:{change:function(t){return e.$set(e.form,"bloodType","A-")}}}),o("label",{attrs:{id:"radioLabel",for:"radioAMinus"}},[e._v("A-")])]),o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bloodType,expression:"form.bloodType"}],attrs:{type:"radio",id:"radioBPlus",value:"B+"},domProps:{checked:e._q(e.form.bloodType,"B+")},on:{change:function(t){return e.$set(e.form,"bloodType","B+")}}}),o("label",{attrs:{id:"radioLabel",for:"radioBPlus"}},[e._v("B+")])]),o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bloodType,expression:"form.bloodType"}],attrs:{type:"radio",id:"radioBMinus",value:"B-"},domProps:{checked:e._q(e.form.bloodType,"B-")},on:{change:function(t){return e.$set(e.form,"bloodType","B-")}}}),o("label",{attrs:{id:"radioLabel",for:"radioBMinus"}},[e._v("B-")])]),o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bloodType,expression:"form.bloodType"}],attrs:{type:"radio",id:"radioABPlus",value:"AB+"},domProps:{checked:e._q(e.form.bloodType,"AB+")},on:{change:function(t){return e.$set(e.form,"bloodType","AB+")}}}),o("label",{attrs:{id:"radioLabel",for:"radioABPlus"}},[e._v("AB+")])]),o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bloodType,expression:"form.bloodType"}],attrs:{type:"radio",id:"radioABMinus",value:"AB-"},domProps:{checked:e._q(e.form.bloodType,"AB-")},on:{change:function(t){return e.$set(e.form,"bloodType","AB-")}}}),o("label",{attrs:{id:"radioLabel",for:"radioABMinus"}},[e._v("AB-")])]),o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bloodType,expression:"form.bloodType"}],attrs:{type:"radio",id:"radioDesconocido",value:"Desconocido"},domProps:{checked:e._q(e.form.bloodType,"Desconocido")},on:{change:function(t){return e.$set(e.form,"bloodType","Desconocido")}}}),o("label",{attrs:{id:"radioLabel",for:"radioDesconocido"}},[e._v("Desconocido")])])])])])],1)],1),o("md-card",[o("md-card-header",[o("div",{staticClass:"md-subheading"},[e._v("Datos de contacto")])]),o("md-card-content",[o("div",{staticClass:"md-layout"},[o("div",{staticClass:"md-layout-item md-large-size-55 md-medium-size-55 md-small-size-55 md-xsmall-size-100"},[o("label",{attrs:{id:"labelfor",for:"menu"}},[e._v("Teléfono")]),o("md-field",{class:e.getValidationClass("phoneNumber"),attrs:{name:"menu",id:"menu"}},[o("md-menu",{attrs:{"md-direction":"bottom-start"}},[o("md-button",{staticClass:"menuButton",attrs:{"md-menu-trigger":""}},["mobile"===e.form.phoneType?o("span",[o("span",{staticClass:"myIcons"},[o("font-awesome-icon",{attrs:{icon:"mobile-alt"}})],1),o("span",{staticClass:"myIcons"},[o("font-awesome-icon",{staticClass:"iconDown",attrs:{icon:"angle-down"}})],1)]):o("span",[o("font-awesome-icon",{attrs:{icon:"tty"}}),o("font-awesome-icon",{staticClass:"iconDown",attrs:{icon:"angle-down"}})],1)]),o("md-menu-content",{model:{value:e.form.phoneType,callback:function(t){e.$set(e.form,"phoneType",t)},expression:"form.phoneType"}},[o("md-menu-item",{on:{click:function(t){e.form.phoneType="mobile"}}},[o("font-awesome-icon",{attrs:{icon:"mobile-alt"}})],1),o("md-menu-item",{on:{click:function(t){e.form.phoneType="home"}}},[o("font-awesome-icon",{attrs:{icon:"tty"}})],1)],1)],1),o("md-menu",{attrs:{"md-direction":"bottom-start"}},[o("md-button",{staticClass:"menuButton",attrs:{"md-menu-trigger":""}},["CR"===e.form.phoneExtension?o("span",[e._v("\n                    +506"),o("font-awesome-icon",{staticClass:"iconDown",attrs:{icon:"angle-down"}})],1):o("span",[e._v("\n                    +52"),o("font-awesome-icon",{staticClass:"iconDown",attrs:{icon:"angle-down"}})],1)]),o("md-menu-content",{staticClass:"fa fa-angle-down",model:{value:e.form.phoneExtension,callback:function(t){e.$set(e.form,"phoneExtension",t)},expression:"form.phoneExtension"}},[o("md-menu-item",{on:{click:function(t){e.form.phoneExtension="CR"}}},[e._v("+506")]),o("md-menu-item",{on:{click:function(t){e.form.phoneExtension="MX"}}},[e._v("+52")])],1)],1),o("md-input",{attrs:{placeholder:"Teléfono",name:"phoneNumber",id:"phoneNumber",disabled:e.sending},on:{blur:function(t){return e.$v.form.phoneNumber.$touch()}},model:{value:e.form.phoneNumber,callback:function(t){e.$set(e.form,"phoneNumber",t)},expression:"form.phoneNumber"}}),e.$v.form.phoneNumber.phonePatternCheck?e._e():o("span",{staticClass:"md-error",attrs:{id:"errorPhone"}},[e._v("506 XXXX-XXXX / 52 XX-XXXX-XXXXX")])],1)],1),o("div",{staticClass:"md-layout-item md-large-size-40 md-medium-size-40 md-small-size-40 md-xsmall-size-100",attrs:{id:"emailDiv"}},[o("md-field",{class:e.getValidationClass("email")},[o("label",{attrs:{for:"email"}},[e._v("Correo Electrónico")]),o("md-input",{attrs:{type:"email",name:"email",id:"email",autocomplete:"email",disabled:e.sending},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e.$v.form.email.email?e._e():o("span",{staticClass:"md-error"},[e._v("El correo electrónico es inválido")])],1)],1)]),o("div",{staticClass:"md-layout md-gutter"},[o("div",{staticClass:"md-layout-item md-large-size-40 md-medium-size-40 md-small-size-40 md-xsmall-size-100"},[o("md-button",{staticClass:"button-add",attrs:{disabled:e.sending},on:{click:e.addNewPhoneNumber}},[e._v("AGREGAR OTRO TELÉFONO")])],1)]),o("div",{staticClass:"md-layout endlayout"},[o("md-button",{staticClass:"button-add endlayout",attrs:{type:"submit",disabled:e.sending}},[e._v("Guardar")])],1)])],1),o("md-snackbar",{attrs:{"md-active":e.userSaved},on:{"update:mdActive":function(t){e.userSaved=t},"update:md-active":function(t){e.userSaved=t}}},[e._v("El usuario fue guardado!")]),o("md-snackbar",{attrs:{"md-active":e.addedPhone},on:{"update:mdActive":function(t){e.addedPhone=t},"update:md-active":function(t){e.addedPhone=t}}},[e._v("El teléfono fue agregado!")])],1)])},s=[],l=(o("8e6e"),o("ac6a"),o("456d"),o("6762"),o("2fdb"),o("bd86")),d=o("1dce"),m=o("b5ae"),u=o("2f62");function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function f(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(o,!0).forEach((function(t){Object(l["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var p=/^[0-9]{4}-[0-9]{4}$/g,v=/^[0-9]{2}-[0-9]{4}-[0-9]{4}$/g,b={name:"FormValidation",mixins:[d["validationMixin"]],data:function(){return{form:{firstName:null,lastName:null,gender:null,idType:null,idNumber:null,bloodType:null,phones:[],phoneType:"mobile",phoneExtension:"CR",phoneNumber:null,email:null},userSaved:!1,addedPhone:!1,sending:!1,selectOptions:[{value:"nationalId",label:"Cédula"},{value:"passport",label:"Pasaporte"}],active:!1,value:null,hideButton:"visible"}},computed:f({},Object(u["d"])("userModule",["users"]),{},Object(u["c"])("userModule",["allUsers"])),validations:{form:{firstName:{required:m["required"]},email:{email:m["email"]},phoneNumber:{phonePatternCheck:function(e){var t=this.form.phoneExtension;return/CR/.test(t)&&p.test(e)||/MX/.test(t)&&v.test(e)}}}},methods:f({},Object(u["b"])("userModule",["register","getUsers"]),{addSelectOption:function(){null===this.value||""===this.value?alert("Tipo de identificación vacío"):(this.hideButton="hidden",this.selectOptions.unshift({value:this.value,label:this.value}))},addNewPhoneNumber:function(){if(this.$v.form.phoneNumber.$touch(),!this.$v.form.phoneNumber.$invalid){var e=this.form.phoneType,t=this.form.phoneExtension,o=this.form.phoneNumber,a=[e,t,o];this.form.phones.every((function(e){return a.includes(e)}))&&(this.form.phones.unshift(a),this.addedPhone=!0)}},getValidationClass:function(e){var t=this.$v.form[e];if(t)return{"md-invalid":t.$invalid&&t.$dirty}},clearForm:function(){this.$v.$reset(),this.form.firstName=null,this.form.lastName=null,this.form.gender=null,this.form.idType=null,this.form.idNumber=null,this.form.bloodType=null,this.form.phones=[],this.form.phoneType="mobile",this.form.phoneExtension="CR",this.form.phoneNumber=null,this.form.email=null},saveUser:function(){this.addNewPhoneNumber(),this.sending=!0,this.register(this.form),this.userSaved=!0,this.sending=!1,this.clearForm()},validateUser:function(){this.$v.$touch(),this.$v.$invalid||this.saveUser()}}),created:function(){this.getUsers()}},h=b,y=(o("f171"),o("2877")),g=Object(y["a"])(h,r,s,!1,null,"db296970",null),O=g.exports,T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("md-dialog",{attrs:{"md-active":e.showDialog},on:{"update:mdActive":function(t){e.showDialog=t},"update:md-active":function(t){e.showDialog=t}}},[o("md-dialog-content",[o("md-dialog-title",[e._v("Usuarios")]),o("md-tabs",{attrs:{"md-dynamic-height":""}},[o("md-tab",{attrs:{"md-label":"Información"}},[o("ul",e._l(e.allUsers,(function(t){return o("div",{key:t.idNumber},[o("li",[e._v("\n              "+e._s(t)+"\n            ")])])})),0)])],1)],1),o("md-dialog-actions",[o("md-button",{staticClass:"md-primary",on:{click:function(t){e.showDialog=!1}}},[e._v("Cerrar")])],1)],1),o("md-button",{staticClass:"button-add md-raised",on:{click:e.open}},[e._v("Mostrar Usuarios")])],1)},_=[];function w(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function C(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?w(o,!0).forEach((function(t){Object(l["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var N={name:"DialogCustom",data:function(){return{showDialog:!1}},methods:C({},Object(u["b"])("userModule",["getUsers"]),{open:function(){this.getUsers(),this.showDialog=!0}}),computed:Object(u["c"])("userModule",["allUsers"])},P=N,x=(o("44c0"),Object(y["a"])(P,T,_,!1,null,"0626d63e",null)),$=x.exports,k={name:"app",components:{PersonalData:O,Dialog:$}},z=k,j=(o("5c0b"),Object(y["a"])(z,i,n,!1,null,null,null)),A=j.exports,D={users:[]},B={allUsers:function(e){return e.users}},M={getUsers:function(e){var t=e.commit;D.users=JSON.parse(localStorage.getItem("users")),null===D.users&&(D.users=[]),t("setUsers",D.users)},register:function(e,t){var o=e.commit;o("registerRequest",t),localStorage.setItem("users",JSON.stringify(D.users))}},E={setUsers:function(e,t){return e.users=t},registerRequest:function(e,t){return e.users.unshift(t)}},S={namespaced:!0,state:D,getters:B,actions:M,mutations:E};a["default"].use(u["a"]);var X=new u["a"].Store({modules:{userModule:S}}),L=o("ecee"),q=o("c074"),U=o("ad3d"),R=o("43f9"),F=o.n(R);o("51de"),o("e094");L["c"].add(q["d"],q["c"],q["f"],q["e"],q["a"],q["b"]),a["default"].component("font-awesome-icon",U["a"]),a["default"].config.productionTip=!1,a["default"].use(F.a),new a["default"]({store:X,render:function(e){return e(A)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var a=o("e332"),i=o.n(a);i.a},7053:function(e,t,o){},e332:function(e,t,o){},f171:function(e,t,o){"use strict";var a=o("05b5"),i=o.n(a);i.a}});
//# sourceMappingURL=app.1e74d981.js.map