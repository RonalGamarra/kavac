(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{EY6K:function(t,s,a){"use strict";a.r(s);var e={data:function(){return{errors:[],records:[]}},methods:{reset:function(){},initRecords:function(t,s){this.errors=[],this.reset();var a=this,e={};document.getElementById("info_general").click(),axios.get(t).then((function(t){void 0!==t.data.records&&(e=t.data.records,document.getElementById("asset_type").innerText=e.asset_type?e.asset_type.name:"",document.getElementById("asset_category").innerText=e.asset_category?e.asset_category.name:"",document.getElementById("asset_subcategory").innerText=e.asset_subcategory?e.asset_subcategory.name:"",document.getElementById("asset_specific").innerText=e.asset_specific_category?e.asset_specific_category.name:"",document.getElementById("asset_codigo").innerText=e.inventory_serial,document.getElementById("asset_acquisition_type").innerText=e.asset_acquisition_type?e.asset_acquisition_type.name:"",document.getElementById("asset_acquisition_date").innerText=e.acquisition_date?e.acquisition_date:"",document.getElementById("asset_ubication").innerText=e.ubication?e.ubication:"N/A",document.getElementById("asset_proveedor").innerText=e.proveedor?e.proveedor:"N/A",document.getElementById("asset_condition").innerText=e.asset_condition?e.asset_condition.name:"",document.getElementById("asset_status").innerText=e.asset_status?e.asset_status.name:"",document.getElementById("asset_use_function").innerText=e.asset_use_function?e.asset_use_function.name:"N/A",document.getElementById("asset_serial").innerText=e.serial?e.serial:"",document.getElementById("asset_marca").innerText=e.marca?e.marca:"",document.getElementById("asset_model").innerText=e.model?e.model:"",document.getElementById("asset_value").innerText=e.value?e.value:""),$("#"+s).length&&$("#"+s).modal("show")})).catch((function(t){void 0!==t.response&&(403==t.response.status?a.showMessage("custom","Acceso Denegado","danger","screen-error",t.response.data.message):a.logs("resources/js/all.js",343,t,"initRecords"))}))}}},i=a("KHd+"),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("a",{staticClass:"btn btn-info btn-xs btn-icon btn-action",attrs:{href:"#",title:"Ver información del Bien","data-toggle":"tooltip"},on:{click:function(s){return t.addRecord("add_asset",t.route_list,s)}}},[a("i",{staticClass:"fa fa-info-circle"})]),t._v(" "),t._m(0)])}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal fade text-left",attrs:{tabindex:"-1",role:"dialog",id:"add_asset"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h6",[a("i",{staticClass:"icofont icofont-read-book ico-2x"}),t._v("\n\t\t\t\t\t\tInformación del Bien Registrado\n\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("ul",{staticClass:"nav nav-tabs custom-tabs justify-content-center",attrs:{role:"tablist"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"data-toggle":"tab",href:"#general",id:"info_general",role:"tab"}},[a("i",{staticClass:"ion-android-person"}),t._v(" Información General\n                            ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#purchase",role:"tab"}},[a("i",{staticClass:"ion-social-dropbox-outline"}),t._v("\n                                Procedencia\n                            ")])])]),t._v(" "),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"tab-pane active",attrs:{id:"general",role:"tabpanel"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Tipo")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_type"}})]),t._v(" "),a("input",{attrs:{type:"hidden",id:"id"}})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Categoria")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_category"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Subcategoria")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_subcategory"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Categoria Especifica")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_specific"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Código")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_codigo"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Marca")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_marca"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Modelo")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_model"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Valor")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_value"}})])])])])]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"purchase",role:"tabpanel"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Forma de Adquisición")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_acquisition_type"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Fecha de Adquisición")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_acquisition_date"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Ubicación")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_ubication"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Proveedor")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_proveedor"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Condición Física")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_condition"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Estatus de Uso")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_status"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Función de Uso")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_use_function"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Serial de Fábrica")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"asset_serial"}})])])])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default btn-sm btn-round btn-modal-close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n                \t\tCerrar\n                \t")])])])])])}],!1,null,null,null);s.default=n.exports},"KHd+":function(t,s,a){"use strict";function e(t,s,a,e,i,n,o,c){var r,d="function"==typeof t?t.options:t;if(s&&(d.render=s,d.staticRenderFns=a,d._compiled=!0),e&&(d.functional=!0),n&&(d._scopeId="data-v-"+n),o?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=r):i&&(r=c?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),r)if(d.functional){d._injectStyles=r;var l=d.render;d.render=function(t,s){return r.call(s),l(t,s)}}else{var v=d.beforeCreate;d.beforeCreate=v?[].concat(v,r):[r]}return{exports:t,options:d}}a.d(s,"a",(function(){return e}))}}]);