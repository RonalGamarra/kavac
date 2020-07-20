(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"KHd+":function(e,t,o){"use strict";function r(e,t,o,r,c,i,s,a){var n,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=o,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),s?(n=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),c&&c.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=n):c&&(n=a?function(){c.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:c),n)if(d.functional){d._injectStyles=n;var l=d.render;d.render=function(e,t){return n.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,n):[n]}return{exports:e,options:d}}o.d(t,"a",(function(){return r}))},cOoO:function(e,t,o){"use strict";o.r(t);var r={props:{records:{type:Array,default:[]}},data:function(){return{accRecords:[],record_select:"",record:{id:"",group:"",subgroup:"",item:"",generic:"",specific:"",subspecific:"",denomination:"",active:!1},urlPrevious:"/accounting/accounts",operation:"create"}},created:function(){var e=this;EventBus.$on("register:account",(function(t){e.sendData(t)})),EventBus.$on("load:data-account-form",(function(t){if(null==t)e.reset(!1);else{var o=t.code.split(".");e.record={id:t.id,group:o[0],subgroup:o[1],item:o[2],generic:o[3],specific:o[4],subspecific:o[5],denomination:t.denomination,active:t.active}}$("input[name=active]").bootstrapSwitch("state",e.record.active),e.operation="update"}))},mounted:function(){this.switchHandler("active"),this.reset()},methods:{reset:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&(this.accRecords=[]),this.record={id:"",group:"",subgroup:"",item:"",generic:"",specific:"",subspecific:"",denomination:"",active:!1},this.operation="create"},FormatCode:function(){var e=!0,t=[];return(this.record.group.length<1||this.record.subgroup.length<1||this.record.item.length<1||this.record.generic.length<1||this.record.specific.length<1||this.record.subspecific.length<1)&&(t.push("Los campos del código de la cuenta son obligatorios"),e=!1),""==this.record.denomination&&(t.push("El campo denominación es obligatorio."),e=!1),this.$parent.$refs.accountingAccountForm.showAlertMessages(t),e},sendData:function(e){var t=this;if(t.FormatCode()){var o=t.record;t.record.generic=o.generic.length<2?"0"+o.generic:o.generic,t.record.specific=o.specific.length<2?"0"+o.specific:o.specific,t.record.subspecific=o.subspecific.length<2?"0"+o.subspecific:o.subspecific,t.record.active=$("#active").prop("checked"),t.loading=!0,"create"==t.operation?axios.post(e,t.record).then((function(e){t.accRecords=[],t.accRecords=e.data.records,EventBus.$emit("reload:list-accounts",e.data.records),t.showMessage("store"),t.loading=!1})).catch((function(e){var o=[];if(void 0!==e.response){for(var r in e.response.data.errors)e.response.data.errors[r]&&o.push(e.response.data.errors[r][0]);t.$parent.$refs.accountingAccountForm.showAlertMessages(o)}})):axios.put(e+t.record.id,t.record).then((function(e){t.accRecords=[],t.accRecords=e.data.records,EventBus.$emit("reload:list-accounts",e.data.records),t.showMessage("update"),t.loading=!1})).catch((function(e){var o=[];if(void 0!==e.response){for(var r in e.response.data.errors)e.response.data.errors[r]&&o.push(e.response.data.errors[r][0]);t.$parent.$refs.accountingAccountForm.showAlertMessages(o)}})),t.reset()}}},watch:{record_select:function(e){var t=this;""!=e&&axios.get("/accounting/get-children-account/"+e).then((function(e){var o=e.data.account;t.record={group:o.group,subgroup:o.subgroup,item:o.item,generic:o.generic,specific:o.specific,subspecific:o.subspecific,denomination:o.denomination,active:o.active},$("input[name=active]").bootstrapSwitch("state",t.record.active)}))},records:function(e){this.accRecords=e}}},c=o("KHd+"),i=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{staticClass:"form-horizontal"},[o("div",{staticClass:"card-body"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"control-label"},[e._v("Cuenta de nivel superior")]),e._v(" "),o("select2",{attrs:{options:e.accRecords},model:{value:e.record_select,callback:function(t){e.record_select=t},expression:"record_select"}})],1)]),e._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"control-label"},[e._v("Código")]),e._v(" "),o("div",{staticClass:"row inline-inputs"},[o("div",{staticClass:"col-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.record.group,expression:"record.group"}],staticClass:"form-control input-sm",attrs:{type:"text",onkeyup:e.record.group=e.onlyNumbers(e.record.group),step:"1",id:"group",name:"group","data-toggle":"tooltip",maxlength:"1",title:"Grupo al que pertenece la cuenta"},domProps:{value:e.record.group},on:{input:function(t){t.target.composing||e.$set(e.record,"group",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"col-1"},[e._v(".")]),e._v(" "),o("div",{staticClass:"col-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.record.subgroup,expression:"record.subgroup"}],staticClass:"form-control input-sm",attrs:{type:"text",onkeyup:e.record.subgroup=e.onlyNumbers(e.record.subgroup),step:"1",id:"subgroup",name:"subgroup","data-toggle":"tooltip",title:"Sub-grupo al que pertenece la cuenta",maxlength:"1"},domProps:{value:e.record.subgroup},on:{input:function(t){t.target.composing||e.$set(e.record,"subgroup",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"col-1"},[e._v(".")]),e._v(" "),o("div",{staticClass:"col-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.record.item,expression:"record.item"}],staticClass:"form-control input-sm",attrs:{type:"text",onkeyup:e.record.item=e.onlyNumbers(e.record.item),step:"1",id:"item",name:"item","data-toggle":"tooltip",title:"Rubro al que pertenece la cuenta",maxlength:"1"},domProps:{value:e.record.item},on:{input:function(t){t.target.composing||e.$set(e.record,"item",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"col-1"},[e._v(".")]),e._v(" "),o("div",{staticClass:"col-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.record.generic,expression:"record.generic"}],staticClass:"form-control input-sm",attrs:{type:"text",onkeyup:e.record.generic=e.onlyNumbers(e.record.generic),step:"1",id:"generic",name:"generic","data-toggle":"tooltip",title:"identificador de cuenta a la que pertenece",maxlength:"2"},domProps:{value:e.record.generic},on:{input:function(t){t.target.composing||e.$set(e.record,"generic",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"col-1"},[e._v(".")]),e._v(" "),o("div",{staticClass:"col-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.record.specific,expression:"record.specific"}],staticClass:"form-control input-sm",attrs:{type:"text",onkeyup:e.record.specific=e.onlyNumbers(e.record.specific),step:"1",id:"specific",name:"specific","data-toggle":"tooltip",title:"Identificador de cuenta de 1er orden",maxlength:"2"},domProps:{value:e.record.specific},on:{input:function(t){t.target.composing||e.$set(e.record,"specific",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"col-1"},[e._v(".")]),e._v(" "),o("div",{staticClass:"col-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.record.subspecific,expression:"record.subspecific"}],staticClass:"form-control input-sm",attrs:{type:"text",onkeyup:e.record.subspecific=e.onlyNumbers(e.record.subspecific),step:"1",id:"subspecific",name:"subspecific","data-toggle":"tooltip",title:"Identificador de cuenta de 2do orden",maxlength:"2"},domProps:{value:e.record.subspecific},on:{input:function(t){t.target.composing||e.$set(e.record,"subspecific",t.target.value)}}})])])])]),e._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"control-label"},[e._v("Denominación")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.record.denomination,expression:"record.denomination"}],staticClass:"form-control input-sm",attrs:{type:"text",id:"denomination",name:"denomination","data-toggle":"tooltip",placeholder:"Descripción de la cuenta",title:"Denominación o concepto de la cuenta"},domProps:{value:e.record.denomination},on:{input:function(t){t.target.composing||e.$set(e.record,"denomination",t.target.value)}}})])]),e._v(" "),o("div",{staticClass:"col-6"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-3"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"control-label"},[e._v("Activa")]),e._v(" "),o("div",{staticClass:"col-12"},[o("div",{staticClass:"col-12 bootstrap-switch-mini"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.record.active,expression:"record.active"}],staticClass:"form-control bootstrap-switch",attrs:{id:"active","data-on-label":"SI","data-off-label":"NO",name:"active",type:"checkbox"},domProps:{checked:Array.isArray(e.record.active)?e._i(e.record.active,null)>-1:e.record.active},on:{change:function(t){var o=e.record.active,r=t.target,c=!!r.checked;if(Array.isArray(o)){var i=e._i(o,null);r.checked?i<0&&e.$set(e.record,"active",o.concat([null])):i>-1&&e.$set(e.record,"active",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.record,"active",c)}}})])])])])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);