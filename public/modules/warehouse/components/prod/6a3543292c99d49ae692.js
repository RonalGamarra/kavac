(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"KHd+":function(t,e,r){"use strict";function o(t,e,r,o,s,i,a,n){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):s&&(u=n?function(){s.call(this,this.$root.$options.shadowRoot)}:s),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(t,e){return u.call(e),d(t,e)}}else{var _=c.beforeCreate;c.beforeCreate=_?[].concat(_,u):[u]}return{exports:t,options:c}}r.d(e,"a",function(){return o})},KxP9:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{record:{id:"",institution_id:"",warehouse_id:"",warehouse_inventory_products:[]},warehouse_inventory_product:{id:"",quantity:"",unit_value:"",currency_id:"",warehouse_product_id:"",warehouse_product_attributes:[]},columns:["name","quantity","warehouse_product_attributes","id"],records:[],errors:[],setting:{id:""},institutions:[],warehouses:[],warehouse_products:[],currencies:[],editIndex:null,warehouse_product_attributes:[]}},props:{receptionid:Number},methods:{reset:function(){this.warehouse_inventory_product={id:"",quantity:"",unit_value:"",currency_id:"",currency_name:"",warehouse_product_id:"",warehouse_product_name:"",warehouse_product_attributes:[]},this.editIndex=null,this.warehouse_product_attributes.map(function(t,e){var r=document.getElementById(t.name);r&&(r.value="")})},getWarehouses:function(){var t=this;t.warehouses=[],""!=t.record.institution_id&&axios.get("/warehouse/get-warehouses/"+t.record.institution_id).then(function(e){t.warehouses=e.data})},getWarehouseProducts:function(){var t=this;t.warehouse_products=[],""!=t.record.warehouse_id&&axios.get("/warehouse/get-warehouse-products/").then(function(e){t.warehouse_products=e.data})},getWarehouseProductAttributes:function(){var t=this,e=t.warehouse_inventory_product.warehouse_product_id;t.warehouse_product_attributes=[],""!=e&&axios.get("/warehouse/attributes/product/"+e).then(function(e){void 0!==e.data.records&&(t.warehouse_product_attributes=e.data.records,null!=t.editIndex&&""!=t.record.id||(t.warehouse_inventory_product.warehouse_product_attributes=[],$.each(t.warehouse_product_attributes,function(e,r){r.warehouse_product_value;t.warehouse_inventory_product.warehouse_product_attributes.push({name:r.name,value:""})})))})},addProduct:function(t){var e=this,r=[],o="",s="";e.warehouse_product_attributes.map(function(t,e){var o=document.getElementById(t.name),s={name:t.name,value:o.value};r.push(s)}),t.preventDefault(),""!=e.warehouse_inventory_product.warehouse_product_id&&$.each(e.warehouse_products,function(t,r){r.id==e.warehouse_inventory_product.warehouse_product_id&&(s=r.text)}),""!=e.warehouse_inventory_product.currency_id&&$.each(e.currencies,function(t,r){r.id==e.warehouse_inventory_product.currency_id&&(o=r.text)}),e.warehouse_inventory_product.warehouse_product={name:s},e.warehouse_inventory_product.currency={name:o},e.warehouse_inventory_product.warehouse_product_attributes=r,null===this.editIndex?(e.records.push(e.warehouse_inventory_product),e.reset()):this.editIndex>=0&&(e.records.splice(this.editIndex,1),e.records.push(e.warehouse_inventory_product),e.reset())},editProduct:function(t,e){this.reset(),this.editIndex=t-1,this.warehouse_inventory_product=this.records[t-1],$.each(this.warehouse_inventory_product.warehouse_product_attributes,function(t,e){var r=document.getElementById(e.name);r&&(r.value=e.value)}),e.preventDefault()},removeProduct:function(t,e){this.records.splice(t-1,1)},createReception:function(t){this.record.warehouse_inventory_products=this.records,this.createRecord("warehouse/receptions")},loadReception:function(t){var e=this;axios.get("/warehouse/receptions/info/"+t).then(function(t){e.record=t.data.records,e.record.institution_id=e.record.warehouse_institution_warehouse_end.institution_id,e.record.warehouse_id=e.record.warehouse_institution_warehouse_end.warehouse_id,$.each(e.record.warehouse_inventory_product_movements,function(t,r){var o=[];$.each(r.warehouse_inventory_product.warehouse_product_values,function(t,e){var r=e.warehouse_product_attribute.name,s=e.value;o.push({name:r,value:s})});var s={id:"",quantity:r.quantity,unit_value:r.new_value,currency_id:r.warehouse_inventory_product.currency_id,currency:{name:r.warehouse_inventory_product.currency.name},warehouse_product_id:r.warehouse_inventory_product.warehouse_product_id,warehouse_product:{name:r.warehouse_inventory_product.warehouse_product.name},warehouse_product_attributes:o};e.records.push(s)})})}},created:function(){this.table_options.headings={name:"Producto",quantity:"Cantidad",warehouse_product_attributes:"Detalles",id:"Acción"},this.table_options.sortable=["name","quantity"],this.table_options.filterable=["name","quantity"],this.getInstitutions(),this.getWarehouses(),this.getCurrencies(),this.receptionid&&this.loadReception(this.receptionid)}},s=r("KHd+"),i=Object(s.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"WarehouseReceptionForm"}},[r("div",{staticClass:"card-body"},[t.errors.length>0?r("div",{staticClass:"alert alert-danger"},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("strong",[t._v("Cuidado!")]),t._v(" Debe verificar los siguientes errores antes de continuar:\n\t\t\t\t\t"),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(e){e.preventDefault(),t.errors=[]}}},[t._m(1)]),t._v(" "),r("ul",t._l(t.errors,function(e){return r("li",[t._v(t._s(e))])}),0)])]):t._e(),t._v(" "),r("div",{staticClass:"row"},[t._m(2),t._v(" "),r("div",{staticClass:"col-md-4",attrs:{id:"helpInstitution"}},[r("div",{staticClass:"form-group is-required"},[r("label",[t._v("Nombre de la Institución:")]),t._v(" "),r("select2",{attrs:{options:t.institutions},on:{input:t.getWarehouses},model:{value:t.record.institution_id,callback:function(e){t.$set(t.record,"institution_id",e)},expression:"record.institution_id"}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.record.id,expression:"record.id"}],attrs:{type:"hidden"},domProps:{value:t.record.id},on:{input:function(e){e.target.composing||t.$set(t.record,"id",e.target.value)}}})],1)]),t._v(" "),r("div",{staticClass:"col-md-4",attrs:{id:"helpWarehouse"}},[r("div",{staticClass:"form-group is-required"},[r("label",[t._v("Nombre del Almacén:")]),t._v(" "),r("select2",{attrs:{options:t.warehouses},on:{input:t.getWarehouseProducts},model:{value:t.record.warehouse_id,callback:function(e){t.$set(t.record,"warehouse_id",e)},expression:"record.warehouse_id"}})],1)])]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"row",attrs:{id:"helpSectionProducts"}},[t._m(3),t._v(" "),r("div",{staticClass:"col-md-3",attrs:{id:"helpProductName"}},[r("div",{staticClass:"form-group is-required"},[r("label",[t._v("Nombre del Producto:")]),t._v(" "),r("select2",{attrs:{options:t.warehouse_products},on:{input:t.getWarehouseProductAttributes},model:{value:t.warehouse_inventory_product.warehouse_product_id,callback:function(e){t.$set(t.warehouse_inventory_product,"warehouse_product_id",e)},expression:"warehouse_inventory_product.warehouse_product_id"}})],1)]),t._v(" "),r("div",{staticClass:"col-md-3",attrs:{id:"helpProductQuantity"}},[r("div",{staticClass:"form-group is-required"},[r("label",[t._v("Cantidad:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.warehouse_inventory_product.quantity,expression:"warehouse_inventory_product.quantity"}],staticClass:"form-control input-sm",attrs:{type:"number",min:"1",placeholder:"Cantidad del Producto","data-toggle":"tooltip"},domProps:{value:t.warehouse_inventory_product.quantity},on:{input:function(e){e.target.composing||t.$set(t.warehouse_inventory_product,"quantity",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-md-3",attrs:{id:"helpProductValue"}},[r("div",{staticClass:"form-group is-required"},[r("label",[t._v("Valor:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.warehouse_inventory_product.unit_value,expression:"warehouse_inventory_product.unit_value"}],staticClass:"form-control input-sm",attrs:{type:"number",min:"0",placeholder:"Valor por unidad del producto","data-toggle":"tooltip",step:".01"},domProps:{value:t.warehouse_inventory_product.unit_value},on:{input:function(e){e.target.composing||t.$set(t.warehouse_inventory_product,"unit_value",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-md-3",attrs:{id:"helpProductCurrency"}},[r("div",{staticClass:"form-group is-required"},[r("label",[t._v("Moneda")]),t._v(" "),r("select2",{attrs:{options:t.currencies},model:{value:t.warehouse_inventory_product.currency_id,callback:function(e){t.$set(t.warehouse_inventory_product,"currency_id",e)},expression:"warehouse_inventory_product.currency_id"}})],1)])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.warehouse_inventory_product.warehouse_product_attributes.length>0,expression:"warehouse_inventory_product.warehouse_product_attributes.length > 0"}],staticClass:"row"},[r("hr"),t._v(" "),t._m(4),t._v(" "),t._l(t.warehouse_inventory_product.warehouse_product_attributes,function(e){return r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(e.name.charAt(0).toUpperCase()+e.name.slice(1))+":")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"attribute.value"}],staticClass:"form-control input-sm",attrs:{type:"text",placeholder:"","data-toggle":"tooltip",id:e.name},domProps:{value:e.value},on:{input:function(r){r.target.composing||t.$set(e,"value",r.target.value)}}})])])})],2),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("button",{staticClass:"btn btn-sm btn-primary btn-custom float-right",attrs:{type:"button",title:"Agregar registro a la lista","data-toggle":"tooltip"},on:{click:function(e){return t.addProduct(e)}}},[r("i",{staticClass:"fa fa-plus-circle"}),t._v("\n\t\t\t\t\t\tAgregar\n\t\t\t\t\t")])])]),t._v(" "),r("hr"),t._v(" "),r("v-client-table",{attrs:{id:"helpTable",columns:t.columns,data:t.records,options:t.table_options},scopedSlots:t._u([{key:"name",fn:function(e){return r("div",{staticClass:"text-center"},[r("span",[t._v("\n\t\t\t\t\t\t"+t._s(e.row.warehouse_product?e.row.warehouse_product.name:"N/A")+"\n\t\t\t\t\t")])])}},{key:"warehouse_product_attributes",fn:function(e){return r("div",{},[r("span",[t._l(e.row.warehouse_product_attributes,function(e){return r("div",[r("b",[t._v(t._s(e.name+":"))]),t._v(" "+t._s(e.value)+"\n\t\t\t\t\t\t")])}),t._v(" "),r("b",[t._v("Valor:")]),t._v(" "+t._s(e.row.unit_value)+" "+t._s(e.row.currency?e.row.currency.name:"")+"\n\t\t\t\t\t")],2)])}},{key:"id",fn:function(e){return r("div",{staticClass:"text-center"},[r("div",{staticClass:"d-inline-flex"},[r("button",{staticClass:"btn btn-warning btn-xs btn-icon btn-action",attrs:{title:"Modificar registro","data-toggle":"tooltip",type:"button"},on:{click:function(r){return t.editProduct(e.index,r)}}},[r("i",{staticClass:"fa fa-edit"})]),t._v(" "),r("button",{staticClass:"btn btn-danger btn-xs btn-icon btn-action",attrs:{title:"Eliminar registro","data-toggle":"tooltip",type:"button"},on:{click:function(r){return t.removeProduct(e.index,r)}}},[r("i",{staticClass:"fa fa-trash-o"})])])])}}])})],1),t._v(" "),r("div",{staticClass:"card-footer text-right"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3 offset-md-9",attrs:{id:"helpParamButtons"}},[r("button",{staticClass:"btn btn-default btn-icon btn-round",attrs:{type:"button",title:"Borrar datos del formulario"},on:{click:function(e){return t.reset()}}},[r("i",{staticClass:"fa fa-eraser"})]),t._v(" "),t._m(5),t._v(" "),r("button",{staticClass:"btn btn-success btn-icon btn-round btn-modal-save",attrs:{type:"button",title:"Guardar registro"},on:{click:function(e){return t.createReception("warehouse/receptions")}}},[r("i",{staticClass:"fa fa-save"})])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-icon"},[e("i",{staticClass:"now-ui-icons objects_support-17"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"now-ui-icons ui-1_simple-remove"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12"},[e("b",[this._v("Seleccione el destino de los productos")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12"},[e("b",[this._v("Ingrese los Productos a la solicitud")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12"},[e("b",[this._v("Características del Producto")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-warning btn-icon btn-round btn-modal-close",attrs:{type:"button","data-dismiss":"modal",title:"Cancelar y regresar"}},[e("i",{staticClass:"fa fa-ban"})])}],!1,null,null,null);e.default=i.exports}}]);