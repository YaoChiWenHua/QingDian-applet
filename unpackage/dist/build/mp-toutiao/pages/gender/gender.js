(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gender/gender"],{"13e9":function(e,t,n){"use strict";var r,u=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return u}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return r})},"1b28":function(e,t,n){},a581:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("a34a")),u=n("2f62");function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,u,o,a){try{var i=e[o](a),c=i.value}catch(f){return void n(f)}i.done?t(c):Promise.resolve(c).then(r,u)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(r,u){var o=e.apply(t,n);function i(e){a(o,r,u,i,c,"next",e)}function c(e){a(o,r,u,i,c,"throw",e)}i(void 0)})}}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={data:function(){return{wHeight:0}},onLoad:function(){this.wHeight=2*e.getSystemInfoSync().screenHeight,console.log(this.wHeight)},onReady:function(){},computed:c({},(0,u.mapGetters)(["userId"])),methods:{_initData:function(){var e=i(r.default.mark(function e(t){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={user_id:this.userId,channel:t},e.next=3,this.$api.user.EditUserInfo(n);case 3:e.sent;case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),gotoIndex:function(t){e.setStorageSync("once",1),e.setStorageSync("channel",t),this.userId&&this._initData(t),e.navigateTo({url:"/pages/index/index"})}}};t.default=s}).call(this,n("f266")["default"])},c756:function(e,t,n){"use strict";n.r(t);var r=n("a581"),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=u.a},d6d9:function(e,t,n){"use strict";n.r(t);var r=n("13e9"),u=n("c756");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("fa10");var a,i=n("f0c5"),c=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=c.exports},e73e:function(e,t,n){"use strict";(function(e){n("7e18"),n("921b");r(n("66fd"));var t=r(n("d6d9"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("f266")["createPage"])},fa10:function(e,t,n){"use strict";var r=n("1b28"),u=n.n(r);u.a}},[["e73e","common/runtime","common/vendor"]]]);