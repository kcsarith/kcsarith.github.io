(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4],{292:function(t,e,o){"use strict";o.r(e);var l={props:{post:{type:Object}}},r=o(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"flex transition duration-700 ease-in-out transform hover:translate-y-0.5 hover:scale-105 flex-col rounded-xl shadow-lg overflow-hidden",attrs:{to:t.localePath("/blog/"+t.post.slug)}},[t.post.image?o("div",{staticClass:"hidden sm:flex flex-shrink-0 bg-gray-900"},[o("img",{staticClass:"h-36 w-full object-cover",attrs:{src:t.post.image,alt:"Blog Image"}})]):t._e(),t._v(" "),o("div",{staticClass:"flex-1 bg-gray-900 p-5 flex flex-col justify-between"},[o("div",{staticClass:"flex-1"},[o("p",{staticClass:"text-xs font-medium text-hot-pink hover:text-hot-pink"},[o("a",{staticClass:"hover:underline hover:text-hot-pink",attrs:{href:"#"}},[t._v("\n            "+t._s(t.post.category)+"\n          ")])]),t._v(" "),o("div",[o("h3",{staticClass:"mt-0.5 text-md leading-7 font-semibold text-gray-200"},[t._v("\n            "+t._s(t.post.title)+"\n          ")]),t._v(" "),o("p",{staticClass:"mt-2 text-xs text-gray-400"},[t._v("\n            "+t._s(t.post.description)+"\n          ")])])]),t._v(" "),o("div",{staticClass:"mt-2 flex items-center"},[o("div",{staticClass:"ml-3"},[o("div",{staticClass:"flex text-xs text-gray-300"},[o("time",{attrs:{datetime:t.post.createdAt}},[t._v("\n              "+t._s(new Date(t.post.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))+"\n            ")]),t._v(" "),o("span",{staticClass:"mx-1"},[t._v("\n              ·\n            ")]),t._v(" "),o("span",[t._v("\n              "+t._s(t.post.readingTime)+"\n            ")])])])])])])}),[],!1,null,"7650650a",null);e.default=component.exports},361:function(t,e,o){"use strict";o.r(e);var l={props:{posts:{type:Array}}},r=o(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.$config.blog.enabled?o("div",{staticClass:"bg-gray-800 border-t border-b  border-gray-700"},[o("div",{staticClass:"max-w-7xl pb-6 mx-auto    border-gray-700",attrs:{"data-aos":"fade-up"}},[o("div",{staticClass:"max-w-prose text-center mx-auto py-4"},[o("p",{staticClass:"text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase"},[t._v(t._s(t.$t("recentBlog.subtext")))]),t._v(" "),o("nuxt-link",{staticClass:"mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500",attrs:{to:t.localePath("/blog")}},[t._v(t._s(t.$t("recentBlog.header")))])],1),t._v(" "),o("div",{staticClass:"gap-4 mx-4 grid max-w-7xl grid-flow-row sm:grid-flow-col",attrs:{"data-aos":"zoom-in"}},t._l(t.posts,(function(t){return o("BlogCard",{key:t.slug,attrs:{post:t}})})),1)])]):t._e()}),[],!1,null,"5c695c92",null);e.default=component.exports;installComponents(component,{BlogCard:o(292).default})}}]);