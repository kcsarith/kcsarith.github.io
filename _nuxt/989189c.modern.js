(window.webpackJsonp=window.webpackJsonp||[]).push([[18,8],{291:function(t,e,r){var content=r(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("88704c42",content,!0,{sourceMap:!1})},313:function(t,e,r){"use strict";r(291)},314:function(t,e,r){var o=r(18)((function(i){return i[1]}));o.push([t.i,"[data-v-5a73b5ce] .vue-typer .custom.char{--tw-text-opacity:1;color:rgba(79, 70, 229, var(--tw-text-opacity))}[data-v-5a73b5ce] .vue-typer .custom.char.selected{--tw-bg-opacity:1;background-color:rgba(79, 70, 229, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}[data-v-5a73b5ce] .vue-typer .custom.caret{width:5px;--tw-bg-opacity:1;background-color:rgba(79, 70, 229, var(--tw-bg-opacity))}.hover-arrow[data-v-5a73b5ce]{position:relative;stroke-width:1px}",""]),o.locals={},t.exports=o},324:function(t,e,r){"use strict";r.r(e);var o={data:()=>({}),methods:{}},c=(r(313),r(4)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative bg-gray-800 overflow-hidden"},[r("div",{staticClass:"relative"},[r("main",{},[r("div",{staticClass:"mx-auto py-8 max-w-7xl    border-gray-700"},[r("div",{staticClass:"w-full",attrs:{"data-aos":"zoom-in"}},[r("div",{staticClass:"px-4 sm:px-6 sm:text-center md:max-w-4xl md:mx-auto lg:text-left"},[t.$config.workedAt.enabled?r("p",{staticClass:"text-sm text-white tracking-wide font-semibold text-center"},[t._v("Worked at")]):t._e(),t._v(" "),t.$config.workedAt.enabled?r("div",{staticClass:"mt-5 w-full sm:mx-auto lg:ml-0"},[r("div",{staticClass:"flex flex-wrap space-x-1 items-start justify-center items-center space-x-4 md:space-x-10"},t._l(t.$config.workedAt.meta,(function(t,e){return r("div",{key:e},[r("a",{staticClass:"flex items-center justify-center",attrs:{href:t.url,target:"_blank",rel:"noreferrer"}},[r("img",{staticClass:"h-8 rounded-sm sm:h-9",attrs:{src:t.src,alt:t.name}})])])})),0)]):t._e(),t._v(" "),r("h1",{staticClass:"mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"},[r("div",[r("vue-typer",{attrs:{text:t.$t("hero.words")}})],1)]),t._v(" "),r("p",{staticClass:"mt-3 text-base text-gray-300 sm:mt-5"},[t._v("\n                "+t._s(t.$t("hero.description"))+"\n              ")])])])])])])])}),[],!1,null,"5a73b5ce",null);e.default=component.exports},360:function(t,e,r){"use strict";r.r(e);var o=r(2),c={head(){return{title:"Home - ".concat(this.$config.name)}},data:()=>({posts:null}),created(){var t=this;return Object(o.a)((function*(){var e="fetchAllPosts";console.time(e);try{var r=yield t.$content("posts").without(["body","toc","dir","extension","path","tags"]).limit(3).skip(0).sortBy("createdAt","desc").fetch();t.posts=r}catch(t){console.error(t)}finally{console.timeEnd(e)}}))()}},l=r(4),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mx-auto py-8 max-w-7xl    border-gray-700",attrs:{"data-aos":"zoom-in"}},[r("img",{staticClass:"w-full object-cover",attrs:{src:t.$config.header.backgroundSrc}})]),t._v(" "),r("HeroSection"),t._v(" "),t.$config.social.github?r("GithubCalendar"):t._e(),t._v(" "),t.$config.blog.enabled&&t.posts?r("LazyRecentBlog",{attrs:{posts:t.posts}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroSection:r(324).default,GithubCalendar:r(348).default})}}]);