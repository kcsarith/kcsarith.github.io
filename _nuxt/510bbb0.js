(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{366:function(t,e,n){"use strict";n.r(e);var l={props:{post:{type:Object}}},o=n(7),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"flex transition duration-700 ease-in-out transform hover:translate-y-0.5 hover:scale-105 flex-col rounded-xl shadow-lg overflow-hidden",attrs:{to:t.localePath("/blog/"+t.post.slug)}},[t.post.image?n("div",{staticClass:"hidden sm:flex flex-shrink-0 bg-gray-900"},[n("img",{staticClass:"h-36 w-full object-cover",attrs:{src:t.post.image,alt:"Blog Image"}})]):t._e(),t._v(" "),n("div",{staticClass:"flex-1 bg-gray-900 p-5 flex flex-col justify-between"},[n("div",{staticClass:"flex-1"},[n("p",{staticClass:"text-xs font-medium text-hot-pink hover:text-hot-pink"},[n("a",{staticClass:"hover:underline hover:text-hot-pink",attrs:{href:"#"}},[t._v("\n            "+t._s(t.post.category)+"\n          ")])]),t._v(" "),n("div",[n("h3",{staticClass:"mt-0.5 text-md leading-7 font-semibold text-gray-200"},[t._v("\n            "+t._s(t.post.title)+"\n          ")]),t._v(" "),n("p",{staticClass:"mt-2 text-xs text-gray-400"},[t._v("\n            "+t._s(t.post.description)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"mt-2 flex items-center"},[n("div",{staticClass:"ml-3"},[n("div",{staticClass:"flex text-xs text-gray-300"},[n("time",{attrs:{datetime:t.post.createdAt}},[t._v("\n              "+t._s(new Date(t.post.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))+"\n            ")]),t._v(" "),n("span",{staticClass:"mx-1"},[t._v("\n              ·\n            ")]),t._v(" "),n("span",[t._v("\n              "+t._s(t.post.readingTime)+"\n            ")])])])])])])}),[],!1,null,"7650650a",null);e.default=component.exports}}]);