(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{352:function(t,e,r){"use strict";r.r(e);r(13);var n={head(){return{title:"About me - ".concat(this.$config.name)}},data:()=>({totalXP:0,newXP:0,level:0}),methods:{initValues(t){var{total_xp:e,new_xp:r,dates:n}=t;this.totalXP=e,this.newXP=r,this.level=Math.floor(.025*Math.sqrt(e))}},mounted(){fetch("https://codestats.net/api/users/".concat(this.$config.social.codestats)).then((t=>t.json())).then((data=>{this.initValues(data)})).catch((t=>{console.error(t)}))}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-7xl pb-48 border-gray-700 mx-auto"},[r("div",{staticClass:"relative max-w-7xl py-6 mx-auto",attrs:{"data-aos":"fade-up"}},[r("div",{staticClass:"text-center"},[r("h2",{staticClass:"text-2xl tracking-tight font-extrabold text-gray-200"},[t._v("\r\n        "+t._s(t.$t("about.header"))+"\r\n      ")]),t._v(" "),r("p",{staticClass:"mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400"},[t._v("\r\n        "+t._s(t.$t("about.subtext"))+"\r\n      ")])])]),t._v(" "),r("div",{staticClass:"max-w-4xl mx-4 border  border-gray-700 sm:mx-auto bg-gray-700 shadow-md rounded-md overflow-hidden sm:rounded-lg",attrs:{"data-aos":"zoom-in"}},[t._m(0),t._v(" "),r("div",{staticClass:"w-full py-12"},t._l(t.$config.about.paragraphs,(function(e,n){return r("p",{key:n,staticClass:"mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-300"},[t._v("\r\n            "+t._s(e)+"\r\n        ")])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://app.daily.dev/kcsarith",target:"_blank"}},[e("img",{staticClass:"m-auto mt-8",attrs:{src:"https://api.daily.dev/devcards/a9cbbbd93c5e416894d35401f9bfb1d7.png?r=meu",width:"400",alt:"Krisna Sarith's Dev Card"}})])}],!1,null,"39f313ae",null);e.default=component.exports}}]);