(window.webpackJsonp=window.webpackJsonp||[]).push([[21,11],{338:function(t,e,r){var n=r(11),o=r(154);t.exports=n?o:function(t){return Set.prototype.values.call(t)}},343:function(t,e,r){"use strict";var n=r(231),o=r(232);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},344:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(345);n({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return c.apply(this,arguments)}})},345:function(t,e,r){"use strict";var n=r(4),o=r(31);t.exports=function(){for(var t=n(this),e=o(t.add),r=0,c=arguments.length;r<c;r++)e.call(t,arguments[r]);return t}},346:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(233);n({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},347:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(41),l=r(4),f=r(31),d=r(63),h=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{difference:function(t){var e=l(this),r=new(d(e,c("Set")))(e),n=f(r.delete);return h(t,(function(t){n.call(r,t)})),r}})},348:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(4),l=r(26),f=r(338),d=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0,3);return!d(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},349:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(41),l=r(4),f=r(31),d=r(26),h=r(63),v=r(338),x=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{filter:function(t){var e=l(this),r=v(e),n=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(h(e,c("Set"))),m=f(o.add);return x(r,(function(t){n(t,t,e)&&m.call(o,t)}),{IS_ITERATOR:!0}),o}})},350:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(4),l=r(26),f=r(338),d=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},351:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(41),l=r(4),f=r(31),d=r(63),h=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(t){var e=l(this),r=new(d(e,c("Set"))),n=f(e.has),o=f(r.add);return h(t,(function(t){n.call(e,t)&&o.call(r,t)})),r}})},352:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(4),l=r(31),f=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(t){var e=c(this),r=l(e.has);return!f(t,(function(t,n){if(!0===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},353:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(41),l=r(4),f=r(31),d=r(154),h=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(t){var e=d(this),r=l(t),n=r.has;return"function"!=typeof n&&(r=new(c("Set"))(t),n=f(r.has)),!h(e,(function(t,e){if(!1===n.call(r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},354:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(4),l=r(31),f=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(t){var e=c(this),r=l(e.has);return!f(t,(function(t,n){if(!1===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},355:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(4),l=r(338),f=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{join:function(t){var e=c(this),r=l(e),n=void 0===t?",":String(t),o=[];return f(r,o.push,{that:o,IS_ITERATOR:!0}),o.join(n)}})},356:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(41),l=r(4),f=r(31),d=r(26),h=r(63),v=r(338),x=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{map:function(t){var e=l(this),r=v(e),n=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(h(e,c("Set"))),m=f(o.add);return x(r,(function(t){m.call(o,n(t,t,e))}),{IS_ITERATOR:!0}),o}})},357:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(4),l=r(31),f=r(338),d=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(t){var e=c(this),r=f(e),n=arguments.length<2,o=n?void 0:arguments[1];if(l(t),d(r,(function(r){n?(n=!1,o=r):o=t(o,r,r,e)}),{IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty set with no initial value");return o}})},358:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(4),l=r(26),f=r(338),d=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},359:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(41),l=r(4),f=r(31),d=r(63),h=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(t){var e=l(this),r=new(d(e,c("Set")))(e),n=f(r.delete),o=f(r.add);return h(t,(function(t){n.call(r,t)||o.call(r,t)})),r}})},360:function(t,e,r){"use strict";var n=r(2),o=r(11),c=r(41),l=r(4),f=r(31),d=r(63),h=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(t){var e=l(this),r=new(d(e,c("Set")))(e);return h(t,f(r.add),{that:r}),r}})},374:function(t,e,r){"use strict";r.r(e);var n={props:{project:{type:Object}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col rounded-xl shadow-lg overflow-hidden"},[r("div",{staticClass:"flex-1 bg-gray-900 p-4 md:p-16 flex flex-row justify-between"},[r("div",{staticClass:"flex-1 flex flex-col justify-between md:pr-12 flex-shrink"},[r("div",[r("div",{staticClass:"text-sm font-medium text-hot-pink hover:text-hot-pink"},[r("p",{staticClass:"text-hot-pink"},[t._v("\n              "+t._s(t.project.tech)+"\n            ")])]),t._v(" "),r("nuxt-link",{staticClass:"group",attrs:{to:t.localePath("/projects/"+t.project.slug)}},[r("h3",{staticClass:"mt-0.5 group-hover:text-indigo-500 text-xl leading-7 font-semibold text-gray-200"},[t._v("\n              "+t._s(t.project.title)+"\n            ")]),t._v(" "),r("p",{staticClass:"text-md text-gray-400"},[t._v("\n              "+t._s(t.project.description)+"\n            ")])])],1),t._v(" "),r("div",{staticClass:"flex mt-2 space-x-2 flex-row"},[r("a",{staticClass:"hover:text-indigo-500 text-gray-600",attrs:{target:"_blank",rel:"noreferrer",href:t.project.website}},[r("svg",{staticClass:"h-8 w-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z","clip-rule":"evenodd"}})])]),t._v(" "),r("a",{staticClass:"hover:text-indigo-500 text-gray-600",attrs:{target:"_blank",rel:"noreferrer",href:t.project.github}},[r("span",{staticClass:"sr-only"},[t._v("GitHub")]),t._v(" "),r("svg",{staticClass:"h-8 w-8",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 24 24"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"}})])])])]),t._v(" "),r("nuxt-link",{staticClass:"group",attrs:{to:t.localePath("/projects/"+t.project.slug)}},[r("div",{staticClass:"flex flex-col justify-center items-center"},[r("img",{staticClass:"rounded-md flex-shrink max-w-xs hidden md:inline",attrs:{src:t.project.logo,alt:"logo"}})])])],1)])}),[],!1,null,"633741f6",null);e.default=component.exports},415:function(t,e,r){"use strict";r.r(e);var n=r(3),o=r(68),c=(r(32),r(19),r(22),r(38),r(58),r(155),r(52),r(9),r(343),r(14),r(344),r(346),r(347),r(348),r(349),r(350),r(351),r(352),r(353),r(354),r(355),r(356),r(357),r(358),r(359),r(360),r(20),r(35),r(42),r(51),"all"),l={head:function(){return{title:"Projects - ".concat(this.$config.name)}},computed:{techs:function(){var t=[];return this.projects.forEach((function(e){e.tech.split(" ").forEach((function(e){""!==e.trim()&&t.push(e.trim())}))})),[c].concat(Object(o.a)(new Set(t)))},projectsByTechs:function(){var t=this;return this.currentTech===c?this.projects:this.projects.filter((function(e){return e.tech.includes(t.currentTech)}))}},data:function(){return{currentTech:c,ALL:c}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n="fetchAllProjects",console.time(n),e.next=5,r("projects").without(["body","toc"]).sortBy("id","asc").fetch();case 5:return o=e.sent,console.timeEnd(n),e.abrupt("return",{projects:o});case 8:case"end":return e.stop()}}),e)})))()}},f=r(5),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative max-w-5xl border-gray-700 py-6 mx-auto"},[r("div",{staticClass:"text-center",attrs:{"data-aos":"fade-up"}},[r("h2",{staticClass:"text-2xl tracking-tight font-extrabold text-gray-200"},[t._v("\n      "+t._s(t.$t("projects.header"))+"\n    ")]),t._v(" "),r("p",{staticClass:"mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400"},[t._v("\n      "+t._s(t.$t("projects.subtext"))+"\n    ")])]),t._v(" "),r("div",{staticClass:"select-none px-4 items-center justify-center sm:justify-start overflow-hidden flex pt-4"},[r("nav",{staticClass:"text-center",attrs:{"aria-label":"Tabs"}},t._l(t.techs,(function(e){return r("button",{key:e,staticClass:"text-gray-300 focus:outline-none focus:ring-transparent focus:ring-offset-transparent hover:text-hot-pink px-3 py-2 font-medium text-sm rounded-xl",class:{"bg-gray-900 text-gray-300":e===t.currentTech},on:{click:function(r){t.currentTech=e}}},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]),t._v(" "),r("div",{staticClass:"mt-5 gap-4 mx-auto flex flex-col",attrs:{"data-aos":"zoom-in"}},t._l(t.projectsByTechs,(function(t){return r("ProjectCard",{key:t.slug,attrs:{project:t}})})),1)])}),[],!1,null,"0862b76b",null);e.default=component.exports;installComponents(component,{ProjectCard:r(374).default})}}]);