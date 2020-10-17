(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"KHd+":function(t,e,a){"use strict";function r(t,e,a,r,s,o,i,n){var l,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=a,d._compiled=!0),r&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},d._ssrRegister=l):s&&(l=n?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(t,e){return l.call(e),c(t,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:d}}a.d(e,"a",function(){return r})},PPxV:function(t,e,a){"use strict";a.r(e);var r={data:function(){return{record:{id:"",name:"",payroll_payment_type_id:"",payroll_payment_period_id:"",payroll_concepts:[],payroll_parameters:[]},payroll_payment_types:[],payroll_payment_periods:[],payroll_concepts:[],payroll_parameters:[],errors:[],records:[]}},props:{payroll_id:{type:Number,required:!1,default:""}},created:function(){this.reset(),this.getPayrollConcepts(),this.getPayrollPaymentTypes()},mounted:function(){this.payroll_id||(this.record.created_at=this.format_date(new Date,"YYYY-MM-DD"))},watch:{record:{deep:!0,handler:function(){var t=this;""==t.record.payroll_payment_period_id&&$.each(t.payroll_payment_periods,function(e,a){"pending"==a.payment_status&&""==t.record.payroll_payment_period_id&&(t.record.payroll_payment_period_id=a.id,t.getGeneralInformation(a.text))})}}},methods:{reset:function(){this.record={id:"",name:"",payroll_payment_type_id:"",payroll_payment_period_id:"",payroll_concepts:[],payroll_parameters:[]},this.record.created_at=moment(String(new Date)).format("YYYY-MM-DD")},getPayrollPaymentPeriod:function(){var t=this;t.payroll_parameters=[],t.record.payroll_concepts=[],t.payroll_payment_periods=[],t.record.payroll_payment_period_id="",t.record.payroll_payment_type_id>0&&axios.get("/payroll/get-payment-periods/"+t.record.payroll_payment_type_id).then(function(e){t.payroll_payment_periods=e.data.records,t.record.payroll_concepts=e.data.concepts})},getPayrollParameters:function(){var t=this;if(t.payroll_parameters=[],t.record.payroll_concepts.length>0){var e={};e.payroll_concepts=t.record.payroll_concepts?t.record.payroll_concepts:[],axios.post("/payroll/get-parameters",e).then(function(e){t.payroll_parameters=e.data})}},createForm:function(t){this.errors=[];var e=!0,a=[];$.each(this.payroll_parameters,function(t,r){var s=document.getElementById("parameter_"+r.code);a.push({code:r.code,value:s.value}),""==s.value.trim()&&(bootbox.alert("Debe establecer todos los parámetros de nómina antes de continuar"),e=!1)}),e&&(this.record.payroll_parameters=a,this.createRecord(t))},getGeneralInformation:function(t){var e=[],a=this.start_day(t,"DD/MM/YYYY","month","Monday"),r=this.start_day(t,"DD/MM/YYYY","month",1);console.log(r),a.date()>7&&a.add(7,"d");for(var s=a.month();s===a.month();)e.push(a.toString()),a.add(7,"d");document.getElementById("number_of_days_monday").innerText=e.length,document.getElementById("first_monday").innerText=e[0]}}},s=a("KHd+"),o=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"PayrollFormComponent"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h6",{staticClass:"card-title"},[t._v("Generar Nómina")]),t._v(" "),a("div",{staticClass:"card-btns"},[a("a",{staticClass:"btn btn-sm btn-primary btn-custom",attrs:{href:"#",title:"Ir atrás","data-toggle":"tooltip"},on:{click:function(e){return t.redirect_back(t.route_list)}}},[a("i",{staticClass:"fa fa-reply"})]),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"card-body"},[t.errors.length>0?a("div",{staticClass:"alert alert-danger"},[a("div",{staticClass:"container"},[t._m(1),t._v(" "),a("strong",[t._v("Cuidado!")]),t._v(" Debe verificar los siguientes errores antes de continuar:\n                    "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(e){e.preventDefault(),t.errors=[]}}},[t._m(2)]),t._v(" "),a("ul",t._l(t.errors,function(e){return a("li",[t._v(t._s(e))])}),0)])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group is-required"},[a("label",[t._v("Fecha de generación:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.record.created_at,expression:"record.created_at"}],staticClass:"form-control input-sm",attrs:{type:"date",readonly:"","data-toggle":"tooltip",title:"Fecha de generación del registro de nómina"},domProps:{value:t.record.created_at},on:{input:function(e){e.target.composing||t.$set(t.record,"created_at",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group is-required"},[a("label",[t._v("Nombre:")]),t._v(" "),a("input",{directives:[{name:"input-mask",rawName:"v-input-mask"},{name:"model",rawName:"v-model",value:t.record.name,expression:"record.name"}],staticClass:"form-control input-sm",attrs:{type:"text",placeholder:"Nombre del concepto","data-toggle":"tooltip",title:"Indique el nombre del registro de nómina (requerido)","data-inputmask-regex":"[a-zA-Z ]*"},domProps:{value:t.record.name},on:{input:function(e){e.target.composing||t.$set(t.record,"name",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.record.id,expression:"record.id"}],attrs:{type:"hidden"},domProps:{value:t.record.id},on:{input:function(e){e.target.composing||t.$set(t.record,"id",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group is-required"},[a("label",[t._v("Tipo de pago de nómina:")]),t._v(" "),a("select2",{attrs:{options:t.payroll_payment_types},on:{input:function(e){return t.getPayrollPaymentPeriod()}},model:{value:t.record.payroll_payment_type_id,callback:function(e){t.$set(t.record,"payroll_payment_type_id",e)},expression:"record.payroll_payment_type_id"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group is-required"},[a("label",[t._v("Período de pago:")]),t._v(" "),a("select2",{attrs:{options:t.payroll_payment_periods,disabled:""},model:{value:t.record.payroll_payment_period_id,callback:function(e){t.$set(t.record,"payroll_payment_period_id",e)},expression:"record.payroll_payment_period_id"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group is-required"},[a("label",[t._v("Conceptos:")]),t._v(" "),a("v-multiselect",{attrs:{id:"payroll_concepts",options:t.payroll_concepts,track_by:"text",hide_selected:!1},on:{input:function(e){return t.getPayrollParameters()}},model:{value:t.record.payroll_concepts,callback:function(e){t.$set(t.record,"payroll_concepts",e)},expression:"record.payroll_concepts"}})],1)])]),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:t.payroll_parameters.length>0,expression:"payroll_parameters.length > 0"}]},[a("hr"),t._v(" "),a("div",{staticClass:"row"},[t.payroll_parameters.length>0?a("div",{staticClass:"col-md-6"},[a("h6",{staticClass:"card-title"},[t._v(" Parámetros de nómina ")]),t._v(" "),a("div",{staticClass:"row"},t._l(t.payroll_parameters,function(e){return a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group is-required"},[a("label",[t._v(t._s(e.code)+":")]),t._v(" "),e.value?a("input",{staticClass:"form-control input-sm",attrs:{id:"parameter_"+e.code,type:"text","data-toggle":"tooltip",disabled:""!=e.value},domProps:{value:e.value}}):a("input",{directives:[{name:"input-mask",rawName:"v-input-mask"}],staticClass:"form-control input-sm",attrs:{id:"parameter_"+e.code,type:"text","data-toggle":"tooltip",title:"Indique el parámetro "+e.code+" (requerido)","data-inputmask-regex":"^[0-9]+\\.[0-9]{2}$"}})])])}),0)]):t._e(),t._v(" "),t._m(3)])])]),t._v(" "),a("div",{staticClass:"card-footer text-right"},[a("button",{staticClass:"btn btn-default btn-icon btn-round",attrs:{type:"button","data-toggle":"tooltip",title:"Borrar datos del formulario"},on:{click:t.reset}},[a("i",{staticClass:"fa fa-eraser"})]),t._v(" "),a("button",{staticClass:"btn btn-warning btn-icon btn-round",attrs:{type:"button","data-toggle":"tooltip",title:"Cancelar y regresar"},on:{click:function(e){return t.redirect_back(t.route_list)}}},[a("i",{staticClass:"fa fa-ban"})]),t._v(" "),a("button",{staticClass:"btn btn-success btn-icon btn-round",attrs:{type:"button"},on:{click:function(e){return t.createForm("payroll/registers")}}},[a("i",{staticClass:"fa fa-save"})])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"card-minimize btn btn-card-action btn-round",attrs:{href:"#",title:"Minimizar","data-toggle":"tooltip"}},[e("i",{staticClass:"now-ui-icons arrows-1_minimal-up"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-icon"},[e("i",{staticClass:"now-ui-icons objects_support-17"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"now-ui-icons ui-1_simple-remove"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6"},[a("h6",{staticClass:"card-title"},[t._v(" Información general ")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Cantidad de días lunes de mes:")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"number_of_days_monday"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Fecha de primer lunes de mes:")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"first_monday"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Inicio de mes:")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"start_month"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Día de semana de inicio de mes:")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"start_month_day"}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("strong",[t._v("Código de día de semana de inicio de mes:")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{margin:"1px 0"}},[a("span",{staticClass:"col-md-12",attrs:{id:"start_month_date"}})])])])])])}],!1,null,null,null);e.default=o.exports}}]);