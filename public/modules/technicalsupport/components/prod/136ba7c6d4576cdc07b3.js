(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7hWz":function(t,s,e){"use strict";e.r(s);var a={data:function(){return{record:{id:"",state:"",end_date:"",start_date:""},records:[],errors:[]}},props:{id:{type:Number,required:!0}},created:function(){},methods:{reset:function(){this.errors=[],this.record={id:"",state:"",end_date:"",start_date:""}},initRecords:function(t,s){var e=this;e.reset(),document.getElementById("info_general_".concat(e.id)).click(),axios.get(t).then((function(t){void 0!==t.data.record&&(e.record=t.data.record),$("#"+s).length&&$("#"+s).modal("show")})).catch((function(t){void 0!==t.response&&(403==t.response.status?e.showMessage("custom","Acceso Denegado","danger","screen-error",t.response.data.message):e.logs("resources/js/all.js",343,t,"initRecords"))}))}}},r=e("KHd+"),i=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{attrs:{id:"technicalSupportRequestInfo"}},[e("a",{staticClass:"btn btn-info btn-xs btn-icon btn-action",attrs:{href:"#",title:"Ver información de la reparación","data-toggle":"tooltip"},on:{click:function(s){return t.addRecord("view_repair_"+t.id,t.route_show,s)}}},[e("i",{staticClass:"fa fa-info-circle"})]),t._v(" "),e("div",{staticClass:"modal fade text-left",attrs:{tabindex:"-1",role:"dialog",id:"view_repair_"+t.id}},[e("div",{staticClass:"modal-dialog modal-lg"},[e("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),e("div",{staticClass:"modal-body"},[t.errors.length>0?e("div",{staticClass:"alert alert-danger"},[e("ul",t._l(t.errors,(function(s){return e("li",[t._v(t._s(s))])})),0)]):t._e(),t._v(" "),e("ul",{staticClass:"nav nav-tabs custom-tabs justify-content-center",attrs:{role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{"data-toggle":"tab",href:"#general_"+t.id,id:"info_general_"+t.id,role:"tab"}},[e("i",{staticClass:"ion-android-person"}),t._v(" Información General\n                            ")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#equipment_"+t.id,role:"tab"}},[e("i",{staticClass:"ion-arrow-swap"}),t._v(" Información del Equipo\n                            ")])])]),t._v(" "),e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane active",attrs:{id:"general_"+t.id,role:"tabpanel"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("strong",[t._v("Fecha de Inicio")]),t._v(" "),e("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[e("span",{staticClass:"col-md-12"},[t._v("\n                                                "+t._s(t.record.start_date?t.record.start_date:"No definido")+"\n                                            ")])]),t._v(" "),e("input",{attrs:{type:"hidden",id:"id"}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("strong",[t._v("Fecha tope de entrega")]),t._v(" "),e("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[e("span",{staticClass:"col-md-12"},[t._v("\n                                                "+t._s(t.record.end_date?t.record.end_date:"No definido")+"\n                                            ")])])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("strong",[t._v("Estado de la Solicitud")]),t._v(" "),e("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[e("span",{staticClass:"col-md-12"},[t._v("\n                                                "+t._s(t.record.state?t.record.state:"N/A")+"\n                                            ")])])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("strong",[t._v("Responsable")]),t._v(" "),e("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[e("span",{staticClass:"col-md-12"},[t._v("\n                                                "+t._s(t.record.user?t.record.user.profile?t.record.user.profile.first_name?t.record.user.profile.last_name?t.record.user.profile.first_name+" "+t.record.user.profile.last_name:t.record.user.profile.first_name:t.record.user.name?t.record.user.name:"":"":"N/A")+"\n                                            ")])])])])])]),t._v(" "),e("div",{staticClass:"tab-pane",attrs:{id:"equipment_"+t.id,role:"tabpanel"}})])]),t._v(" "),t._m(1)])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),s("h6",[s("i",{staticClass:"icofont icofont-read-book ico-2x"}),this._v(" \n                        Información de la Reparación Asignada\n                    ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-default btn-sm btn-round btn-modal-close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("\n                        Cerrar\n                    ")])])}],!1,null,null,null);s.default=i.exports},"KHd+":function(t,s,e){"use strict";function a(t,s,e,a,r,i,n,o){var d,c="function"==typeof t?t.options:t;if(s&&(c.render=s,c.staticRenderFns=e,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),n?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=d):r&&(d=o?function(){r.call(this,this.$root.$options.shadowRoot)}:r),d)if(c.functional){c._injectStyles=d;var l=c.render;c.render=function(t,s){return d.call(s),l(t,s)}}else{var _=c.beforeCreate;c.beforeCreate=_?[].concat(_,d):[d]}return{exports:t,options:c}}e.d(s,"a",(function(){return a}))}}]);