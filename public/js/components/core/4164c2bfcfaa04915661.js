(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"KHd+":function(t,e,a){"use strict";function i(t,e,a,i,n,o,r,c){var s,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=s):n&&(s=c?function(){n.call(this,this.$root.$options.shadowRoot)}:n),s)if(l.functional){l._injectStyles=s;var d=l.render;l.render=function(t,e){return s.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,s):[s]}return{exports:t,options:l}}a.d(e,"a",(function(){return i}))},"fY/u":function(t,e,a){"use strict";a.r(e);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n={data:function(){return{id:"",url:""}},props:{imgWidth:{type:String,required:!1,default:"64px"},imgHeight:{type:String,required:!1,default:"64px"},imgDefault:{type:String,required:!1,default:"/images/no-image2.png"},imgId:{type:Number,required:!1,default:""}},watch:{imgDefault:function(t,e){this.url=this.imgDefault,this.id=this.imgId}},methods:{selectImage:function(t){$("#".concat(t)).click()},uploadImage:function(t,e){var a=this,i=(e=void 0!==e?e:"",new FormData),n=document.querySelector("#".concat(t));i.append("image",n.files[0]),e?axios.put("".concat("http://localhost/kavac","/upload-image/").concat(e)).then((function(t){})).catch((function(t){a.logs("ImageManagementComponent",127,t,"uploadImage")})):axios.post("".concat("http://localhost/kavac","/upload-image"),i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){if(!t.data.result)return a.showMessage("custom","Error","growl-danger","screen-error","La imagen no se pudo cargar, verifique e intente de nuevo.\n                            Si el problema persiste contacte al administrador del sistema."),!1;a.id=t.data.image_id,a.url="".concat("http://localhost/kavac","/").concat(t.data.image_url),a.$emit("changeImage",a.id),$("#imgDelete").tooltip({delay:{hide:100}})})).catch((function(t){a.logs("ImageManagementComponent",120,t,"uploadImage")}))},deleteImage:function(t){var e=this;t=void 0!==i(t)&&t?{force_delete:t}:{};e.id&&bootbox.confirm("Esta seguro de querer eliminar la imagen?",(function(a){a&&axios.delete("".concat("http://localhost/kavac","/upload-image/").concat(e.id),t).then((function(t){t.data.result?(e.id="",e.url="".concat("http://localhost/kavac","/images/no-image2.png")):$.gritter.add({title:"Error!",text:t.data.message,class_name:"growl-danger",image:"/images/screen-error.png",sticky:!1,time:2500})})).catch((function(t){e.logs("ImageManagementComponent",165,t,"deleteImage")}))}))}},mounted:function(){this.url=this.imgDefault?this.imgDefault:"".concat("http://localhost/kavac","/images/no-image2.png")}},o=a("KHd+"),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("img",{staticClass:"img-fluid default-image-style",style:{width:t.imgWidth,height:t.imgHeight},attrs:{src:t.url,alt:"Imagen",id:"showImage",title:"Click para cargar o modificar la imagen","data-toggle":"tooltip"},on:{click:function(e){return t.selectImage("image")}}}),t._v(" "),a("input",{staticClass:"hide-image-file",attrs:{type:"file",id:"image",name:"image",accept:"image/*"},on:{change:function(e){return t.uploadImage("image")}}}),t._v(" "),""!==t.id?a("div",{staticClass:"row",class:{"row-delete-img":!t.id}},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"text-center"},[a("a",{staticClass:"btn btn-primary btn-simple btn-img-action",attrs:{id:"imgDelete",href:"javascript:void(0)",title:"Eliminar imagen","data-toggle":"tooltip"},on:{click:function(e){return e.preventDefault(),t.deleteImage(!0)}}},[a("i",{staticClass:"fa fa-times"})])])])]):t._e()])}),[],!1,null,null,null);e.default=r.exports}}]);