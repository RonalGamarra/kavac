(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"KHd+":function(t,a,s){"use strict";function i(t,a,s,i,e,o,l,r){var d,n="function"==typeof t?t.options:t;if(a&&(n.render=a,n.staticRenderFns=s,n._compiled=!0),i&&(n.functional=!0),o&&(n._scopeId="data-v-"+o),l?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},n._ssrRegister=d):e&&(d=r?function(){e.call(this,this.$root.$options.shadowRoot)}:e),d)if(n.functional){n._injectStyles=d;var c=n.render;n.render=function(t,a){return d.call(a),c(t,a)}}else{var p=n.beforeCreate;n.beforeCreate=p?[].concat(p,d):[d]}return{exports:t,options:n}}s.d(a,"a",function(){return i})},aKYc:function(t,a,s){"use strict";s.r(a);var i={data:function(){return{records:[],record:[],columns:["first_name","last_name","id_number","email","id"]}},created:function(){this.table_options.headings={first_name:"Nombres",last_name:"Apellidos",id_number:"Cédula de Identidad",email:"Correo Electrónico",id:"Acción"},this.table_options.sortable=["first_name","last_name","id_number"],this.table_options.filterable=["first_name","last_name","id_number"]},mounted:function(){this.initRecords(this.route_list,"")},methods:{reset:function(){},show_info:function(t){var a=this;axios.get("/payroll/staffs/"+t).then(function(t){a.record=t.data.record,$("#code").val(a.record.code),$("#payroll_staff").val(a.record.first_name+" "+a.record.last_name),$("#payroll_nationality").val(a.record.payroll_nationality.name),$("#id_number").val(a.record.id_number),$("#passport").val(a.record.passport),$("#email").val(a.record.email),$("#birthdate").val(a.record.birthdate),$("#age").val(t.data.age),$("#payroll_gender").val(a.record.payroll_gender.name),$("#emergency_contact").val(a.record.emergency_contact),$("#emergency_phone").val(a.record.emergency_phone),a.record.has_disability?$("#has_disability").bootstrapSwitch("state",!0):$("#has_disability").bootstrapSwitch("state",!1),$("#disability").val(a.record.disability),$("#payroll_blood_type").val(a.record.payroll_blood_type.name),$("#social_security").val(a.record.social_security),a.record.has_driver_license?$("#has_driver_license").bootstrapSwitch("state",!0):$("#has_driver_license").bootstrapSwitch("state",!1),$("#payroll_license_degree").val(a.record.payroll_license_degree?a.record.payroll_license_degree.name:" "),$("#country").val(a.record.parish.municipality.estate.country.name),$("#estate").val(a.record.parish.municipality.estate.name),$("#municipality").val(a.record.parish.municipality.name),$("#parish").val(a.record.parish.name),$("#address").val(a.record.address)}),$("#show_staff").modal("show")}}},e=s("KHd+"),o=Object(e.a)(i,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("v-client-table",{attrs:{columns:t.columns,data:t.records,options:t.table_options},scopedSlots:t._u([{key:"id",fn:function(a){return s("div",{staticClass:"text-center"},[t.route_show?s("button",{staticClass:"btn btn-info btn-xs btn-icon btn-action btn-tooltip",attrs:{title:"Ver registro","data-toggle":"tooltip","data-placement":"bottom",type:"button"},on:{click:function(s){return t.show_info(a.row.id)}}},[s("i",{staticClass:"fa fa-eye"})]):t._e(),t._v(" "),a.row.assigned?t._e():s("button",{staticClass:"btn btn-warning btn-xs btn-icon btn-action btn-tooltip",attrs:{title:"Modificar registro","data-toggle":"tooltip","data-placement":"bottom",type:"button"},on:{click:function(s){return t.editForm(a.row.id)}}},[s("i",{staticClass:"fa fa-edit"})]),t._v(" "),s("button",{staticClass:"btn btn-danger btn-xs btn-icon btn-action btn-tooltip",attrs:{title:"Eliminar registro","data-toggle":"tooltip","data-placement":"bottom",type:"button"},on:{click:function(s){return t.deleteRecord(a.index,"")}}},[s("i",{staticClass:"fa fa-trash-o"})])])}}])}),t._v(" "),s("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"show_staff"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),s("div",{staticClass:"modal-body"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("¿Posee una Discapacidad?")]),t._v(" "),s("div",{staticClass:"col-12 bootstrap-switch-mini"},[s("input",{staticClass:"form-control bootstrap-switch",attrs:{id:"has_disability","data-on-label":"SI","data-off-label":"NO",type:"checkbox"},domProps:{value:t.record.has_disability}})])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.record.has_disability,expression:"record.has_disability"}],staticClass:"col-md-4"},[t._m(5)]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("¿Posee Licencia de Conducir?")]),t._v(" "),s("div",{staticClass:"col-12 bootstrap-switch-mini"},[s("input",{staticClass:"form-control bootstrap-switch",attrs:{id:"has_driver_license","data-on-label":"SI","data-off-label":"NO",type:"checkbox"},domProps:{value:t.record.has_driver_license}})])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.record.has_driver_license,expression:"record.has_driver_license"}],staticClass:"col-md-4"},[t._m(8)])]),t._v(" "),s("hr"),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("hr"),t._v(" "),s("h6",{staticClass:"card-title"},[t._v("\n                        Números Telefónicos")]),t._v(" "),t._l(t.record.phones,function(a){return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Tipo")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"type"},domProps:{value:a.type}})])]),t._v(" "),s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Código de Área")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"area_code"},domProps:{value:a.area_code}})])]),t._v(" "),s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Número")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"number"},domProps:{value:a.number}})])]),t._v(" "),s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Extensión")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"extension"},domProps:{value:a.extension}})])])])})],2)])])])],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),a("h6",[a("i",{staticClass:"icofont icofont-read-book ico-2x"}),this._v("\n                        Información Detallada de Datos Personales\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Código")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"code"}})])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Trabajador")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"payroll_staff"}})])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Nacionalidad")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"payroll_nationality"}})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Cédula de Identidad")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"id_number"}})])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Pasaporte")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"passport"}})])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Correo Electrónico")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"email"}})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Fecha de Nacimiento")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"birthdate"}})])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Edad")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"age"}})])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Género")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"payroll_gender"}})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[this._v("Nombres y Apellidos de la Persona de Contacto")]),this._v(" "),a("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"emergency_contact"}})])]),this._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[this._v("Teléfono de la Persona de Contacto")]),this._v(" "),a("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"emergency_phone"}})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-group"},[a("label",[this._v("Discapacidad")]),this._v(" "),a("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"disability"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[this._v("Tipo de Sangre")]),this._v(" "),a("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"payroll_blood_type"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[this._v("Seguro Social")]),this._v(" "),a("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"social_security"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-group"},[a("label",[this._v("Grado de la Licencia de Conducir")]),this._v(" "),a("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"payroll_license_degree"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("País")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"country"}})])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Estado")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"estate"}})])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Municipio")]),t._v(" "),s("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"municipality"}})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[this._v("Parroquia")]),this._v(" "),a("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"parish"}})])]),this._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[this._v("Dirección")]),this._v(" "),a("input",{staticClass:"form-control input-sm",attrs:{type:"text","data-toggle":"tooltip",disabled:"true",id:"address"}})])])])}],!1,null,null,null);a.default=o.exports}}]);