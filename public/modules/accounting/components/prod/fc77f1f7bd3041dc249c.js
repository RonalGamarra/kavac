(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"KHd+":function(t,e,i){"use strict";function s(t,e,i,s,n,a,r,o){var c,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=i,d._compiled=!0),s&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=c):n&&(c=o?function(){n.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(t,e){return c.call(e),l(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:d}}i.d(e,"a",(function(){return s}))},n0ZI:function(t,e,i){"use strict";i.r(e);var s={props:{categories:{type:Array,default:function(){return[]}},institutions:{type:Array,default:function(){return[{id:"",text:"Seleccione..."}]}},currencies:{type:Array,default:function(){return[{id:"",text:"Seleccione..."}]}},data_edit:{type:Object,default:function(){return null}}},data:function(){return{date:"",reference:"",concept:"",observations:"",category:"",validated:!1,institution_id:"",currency_id:"",data_edit_mutable:null}},created:function(){var t=this;this.institution_id=this.institutions[0].id,this.data_edit&&(this.data_edit_mutable=this.data_edit,this.reference=this.data_edit.reference,this.category=this.data_edit.category,this.institution_id=this.data_edit.institution,this.currency_id=this.data_edit.currency,this.date=this.data_edit.date,this.concept=this.data_edit.concept,this.observations=this.data_edit.observations),EventBus.$on("reset:accounting-entry-edit-create",(function(){t.reset()}))},methods:{reset:function(){this.date="",this.concept="",this.observations="",this.category="",this.currency_id=null,this.institution_id=null},validateRequired:function(){this.validated||""!=this.date&&""!=this.concept&&""!=this.observations&&""!=this.category&&null!=this.institution_id||EventBus.$emit("enableInput:entries-account",{value:!1,date:this.date,reference:this.reference,concept:this.concept,observations:this.observations,category:this.category,institution_id:this.institution_id,currency_id:this.currency_id}),0==this.validated?""!=this.date&&null!=this.institution_id&&""!=this.category&&""!=this.currency_id&&(EventBus.$emit("enableInput:entries-account",{value:!0,date:this.date,reference:this.reference,concept:this.concept,observations:this.observations,category:this.category,institution_id:this.institution_id,currency_id:this.currency_id}),this.validated=!0):EventBus.$emit("enableInput:entries-account",{value:!0,date:this.date,reference:this.reference,concept:this.concept,observations:this.observations,category:this.category,institution_id:this.institution_id,currency_id:this.currency_id})}},watch:{date:function(t){""==t?this.validated=!1:this.validateRequired()},reference:function(t){""==t?this.validated=!1:this.validateRequired()},concept:function(t){this.validateRequired()},observations:function(t){this.validateRequired()},category:function(t){""!=t||(this.validated=!1),this.validateRequired()},currency_id:function(t){t&&EventBus.$emit("change:currency",t),this.validateRequired()},institution_id:function(t){""==t&&(this.validated=!1,this.validateRequired()),this.data_edit_mutable||(this.data_edit_mutable=null),this.validateRequired()}}},n=i("KHd+"),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("form",{staticClass:"form-horizontal",on:{submit:function(t){t.preventDefault()}}},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-3",attrs:{id:"helpEntriesDate"}},[i("div",{staticClass:"form-group is-required"},[i("label",{staticClass:"control-label"},[t._v("Fecha")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control input-sm",attrs:{disabled:null!=t.data_edit,type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-6 offset-3",attrs:{id:"helpEntriesInstitution"}},[i("div",{staticClass:"form-group is-required"},[i("label",{staticClass:"control-label"},[t._v("Institución que genera")]),t._v(" "),i("select2",{attrs:{options:t.institutions},model:{value:t.institution_id,callback:function(e){t.institution_id=e},expression:"institution_id"}})],1)]),t._v(" "),i("div",{staticClass:"col-6",attrs:{id:"helpEntriesCategory"}},[i("div",{staticClass:"form-group is-required"},[i("label",{staticClass:"control-label"},[t._v("Categoría del asiento")]),t._v(" "),i("select2",{attrs:{options:t.categories},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1)]),t._v(" "),i("div",{staticClass:"col-6",attrs:{id:"helpEntriesCurrency"}},[i("div",{staticClass:"form-group is-required"},[i("label",{staticClass:"control-label"},[t._v("Tipo de moneda")]),t._v(" "),i("select2",{attrs:{options:t.currencies},model:{value:t.currency_id,callback:function(e){t.currency_id=e},expression:"currency_id"}})],1)]),t._v(" "),i("div",{staticClass:"col-3",attrs:{id:"helpEntriesDescription"}},[i("div",{staticClass:"form-group is-required"},[i("label",{staticClass:"control-label"},[t._v("Concepto ó Descripción")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.concept,expression:"concept"}],staticClass:"form-control input-sm",attrs:{type:"text"},domProps:{value:t.concept},on:{input:function(e){e.target.composing||(t.concept=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-3",attrs:{id:"helpEntriesObservation"}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"control-label"},[t._v("Observaciones")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.observations,expression:"observations"}],staticClass:"form-control input-sm",attrs:{type:"text"},domProps:{value:t.observations},on:{input:function(e){e.target.composing||(t.observations=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-3",attrs:{id:"helpEntriesReference"}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"control-label"},[t._v("Código Referencia")]),i("br"),t._v(" "),i("h5",{staticClass:"control-label"},[i("strong",[t._v(t._s(t.reference))])])])])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);