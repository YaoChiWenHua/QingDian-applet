(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/bookshelf/bookshelf"],{"28c9":function(t,e,o){"use strict";var n=o("b9f1"),i=o.n(n);i.a},"3fa8":function(t,e,o){"use strict";o.r(e);var n=o("4949"),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},4949:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("d40c")),i=o("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){c(t,e,o[e])})}return t}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var s={data:function(){return{userId:"",currentTab:0,booklist:[],showCheck:!0,readlist:[]}},onLoad:function(){},onReady:function(){},onShow:function(){""===this.userId&&(this.userId=this.userid?this.userid:t.getStorageSync("__userid__")),this.getBookListData(),this.getReadList()},computed:a({},(0,i.mapState)(["userid"])),methods:{clickTab:function(t){var e=t.currentTarget.dataset.current;this.currentTab!=e&&(this.currentTab=e)},showCheckBtn:function(){this.showCheck=!1},cancelBtn:function(){this.booklist.forEach(function(t,e){t.checked&&(t.checked=!1)}),this.showCheck=!0},selectedItem:function(e){if(this.showCheck){var o=e.currentTarget.dataset.item.book_id,n=e.currentTarget.dataset.item.read_chapter_id;t.setStorageSync("__bookid__",o),t.setStorageSync("__sectionid__",n),t.navigateTo({url:"../read/read"})}else{var i=e.currentTarget.dataset.item;this.booklist.forEach(function(t,e){t.book_id===i.book_id&&(t.checked=!t.checked)})}},deleteBook:function(){var e=this,o="";if(this.booklist.forEach(function(t,e){t.checked&&(o+=t.book_id+",")}),o=o.slice(0,-1),o){var i={user_id:this.userId,book_id:o};n.default.post("/user/deleteUserCase",i).then(function(n){200===n.code?(o="",e.showCheck=!1,e.getBookListData()):t.showToast({title:n.msg,icon:"none",duration:2e3})})}else t.showToast({title:"请选择需要删除的书籍",icon:"none",duration:1500})},allCheckBtn:function(){this.booklist.forEach(function(t,e){t.checked||(t.checked=!0)})},selectedReadItem:function(e){var o=e.currentTarget.dataset.item.book_id,n=e.currentTarget.dataset.item.read_chapter_id;t.setStorageSync("__bookid__",o),t.setStorageSync("__sectionid__",n),t.navigateTo({url:"../read/read"})},clearReadList:function(){var e=this,o="";if(this.readlist.forEach(function(t,e){o+=t.book_id+","}),o=o.slice(0,-1),o){var i={user_id:this.userId,book_id:o};n.default.post("/user/deleteUserRead",i).then(function(o){200===o.code?e.readlist=[]:t.showToast({title:"清空失败",icon:"none",duration:2e3})})}},goBookDetails:function(e){var o=e.currentTarget.dataset.id;t.navigateTo({url:"../book/book?id=".concat(o)})},gotoHome:function(){t.switchTab({url:"../index/index"})},getBookListData:function(){var t=this,e={user_id:this.userId};n.default.post("/user/bookCaseList",e).then(function(e){if(200===e.code){var o=e.data;o.forEach(function(t,e){t.checked=!1}),t.booklist=o}else t.booklist=[]})},getReadList:function(){var t=this,e={user_id:this.userId};n.default.post("/user/readBookList",e).then(function(e){200===e.code?t.readlist=e.data:t.readlist=[]})}}};e.default=s}).call(this,o("c11b")["default"])},9195:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},a02d:function(t,e,o){"use strict";o.r(e);var n=o("9195"),i=o("3fa8");for(var r in i)"default"!==r&&function(t){o.d(e,t,function(){return i[t]})}(r);o("28c9");var a=o("2877"),c=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"23b762fa",null);e["default"]=c.exports},b9f1:function(t,e,o){}},[["3bad","common/runtime","common/vendor"]]]);