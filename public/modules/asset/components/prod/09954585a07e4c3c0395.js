(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"KHd+":function(t,e,s){"use strict";function a(t,e,s,a,o,i,r,c){var n,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=s,d._compiled=!0),a&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),r?(n=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=n):o&&(n=c?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),n)if(d.functional){d._injectStyles=n;var l=d.render;d.render=function(t,e){return n.call(e),l(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,n):[n]}return{exports:t,options:d}}s.d(e,"a",(function(){return a}))},NWU6:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{record:{id:"",asset_type_id:"",asset_category_id:"",asset_subcategory_id:"",name:"",code:""},errors:[],records:[],asset_types:[],asset_categories:[],asset_subcategories:[],columns:["asset_subcategory.name","name","code","id"]}},created:function(){this.table_options.headings={"asset_subcategory.name":"Subcategoria",name:"Categoria Especifica",code:"Código",id:"Acción"},this.table_options.sortable=["asset_subcategory.name","name","code"],this.table_options.filterable=["asset_subcategory.name","name","code"],this.table_options.columnsClasses={"asset_subcategory.name":"col-xs-5",name:"col-xs-4",code:"col-xs-1 text-center",id:"col-xs-2"}},mounted:function(){this.getAssetTypes()},methods:{reset:function(){this.record={id:"",asset_type_id:"",asset_category_id:"",asset_subcategory_id:"",name:"",code:""}},initUpdate:function(t,e){this.errors=[];var s=this.records[t-1];this.record={id:s.id,asset_type_id:s.asset_subcategory.asset_category.asset_type_id,asset_category_id:s.asset_subcategory.asset_category_id,asset_subcategory_id:s.asset_subcategory_id,code:s.code,name:s.name},e.preventDefault()}}},o=s("KHd+"),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-2 text-center"},[s("a",{staticClass:"btn-simplex btn-simplex-md btn-simplex-primary",attrs:{href:"#",title:"Registros de Categorias Específicas de Bienes","data-toggle":"tooltip"},on:{click:function(e){return t.addRecord("add_specific_category","specific",e)}}},[s("i",{staticClass:"icofont icofont-read-book ico-3x"}),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"modal fade text-left",attrs:{tabindex:"-1",role:"dialog",id:"add_specific_category"}},[s("div",{staticClass:"modal-dialog vue-crud",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body"},[t.errors.length>0?s("div",{staticClass:"alert alert-danger"},[s("div",{staticClass:"container"},[t._m(2),t._v(" "),s("strong",[t._v("Cuidado!")]),t._v(" Debe verificar los siguientes errores antes de continuar:\n                                "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(e){e.preventDefault(),t.errors=[]}}},[t._m(3)]),t._v(" "),s("ul",t._l(t.errors,(function(e){return s("li",[t._v(t._s(e))])})),0)])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Tipo de Bien:")]),t._v(" "),s("select2",{attrs:{options:t.asset_types},on:{input:t.getAssetCategories},model:{value:t.record.asset_type_id,callback:function(e){t.$set(t.record,"asset_type_id",e)},expression:"record.asset_type_id"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.record.id,expression:"record.id"}],attrs:{type:"hidden"},domProps:{value:t.record.id},on:{input:function(e){e.target.composing||t.$set(t.record,"id",e.target.value)}}})],1)]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Categoría General:")]),t._v(" "),s("select2",{attrs:{options:t.asset_categories},on:{input:t.getAssetSubcategories},model:{value:t.record.asset_category_id,callback:function(e){t.$set(t.record,"asset_category_id",e)},expression:"record.asset_category_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Subcategoría:")]),t._v(" "),s("select2",{attrs:{options:t.asset_subcategories},model:{value:t.record.asset_subcategory_id,callback:function(e){t.$set(t.record,"asset_subcategory_id",e)},expression:"record.asset_subcategory_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group is-required"},[s("label",[t._v("Código de la Categoría Específica:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.record.code,expression:"record.code"}],staticClass:"form-control input-sm",attrs:{type:"text",placeholder:"Código de la Categoría Específica","data-toggle":"tooltip",title:"Indique el código de la nueva Categoría Específica (requerido)"},domProps:{value:t.record.code},on:{input:function(e){e.target.composing||t.$set(t.record,"code",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group is-required"},[s("label",[t._v("Categoría Especifica:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.record.name,expression:"record.name"}],staticClass:"form-control input-sm",attrs:{type:"text",placeholder:"Nueva Categoría Específica","data-toggle":"tooltip",title:"Indique la nueva Categoría Específica (requerido)"},domProps:{value:t.record.name},on:{input:function(e){e.target.composing||t.$set(t.record,"name",e.target.value)}}})])])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"form-group"},[s("modal-form-buttons",{attrs:{saveRoute:"asset/specific"}})],1)]),t._v(" "),s("div",{staticClass:"modal-body modal-table"},[s("hr"),t._v(" "),s("v-client-table",{attrs:{columns:t.columns,data:t.records,options:t.table_options},scopedSlots:t._u([{key:"id",fn:function(e){return s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-warning btn-xs btn-icon btn-action",attrs:{title:"Modificar registro","data-toggle":"tooltip",type:"button"},on:{click:function(s){return t.initUpdate(e.index,s)}}},[s("i",{staticClass:"fa fa-edit"})]),t._v(" "),s("button",{staticClass:"btn btn-danger btn-xs btn-icon btn-action",attrs:{title:"Eliminar registro","data-toggle":"tooltip",type:"button"},on:{click:function(s){return t.deleteRecord(e.index,"specific")}}},[s("i",{staticClass:"fa fa-trash-o"})])])}}])})],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("Categorias"),e("br"),this._v("Específicas")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),e("h6",[e("i",{staticClass:"icofont icofont-read-book ico-2x"}),this._v("\n\t\t\t\t\t\t\tNueva Categoria Específica de Bienes\n\t\t\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-icon"},[e("i",{staticClass:"now-ui-icons objects_support-17"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"now-ui-icons ui-1_simple-remove"})])}],!1,null,null,null);e.default=i.exports}}]);