(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{367:function(r,o,t){"use strict";t.r(o);t(14);var e={methods:{onImageLoadError:function(){this.imageLoadError=!0}},computed:{imageURL:function(){var r="https://ui-avatars.com/api/?uppercase=false&background=212324&color=4f46e5&rounded=true&name=".concat(this.name);return!this.photoURL||this.imageLoadError?r:this.photoURL}},data:function(){return{imageLoadError:!1}},props:{name:{type:String},photoURL:{type:String,required:!1}}},n=t(7),component=Object(n.a)(e,(function(){var r=this,o=r.$createElement;return(r._self._c||o)("img",{attrs:{src:r.imageURL,alt:"user photo"},on:{error:r.onImageLoadError}})}),[],!1,null,null,null);o.default=component.exports}}]);