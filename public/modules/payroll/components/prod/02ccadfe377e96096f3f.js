(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"68/X":function(t,e,o){"use strict";o.r(e);var s={data:function(){return{record:{id:"",name:""},errors:[],records:[],columns:["name","id"]}},methods:{reset:function(){this.record={id:"",name:""}}},created:function(){this.table_options.headings={name:"Nombre",id:"Acción"},this.table_options.sortable=["name"],this.table_options.filterable=["name"],this.table_options.columnsClasses={name:"col-md-10",id:"col-md-2"}}},n=o("KHd+"),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center"},[o("a",{staticClass:"btn-simplex btn-simplex-md btn-simplex-primary",attrs:{href:"",title:"Registros de géneros","data-toggle":"tooltip"},on:{click:function(e){return t.addRecord("add_payroll_gender","genders",e)}}},[o("i",{staticClass:"icofont icofont-group-students ico-3x"}),t._v(" "),o("span",[t._v("Géneros")])]),t._v(" "),o("div",{staticClass:"modal fade text-left",attrs:{tabindex:"-1",role:"dialog",id:"add_payroll_gender"}},[o("div",{staticClass:"modal-dialog vue-crud",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),o("div",{staticClass:"modal-body"},[t.errors.length>0?o("div",{staticClass:"alert alert-danger"},[o("ul",t._l(t.errors,function(e){return o("li",[t._v(t._s(e))])}),0)]):t._e(),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"form-group is-required"},[o("label",{attrs:{for:"name"}},[t._v("Nombre:")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.record.name,expression:"record.name"}],staticClass:"form-control input-sm",attrs:{type:"text",id:"name",placeholder:"Nombre","data-toggle":"tooltip",title:"Indique el nombre del género (requerido)"},domProps:{value:t.record.name},on:{input:function(e){e.target.composing||t.$set(t.record,"name",e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.record.id,expression:"record.id"}],attrs:{type:"hidden",name:"id",id:"id"},domProps:{value:t.record.id},on:{input:function(e){e.target.composing||t.$set(t.record,"id",e.target.value)}}})])])])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("div",{staticClass:"form-group"},[o("modal-form-buttons",{attrs:{saveRoute:"payroll/genders"}})],1)]),t._v(" "),o("div",{staticClass:"modal-body modal-table"},[o("v-client-table",{attrs:{columns:t.columns,data:t.records,options:t.table_options},scopedSlots:t._u([{key:"id",fn:function(e){return o("div",{staticClass:"text-center"},[o("button",{staticClass:"btn btn-warning btn-xs btn-icon btn-action",attrs:{title:"Modificar registro","data-toggle":"tooltip",type:"button"},on:{click:function(o){return t.initUpdate(e.row.id,o)}}},[o("i",{staticClass:"fa fa-edit"})]),t._v(" "),o("button",{staticClass:"btn btn-danger btn-xs btn-icon btn-action",attrs:{title:"Eliminar registro","data-toggle":"tooltip",type:"button"},on:{click:function(o){return t.deleteRecord(e.row.id,"genders")}}},[o("i",{staticClass:"fa fa-trash-o"})])])}}])})],1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),e("h6",[e("i",{staticClass:"icofont icofont-group-students ico-3x"}),this._v("\n\t\t\t\t\t\t\tGénero\n\t\t\t\t\t\t")])])}],!1,null,null,null);e.default=a.exports},"KHd+":function(t,e,o){"use strict";function s(t,e,o,s,n,a,i,r){var d,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=o,l._compiled=!0),s&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),i?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=d):n&&(d=r?function(){n.call(this,this.$root.$options.shadowRoot)}:n),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(t,e){return d.call(e),c(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:l}}o.d(e,"a",function(){return s})}}]);