(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"KHd+":function(t,n,e){"use strict";function o(t,n,e,o,a,i,r,s){var c,l="function"==typeof t?t.options:t;if(n&&(l.render=n,l.staticRenderFns=e,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):a&&(c=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,n){return c.call(n),d(t,n)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}e.d(n,"a",function(){return o})},yPoi:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{record:{},records:[],columns:["created_at","name","payroll_payment_period","id"]}},created:function(){this.table_options.headings={created_at:"Fecha de generación",name:"Nombre",payroll_payment_period:"Período de pago",id:"Acción"},this.table_options.sortable=["created_at","name","payroll_payment_period"],this.table_options.filterable=["created_at","name","payroll_payment_period"]},mounted:function(){this.initRecords(this.route_list,"")},methods:{reset:function(){}}},a=e("KHd+"),i=Object(a.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"payrollListComponent"}},[e("v-client-table",{attrs:{columns:t.columns,data:t.records,options:t.table_options},scopedSlots:t._u([{key:"id",fn:function(n){return e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-info btn-xs btn-icon btn-action",attrs:{"data-toggle":"tooltip",title:"Ver información del registro","data-placement":"bottom",type:"button"},on:{click:function(e){return t.showRecord(n.row.id)}}},[e("i",{staticClass:"fa fa-info-circle"})]),t._v(" "),e("button",{staticClass:"btn btn-primary btn-xs btn-icon btn-action",attrs:{"data-toggle":"tooltip",title:"Imprimir registro","data-placement":"bottom",type:"button"}},[e("i",{staticClass:"fa fa-print"})]),t._v(" "),e("button",{staticClass:"btn btn-warning btn-xs btn-icon btn-action",attrs:{"data-toggle":"tooltip",title:"Modificar registro","data-placement":"bottom",type:"button"},on:{click:function(e){return t.editForm(n.row.id)}}},[e("i",{staticClass:"fa fa-edit"})]),t._v(" "),e("button",{staticClass:"btn btn-default btn-xs btn-icon btn-action",attrs:{"data-toggle":"tooltip",title:"Cerrar registro","data-placement":"bottom",type:"button"}},[e("i",{staticClass:"fa fa-unlock-alt"})])])}},{key:"payroll_payment_period",fn:function(t){return e("div",{staticClass:"text-center"})}}])})],1)},[],!1,null,null,null);n.default=i.exports}}]);