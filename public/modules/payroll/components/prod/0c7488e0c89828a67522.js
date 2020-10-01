(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{CAOe:function(e,t,i){"use strict";i.r(t);var s={props:{payroll_staff_id:Number},data:function(){return{record:{id:"",first_name:"",last_name:"",payroll_nationality_id:"",id_number:"",passport:"",email:"",birthdate:"",payroll_gender_id:"",has_disability:"",disability:"",payroll_blood_type_id:"",social_security:"",has_driver_license:"",payroll_license_degree_id:"",emergency_contact:"",emergency_phone:"",country_id:"",estate_id:"",municipality_id:"",parish_id:"",address:"",phones:[]},errors:[],payroll_nationalities:[],payroll_genders:[],countries:[],setEstate:"",estates:[],municipalities:[],parishes:[],payroll_license_degrees:[],payroll_blood_types:[]}},methods:{reset:function(){},getStaff:function(){var e=this;axios.get("/payroll/staffs/".concat(e.payroll_staff_id)).then(function(t){e.record=t.data.record})}},created:function(){this.getPayrollNationalities(),this.getPayrollGenders(),this.getCountries(),this.getEstates(),this.getMunicipalities(),this.getPayrollLicenseDegrees(),this.getPayrollBloodTypes(),this.record.has_disability=!1,this.record.has_driver_license=!0,this.record.phones=[]},mounted:function(){this.payroll_staff_id&&this.getStaff(),this.switchHandler("has_disability"),this.switchHandler("has_driver_license")}},a=i("KHd+"),r=Object(a.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header"},[i("h6",{staticClass:"card-title"},[e._v("Registrar los Datos Personales")]),e._v(" "),i("div",{staticClass:"card-btns"},[i("a",{staticClass:"btn btn-sm btn-primary btn-custom",attrs:{href:"#",title:"Ir atrás","data-toggle":"tooltip"},on:{click:function(t){return e.redirect_back(e.route_list)}}},[i("i",{staticClass:"fa fa-reply"})]),e._v(" "),e._m(0)])]),e._v(" "),i("div",{staticClass:"card-body"},[e.errors.length>0?i("div",{staticClass:"alert alert-danger"},[i("ul",e._l(e.errors,function(t){return i("li",[e._v(e._s(t))])}),0)]):e._e(),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Nombres")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.first_name,expression:"record.first_name"}],staticClass:"form-control input-sm",attrs:{type:"text"},domProps:{value:e.record.first_name},on:{input:function(t){t.target.composing||e.$set(e.record,"first_name",t.target.value)}}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.id,expression:"record.id"}],attrs:{type:"hidden"},domProps:{value:e.record.id},on:{input:function(t){t.target.composing||e.$set(e.record,"id",t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Apellidos")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.last_name,expression:"record.last_name"}],staticClass:"form-control input-sm",attrs:{type:"text"},domProps:{value:e.record.last_name},on:{input:function(t){t.target.composing||e.$set(e.record,"last_name",t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Nacionalidad")]),e._v(" "),i("select2",{attrs:{options:e.payroll_nationalities},model:{value:e.record.payroll_nationality_id,callback:function(t){e.$set(e.record,"payroll_nationality_id",t)},expression:"record.payroll_nationality_id"}})],1)])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Cédula de Identidad")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.id_number,expression:"record.id_number"}],staticClass:"form-control input-sm",attrs:{type:"text"},domProps:{value:e.record.id_number},on:{input:function(t){t.target.composing||e.$set(e.record,"id_number",t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",[e._v("Pasaporte")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.passport,expression:"record.passport"}],staticClass:"form-control input-sm",attrs:{type:"text"},domProps:{value:e.record.passport},on:{input:function(t){t.target.composing||e.$set(e.record,"passport",t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",[e._v("Correo Electrónico")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.email,expression:"record.email"}],staticClass:"form-control input-sm",attrs:{type:"email"},domProps:{value:e.record.email},on:{input:function(t){t.target.composing||e.$set(e.record,"email",t.target.value)}}})])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Fecha de Nacimiento")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.birthdate,expression:"record.birthdate"}],staticClass:"form-control input-sm",attrs:{type:"date"},domProps:{value:e.record.birthdate},on:{input:function(t){t.target.composing||e.$set(e.record,"birthdate",t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Género")]),e._v(" "),i("select2",{attrs:{options:e.payroll_genders},model:{value:e.record.payroll_gender_id,callback:function(t){e.$set(e.record,"payroll_gender_id",t)},expression:"record.payroll_gender_id"}})],1)])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",[e._v("Nombres y Apellidos de la Persona de Contacto")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.emergency_contact,expression:"record.emergency_contact"}],staticClass:"form-control input-sm",attrs:{type:"text"},domProps:{value:e.record.emergency_contact},on:{input:function(t){t.target.composing||e.$set(e.record,"emergency_contact",t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",[e._v("Teléfono de la Persona de Contacto")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.emergency_phone,expression:"record.emergency_phone"}],staticClass:"form-control input-sm",attrs:{type:"text",placeholder:"00-000-0000000"},domProps:{value:e.record.emergency_phone},on:{input:function(t){t.target.composing||e.$set(e.record,"emergency_phone",t.target.value)}}})])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",[e._v("¿Posee una Discapacidad?")]),e._v(" "),i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"col-12 bootstrap-switch-mini"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.has_disability,expression:"record.has_disability"}],staticClass:"form-control bootstrap-switch sel_has_disability",attrs:{id:"has_disability",name:"has_disability",type:"checkbox","data-toggle":"tooltip","data-on-label":"SI","data-off-label":"NO",title:"Indique si el trabajador posee una discapacidad o no",value:"true"},domProps:{checked:Array.isArray(e.record.has_disability)?e._i(e.record.has_disability,"true")>-1:e.record.has_disability},on:{change:function(t){var i=e.record.has_disability,s=t.target,a=!!s.checked;if(Array.isArray(i)){var r=e._i(i,"true");s.checked?r<0&&e.$set(e.record,"has_disability",i.concat(["true"])):r>-1&&e.$set(e.record,"has_disability",i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.record,"has_disability",a)}}})])])])]),e._v(" "),e.record.has_disability?i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Discapacidad")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.disability,expression:"record.disability"}],staticClass:"form-control input-sm",attrs:{type:"text",title:"Indique la descripción de la discapacidad"},domProps:{value:e.record.disability},on:{input:function(t){t.target.composing||e.$set(e.record,"disability",t.target.value)}}})])]):e._e(),e._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Tipo de Sangre")]),e._v(" "),i("select2",{attrs:{options:e.payroll_blood_types},model:{value:e.record.payroll_blood_type_id,callback:function(t){e.$set(e.record,"payroll_blood_type_id",t)},expression:"record.payroll_blood_type_id"}})],1)])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",[e._v("Seguro Social")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.social_security,expression:"record.social_security"}],staticClass:"form-control input-sm",attrs:{type:"text",title:"Indique el número de seguro social"},domProps:{value:e.record.social_security},on:{input:function(t){t.target.composing||e.$set(e.record,"social_security",t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",[e._v("¿Posee Licencia de Conducir?")]),e._v(" "),i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"col-12 bootstrap-switch-mini"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.has_driver_license,expression:"record.has_driver_license"}],staticClass:"form-control bootstrap-switch sel_has_driver_license",attrs:{id:"has_driver_license",name:"has_driver_license",type:"checkbox","data-toggle":"tooltip","data-on-label":"SI","data-off-label":"NO",title:"Indique si el trabajador posee licencia de conducir o no",value:"true"},domProps:{checked:Array.isArray(e.record.has_driver_license)?e._i(e.record.has_driver_license,"true")>-1:e.record.has_driver_license},on:{change:function(t){var i=e.record.has_driver_license,s=t.target,a=!!s.checked;if(Array.isArray(i)){var r=e._i(i,"true");s.checked?r<0&&e.$set(e.record,"has_driver_license",i.concat(["true"])):r>-1&&e.$set(e.record,"has_driver_license",i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.record,"has_driver_license",a)}}})])])])]),e._v(" "),e.record.has_driver_license?i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Grado de Licencia de Conducir")]),e._v(" "),i("select2",{attrs:{options:e.payroll_license_degrees},model:{value:e.record.payroll_license_degree_id,callback:function(t){e.$set(e.record,"payroll_license_degree_id",t)},expression:"record.payroll_license_degree_id"}})],1)]):e._e()]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("País")]),e._v(" "),i("select2",{attrs:{options:e.countries,id:"country_id"},on:{input:e.getEstates},model:{value:e.record.country_id,callback:function(t){e.$set(e.record,"country_id",t)},expression:"record.country_id"}})],1)]),e._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Estado")]),e._v(" "),i("select2",{attrs:{options:e.estates,id:"estate_id"},on:{input:e.getMunicipalities},model:{value:e.record.estate_id,callback:function(t){e.$set(e.record,"estate_id",t)},expression:"record.estate_id"}})],1)]),e._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Municipio")]),e._v(" "),i("select2",{attrs:{options:e.municipalities,id:"municipality_id"},on:{input:e.getParishes},model:{value:e.record.municipality_id,callback:function(t){e.$set(e.record,"municipality_id",t)},expression:"record.municipality_id"}})],1)])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Parroquia")]),e._v(" "),i("select2",{attrs:{options:e.parishes,id:"parish_id"},model:{value:e.record.parish_id,callback:function(t){e.$set(e.record,"parish_id",t)},expression:"record.parish_id"}})],1)]),e._v(" "),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group is-required"},[i("label",[e._v("Dirección")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.record.address,expression:"record.address"}],staticClass:"form-control input-sm",attrs:{type:"text"},domProps:{value:e.record.address},on:{input:function(t){t.target.composing||e.$set(e.record,"address",t.target.value)}}})])])]),e._v(" "),i("hr"),e._v(" "),i("h6",{staticClass:"card-title"},[e._v("\n\t\t\t\t\t\tNúmeros Telefónicos "),i("i",{staticClass:"fa fa-plus-circle cursor-pointer",on:{click:e.addPhone}})]),e._v(" "),e._l(e.record.phones,function(t,s){return i("div",{staticClass:"row"},[i("div",{staticClass:"col-3"},[i("div",{staticClass:"form-group is-required"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"phone.type"}],staticClass:"select2",attrs:{"data-toggle":"tooltip",title:"Seleccione el tipo de número telefónico"},on:{change:function(i){var s=Array.prototype.filter.call(i.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"type",i.target.multiple?s:s[0])}}},[i("option",{attrs:{value:""}},[e._v("Seleccione...")]),e._v(" "),i("option",{attrs:{value:"M"}},[e._v("Móvil")]),e._v(" "),i("option",{attrs:{value:"T"}},[e._v("Teléfono")]),e._v(" "),i("option",{attrs:{value:"F"}},[e._v("Fax")])])])]),e._v(" "),i("div",{staticClass:"col-2"},[i("div",{staticClass:"form-group is-required"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.area_code,expression:"phone.area_code"}],staticClass:"form-control input-sm",attrs:{type:"text",placeholder:"Cod. Area","data-toggle":"tooltip",title:"Indique el código de área"},domProps:{value:t.area_code},on:{input:function(i){i.target.composing||e.$set(t,"area_code",i.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-4"},[i("div",{staticClass:"form-group is-required"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"phone.number"}],staticClass:"form-control input-sm",attrs:{type:"text",placeholder:"Número","data-toggle":"tooltip",title:"Indique el número telefónico"},domProps:{value:t.number},on:{input:function(i){i.target.composing||e.$set(t,"number",i.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-2"},[i("div",{staticClass:"form-group is-required"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.extension,expression:"phone.extension"}],staticClass:"form-control input-sm",attrs:{type:"text",placeholder:"Extensión","data-toggle":"tooltip",title:"Indique la extención telefónica (opcional)"},domProps:{value:t.extension},on:{input:function(i){i.target.composing||e.$set(t,"extension",i.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-1"},[i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-sm btn-danger btn-action",attrs:{type:"button",title:"Eliminar este dato","data-toggle":"tooltip"},on:{click:function(t){return e.removeRow(s,e.record.phones)}}},[i("i",{staticClass:"fa fa-minus-circle"})])])])])})],2),e._v(" "),i("div",{staticClass:"card-footer pull-right"},[i("button",{staticClass:"btn btn-default btn-icon btn-round",attrs:{"data-toggle":"tooltip",type:"button",title:"Borrar datos del formulario"},on:{click:e.reset}},[i("i",{staticClass:"fa fa-eraser"})]),e._v(" "),i("button",{staticClass:"btn btn-warning btn-icon btn-round",attrs:{type:"button","data-toggle":"tooltip",title:"Cancelar y regresar"},on:{click:function(t){return e.redirect_back(e.route_list)}}},[i("i",{staticClass:"fa fa-ban"})]),e._v(" "),i("button",{staticClass:"btn btn-success btn-icon btn-round",attrs:{type:"button"},on:{click:function(t){return e.createRecord("payroll/staffs")}}},[i("i",{staticClass:"fa fa-save"})])])])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"card-minimize btn btn-card-action btn-round",attrs:{href:"#",title:"Minimizar","data-toggle":"tooltip"}},[t("i",{staticClass:"now-ui-icons arrows-1_minimal-up"})])}],!1,null,null,null);t.default=r.exports},"KHd+":function(e,t,i){"use strict";function s(e,t,i,s,a,r,o,l){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=i,d._compiled=!0),s&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=c):a&&(c=l?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(d.functional){d._injectStyles=c;var n=d.render;d.render=function(e,t){return c.call(t),n(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}i.d(t,"a",function(){return s})}}]);