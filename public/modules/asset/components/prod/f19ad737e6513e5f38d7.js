(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"KHd+":function(t,e,s){"use strict";function i(t,e,s,i,a,o,r,n){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):a&&(c=n?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}s.d(e,"a",(function(){return i}))},o8hD:function(t,e,s){"use strict";s.r(e);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a={data:function(){return{record:{id:"",date:"",asset_disincorporation_motive_id:"",observation:"",asset_type_id:"",asset_category_id:"",asset_subcategory_id:"",asset_specific_category_id:""},records:[],files:[],page:1,total:"",perPage:10,lastPage:"",pageValues:[1,2,3,4,5,6,7,8,9,10],perPageValues:[{id:10,text:"10"},{id:25,text:"25"},{id:50,text:"50"}],columns:["check","inventory_serial","institution","asset_condition","asset_status","serial","marca","model"],errors:[],asset_disincorporation_motives:[],asset_types:[],asset_categories:[],asset_subcategories:[],asset_specific_categories:[],selected:[],selectAll:!1,table_options:{rowClassCallback:function(t){var e=document.getElementById("checkbox_"+t.id);return e&&e.checked?"selected-row cursor-pointer":"cursor-pointer"},headings:{inventory_serial:"Código",institution:"Ubicación",asset_condition:"Condición Física",asset_status:"Estatus de Uso",serial:"Serial",marca:"Marca",model:"Modelo"},sortable:["inventory_serial","institution","asset_condition","asset_status","serial","marca","model"],filterable:["inventory_serial","institution","asset_condition","asset_status","serial","marca","model"]}}},watch:{perPage:function(t){1==this.page?this.loadAssets("/asset/registers/vue-list/"+t+"/"+this.page):this.changePage(1)},page:function(t){this.loadAssets("/asset/registers/vue-list/"+this.perPage+"/"+t)}},created:function(){this.loadAssets("/asset/registers/vue-list/"+this.perPage+"/"+this.page),this.getAssetTypes(),this.getAssetDisincorporationMotives(),this.disincorporationid&&this.loadForm(this.disincorporationid)},mounted:function(){this.disincorporationid&&!this.assetid?this.loadForm(this.disincorporationid):!this.disincorporationid&&this.assetid&&this.selected.push(this.assetid)},props:{disincorporationid:Number,assetid:Number},methods:{toggleActive:function(t){var e=t.row,s=document.getElementById("checkbox_"+e.id);if(s&&0==s.checked)(i=this.selected.indexOf(e.id))>=0?this.selected.splice(i,1):s.click();else if(s&&1==s.checked){var i;(i=this.selected.indexOf(e.id))>=0?s.click():this.selected.push(e.id)}},reset:function(){this.record={id:"",date:"",asset_disincorporation_motive_id:"",observation:"",asset_type_id:"",asset_category_id:"",asset_subcategory_id:"",asset_specific_category_id:""},this.selected=[],this.files=[],this.selectAll=!1},select:function(){var t=this;t.selected=[],$.each(t.records,(function(e,s){var i=document.getElementById("checkbox_"+s.id);t.selectAll?i&&i.checked&&i.click():t.selected.push(s.id)}))},changePage:function(t){this.page=t;for(var e=0;;){if(e+10>=this.page){e+=1;break}e+=10}this.pageValues=[];for(var s=0;s<10;s++)this.pageValues.push(e+s)},createRecord:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this,a=document.querySelector("#files"),o=new FormData;if(i.errors=[],!i.selected.length>0)return bootbox.alert("Debe agregar almenos un elemento a la solicitud"),!1;if(this.record.id);else{for(var r in i.loading=!0,i.record)"observation"==r?o.append("observation",window.editor.getData()):o.append(r,i.record[r]);o.append("file",a.files[0]),o.append("assets",i.selected),axios.post("/"+t,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){void 0!==a.data.redirect?location.href=a.data.redirect:(i.errors=[],s&&i.reset(),e&&i.readRecords(t),i.loading=!1,i.showMessage("store"))})).catch((function(t){if(i.errors=[],void 0!==t.response)for(var e in t.response.data.errors)t.response.data.errors[e]&&i.errors.push(t.response.data.errors[e][0]);i.loading=!1}))}},loadForm:function(t){var e=this,s={};axios.get("/asset/disincorporations/vue-info/"+t).then((function(t){i("undefined"!=t.data.records)&&(e.record=t.data.records,s=t.data.records.asset_disincorporation_assets,$.each(s,(function(t,s){e.selected.push(s.asset.id)})))}))},loadAssets:function(t){var e=this;t+=null!=e.disincorporationid?"/disincorporations/"+e.disincorporationid:"/disincorporations",axios.get(t).then((function(t){void 0!==t.data.records&&(e.records=t.data.records,e.total=t.data.total,e.lastPage=t.data.lastPage,e.$refs.tableMax.setLimit(e.perPage))}))},filterRecords:function(){var t=this,e={asset_type:t.record.asset_type_id,asset_category:t.record.asset_category_id,asset_subcategory:t.record.asset_subcategory_id,asset_specific_category:t.record.asset_specific_category_id};axios.post("/asset/registers/search/clasification",e).then((function(e){t.records=e.data.records}))},getAssetDisincorporationMotives:function(){var t=this;t.asset_disincorporation_motives=[],axios.get("/asset/disincorporations/get-motives").then((function(e){t.asset_disincorporation_motives=e.data}))}}},o=s("KHd+"),r=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"AssetDisincorporationForm"}},[s("div",{staticClass:"card-body"},[t.errors.length>0?s("div",{staticClass:"alert alert-danger"},[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("strong",[t._v("Cuidado!")]),t._v(" Debe verificar los siguientes errores antes de continuar:\n\t\t\t\t\t"),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(e){e.preventDefault(),t.errors=[]}}},[t._m(1)]),t._v(" "),s("ul",t._l(t.errors,(function(e){return s("li",[t._v(t._s(e))])})),0)])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6",attrs:{id:"helpDisincorporationDate"}},[s("div",{staticClass:"form-group is-required"},[s("label",[t._v("Fecha de la Desincorporación")]),t._v(" "),s("div",{staticClass:"input-group input-sm"},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.record.date,expression:"record.date"}],staticClass:"form-control input-sm",attrs:{type:"date","data-toogle":"tolltip",title:"Fecha de la desincorporación"},domProps:{value:t.record.date},on:{input:function(e){e.target.composing||t.$set(t.record,"date",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"col-md-6",attrs:{id:"helpDisincorporationMotive"}},[s("div",{staticClass:"form-group is-required"},[s("label",[t._v("Motivo de la Desincorporación")]),t._v(" "),s("select2",{attrs:{options:t.asset_disincorporation_motives,"data-toggle":"tooltip",title:"Indique el motivo de la desincorporación del bien"},model:{value:t.record.asset_disincorporation_motive_id,callback:function(e){t.$set(t.record,"asset_disincorporation_motive_id",e)},expression:"record.asset_disincorporation_motive_id"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.record.id,expression:"record.id"}],attrs:{type:"hidden"},domProps:{value:t.record.id},on:{input:function(e){e.target.composing||t.$set(t.record,"id",e.target.value)}}})],1)]),t._v(" "),s("div",{staticClass:"col-md-6",attrs:{id:"helpDisincorporationObservation"}},[s("div",{staticClass:"form-group is-required"},[s("label",[t._v("Observaciones generales")]),t._v(" "),s("ckeditor",{staticClass:"form-control",attrs:{editor:t.ckeditor.editor,"data-toggle":"tooltip",id:"observations",title:"Indique alguna observación referente a la desincorporación",config:t.ckeditor.editorConfig,name:"observations","tag-name":"textarea",rows:"3"},model:{value:t.record.observation,callback:function(e){t.$set(t.record,"observation",e)},expression:"record.observation"}})],1)]),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3",attrs:{id:"helpSearchAssetType"}},[s("div",{staticClass:"form-group"},[s("label",[t._v("Tipo de Bien")]),t._v(" "),s("select2",{attrs:{options:t.asset_types,"data-toggle":"tooltip",title:"Indique el tipo del bien"},on:{input:function(e){return t.getAssetCategories()}},model:{value:t.record.asset_type_id,callback:function(e){t.$set(t.record,"asset_type_id",e)},expression:"record.asset_type_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-3",attrs:{id:"helpSearchAssetCategory"}},[s("div",{staticClass:"form-group"},[s("label",[t._v("Categoria General")]),t._v(" "),s("select2",{attrs:{options:t.asset_categories,"data-toggle":"tooltip",title:"Indique la categoria general del bien"},on:{input:function(e){return t.getAssetSubcategories()}},model:{value:t.record.asset_category_id,callback:function(e){t.$set(t.record,"asset_category_id",e)},expression:"record.asset_category_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-3",attrs:{id:"helpSearchAssetSubCategory"}},[s("div",{staticClass:"form-group"},[s("label",[t._v("Subcategoria")]),t._v(" "),s("select2",{attrs:{options:t.asset_subcategories,"data-toggle":"tooltip",title:"Indique la subcategoria del bien"},on:{input:function(e){return t.getAssetSpecificCategories()}},model:{value:t.record.asset_subcategory_id,callback:function(e){t.$set(t.record,"asset_subcategory_id",e)},expression:"record.asset_subcategory_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-3",attrs:{id:"helpSearchAssetSpecificCategory"}},[s("div",{staticClass:"form-group"},[s("label",[t._v("Categoria Específica")]),t._v(" "),s("select2",{attrs:{options:t.asset_specific_categories,"data-toggle":"tooltip",title:"Indique la categoria específica del bien"},model:{value:t.record.asset_specific_category_id,callback:function(e){t.$set(t.record,"asset_specific_category_id",e)},expression:"record.asset_specific_category_id"}})],1)])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-sm btn-primary btn-info float-right",attrs:{type:"button",id:"helpSearchButton",title:"Buscar registros","data-toggle":"tooltip"},on:{click:function(e){return t.filterRecords()}}},[s("i",{staticClass:"fa fa-search"})])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"form-group form-inline pull-right VueTables__limit-2"},[s("div",{staticClass:"VueTables__limit-field"},[s("label",{},[t._v("Registros")]),t._v(" "),s("select2",{attrs:{options:t.perPageValues},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)]),t._v(" "),s("v-client-table",{ref:"tableMax",attrs:{id:"helpTable",columns:t.columns,data:t.records,options:t.table_options},on:{"row-click":t.toggleActive},scopedSlots:t._u([{key:"check",fn:function(e){return s("div",{staticClass:"text-center"},[s("label",{staticClass:"form-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"cursor-pointer",attrs:{type:"checkbox",id:"checkbox_"+e.row.id},domProps:{value:e.row.id,checked:Array.isArray(t.selected)?t._i(t.selected,e.row.id)>-1:t.selected},on:{change:function(s){var i=t.selected,a=s.target,o=!!a.checked;if(Array.isArray(i)){var r=e.row.id,n=t._i(i,r);a.checked?n<0&&(t.selected=i.concat([r])):n>-1&&(t.selected=i.slice(0,n).concat(i.slice(n+1)))}else t.selected=o}}})])])}},{key:"institution",fn:function(e){return s("div",{staticClass:"text-center"},[s("span",[t._v(t._s(e.row.institution?e.row.institution.name:e.row.institution_id?e.row.institution_id:"N/A"))])])}},{key:"asset_condition",fn:function(e){return s("div",{staticClass:"text-center"},[s("span",[t._v(t._s(e.row.asset_condition?e.row.asset_condition.name:e.row.asset_condition_id))])])}},{key:"asset_status",fn:function(e){return s("div",{staticClass:"text-center"},[s("span",[t._v(t._s(e.row.asset_status?e.row.asset_status.name:e.row.asset_status_id))])])}}])},[s("div",{staticClass:"text-center",attrs:{slot:"h__check"},slot:"h__check"},[s("label",{staticClass:"form-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"cursor-pointer",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,null)>-1:t.selectAll},on:{click:function(e){return t.select()},change:function(e){var s=t.selectAll,i=e.target,a=!!i.checked;if(Array.isArray(s)){var o=t._i(s,null);i.checked?o<0&&(t.selectAll=s.concat([null])):o>-1&&(t.selectAll=s.slice(0,o).concat(s.slice(o+1)))}else t.selectAll=a}}})])])]),t._v(" "),s("div",{staticClass:"VuePagination-2 row col-md-12 "},[s("nav",{staticClass:"text-center"},[s("ul",{staticClass:"pagination VuePagination__pagination"},[1!=t.page?s("li",{staticClass:"VuePagination__pagination-item page-item  VuePagination__pagination-item-prev-chunk"},[s("a",{staticClass:"page-link",on:{click:function(e){return t.changePage(1)}}},[t._v("PRIMERO")])]):t._e(),t._v(" "),t._m(6),t._v(" "),t.page>1?s("li",{staticClass:"VuePagination__pagination-item page-item  VuePagination__pagination-item-prev-page"},[s("a",{staticClass:"page-link",on:{click:function(e){return t.changePage(t.page-1)}}},[t._v("<")])]):t._e(),t._v(" "),t._l(t.pageValues,(function(e){return e<=t.lastPage?s("li",{class:t.page==e?"VuePagination__pagination-item page-item active":"VuePagination__pagination-item page-item"},[s("a",{staticClass:"page-link active",attrs:{role:"button"},on:{click:function(s){return t.changePage(e)}}},[t._v(t._s(e))])]):t._e()})),t._v(" "),t.page<t.lastPage?s("li",{staticClass:"VuePagination__pagination-item page-item  VuePagination__pagination-item-next-page"},[s("a",{staticClass:"page-link",on:{click:function(e){return t.changePage(t.page+1)}}},[t._v(">")])]):t._e(),t._v(" "),t._m(7),t._v(" "),t.lastPage!=t.page?s("li",{staticClass:"VuePagination__pagination-item page-item  VuePagination__pagination-item-prev-chunk"},[s("a",{staticClass:"page-link",on:{click:function(e){return t.changePage(t.lastPage)}}},[t._v("ÚLTIMO")])]):t._e()],2),t._v(" "),s("p",{staticClass:"VuePagination__count text-center col-md-12"})])])],1),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3 offset-md-9",attrs:{id:"helpParamButtons"}},[s("button",{staticClass:"btn btn-default btn-icon btn-round",attrs:{type:"button",title:"Borrar datos del formulario"},on:{click:function(e){return t.reset()}}},[s("i",{staticClass:"fa fa-eraser"})]),t._v(" "),t._m(8),t._v(" "),s("button",{staticClass:"btn btn-success btn-icon btn-round btn-modal-save",attrs:{type:"button",title:"Guardar registro"},on:{click:function(e){return t.createRecord("asset/disincorporations")}}},[s("i",{staticClass:"fa fa-save"})])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert-icon"},[e("i",{staticClass:"now-ui-icons objects_support-17"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"now-ui-icons ui-1_simple-remove"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-addon"},[e("i",{staticClass:"now-ui-icons ui-1_calendar-60"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",[this._v(" Adjuntar archivos ")]),this._v(" "),e("input",{attrs:{id:"files",name:"files",type:"file",accept:".odt, .pdf, .png, .jpg, .jpeg",multiple:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("b",[this._v("Información de los Bienes a ser Desincorporados")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row",staticStyle:{margin:"10px 0"}},[e("div",{staticClass:"col-md-12"},[e("b",[this._v("Filtros")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"VuePagination__pagination-item page-item  VuePagination__pagination-item-prev-chunk disabled"},[e("a",{staticClass:"page-link"},[this._v("<<")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"VuePagination__pagination-item page-item  VuePagination__pagination-item-next-chunk disabled"},[e("a",{staticClass:"page-link"},[this._v(">>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-warning btn-icon btn-round btn-modal-close",attrs:{type:"button","data-dismiss":"modal",title:"Cancelar y regresar"}},[e("i",{staticClass:"fa fa-ban"})])}],!1,null,null,null);e.default=r.exports}}]);