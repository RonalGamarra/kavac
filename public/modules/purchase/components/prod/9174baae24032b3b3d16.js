(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Fx8L:function(t,e,s){"use strict";s.r(e);var o={data:function(){return{records:[],errors:[],columns:["name","description","purchase_process.name","id"],record:{name:"",description:"",purchase_processes_id:""},purchaseProcesses:[],edit:!1}},methods:{reset:function(){this.edit=!1,this.record={id:"",name:"",description:"",purchase_processes_id:""}},getPurchaseProcess:function(){var t=this;axios.get("/purchase/get-processes",this.record).then(function(e){t.purchaseProcesses=e.data})},createRecord:function(t){var e=this;this.edit?this.edit&&this.record.id&&axios.put(t+"/"+this.record.id,this.record).then(function(t){e.records=t.data.records,e.showMessage("update"),e.reset()}):axios.post(t,this.record).then(function(t){e.records=t.data.records,e.showMessage("store"),e.reset()})},loadData:function(t){this.edit=!0,this.record=t}},created:function(){this.table_options.headings={name:"Nombre",description:"Descripción","purchase_process.name":"Proceso de compra",id:"Acción"},this.table_options.sortable=["name","description","purchase_process.name"],this.table_options.filterable=["name","description","purchase_process.name"],this.table_options.columnsClasses={name:"col-xs-2",description:"col-xs-4","purchase_process.name":"col-xs-4",id:"col-xs-1"}},mounted:function(){this.getPurchaseProcess()}},r=s("KHd+"),a=Object(r.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-2 text-center"},[s("a",{staticClass:"btn-simplex btn-simplex-md btn-simplex-primary",attrs:{href:"#",title:"Registros de tipos de compras","data-toggle":"tooltip"},on:{click:function(e){return t.addRecord("add_purchase_types","/purchase/purchase_types",e)}}},[s("i",{staticClass:"fa fa-tag ico-3x"}),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"modal fade text-left",attrs:{tabindex:"-1",role:"dialog",id:"add_purchase_types"}},[s("div",{staticClass:"modal-dialog vue-crud",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body"},[s("purchase-show-errors",{ref:"purchaseTypesErrors"}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group is-required"},[s("label",[t._v("Nombre:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.record.name,expression:"record.name"}],staticClass:"form-control input-sm",attrs:{type:"text",placeholder:"Nombre del tipo de compra","data-toggle":"tooltip",title:"Indique el nombre del tipo de compra (requerido)"},domProps:{value:t.record.name},on:{input:function(e){e.target.composing||t.$set(t.record,"name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"control-label",attrs:{for:"purchase_process"}},[t._v("Proceso de compra:")]),s("br"),t._v(" "),s("select2",{attrs:{options:t.purchaseProcesses,id:"purchase_process",placeholder:"Proceso de compra asociado"},model:{value:t.record.purchase_processes_id,callback:function(e){t.$set(t.record,"purchase_processes_id",e)},expression:"record.purchase_processes_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group is-required"},[s("label",[t._v("Descripción:")]),t._v(" "),s("ckeditor",{staticClass:"form-control",attrs:{editor:t.ckeditor.editor,"data-toggle":"tooltip",title:"Indique la descripción para el tipo de compra",config:t.ckeditor.editorConfig,"tag-name":"textarea",rows:"3",placeholder:"Descripción del tipo de compra"},model:{value:t.record.description,callback:function(e){t.$set(t.record,"description",e)},expression:"record.description"}})],1)])])],1),t._v(" "),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"form-group"},[s("modal-form-buttons",{attrs:{saveRoute:"/purchase/purchase_types"}})],1)]),t._v(" "),s("div",{staticClass:"modal-body modal-table"},[s("v-client-table",{attrs:{columns:t.columns,data:t.records,options:t.table_options},scopedSlots:t._u([{key:"id",fn:function(e){return s("div",{staticClass:"text-center"},[s("div",{staticClass:"d-inline-flex"},[s("button",{staticClass:"btn btn-warning btn-xs btn-icon btn-action",attrs:{title:"Modificar registro","data-toggle":"tooltip"},on:{click:function(s){return t.loadData(e.row)}}},[s("i",{staticClass:"fa fa-edit"})]),t._v(" "),s("button",{staticClass:"btn btn-danger btn-xs btn-icon btn-action",attrs:{title:"Eliminar registro","data-toggle":"tooltip"},on:{click:function(s){return t.deleteRecord(e.index,"/purchase/purchase_types")}}},[s("i",{staticClass:"fa fa-trash-o"})])])])}}])})],1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("Tipos de"),e("br"),this._v("Compras")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),e("h6",[e("i",{staticClass:"icofont icofont-box inline-block"}),this._v("\n                        Tipos de Compras\n                    ")])])}],!1,null,null,null);e.default=a.exports},"KHd+":function(t,e,s){"use strict";function o(t,e,s,o,r,a,i,c){var n,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=s,d._compiled=!0),o&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),i?(n=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},d._ssrRegister=n):r&&(n=c?function(){r.call(this,this.$root.$options.shadowRoot)}:r),n)if(d.functional){d._injectStyles=n;var l=d.render;d.render=function(t,e){return n.call(e),l(t,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,n):[n]}return{exports:t,options:d}}s.d(e,"a",function(){return o})}}]);