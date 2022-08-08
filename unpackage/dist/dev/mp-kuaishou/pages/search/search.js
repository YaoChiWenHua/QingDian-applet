(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/search/search"],{

/***/ 102:
/*!*************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/main.js?{"page":"pages%2Fsearch%2Fsearch"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _search = _interopRequireDefault(__webpack_require__(/*! ./pages/search/search.vue */ 103));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_search.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 103:
/*!******************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/search/search.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_4cedc0c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=4cedc0c6&scoped=true& */ 104);
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ 106);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _search_vue_vue_type_style_index_0_id_4cedc0c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.vue?vue&type=style&index=0&id=4cedc0c6&lang=less&scoped=true& */ 109);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_4cedc0c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_4cedc0c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cedc0c6",
  null,
  false,
  _search_vue_vue_type_template_id_4cedc0c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/search/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 104:
/*!*************************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/search/search.vue?vue&type=template&id=4cedc0c6&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_4cedc0c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=template&id=4cedc0c6&scoped=true& */ 105);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_4cedc0c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_4cedc0c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_4cedc0c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_4cedc0c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 105:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/search/search.vue?vue&type=template&id=4cedc0c6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.resultlist, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var m0 = _vm.wordsCount(item.word_count)
    return {
      $orig: $orig,
      m0: m0
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 106:
/*!*******************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/search/search.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=script&lang=js& */ 107);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 107:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/search/search.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 17));
























































































var _base = __webpack_require__(/*! ../../api/base */ 26);
var _util = __webpack_require__(/*! ../../common/util */ 108);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}

var SEARCH_KEY = '__search__';
var SEARCH_MAX_LENGTH = 6;var _default =

{
  data: function data() {
    return {
      base: _base.coverUrl,
      query: '',
      scrollHeight: 0,
      hotlist: [],
      resultlist: [],
      page: 1,
      limit: 10,
      count: '',
      loading: true,
      historylist: [] };

  },
  onLoad: function onLoad() {var _this = this;
    this.historylist = uni.getStorageSync(SEARCH_KEY) || [];
    this.getHotListData(1);
    this.$watch('query', (0, _util.debounce)(function (newQuery) {
      if (!newQuery) {
      } else {
        // setTimeout(() => {
        _this.resultlist = [];
        _this.page = 1;
        _this.getResultListData();
        // }, 20)
      }
    }, 200));
  },
  onReady: function onReady() {
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    this.scrollHeight = (windowHeight - 65) * 2;
  },
  onShow: function onShow() {
    // this.$watch('query', debounce((newQuery) => {
    //     if (!newQuery) {
    // 			
    //     } else {
    //       // setTimeout(() => {
    //         this.resultlist = []
    //         this.page = 1
    //         this.getResultListData()
    //       // }, 20)
    //     }
    //   }, 200))
  },
  methods: {
    // 字数转换
    wordsCount: function wordsCount(num) {
      if (num > 10000) {
        return Math.round(num / 10000) + '万字';
      } else {
        return num + '字';
      }
    },
    // queryInput(e) {
    //   let newQuery = e.detail.value
    //   let oldQuery = this.data.query
    //   this.setData({
    //     query: newQuery,
    //   })
    //   if (newQuery !== oldQuery) {
    //     this.setData({
    //       resultlist: [],
    //       page: 1
    //     })
    //     this.getResultListData()
    //     // util.debounce(this.getResultListData(), 200)
    //   }
    // },
    clearQuery: function clearQuery() {
      this.query = '';
      this.resultlist = [];
      this.page = 1;
    },
    exchangeFuncBtn: function exchangeFuncBtn() {
      var num = Math.floor(Math.random() * (90 - 1) + 1);
      this.getHotListData(num);
    },
    queryHotBtn: function queryHotBtn(title) {
      this.query = title;
      // this.getResultListData()
    },
    scrollMoreList: function scrollMoreList() {
      var length = this.resultlist.length;
      if (length >= this.count) {
        this.loading = false;
      } else {
        this.page++;
        this.getResultListData();
      }
    },
    // 选中书籍跳转
    selectItem: function selectItem(item) {var _this2 = this;
      uni.navigateTo({
        url: "../detail/detail?id=".concat(item.book_id),
        success: function success() {
          _this2.saveSearch(_this2.query);
        } });

    },
    saveSearch: function saveSearch(query) {
      var searches = this.historylist;
      (0, _util.insertArray)(searches, query, function (item) {
        return item === query;
      }, SEARCH_MAX_LENGTH);
      uni.setStorageSync(SEARCH_KEY, searches);
      this.historylist = searches;
    },
    clearHistoryBtn: function clearHistoryBtn() {
      uni.removeStorageSync(SEARCH_KEY);
      this.historylist = [];
    },
    getHotListData: function getHotListData(page) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _this3.$api.home.SearchHot({
                    page: page }));case 2:res = _context.sent;

                if (res.code === 200) {
                  _this3.hotlist = res.data;
                }case 4:case "end":return _context.stop();}}}, _callee);}))();
    },
    getResultListData: function getResultListData() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var para, res, status, arr;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                para = {
                  keywords: _this4.query,
                  page: _this4.page,
                  rows: _this4.limit };_context2.next = 3;return (

                  _this4.$api.home.SearchResult(para));case 3:res = _context2.sent;
                if (res.code === 200) {
                  status = true;
                  arr = _this4.resultlist;
                  arr = arr.concat(res.data);
                  if (res.extra.count < _this4.limit) {
                    status = false;
                  } else {
                    status = true;
                  }
                  _this4.resultlist = arr;
                  _this4.count = res.extra.count;
                  _this4.loading = status;
                } else {
                  if (_this4.page === 1) {
                    _this4.resultlist = [];
                    _this4.count = 0;
                    _this4.loading = false;
                  }
                }case 5:case "end":return _context2.stop();}}}, _callee2);}))();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 109:
/*!****************************************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/search/search.vue?vue&type=style&index=0&id=4cedc0c6&lang=less&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_id_4cedc0c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=style&index=0&id=4cedc0c6&lang=less&scoped=true& */ 110);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_id_4cedc0c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_id_4cedc0c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_id_4cedc0c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_id_4cedc0c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_id_4cedc0c6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 110:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/search/search.vue?vue&type=style&index=0&id=4cedc0c6&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[102,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9zZWFyY2gvc2VhcmNoLnZ1ZT9lZTk2Iiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL3NlYXJjaC9zZWFyY2gudnVlPzc5MGMiLCJ3ZWJwYWNrOi8vL0Q6L1lhb0NoaS9Db2RlL+aWsOW/q+aJi+Wwj+eoi+W6jy/lsI/nqIvluo8vd3hkZW1vLXFpbmdkaWFuLXJlYWQvcGFnZXMvc2VhcmNoL3NlYXJjaC52dWU/YzE3YiIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9zZWFyY2gvc2VhcmNoLnZ1ZT8zMGE4IiwidW5pLWFwcDovLy9wYWdlcy9zZWFyY2gvc2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9zZWFyY2gvc2VhcmNoLnZ1ZT80NmQ2Iiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL3NlYXJjaC9zZWFyY2gudnVlP2E2ZmMiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7OztBQUdBO0FBQ0EsZ0csOEZBSEE7QUFDQUEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDLENBR0FDLFVBQVUsQ0FBQ0MsZUFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDMEQ7QUFDTDtBQUNzQzs7O0FBRzNGO0FBQ2lMO0FBQ2pMLGdCQUFnQixrTEFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBeXFCLENBQWdCLHlvQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeUY3ckI7QUFDQSw4RDs7QUFFQTtBQUNBLDBCOztBQUVBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSxlQUZBO0FBR0EscUJBSEE7QUFJQSxpQkFKQTtBQUtBLG9CQUxBO0FBTUEsYUFOQTtBQU9BLGVBUEE7QUFRQSxlQVJBO0FBU0EsbUJBVEE7QUFVQSxxQkFWQTs7QUFZQSxHQWRBO0FBZUEsUUFmQSxvQkFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FEQSxNQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FUQSxFQVNBLEdBVEE7QUFVQSxHQTVCQTtBQTZCQSxTQTdCQSxxQkE2QkE7QUFDQTtBQUNBO0FBQ0EsR0FoQ0E7QUFpQ0EsUUFqQ0Esb0JBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBN0NBO0FBOENBO0FBQ0E7QUFDQSxjQUZBLHNCQUVBLEdBRkEsRUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FSQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBeEJBLHdCQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUJBO0FBNkJBLG1CQTdCQSw2QkE2QkE7QUFDQTtBQUNBO0FBQ0EsS0FoQ0E7QUFpQ0EsZUFqQ0EsdUJBaUNBLEtBakNBLEVBaUNBO0FBQ0E7QUFDQTtBQUNBLEtBcENBO0FBcUNBLGtCQXJDQSw0QkFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTdDQTtBQThDQTtBQUNBLGNBL0NBLHNCQStDQSxJQS9DQSxFQStDQTtBQUNBO0FBQ0Esd0RBREE7QUFFQTtBQUNBO0FBQ0EsU0FKQTs7QUFNQSxLQXREQTtBQXVEQSxjQXZEQSxzQkF1REEsS0F2REEsRUF1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsaUJBRkE7QUFHQTtBQUNBO0FBQ0EsS0E5REE7QUErREEsbUJBL0RBLDZCQStEQTtBQUNBO0FBQ0E7QUFDQSxLQWxFQTtBQW1FQSxrQkFuRUEsMEJBbUVBLElBbkVBLEVBbUVBO0FBQ0E7QUFDQSw4QkFEQSxHQURBLFNBQ0EsR0FEQTs7QUFJQTtBQUNBO0FBQ0EsaUJBTkE7QUFPQSxLQTFFQTtBQTJFQSxxQkEzRUEsK0JBMkVBO0FBQ0Esb0JBREEsR0FDQTtBQUNBLHdDQURBO0FBRUEsbUNBRkE7QUFHQSxvQ0FIQSxFQURBOztBQU1BLHFEQU5BLFNBTUEsR0FOQTtBQU9BO0FBQ0Esd0JBREEsR0FDQSxJQURBO0FBRUEscUJBRkEsR0FFQSxpQkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBWkEsTUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkF6QkE7QUEwQkEsS0FyR0EsRUE5Q0EsRTs7Ozs7Ozs7Ozs7OztBQy9GQTtBQUFBO0FBQUE7QUFBQTtBQUFvd0MsQ0FBZ0IscW9DQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBeHhDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvc2VhcmNoL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbi8vIEB0cy1pZ25vcmVcbnd4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvc2VhcmNoL3NlYXJjaC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRjZWRjMGM2JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGNlZGMwYzYmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0Y2VkYzBjNlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9zZWFyY2gvc2VhcmNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00Y2VkYzBjNiZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIGwwID0gX3ZtLl9fbWFwKF92bS5yZXN1bHRsaXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgIHZhciAkb3JpZyA9IF92bS5fX2dldF9vcmlnKGl0ZW0pXG5cbiAgICB2YXIgbTAgPSBfdm0ud29yZHNDb3VudChpdGVtLndvcmRfY291bnQpXG4gICAgcmV0dXJuIHtcbiAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgIG0wOiBtMFxuICAgIH1cbiAgfSlcblxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIGwwOiBsMFxuICAgICAgfVxuICAgIH1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJzZWFyY2hcIj5cclxuXHQgIDx2aWV3IGNsYXNzPVwid3JhcHBlclwiPlxyXG5cdCAgICA8dmlldyBjbGFzcz1cInNlYXJjaC1ib3hcIj5cclxuXHQgICAgICA8aWNvbiB0eXBlPVwic2VhcmNoXCIgOnNpemU9XCIxNlwiIGNvbG9yPVwiIzA3YzczYlwiIC8+XHJcblx0ICAgICAgPGlucHV0XHJcblx0ICAgICAgICBjbGFzcz1cInNlYXJjaC1pbnB1dFwiIFxyXG5cdCAgICAgICAgdHlwZT1cInRleHRcIlxyXG5cdCAgICAgICAgY29uZmlybS10eXBlPVwic2VhcmNoXCJcclxuXHQgICAgICAgIHBsYWNlaG9sZGVyPVwi5pCc57Si5Lmm5ZCNL+S5puWPt+aIluiAheS9nOiAhVwiXHJcblx0ICAgICAgICBwbGFjZWhvbGRlci1jbGFzcz1cInNlYXJjaC1pbml0XCIgXHJcblx0ICAgICAgICB2LW1vZGVsPVwicXVlcnlcIiAvPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbnMtY2xlYXItYnRuXCIgdi1zaG93PVwicXVlcnlcIiBAdGFwPVwiY2xlYXJRdWVyeVwiPlxyXG5cdFx0XHRcdFx0PGljb24gdHlwZT1cImNsZWFyXCIgOnNpemU9XCIxNFwiIGNvbG9yPVwiIzk5OVwiIC8+XHJcblx0XHRcdFx0PC92aWV3Plx0XHJcblx0ICAgIDwvdmlldz5cclxuXHQgICAgPCEtLSDmjqjojZDmkJzntKIgLS0+XHJcblx0ICAgIDx2aWV3IGNsYXNzPVwic2hvcnQtY3V0XCIgdi1zaG93PVwiIXF1ZXJ5XCI+XHJcblx0ICAgICAgPHZpZXcgY2xhc3M9XCJob3Qtd29yZFwiPlxyXG5cdCAgICAgICAgPHZpZXcgY2xhc3M9XCJob3QtaGVhZFwiPlxyXG5cdCAgICAgICAgICA8dmlldyBjbGFzcz1cImhvdC10aXRsZVwiPuaQnOe0oueDreivjTwvdmlldz5cclxuXHQgICAgICAgICAgPHZpZXcgY2xhc3M9XCJob3QtaWNvblwiIEB0YXA9XCJleGNoYW5nZUZ1bmNCdG5cIj5cclxuXHQgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImljb25mb250IGljb24taHVhbnlpaHVhbjFcIj48L3RleHQ+XHJcblx0ICAgICAgICAgICAg5o2i5LiA5om5XHJcblx0ICAgICAgICAgIDwvdmlldz5cclxuXHQgICAgICAgIDwvdmlldz5cclxuXHQgICAgICAgIDx2aWV3IGNsYXNzPVwiaG90LW1haW5cIj5cclxuXHQgICAgICAgICAgPGJsb2NrIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBob3RsaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0ICAgICAgICAgICAgPHZpZXcgQHRhcD1cInF1ZXJ5SG90QnRuKGl0ZW0uYm9va190aXRsZSlcIj57e2l0ZW0uYm9va190aXRsZX19PC92aWV3PlxyXG5cdCAgICAgICAgICA8L2Jsb2NrPlxyXG5cdCAgICAgICAgPC92aWV3PlxyXG5cdCAgICAgIDwvdmlldz5cclxuXHQgICAgICA8dmlldyBjbGFzcz1cImhvdC13b3JkXCI+XHJcblx0ICAgICAgICA8dmlldyBjbGFzcz1cImhvdC1oZWFkXCI+XHJcblx0ICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaG90LXRpdGxlXCI+5pCc57Si5Y6G5Y+yPC92aWV3PlxyXG5cdCAgICAgICAgICA8dmlldyBjbGFzcz1cImhvdC1pY29uXCIgQHRhcD1cImNsZWFySGlzdG9yeUJ0blwiPlxyXG5cdCAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1zaGFuY2h1XCI+PC90ZXh0PlxyXG5cdCAgICAgICAgICAgIOa4heepulxyXG5cdCAgICAgICAgICA8L3ZpZXc+XHJcblx0ICAgICAgICA8L3ZpZXc+XHJcblx0ICAgICAgICA8dmlldyBjbGFzcz1cImhvdC1tYWluXCI+XHJcblx0ICAgICAgICAgIDxibG9jayB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gaGlzdG9yeWxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHQgICAgICAgICAgICA8dmlldyBAdGFwPVwicXVlcnlIb3RCdG4oaXRlbSlcIj57e2l0ZW19fTwvdmlldz5cclxuXHQgICAgICAgICAgPC9ibG9jaz5cclxuXHQgICAgICAgIDwvdmlldz5cclxuXHQgICAgICA8L3ZpZXc+XHJcblx0ICAgIDwvdmlldz5cclxuXHQgICAgPCEtLSDmkJzntKLnu5PmnpwgLS0+XHJcblx0ICAgIDx2aWV3IGNsYXNzPVwic2VhcmNoLXJlc3VsdFwiIHYtc2hvdz1cInF1ZXJ5XCI+XHJcblx0ICAgICAgPHNjcm9sbC12aWV3IGNsYXNzPVwicmVzdWx0LW1haW5cIiA6c3R5bGU9XCJ7aGVpZ2h0OiBzY3JvbGxIZWlnaHQgKyAncnB4J31cIiA6c2Nyb2xsLXk9XCJ0cnVlXCIgOmVuYWJsZS1iYWNrLXRvLXRvcD1cInRydWVcIiBAc2Nyb2xsdG9sb3dlcj1cInNjcm9sbE1vcmVMaXN0XCI+XHJcblx0ICAgICAgICA8dmlldyBjbGFzcz1cInJlc3VsdC1oZWFkXCI+XHJcblx0ICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmVzdWx0LXRpdGxlXCI+54Ot6Zeo5pCc57SiPC90ZXh0PlxyXG5cdCAgICAgICAgICA8dGV4dCBjbGFzcz1cInJlc3VsdC1jb3VudFwiPiDCtyB7e2NvdW50fX0g5p2hPC90ZXh0PlxyXG5cdCAgICAgICAgPC92aWV3PlxyXG5cdCAgICAgICAgPHZpZXcgY2xhc3M9XCJyZXN1bHQtbGlzdFwiPlxyXG5cdCAgICAgICAgICA8YmxvY2sgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHJlc3VsdGxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHQgICAgICAgICAgICA8bmF2aWdhdG9yPlxyXG5cdCAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJob3QtYm9va1wiIEB0YXAubmF0aXZlLnN0b3A9XCJzZWxlY3RJdGVtKGl0ZW0pXCI+XHJcblx0ICAgICAgICAgICAgICAgIDxpbWFnZSA6c3JjPVwiYCR7YmFzZX0ke2l0ZW0uYm9va19pZH0vbV8ke2l0ZW0uY292ZXJ9YFwiIDpsYXp5LWxvYWQ9XCJ0cnVlXCIvPlxyXG5cdCAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImJvb2stZGV0YWlsXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJiLXRpdGxlXCI+e3tpdGVtLmJvb2tfdGl0bGV9fTwvdmlldz5cclxuXHQgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImItdGV4dFwiPnt7aXRlbS5kZXNjcmlwdGlvbn19PC92aWV3PlxyXG5cdCAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidGV4dC1ib3R0b21cIj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDx2aWV3PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImljb25mb250IGljb24tZ2VyZW5cIj48L3RleHQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5wZW5fbmFtZX19XHJcblx0ICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInRleHQtaWNvblwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICA8dGV4dD57e2l0ZW0uY2F0ZWdvcnlfdGl0bGV9fTwvdGV4dD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgPHRleHQ+e3tpdGVtLmlzX2ZpbmlzaD09PSdZJz8n5a6M57uTJzon6L+e6L29J319PC90ZXh0PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICA8dGV4dD57e3dvcmRzQ291bnQoaXRlbS53b3JkX2NvdW50KX19PC90ZXh0PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC92aWV3PlxyXG5cdCAgICAgICAgICAgICAgICAgIDwvdmlldz5cclxuXHQgICAgICAgICAgICAgICAgPC92aWV3PlxyXG5cdCAgICAgICAgICAgICAgPC92aWV3PlxyXG5cdCAgICAgICAgICAgIDwvbmF2aWdhdG9yPlxyXG5cdCAgICAgICAgICA8L2Jsb2NrPlxyXG5cdCAgICAgICAgICA8dmlldyBjbGFzcz1cIm1vcmVcIj5cclxuXHQgICAgICAgICAgICA8dmlldyB2LXNob3c9XCJsb2FkaW5nXCI+5q2j5Zyo5Yqg6L295LitLi4uPC92aWV3PlxyXG5cdCAgICAgICAgICAgIDx2aWV3IHYtc2hvdz1cIiFsb2FkaW5nXCI+5rKh5pyJ5pu05aSa5Lmm57GNPC92aWV3PlxyXG5cdCAgICAgICAgICA8L3ZpZXc+XHJcblx0ICAgICAgICA8L3ZpZXc+XHJcblx0ICAgICAgPC9zY3JvbGwtdmlldz5cclxuXHQgICAgPC92aWV3PlxyXG5cdCAgPC92aWV3PlxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcbmltcG9ydCB7Y292ZXJVcmx9IGZyb20gJy4uLy4uL2FwaS9iYXNlJ1xyXG5pbXBvcnQgeyBkZWJvdW5jZSwgaW5zZXJ0QXJyYXkgfSBmcm9tICcuLi8uLi9jb21tb24vdXRpbCdcclxuXHJcbmNvbnN0IFNFQVJDSF9LRVkgPSAnX19zZWFyY2hfXydcclxuY29uc3QgU0VBUkNIX01BWF9MRU5HVEggPSA2XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGJhc2U6IGNvdmVyVXJsLFxyXG5cdFx0XHRxdWVyeTogJycsXHJcblx0XHRcdHNjcm9sbEhlaWdodDogMCxcclxuXHRcdFx0aG90bGlzdDogW10sXHJcblx0XHRcdHJlc3VsdGxpc3Q6IFtdLFxyXG5cdFx0XHRwYWdlOiAxLFxyXG5cdFx0XHRsaW1pdDogMTAsXHJcblx0XHRcdGNvdW50OiAnJyxcclxuXHRcdFx0bG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0aGlzdG9yeWxpc3Q6IFtdXHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkxvYWQoKSB7XHJcblx0XHR0aGlzLmhpc3RvcnlsaXN0ID0gdW5pLmdldFN0b3JhZ2VTeW5jKFNFQVJDSF9LRVkpIHx8IFtdXHJcblx0XHR0aGlzLmdldEhvdExpc3REYXRhKDEpXHJcblx0XHR0aGlzLiR3YXRjaCgncXVlcnknLCBkZWJvdW5jZSgobmV3UXVlcnkpID0+IHtcclxuXHRcdFx0aWYgKCFuZXdRdWVyeSkge1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZXN1bHRsaXN0ID0gW11cclxuXHRcdFx0XHRcdHRoaXMucGFnZSA9IDFcclxuXHRcdFx0XHRcdHRoaXMuZ2V0UmVzdWx0TGlzdERhdGEoKVxyXG5cdFx0XHRcdC8vIH0sIDIwKVxyXG5cdFx0XHR9XHJcblx0XHR9LCAyMDApKVxyXG5cdH0sXHJcblx0b25SZWFkeSgpIHtcclxuXHRcdGNvbnN0IHdpbmRvd0hlaWdodCA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0XHJcblx0XHR0aGlzLnNjcm9sbEhlaWdodCA9ICh3aW5kb3dIZWlnaHQgLSA2NSkgKiAyXHJcblx0fSxcclxuXHRvblNob3coKSB7XHJcblx0XHQvLyB0aGlzLiR3YXRjaCgncXVlcnknLCBkZWJvdW5jZSgobmV3UXVlcnkpID0+IHtcclxuXHRcdC8vICAgICBpZiAoIW5ld1F1ZXJ5KSB7XHJcblx0XHQvLyBcdFx0XHRcclxuXHRcdC8vICAgICB9IGVsc2Uge1xyXG5cdFx0Ly8gICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHQvLyAgICAgICAgIHRoaXMucmVzdWx0bGlzdCA9IFtdXHJcblx0XHQvLyAgICAgICAgIHRoaXMucGFnZSA9IDFcclxuXHRcdC8vICAgICAgICAgdGhpcy5nZXRSZXN1bHRMaXN0RGF0YSgpXHJcblx0XHQvLyAgICAgICAvLyB9LCAyMClcclxuXHRcdC8vICAgICB9XHJcblx0XHQvLyAgIH0sIDIwMCkpXHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHQvLyDlrZfmlbDovazmjaJcclxuXHRcdHdvcmRzQ291bnQobnVtKSB7XHJcblx0XHRcdGlmIChudW0gPiAxMDAwMCkge1xyXG5cdFx0XHQgIHJldHVybiBNYXRoLnJvdW5kKG51bSAvIDEwMDAwKSArICfkuIflrZcnXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdCAgcmV0dXJuIG51bSArICflrZcnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyBxdWVyeUlucHV0KGUpIHtcclxuXHRcdC8vICAgbGV0IG5ld1F1ZXJ5ID0gZS5kZXRhaWwudmFsdWVcclxuXHRcdC8vICAgbGV0IG9sZFF1ZXJ5ID0gdGhpcy5kYXRhLnF1ZXJ5XHJcblx0XHQvLyAgIHRoaXMuc2V0RGF0YSh7XHJcblx0XHQvLyAgICAgcXVlcnk6IG5ld1F1ZXJ5LFxyXG5cdFx0Ly8gICB9KVxyXG5cdFx0Ly8gICBpZiAobmV3UXVlcnkgIT09IG9sZFF1ZXJ5KSB7XHJcblx0XHQvLyAgICAgdGhpcy5zZXREYXRhKHtcclxuXHRcdC8vICAgICAgIHJlc3VsdGxpc3Q6IFtdLFxyXG5cdFx0Ly8gICAgICAgcGFnZTogMVxyXG5cdFx0Ly8gICAgIH0pXHJcblx0XHQvLyAgICAgdGhpcy5nZXRSZXN1bHRMaXN0RGF0YSgpXHJcblx0XHQvLyAgICAgLy8gdXRpbC5kZWJvdW5jZSh0aGlzLmdldFJlc3VsdExpc3REYXRhKCksIDIwMClcclxuXHRcdC8vICAgfVxyXG5cdFx0Ly8gfSxcclxuXHRcdGNsZWFyUXVlcnkoKSB7XHJcblx0XHRcdHRoaXMucXVlcnkgPSAnJ1xyXG5cdFx0ICB0aGlzLnJlc3VsdGxpc3QgPSBbXVxyXG5cdFx0ICB0aGlzLnBhZ2UgPSAxXHJcblx0XHR9LFxyXG5cdFx0ZXhjaGFuZ2VGdW5jQnRuKCkge1xyXG5cdFx0ICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKig5MCAtIDEpICsgMSlcclxuXHRcdCAgdGhpcy5nZXRIb3RMaXN0RGF0YShudW0pXHJcblx0XHR9LFxyXG5cdFx0cXVlcnlIb3RCdG4odGl0bGUpIHtcclxuXHRcdCAgdGhpcy5xdWVyeSA9IHRpdGxlXHJcblx0XHQgIC8vIHRoaXMuZ2V0UmVzdWx0TGlzdERhdGEoKVxyXG5cdFx0fSxcclxuXHRcdHNjcm9sbE1vcmVMaXN0KCkge1xyXG5cdFx0ICBsZXQgbGVuZ3RoID0gdGhpcy5yZXN1bHRsaXN0Lmxlbmd0aFxyXG5cdFx0ICBpZiAobGVuZ3RoID49IHRoaXMuY291bnQpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0ICB9IGVsc2Uge1xyXG5cdFx0ICAgIHRoaXMucGFnZSsrXHJcblx0XHQgICAgdGhpcy5nZXRSZXN1bHRMaXN0RGF0YSgpXHJcblx0XHQgIH1cclxuXHRcdH0sXHJcblx0XHQvLyDpgInkuK3kuabnsY3ot7PovaxcclxuXHRcdHNlbGVjdEl0ZW0oaXRlbSkge1xyXG5cdFx0ICB1bmkubmF2aWdhdGVUbyh7XHJcblx0XHQgICAgdXJsOiBgLi4vZGV0YWlsL2RldGFpbD9pZD0ke2l0ZW0uYm9va19pZH1gLFxyXG5cdFx0ICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuXHRcdCAgICAgIHRoaXMuc2F2ZVNlYXJjaCh0aGlzLnF1ZXJ5KVxyXG5cdFx0ICAgIH1cclxuXHRcdCAgfSlcclxuXHRcdH0sXHJcblx0XHRzYXZlU2VhcmNoKHF1ZXJ5KSB7XHJcblx0XHQgIGxldCBzZWFyY2hlcyA9IHRoaXMuaGlzdG9yeWxpc3RcclxuXHRcdCAgaW5zZXJ0QXJyYXkoc2VhcmNoZXMsIHF1ZXJ5LCBpdGVtID0+IHtcclxuXHRcdCAgICByZXR1cm4gaXRlbSA9PT0gcXVlcnlcclxuXHRcdCAgfSwgU0VBUkNIX01BWF9MRU5HVEgpXHJcblx0XHQgIHVuaS5zZXRTdG9yYWdlU3luYyhTRUFSQ0hfS0VZLCBzZWFyY2hlcylcclxuXHRcdCAgdGhpcy5oaXN0b3J5bGlzdCA9IHNlYXJjaGVzXHJcblx0XHR9LFxyXG5cdFx0Y2xlYXJIaXN0b3J5QnRuKCkge1xyXG5cdFx0ICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoU0VBUkNIX0tFWSlcclxuXHRcdCAgdGhpcy5oaXN0b3J5bGlzdCA9IFtdXHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgZ2V0SG90TGlzdERhdGEocGFnZSkge1xyXG5cdFx0XHRsZXQgcmVzID0gYXdhaXQgdGhpcy4kYXBpLmhvbWUuU2VhcmNoSG90KHtcclxuXHRcdFx0XHRwYWdlXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmIChyZXMuY29kZSA9PT0gMjAwKSB7XHJcblx0XHRcdFx0dGhpcy5ob3RsaXN0ID0gcmVzLmRhdGFcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIGdldFJlc3VsdExpc3REYXRhKCkge1xyXG5cdFx0ICBsZXQgcGFyYSA9IHtcclxuXHRcdCAgICBrZXl3b3JkczogdGhpcy5xdWVyeSxcclxuXHRcdCAgICBwYWdlOiB0aGlzLnBhZ2UsXHJcblx0XHQgICAgcm93czogdGhpcy5saW1pdFxyXG5cdFx0ICB9XHJcblx0XHRcdGxldCByZXMgPSBhd2FpdCB0aGlzLiRhcGkuaG9tZS5TZWFyY2hSZXN1bHQocGFyYSlcclxuXHRcdFx0aWYgKHJlcy5jb2RlID09PSAyMDApIHtcclxuXHRcdFx0XHRsZXQgc3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdGxldCBhcnIgPSB0aGlzLnJlc3VsdGxpc3RcclxuXHRcdFx0XHRhcnIgPSBhcnIuY29uY2F0KHJlcy5kYXRhKVxyXG5cdFx0XHRcdGlmIChyZXMuZXh0cmEuY291bnQgPCB0aGlzLmxpbWl0KSB7XHJcblx0XHRcdFx0XHRzdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdGF0dXMgPSB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucmVzdWx0bGlzdCA9IGFyclxyXG5cdFx0XHRcdHRoaXMuY291bnQgPSByZXMuZXh0cmEuY291bnRcclxuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBzdGF0dXNcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5wYWdlID09PSAxKSB7XHJcblx0XHRcdFx0XHR0aGlzLnJlc3VsdGxpc3QgPSBbXVxyXG5cdFx0XHRcdFx0dGhpcy5jb3VudCA9IDBcclxuXHRcdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn1cdFxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cclxuXHJcblx0LnNlYXJjaHtcclxuXHQgIHdpZHRoOiAxMDAlO1xyXG5cdCAgLndyYXBwZXJ7XHJcblx0ICAgIHBhZGRpbmctdG9wOiAzMHJweDtcclxuXHQgICAgLnNlYXJjaC1ib3h7XHJcblx0ICAgICAgZGlzcGxheTogZmxleDtcclxuXHQgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0ICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQgICAgICB3aWR0aDogOTMlO1xyXG5cdCAgICAgIGhlaWdodDogNzFycHg7XHJcblx0ICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblx0ICAgICAgcGFkZGluZzogMCAyMHJweDtcclxuXHQgICAgICBtYXJnaW4tYm90dG9tOiAzMHJweDtcclxuXHQgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFQkVGO1xyXG5cdCAgICAgIGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdCAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0ICAgICAgLnNlYXJjaC1pbnB1dHtcclxuXHQgICAgICAgIHdpZHRoOiA4MyU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0ICAgICAgICBtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0ICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcnB4O1xyXG5cdCAgICAgICAgY29sb3I6ICMzMzM7XHJcblx0ICAgICAgICBmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0VFRUJFRjtcclxuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0ICAgICAgfVxyXG5cdCAgICAgIC5zZWFyY2gtaW5pdHtcclxuXHQgICAgICAgIGZvbnQtc2l6ZTogMjRycHg7XHJcblx0ICAgICAgICBjb2xvcjogI0Q3RDRDRjtcclxuXHQgICAgICB9XHJcblx0XHRcdFx0Lmljb25zLWNsZWFyLWJ0bntcclxuXHRcdFx0XHRcdGljb257XHJcblx0XHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdCAgICB9XHJcblx0ICAgIC5zaG9ydC1jdXR7XHJcblx0ICAgICAgd2lkdGg6IDkzJTtcclxuXHQgICAgICBtYXJnaW46IDAgYXV0bztcclxuXHQgICAgICAuaG90LXdvcmR7XHJcblx0ICAgICAgICBtYXJnaW4tdG9wOiA1MHJweDtcclxuXHQgICAgICAgIC5ob3QtaGVhZHtcclxuXHQgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHQgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdCAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdCAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHQgICAgICAgICAgLmhvdC10aXRsZXtcclxuXHQgICAgICAgICAgICBmb250LXNpemU6IDQycnB4O1xyXG5cdCAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdCAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICAgIC5ob3QtaWNvbntcclxuXHQgICAgICAgICAgICBmb250LXNpemU6IDI0cnB4O1xyXG5cdCAgICAgICAgICAgIGNvbG9yOiAjMDdjNzNiO1xyXG5cdCAgICAgICAgICAgIHRleHR7XHJcblx0ICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgLmhvdC1tYWlue1xyXG5cdCAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdCAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblx0ICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdCAgICAgICAgICBtYXJnaW46IDUwcnB4IDA7XHJcblx0ICAgICAgICAgIHZpZXd7XHJcblx0ICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcnB4O1xyXG5cdCAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcnB4O1xyXG5cdCAgICAgICAgICAgIHBhZGRpbmc6IDEwcnB4IDI1cnB4O1xyXG5cdCAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVCRUY7XHJcblx0ICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcblx0ICAgICAgICAgICAgZm9udC1zaXplOiAyNHJweDtcclxuXHQgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHJweDtcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgICAgICB2aWV3OmZpcnN0LWNoaWxke1xyXG5cdCAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblx0ICAgIC5zZWFyY2gtcmVzdWx0e1xyXG5cdCAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdCAgICAgIC5yZXN1bHQtbWFpbntcclxuXHQgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdCAgICAgICAgLnJlc3VsdC1oZWFke1xyXG5cdCAgICAgICAgICBwYWRkaW5nOiAwIDMwcnB4O1xyXG5cdCAgICAgICAgICAucmVzdWx0LXRpdGxle1xyXG5cdCAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJycHg7XHJcblx0ICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgICAgLnJlc3VsdC1jb3VudHtcclxuXHQgICAgICAgICAgICBmb250LXNpemU6IDI0cnB4O1xyXG5cdCAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICAucmVzdWx0LWxpc3R7XHJcblx0ICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdCAgICAgICAgICAuaG90LWJvb2t7XHJcblx0ICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHQgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0ICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBycHg7XHJcblx0ICAgICAgICAgICAgcGFkZGluZzogMCAzMHJweDtcclxuXHQgICAgICAgICAgICBpbWFnZXtcclxuXHQgICAgICAgICAgICAgIHdpZHRoOiAxNTBycHg7XHJcblx0ICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHJweDtcclxuXHQgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnJweCA2cnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuXHQgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAuYm9vay1kZXRhaWx7XHJcblx0ICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdCAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdCAgICAgICAgICAgICAgd2lkdGg6IDc2JTtcclxuXHQgICAgICAgICAgICAgIGhlaWdodDogMjAwcnB4O1xyXG5cdCAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHJweDtcclxuXHQgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG5cdCAgICAgICAgICAgICAgLmItdGl0bGV7XHJcblx0ICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJycHg7XHJcblx0ICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG5cdCAgICAgICAgICAgICAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuXHQgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgIC5iLXRleHR7XHJcblx0ICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0ICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdCAgICAgICAgICAgICAgICAtbXMtdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0ICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdCAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdCAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcblx0ICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHQgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHQgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgIC50ZXh0LWJvdHRvbXtcclxuXHQgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHQgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdCAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdCAgICAgICAgICAgICAgICAuaWNvbi1nZXJlbntcclxuXHQgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcnB4O1xyXG5cdCAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIC50ZXh0LWljb257XHJcblx0ICAgICAgICAgICAgICAgICAgdGV4dHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVycHggMTBycHg7XHJcblx0ICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0ICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM2JjYjc4O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzYmNiNzg7XHJcblx0ICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHQgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAgdGV4dDpudGgtY2hpbGQoMil7XHJcblx0ICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwYzNmMDtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwYzNmMDtcclxuXHQgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAgdGV4dDpudGgtY2hpbGQoMyl7XHJcblx0ICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmYjc0ZDtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmYjc0ZDtcclxuXHQgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgICAgLm1vcmV7XHJcblx0ICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblx0ICAgICAgICAgICAgcGFkZGluZzogMzBycHggMDtcclxuXHQgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ICAgICAgICAgICAgZm9udC1zaXplOiAyNHJweDtcclxuXHQgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGNlZGMwYzYmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGNlZGMwYzYmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1OTkyODkxMzc0OFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==