(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"KHd+":function(t,e,i){"use strict";function o(t,e,i,o,a,n,s,r){var d,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),o&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),s?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=d):a&&(d=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(t,e){return d.call(e),c(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:l}}i.d(e,"a",function(){return o})},eUHM:function(t,e,i){"use strict";i.r(e);var o={data:function(){return{record:{id:"",name:"",country_id:""},countries:[],errors:[],records:[],columns:["name","country.name","id"]}},methods:{reset:function(){this.record={id:"",name:"",country_id:""}}},created:function(){this.getCountries(),this.table_options.headings={name:"Nombre","country.name":"País",id:"Acción"},this.table_options.sortable=["name"],this.table_options.filterable=["name"],this.table_options.columnsClasses={name:"col-md-5",description:"col-md-5",id:"col-md-2"}}},a=i("KHd+"),n=Object(a.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center"},[i("a",{staticClass:"btn-simplex btn-simplex-md btn-simplex-primary",attrs:{href:"",title:"Registros de nacionalidades","data-toggle":"tooltip"},on:{click:function(e){return t.addRecord("add_payroll_nationality","nationalities",e)}}},[i("i",{staticClass:"icofont icofont-id-card ico-3x"}),t._v(" "),i("span",[t._v("Nacionalidades")])]),t._v(" "),i("div",{staticClass:"modal fade text-left",attrs:{tabindex:"-1",role:"dialog",id:"add_payroll_nationality"}},[i("div",{staticClass:"modal-dialog vue-crud",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),i("div",{staticClass:"modal-body"},[t.errors.length>0?i("div",{staticClass:"alert alert-danger"},[i("ul",t._l(t.errors,function(e){return i("li",[t._v(t._s(e))])}),0)]):t._e(),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group is-required"},[i("label",{attrs:{for:"name"}},[t._v("Nombre:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.record.name,expression:"record.name"}],staticClass:"form-control input-sm",attrs:{type:"text",id:"name",placeholder:"Nombre","data-toggle":"tooltip",title:"Indique el nombre de la nacionalidad (requerido)"},domProps:{value:t.record.name},on:{input:function(e){e.target.composing||t.$set(t.record,"name",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.record.id,expression:"record.id"}],attrs:{type:"hidden",name:"id",id:"id"},domProps:{value:t.record.id},on:{input:function(e){e.target.composing||t.$set(t.record,"id",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group is-required"},[i("label",{attrs:{for:"country_id"}},[t._v("País:")]),t._v(" "),i("select2",{attrs:{id:"country_id",options:t.countries,title:"Seleccione el país (requerido)"},model:{value:t.record.country_id,callback:function(e){t.$set(t.record,"country_id",e)},expression:"record.country_id"}})],1)])])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("div",{staticClass:"form-group"},[i("modal-form-buttons",{attrs:{saveRoute:"payroll/nationalities"}})],1)]),t._v(" "),i("div",{staticClass:"modal-body modal-table"},[i("v-client-table",{attrs:{columns:t.columns,data:t.records,options:t.table_options},scopedSlots:t._u([{key:"id",fn:function(e){return i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-warning btn-xs btn-icon btn-action",attrs:{title:"Modificar registro","data-toggle":"tooltip",type:"button"},on:{click:function(i){return t.initUpdate(e.row.id,i)}}},[i("i",{staticClass:"fa fa-edit"})]),t._v(" "),i("button",{staticClass:"btn btn-danger btn-xs btn-icon btn-action",attrs:{title:"Eliminar registro","data-toggle":"tooltip",type:"button"},on:{click:function(i){return t.deleteRecord(e.row.id,"nationalities")}}},[i("i",{staticClass:"fa fa-trash-o"})])])}}])})],1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),e("h6",[e("i",{staticClass:"icofont icofont-id-card ico-3x"}),this._v("\n\t\t\t\t\t\t\tNacionalidad\n\t\t\t\t\t\t")])])}],!1,null,null,null);e.default=n.exports}}]);