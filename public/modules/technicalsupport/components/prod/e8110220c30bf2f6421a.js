(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"KHd+":function(t,e,n){"use strict";function s(t,e,n,s,i,o,r,a){var c,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),s&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(t,e){return c.call(e),l(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:d}}n.d(e,"a",(function(){return s}))},vOq0:function(t,e,n){"use strict";n.r(e);var s={data:function(){return{records:[],columns:["created_at","assigned_to","state","id"]}},created:function(){this.table_options.headings={created_at:"Fecha de Asignación",assigned_to:"Responsable",state:"Estado de la Reparación",id:"Acción"},this.table_options.sortable=["created_at","assigned_to","state"],this.table_options.filterable=["created_at","assigned_to","state"]},mounted:function(){this.initRecords(this.route_list,"")},methods:{reset:function(){}}},i=n("KHd+"),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-client-table",{attrs:{columns:t.columns,data:t.records,options:t.table_options},scopedSlots:t._u([{key:"assigned_to",fn:function(e){return n("div",{},[n("span",[t._v("\n            "+t._s(e.row.user.profile?(e.row.user.profile.first_name?e.row.user.profile.first_name:"")+(e.row.user.profile.last_name?" "+e.row.user.profile.last_name:""):e.row.user.name)+"\n        ")])])}},{key:"state",fn:function(e){return n("div",{},[n("span",[t._v("\n            "+t._s(e.row.state?e.row.state:"N/A")+"\n        ")])])}},{key:"id",fn:function(e){return n("div",{staticClass:"text-center"},[n("div",{staticClass:"d-inline-flex"},[n("technicalsupport-repair-info",{attrs:{route_show:"repairs/vue-info/"+e.row.id,id:e.row.id}}),t._v(" "),n("button",{staticClass:"btn btn-default btn-xs btn-icon btn-action",attrs:{title:"Gestionar diagnóstico","data-toggle":"tooltip",type:"button"},on:{click:function(n){return t.redirect_back("/technicalsupport/repair-diagnostics/"+e.row.id)}}},[n("i",{staticClass:"fa fa-filter"})]),t._v(" "),n("technicalsupport-deliver-equipment",{attrs:{route_show:"repairs/deliver-equipment/"+e.row.id,repair_id:e.row.id}})],1)])}}])})}),[],!1,null,null,null);e.default=o.exports}}]);