(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"KHd+":function(t,a,s){"use strict";function e(t,a,s,e,i,n,r,o){var c,l="function"==typeof t?t.options:t;if(a&&(l.render=a,l.staticRenderFns=s,l._compiled=!0),e&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):i&&(c=o?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,a){return c.call(a),d(t,a)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}s.d(a,"a",(function(){return e}))},zkaM:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{record:{type_graph_assets:"exist"},errors:[],records:[],num_pag:10,pag:1,type:"bar",title:"Bienes Institucionales Registrados",numbers:[1,2,3,4,5,6,7,8,9,10],data:[],labels:[],descriptions:[]}},methods:{reset:function(){this.num_pag=10,this.pag=1,this.type="bar",this.errors=[],this.record={type_graph_assets:"exist"}},checkPag:function(t){return this.records.length>t&&(this.pag<=t||this.checkPag(t+this.num_pag))},firstPag:function(){this.pag=1,this.numbers=[1,2,3,4,5,6,7,8,9,10]},lastPag:function(){var t=this;t.pag=t.records.length;for(var a=0;;){if(a+t.num_pag>=t.pag){a+=1;break}a+=t.num_pag}t.numbers=[];for(var s=0;s<10;s++)t.numbers.push(a+s)},prevPag:function(){var t=this;t.pag-=1;for(var a=0;;){if(a+t.num_pag>=t.pag){a+=1;break}a+=t.num_pag}t.numbers=[];for(var s=0;s<10;s++)t.numbers.push(a+s)},nextPag:function(){var t=this;t.pag+=1;for(var a=0;;){if(a+t.num_pag>=t.pag){a+=1;break}a+=t.num_pag}t.numbers=[];for(var s=0;s<10;s++)t.numbers.push(a+s)},addPag:function(){for(var t=this,a=1,s=t.pag;;){if(s<=t.num_pag){t.pag=a*t.num_pag+1;break}s-=t.num_pag,a++}t.numbers=[];for(a=0;a<10;a++)t.numbers.push(t.pag+a)},delPag:function(){for(var t=this,a=0,s=t.pag;;){if(s<=2*t.num_pag){t.pag=t.num_pag*a+1;break}s-=t.num_pag,a++}t.numbers=[];for(a=0;a<10;a++)t.numbers.push(t.pag+a)},update:function(){var t=this;t.records=[];var a=[],s=0;"exist"==t.record.type_graph_assets?(t.title="Bienes Institucionales Registrados",axios.get("/asset/dashboard/get-inventory-assets/exist").then((function(e){void 0!==e.data.records&&(e.data.records.length>5?($.each(e.data.records,(function(e,i){s<5?(a.push(i),s++):(t.records.push(a),s=0,a=[])})),a.length>0&&t.records.push(a)):(a=e.data.records,t.records.push(a)),t.updateGraphData())}))):"min_request"==t.record.type_graph_assets?(t.title="Bienes Institucionales Menos Solicitados",axios.get("/asset/dashboard/get-inventory-assets/request/asc").then((function(e){void 0!==e.data.records&&(e.data.records.length>5?($.each(e.data.records,(function(e,i){s<5?(a.push(i),s++):(t.records.push(a),s=0,a=[])})),a.length>0&&t.records.push(a)):(a=e.data.records,t.records.push(a)),t.updateGraphData())}))):"max_request"==t.record.type_graph_assets&&(t.title="Bienes Institucionales Mas Solicitados",axios.get("/asset/dashboard/get-inventory-assets/request/desc").then((function(e){void 0!==e.data.records&&(e.data.records.length>5?($.each(e.data.records,(function(e,i){s<5?(a.push(i),s++):(t.records.push(a),s=0,a=[])})),a.length>0&&t.records.push(a)):(a=e.data.records,t.records.push(a)),t.updateGraphData())})))},updateGraphData:function(){var t=this,a=[],s=[],e=[],i=[];t.records.length>0&&(a=t.records[t.pag-1],"exist"==t.record.type_graph_assets?$.each(a,(function(t,a){s.push(a.total),e.push(a.asset_specific_category.name),i.push("Unidad:  Unidad (und)")})):$.each(a,(function(t,a){s.push(a.total),e.push(a.name),i.push("Unidad:  Unidad (und)")})),t.data=s,t.labels=e,t.descriptions=i)},updateGraphType:function(t){t!=this.type&&(this.type=t,this.update())}},mounted:function(){var t=this;this.reset(),this.switchHandler("type_graph_assets"),this.update(),$(".sel_graph_assets").on("switchChange.bootstrapSwitch",(function(a){t.update()}))},watch:{pag:function(t){this.updateGraphData()}}},i=s("KHd+"),n=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[t.errors.length>0?s("div",{staticClass:"alert alert-danger"},[s("ul",t._l(t.errors,(function(a){return s("li",[t._v(t._s(a))])})),0)]):t._e(),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"}),t._v(" "),s("div",{staticClass:"col-md-4 d-inline-flex"},[s("div",{staticClass:"dropdown"},[s("a",{staticClass:"dropdown-toggle btn btn-sm btn-default btn-custom",attrs:{href:"#",id:"list_options_diagram","data-toggle":"dropdown","aria-expanded":"false",title:""}},["doughnut"==this.type?s("i",{staticClass:"fa fa-refresh",staticStyle:{color:"white"}}):t._e(),t._v(" "),"pie"==this.type?s("i",{staticClass:"fa fa-pie-chart",staticStyle:{color:"white"}}):t._e(),t._v(" "),"line"==this.type?s("i",{staticClass:"fa fa-line-chart",staticStyle:{color:"white"}}):t._e(),t._v(" "),"bar"==this.type?s("i",{staticClass:"fa fa-bar-chart",staticStyle:{color:"white"},attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),""==this.type?s("i",{staticClass:"fa fa-stop",staticStyle:{color:"white"},attrs:{"aria-hidden":"true"}}):t._e()]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"list_options_diagram"}},[s("div",{staticClass:"d-inline-flex"},[s("a",{staticClass:"dropdown-item btn btn-sm btn-default",attrs:{title:"Vizualizar en gráfico de barras","data-toggle":"tooltip"},on:{click:function(a){return t.updateGraphType("bar")}}},[s("i",{staticClass:"fa fa-bar-chart",staticStyle:{color:"white"}})]),t._v(" "),s("a",{staticClass:"dropdown-item btn btn-sm btn-default",attrs:{title:"Vizualizar en gráfico de dona","data-toggle":"tooltip"},on:{click:function(a){return t.updateGraphType("doughnut")}}},[s("i",{staticClass:"fa fa-refresh",staticStyle:{color:"white"}})]),t._v(" "),s("a",{staticClass:"dropdown-item btn btn-sm btn-default",attrs:{title:"Vizualizar en gráfico de torta","data-toggle":"tooltip"},on:{click:function(a){return t.updateGraphType("pie")}}},[s("i",{staticClass:"fa fa-pie-chart",staticStyle:{color:"white"}})]),t._v(" "),s("a",{staticClass:"dropdown-item btn btn-sm btn-default",attrs:{title:"Vizualizar en gráfico de linea","data-toggle":"tooltip"},on:{click:function(a){return t.updateGraphType("line")}}},[s("i",{staticClass:"fa fa-line-chart",staticStyle:{color:"white"}})])])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"}),t._v(" "),s("div",{staticClass:"col-md-8"},[s("asset-graph-charts",{attrs:{data:t.data,labels:t.labels,type:t.type,descriptions:t.descriptions,title:t.title}})],1)]),t._v(" "),t.records.length>0?s("div",{staticClass:"VuePagination row col-md-12"},[s("nav",{staticClass:"text-center"},[s("ul",{staticClass:"pagination VuePagination__pagination"},[1!=t.pag?s("li",{staticClass:"VuePagination__pagination-item page-item  VuePagination__pagination-item-prev-chunk"},[s("a",{staticClass:"page-link",on:{click:function(a){return t.firstPag()}}},[t._v("PRIMERO")])]):t._e(),t._v(" "),t.pag>t.num_pag?s("li",{staticClass:"VuePagination__pagination-item page-item  VuePagination__pagination-item-prev-chunk"},[s("a",{staticClass:"page-link",on:{click:function(a){return t.delPag()}}},[t._v("<<")])]):t._e(),t._v(" "),t.pag>1?s("li",{staticClass:"VuePagination__pagination-item page-item  VuePagination__pagination-item-prev-page"},[s("a",{staticClass:"page-link",on:{click:function(a){return t.prevPag()}}},[t._v("<")])]):t._e(),t._v(" "),t._l(t.numbers,(function(a){return t.records.length>=a?s("li",{class:t.pag==a?"VuePagination__pagination-item page-item active":"VuePagination__pagination-item page-item"},[s("a",{staticClass:"page-link active",attrs:{role:"button"},on:{click:function(s){s.preventDefault(),t.pag=a}}},[t._v(t._s(a))])]):t._e()})),t._v(" "),t.records.length>t.pag?s("li",{staticClass:"VuePagination__pagination-item page-item  VuePagination__pagination-item-next-page"},[s("a",{staticClass:"page-link",on:{click:function(a){return t.nextPag()}}},[t._v(">")])]):t._e(),t._v(" "),t.checkPag(t.num_pag)?s("li",{staticClass:"VuePagination__pagination-item page-item  VuePagination__pagination-item-next-chunk"},[s("a",{staticClass:"page-link",on:{click:function(a){return t.addPag()}}},[t._v(">>")])]):t._e(),t._v(" "),t.records.length!=t.pag?s("li",{staticClass:"VuePagination__pagination-item page-item  VuePagination__pagination-item-prev-chunk"},[s("a",{staticClass:"page-link",on:{click:function(a){return t.lastPag()}}},[t._v("ÚLTIMO")])]):t._e()],2)])]):t._e()])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header"},[a("h6",{staticClass:"card-title text-uppercase"},[this._v("Gráficos del Inventario de Bienes Institucionales")]),this._v(" "),a("div",{staticClass:"card-btns"},[a("a",{staticClass:"card-minimize btn btn-card-action btn-round",attrs:{href:"#",title:"Minimizar","data-toggle":"tooltip"}},[a("i",{staticClass:"now-ui-icons arrows-1_minimal-up"})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"}),t._v(" "),s("div",{staticClass:"col-md-3"},[s("div",{staticClass:" form-group"},[s("label",[t._v("Existencia")]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"col-12 bootstrap-switch-mini"},[s("input",{staticClass:"form-control bootstrap-switch bootstrap-switch-mini sel_graph_assets",attrs:{type:"radio",name:"type_graph_assets",value:"exist",id:"sel_product_exist","data-on-label":"SI","data-off-label":"NO",checked:""}})])])])]),t._v(" "),s("div",{staticClass:"col-md-3"},[s("div",{staticClass:" form-group"},[s("label",[t._v("Más Solicitados")]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"col-12 bootstrap-switch-mini"},[s("input",{staticClass:"form-control bootstrap-switch bootstrap-switch-mini sel_graph_assets",attrs:{type:"radio",name:"type_graph_assets",value:"max_request",id:"sel_product_max_request","data-on-label":"SI","data-off-label":"NO"}})])])])]),t._v(" "),s("div",{staticClass:"col-md-3"},[s("div",{staticClass:" form-group"},[s("label",[t._v("Menos Solicitados")]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"col-12 bootstrap-switch-mini"},[s("input",{staticClass:"form-control bootstrap-switch bootstrap-switch-mini sel_graph_assets",attrs:{type:"radio",name:"type_graph_assets",value:"min_request",id:"sel_product_min_request","data-on-label":"SI","data-off-label":"NO"}})])])])])])}],!1,null,null,null);a.default=n.exports}}]);