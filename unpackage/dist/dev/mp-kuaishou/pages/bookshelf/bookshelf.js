(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/bookshelf/bookshelf"],{

/***/ 38:
/*!*******************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/main.js?{"page":"pages%2Fbookshelf%2Fbookshelf"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _bookshelf = _interopRequireDefault(__webpack_require__(/*! ./pages/bookshelf/bookshelf.vue */ 39));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_bookshelf.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 39:
/*!************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookshelf/bookshelf.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bookshelf_vue_vue_type_template_id_59858e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookshelf.vue?vue&type=template&id=59858e6c&scoped=true& */ 40);
/* harmony import */ var _bookshelf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookshelf.vue?vue&type=script&lang=js& */ 42);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bookshelf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bookshelf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _bookshelf_vue_vue_type_style_index_0_id_59858e6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookshelf.vue?vue&type=style&index=0&id=59858e6c&lang=less&scoped=true& */ 44);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _bookshelf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bookshelf_vue_vue_type_template_id_59858e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bookshelf_vue_vue_type_template_id_59858e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "59858e6c",
  null,
  false,
  _bookshelf_vue_vue_type_template_id_59858e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/bookshelf/bookshelf.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/*!*******************************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookshelf/bookshelf.vue?vue&type=template&id=59858e6c&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_template_id_59858e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bookshelf.vue?vue&type=template&id=59858e6c&scoped=true& */ 41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_template_id_59858e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_template_id_59858e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_template_id_59858e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_template_id_59858e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 41:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookshelf/bookshelf.vue?vue&type=template&id=59858e6c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 42:
/*!*************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookshelf/bookshelf.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bookshelf.vue?vue&type=script&lang=js& */ 43);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 43:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookshelf/bookshelf.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 17));










































































var _base = __webpack_require__(/*! ../../api/base */ 26);
var _vuex = __webpack_require__(/*! vuex */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =

{
  data: function data() {
    return {
      base: _base.coverUrl,
      channel: '',
      tabName: 'sc',
      collectlist: [],
      cPage: 1,
      cTotal: null,
      collectLoad: true,
      selectColl: false,
      collectBookId: '',
      readlist: [],
      rPage: 1,
      rTotal: null,
      readLoad: true,
      selectRead: false,
      readBookId: '' };

  },
  onLoad: function onLoad(option) {
    this.channel = uni.getStorageSync('channel') || 'man';
    this.tabName = option.id || 'sc';
    this._initCollect();
    this._initRead();
  },
  onReady: function onReady() {

  },
  onShow: function onShow() {
    // this._initCollect()
    // this._initRead()
  },
  onReachBottom: function onReachBottom() {
    if (this.tabName === 'sc') {
      this.collectMoreList();
    } else {
      this.readMoreList();
    }
  },
  computed: _objectSpread({},
  (0, _vuex.mapGetters)([
  'userId'])),


  methods: {
    _initCollect: function _initCollect() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var para, res, data, extra;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                para = {
                  channel: _this.channel,
                  user_id: _this.userId,
                  page: _this.cPage };_context.next = 3;return (

                  _this.$api.bookshelf.BookCaseList(para));case 3:res = _context.sent;
                if (res.code === 200) {
                  data = res.data;
                  extra = res.extra;
                  if (extra.count < extra.rows) {
                    _this.collectLoad = false;
                  }
                  data.forEach(function (item, index) {
                    // this.$set(item, 'checked', false)
                    // item.push({
                    //   checked: false
                    // })
                    item.checked = false;
                  });
                  _this.cTotal = extra.count;
                  _this.collectlist = _this.collectlist.concat(data);
                } else {
                  _this.collectLoad = false;
                }case 5:case "end":return _context.stop();}}}, _callee);}))();
    },
    _initRead: function _initRead() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var para, res, data, extra;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                para = {
                  channel: _this2.channel,
                  user_id: _this2.userId,
                  page: _this2.rPage,
                  rows: 20 };_context2.next = 3;return (

                  _this2.$api.user.ReadBookList(para));case 3:res = _context2.sent;
                if (res.code === 200) {
                  data = res.data;
                  extra = res.extra;
                  if (extra.count < extra.rows) {
                    _this2.readLoad = false;
                  }
                  data.forEach(function (item, index) {
                    // this.$set(item, 'checked', false)
                    // item.push({
                    //   checked: false
                    // })
                    item.checked = false;
                  });
                  _this2.rTotal = extra.count;
                  _this2.readlist = _this2.readlist.concat(data);
                } else {
                  _this2.readLoad = false;
                }case 5:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    collectMoreList: function collectMoreList() {
      var length = this.collectlist.length;
      if (length >= this.cTotal) {
        this.collectLoad = false;
        return;
      } else {
        this.cPage++;
        this._initCollect();
      }
    },
    readMoreList: function readMoreList() {
      var length = this.readlist.length;
      if (length >= this.rTotal) {
        this.readLoad = false;
        return;
      } else {
        this.rPage++;
        this._initRead();
      }
    },
    deleteCollect: function deleteCollect() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var para, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                _this3.collectlist.forEach(function (item, index) {
                  if (item.checked) {
                    _this3.collectBookId += item.book_id + ',';
                  }
                });
                _this3.collectBookId = _this3.collectBookId.slice(0, -1);
                console.log(_this3.collectBookId);if (!
                _this3.collectBookId) {_context3.next = 11;break;}
                para = {
                  user_id: _this3.userId,
                  book_id: _this3.collectBookId };_context3.next = 7;return (

                  _this3.$api.bookshelf.DeleteUserCase(para));case 7:res = _context3.sent;
                if (res.code === 200) {
                  _this3.collectBookId = '';
                  _this3.collectLoad = true;
                  _this3.cPage = 1;
                  _this3.collectlist = [];
                  _this3._initCollect();
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: res.msg });

                }_context3.next = 12;break;case 11:

                uni.showToast({
                  icon: 'none',
                  title: '请选择需要删除的书籍！' });case 12:case "end":return _context3.stop();}}}, _callee3);}))();


    },
    deleteRead: function deleteRead() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var para, res;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                _this4.readlist.forEach(function (item, index) {
                  if (item.checked) {
                    _this4.readBookId += item.book_id + ',';
                  }
                });
                _this4.readBookId = _this4.readBookId.slice(0, -1);
                console.log(_this4.readBookId);if (!
                _this4.readBookId) {_context4.next = 11;break;}
                para = {
                  user_id: _this4.userId,
                  book_id: _this4.readBookId };_context4.next = 7;return (

                  _this4.$api.user.DeleteUserRead(para));case 7:res = _context4.sent;
                if (res.code === 200) {
                  _this4.readBookId = '';
                  _this4.readLoad = true;
                  _this4.rPage = 1;
                  _this4.readlist = [];
                  _this4._initRead();
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: res.msg });

                }_context4.next = 12;break;case 11:

                uni.showToast({
                  icon: 'none',
                  title: '请选择需要删除的书籍！' });case 12:case "end":return _context4.stop();}}}, _callee4);}))();


    },
    gotoRead: function gotoRead(bId, cId) {
      // router.push({
      //   uri: '/pages/read',
      //   params: {
      //     bId,
      //     cId,
      //     clickType
      //   }
      // })
      uni.navigateTo({
        url: "../read/read?bId=".concat(bId, "&cId=").concat(cId) });

    },
    handleChecked: function handleChecked(item) {
      item.checked = !item.checked;
    },
    selectCollShow: function selectCollShow() {
      this.selectColl = !this.selectColl;
    },
    selectCollHide: function selectCollHide() {
      this.selectColl = false;
    },
    selectReadShow: function selectReadShow() {
      this.selectRead = !this.selectRead;
    },
    selectReadHide: function selectReadHide() {
      this.selectRead = false;
    },
    handleTabNav: function handleTabNav(name) {
      this.tabName = name;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 44:
/*!**********************************************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookshelf/bookshelf.vue?vue&type=style&index=0&id=59858e6c&lang=less&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_style_index_0_id_59858e6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bookshelf.vue?vue&type=style&index=0&id=59858e6c&lang=less&scoped=true& */ 45);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_style_index_0_id_59858e6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_style_index_0_id_59858e6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_style_index_0_id_59858e6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_style_index_0_id_59858e6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookshelf_vue_vue_type_style_index_0_id_59858e6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 45:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookshelf/bookshelf.vue?vue&type=style&index=0&id=59858e6c&lang=less&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[38,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9ib29rc2hlbGYvYm9va3NoZWxmLnZ1ZT8wMDdhIiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL2Jvb2tzaGVsZi9ib29rc2hlbGYudnVlP2Q4MzIiLCJ3ZWJwYWNrOi8vL0Q6L1lhb0NoaS9Db2RlL+aWsOW/q+aJi+Wwj+eoi+W6jy/lsI/nqIvluo8vd3hkZW1vLXFpbmdkaWFuLXJlYWQvcGFnZXMvYm9va3NoZWxmL2Jvb2tzaGVsZi52dWU/NjlkZSIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9ib29rc2hlbGYvYm9va3NoZWxmLnZ1ZT9mNzc1IiwidW5pLWFwcDovLy9wYWdlcy9ib29rc2hlbGYvYm9va3NoZWxmLnZ1ZSIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9ib29rc2hlbGYvYm9va3NoZWxmLnZ1ZT81YmQ5Iiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL2Jvb2tzaGVsZi9ib29rc2hlbGYudnVlP2FkZDYiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7OztBQUdBO0FBQ0Esd0csOEZBSEE7QUFDQUEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDLENBR0FDLFVBQVUsQ0FBQ0Msa0JBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtJO0FBQ2xJO0FBQzZEO0FBQ0w7QUFDc0M7OztBQUc5RjtBQUNpTDtBQUNqTCxnQkFBZ0Isa0xBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9HQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQTRxQixDQUFnQiw0b0JBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMyRWhzQjtBQUNBLGdEOztBQUVBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSxpQkFGQTtBQUdBLG1CQUhBO0FBSUEscUJBSkE7QUFLQSxjQUxBO0FBTUEsa0JBTkE7QUFPQSx1QkFQQTtBQVFBLHVCQVJBO0FBU0EsdUJBVEE7QUFVQSxrQkFWQTtBQVdBLGNBWEE7QUFZQSxrQkFaQTtBQWFBLG9CQWJBO0FBY0EsdUJBZEE7QUFlQSxvQkFmQTs7QUFpQkEsR0FuQkE7QUFvQkEsUUFwQkEsa0JBb0JBLE1BcEJBLEVBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXpCQTtBQTBCQSxTQTFCQSxxQkEwQkE7O0FBRUEsR0E1QkE7QUE2QkEsUUE3QkEsb0JBNkJBO0FBQ0E7QUFDQTtBQUNBLEdBaENBO0FBaUNBLGVBakNBLDJCQWlDQTtBQUNBO0FBQ0E7QUFDQSxLQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsR0F2Q0E7QUF3Q0E7QUFDQTtBQUNBLFVBREEsRUFEQSxDQXhDQTs7O0FBNkNBO0FBQ0EsZ0JBREEsMEJBQ0E7QUFDQSxvQkFEQSxHQUNBO0FBQ0Esd0NBREE7QUFFQSx1Q0FGQTtBQUdBLG1DQUhBLEVBREE7O0FBTUEseURBTkEsU0FNQSxHQU5BO0FBT0E7QUFDQSxzQkFEQSxHQUNBLFFBREE7QUFFQSx1QkFGQSxHQUVBLFNBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFOQTtBQU9BO0FBQ0E7QUFDQSxpQkFmQSxNQWVBO0FBQ0E7QUFDQSxpQkF4QkE7QUF5QkEsS0ExQkE7QUEyQkEsYUEzQkEsdUJBMkJBO0FBQ0Esb0JBREEsR0FDQTtBQUNBLHlDQURBO0FBRUEsd0NBRkE7QUFHQSxvQ0FIQTtBQUlBLDBCQUpBLEVBREE7O0FBT0EscURBUEEsU0FPQSxHQVBBO0FBUUE7QUFDQSxzQkFEQSxHQUNBLFFBREE7QUFFQSx1QkFGQSxHQUVBLFNBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFOQTtBQU9BO0FBQ0E7QUFDQSxpQkFmQSxNQWVBO0FBQ0E7QUFDQSxpQkF6QkE7QUEwQkEsS0FyREE7QUFzREEsbUJBdERBLDZCQXNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EvREE7QUFnRUEsZ0JBaEVBLDBCQWdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6RUE7QUEwRUEsaUJBMUVBLDJCQTBFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBSkE7QUFLQTtBQUNBLGtEQVBBO0FBUUEsb0NBUkE7QUFTQSxvQkFUQSxHQVNBO0FBQ0Esd0NBREE7QUFFQSwrQ0FGQSxFQVRBOztBQWFBLDREQWJBLFNBYUEsR0FiQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQU5BLE1BTUE7QUFDQTtBQUNBLGdDQURBO0FBRUEsa0NBRkE7O0FBSUEsaUJBekJBOztBQTJCQTtBQUNBLDhCQURBO0FBRUEsc0NBRkEsSUEzQkE7OztBQWdDQSxLQTFHQTtBQTJHQSxjQTNHQSx3QkEyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUpBO0FBS0E7QUFDQSwrQ0FQQTtBQVFBLGlDQVJBO0FBU0Esb0JBVEEsR0FTQTtBQUNBLHdDQURBO0FBRUEsNENBRkEsRUFUQTs7QUFhQSx1REFiQSxTQWFBLEdBYkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFOQSxNQU1BO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGtDQUZBOztBQUlBLGlCQXpCQTs7QUEyQkE7QUFDQSw4QkFEQTtBQUVBLHNDQUZBLElBM0JBOzs7QUFnQ0EsS0EzSUE7QUE0SUEsWUE1SUEsb0JBNElBLEdBNUlBLEVBNElBLEdBNUlBLEVBNElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBREE7O0FBR0EsS0F4SkE7QUF5SkEsaUJBekpBLHlCQXlKQSxJQXpKQSxFQXlKQTtBQUNBO0FBQ0EsS0EzSkE7QUE0SkEsa0JBNUpBLDRCQTRKQTtBQUNBO0FBQ0EsS0E5SkE7QUErSkEsa0JBL0pBLDRCQStKQTtBQUNBO0FBQ0EsS0FqS0E7QUFrS0Esa0JBbEtBLDRCQWtLQTtBQUNBO0FBQ0EsS0FwS0E7QUFxS0Esa0JBcktBLDRCQXFLQTtBQUNBO0FBQ0EsS0F2S0E7QUF3S0EsZ0JBeEtBLHdCQXdLQSxJQXhLQSxFQXdLQTtBQUNBO0FBQ0EsS0ExS0EsRUE3Q0EsRTs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUFBO0FBQUE7QUFBQTtBQUF1d0MsQ0FBZ0Isd29DQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBM3hDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvYm9va3NoZWxmL2Jvb2tzaGVsZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbi8vIEB0cy1pZ25vcmVcbnd4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvYm9va3NoZWxmL2Jvb2tzaGVsZi52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9ib29rc2hlbGYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5ODU4ZTZjJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYm9va3NoZWxmLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYm9va3NoZWxmLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9ib29rc2hlbGYudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTk4NThlNmMmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1OTg1OGU2Y1wiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9ib29rc2hlbGYvYm9va3NoZWxmLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vYm9va3NoZWxmLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OTg1OGU2YyZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9ib29rc2hlbGYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9ib29rc2hlbGYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuICA8dmlldyBjbGFzcz1cImJvb2tzaGVsZlwiPlxuICAgIDx2aWV3IGNsYXNzPVwidGFicy1uYXZcIj5cbiAgICAgIDx0ZXh0IDpjbGFzcz1cInsnYWN0aXZlLXRhYic6dGFiTmFtZT09PSdzYyd9XCIgQGNsaWNrPVwiaGFuZGxlVGFiTmF2KCdzYycpXCI+5oiR55qE5pS26JePPC90ZXh0PlxuICAgICAgPHRleHQgOmNsYXNzPVwieydhY3RpdmUtdGFiJzp0YWJOYW1lPT09J3lkJ31cIiBAY2xpY2s9XCJoYW5kbGVUYWJOYXYoJ3lkJylcIj7mnIDov5HpmIXor7s8L3RleHQ+XG4gICAgPC92aWV3PlxuICAgIDx2aWV3IGNsYXNzPVwiYm9va3NoZWxmLWNvbnRhaW5lclwiPlxuICAgICAgPHZpZXcgY2xhc3M9XCJjb2xsZWN0LWxpc3RcIiB2LXNob3c9XCJ0YWJOYW1lPT09J3NjJ1wiIDpzdHlsZT1cInsnbWFyZ2luQm90dG9tJzpzZWxlY3RDb2xsPyc5OHJweCc6JzBycHgnfVwiPlxuICAgICAgICA8dmlldyBjbGFzcz1cImJvb2tzaGVsZi1oZWFkXCI+XG4gICAgICAgICAgPHRleHQ+5YWxIHt7Y1RvdGFsP2NUb3RhbDowfX0g5pysPC90ZXh0PlxuICAgICAgICAgIDxibG9jaz5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZWRpdC1idXR0b25cIiBAY2xpY2s9XCJzZWxlY3RDb2xsU2hvd1wiPnt7c2VsZWN0Q29sbD8n5Y+W5raIJzon57yW6L6RJ319PC90ZXh0PlxuICAgICAgICAgIDwvYmxvY2s+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPGJsb2NrIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjb2xsZWN0bGlzdFwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaXRlbS1ib29rXCI+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cInJhZGlvLWJ0blwiIHYtc2hvdz1cInNlbGVjdENvbGxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cmFkaW8gY29sb3I9XCIjZmY1MDUyXCIgOmNoZWNrZWQ9XCJpdGVtLmNoZWNrZWRcIiBAdGFwPVwiaGFuZGxlQ2hlY2tlZChpdGVtKVwiLz5cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiY29sbGVjdC1ib29rXCI+XG4gICAgICAgICAgICAgIDxpbWFnZSA6c3JjPVwiYCR7YmFzZX0ke2l0ZW0uYm9va19pZH0vJHtpdGVtLmNvdmVyfWBcIiA6bGF6eS1sb2FkPVwidHJ1ZVwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiY29sbGVjdC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7aXRlbS5ib29rX3RpdGxlfX08L3RleHQ+XG4gICAgICAgICAgICAgICAgPHRleHQ+5L2c6ICF77yae3tpdGVtLnBlbl9uYW1lfX08L3RleHQ+XG4gICAgICAgICAgICAgICAgPHRleHQgdi1pZj1cIml0ZW0ucmVhZF9jaGFwdGVyX3NvcnRcIj7or7voh7PvvJp7e2l0ZW0ucmVhZF9jaGFwdGVyX3RpdGxlfX08L3RleHQ+XG4gICAgICAgICAgICAgICAgPHRleHQgdi1lbHNlPuWwmuacqumYheivuzwvdGV4dD5cbiAgICAgICAgICAgICAgICA8dGV4dD7mm7TmlrDoh7PvvJp7e2l0ZW0ubGFzdF91cGRhdGVfY2hhcHRlcl90aXRsZX19PC90ZXh0PlxuICAgICAgICAgICAgICAgIDx0ZXh0IHYtaWY9XCJpdGVtLnJlYWRfY2hhcHRlcl9zb3J0XCIgY2xhc3M9XCJjb2xsZWN0LWJ0blwiIEBjbGljaz1cImdvdG9SZWFkKGl0ZW0uYm9va19pZCxpdGVtLnJlYWRfY2hhcHRlcl9zb3J0KVwiPue7p+e7remYheivuzwvdGV4dD5cbiAgICAgICAgICAgICAgICA8dGV4dCB2LWVsc2UgY2xhc3M9XCJjb2xsZWN0LWJ0blwiIEBjbGljaz1cImdvdG9SZWFkKGl0ZW0uYm9va19pZCwwKVwiPuW8gOWni+mYheivuzwvdGV4dD5cbiAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgICA8dGV4dCB2LWlmPVwiaXRlbS5pc19yZWNvbW1lbmQ9PT0nWSdcIiBjbGFzcz1cImljb24tcmVjb21tZW5kXCI+PC90ZXh0PlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC9ibG9jaz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJsb2FkLW1vcmVcIj5cbiAgICAgICAgICA8dGV4dCB2LXNob3c9XCJjb2xsZWN0TG9hZFwiPuWKoOi9veabtOWkmjwvdGV4dD5cbiAgICAgICAgICA8dGV4dCB2LXNob3c9XCIhY29sbGVjdExvYWRcIj7msqHmnInmm7TlpJrkuoZ+PC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG4gICAgICA8dmlldyBjbGFzcz1cInJlYWQtbGlzdFwiIHYtc2hvdz1cInRhYk5hbWU9PT0neWQnXCIgOnN0eWxlPVwieydtYXJnaW5Cb3R0b20nOnNlbGVjdFJlYWQ/Jzk4cnB4JzonMHJweCd9XCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiYm9va3NoZWxmLWhlYWRcIj5cbiAgICAgICAgICA8dGV4dD7lhbEge3tyVG90YWw/clRvdGFsOjB9fSDmnKw8L3RleHQ+XG4gICAgICAgICAgPGJsb2NrPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJlZGl0LWJ1dHRvblwiIEBjbGljaz1cInNlbGVjdFJlYWRTaG93XCI+e3tzZWxlY3RSZWFkPyflj5bmtognOifnvJbovpEnfX08L3RleHQ+XG4gICAgICAgICAgPC9ibG9jaz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8YmxvY2sgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHJlYWRsaXN0XCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJpdGVtLWJvb2tcIj5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwicmFkaW8tYnRuXCIgdi1zaG93PVwic2VsZWN0UmVhZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxyYWRpbyBjb2xvcj1cIiNmZjUwNTJcIiA6Y2hlY2tlZD1cIml0ZW0uY2hlY2tlZFwiIEB0YXA9XCJoYW5kbGVDaGVja2VkKGl0ZW0pXCIvPlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJyZWFkLWJvb2tcIiBAY2xpY2s9XCJnb3RvUmVhZChpdGVtLmJvb2tfaWQsaXRlbS5yZWFkX2NoYXB0ZXJfc29ydClcIj5cbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7aXRlbS5ib29rX3RpdGxlfX08L3RleHQ+XG4gICAgICAgICAgICAgIDx0ZXh0PuacgOi/kemYheivu++8mnt7aXRlbS5yZWFkX2NoYXB0ZXJfdGl0bGV9fTwvdGV4dD5cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDwvYmxvY2s+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwibG9hZC1tb3JlXCI+XG4gICAgICAgICAgPHRleHQgdi1zaG93PVwicmVhZExvYWRcIj7liqDovb3mm7TlpJo8L3RleHQ+XG4gICAgICAgICAgPHRleHQgdi1zaG93PVwiIXJlYWRMb2FkXCI+5rKh5pyJ5pu05aSa5LqGfjwvdGV4dD5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cbiAgICA8dmlldyB2LXNob3c9XCJzZWxlY3RDb2xsXCIgY2xhc3M9XCJkZWxldGUtYnV0dG9uXCI+XG4gICAgICA8dGV4dCBjbGFzcz1cImNhbmNlbC1idG5cIiBAY2xpY2s9XCJzZWxlY3RDb2xsSGlkZVwiPuWPlua2iDwvdGV4dD5cbiAgICAgIDx0ZXh0IEBjbGljaz1cImRlbGV0ZUNvbGxlY3RcIj7liKDpmaQ8L3RleHQ+XG4gICAgPC92aWV3PlxuICAgIDx2aWV3IHYtc2hvdz1cInNlbGVjdFJlYWRcIiBjbGFzcz1cImRlbGV0ZS1idXR0b25cIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2FuY2VsLWJ0blwiIEBjbGljaz1cInNlbGVjdFJlYWRIaWRlXCI+5Y+W5raIPC90ZXh0PlxuICAgICAgPHRleHQgQGNsaWNrPVwiZGVsZXRlUmVhZFwiPuWIoOmZpDwvdGV4dD5cbiAgICA8L3ZpZXc+XG4gIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge2NvdmVyVXJsfSBmcm9tICcuLi8uLi9hcGkvYmFzZSdcclxuaW1wb3J0IHttYXBHZXR0ZXJzfSBmcm9tICd2dWV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGJhc2U6IGNvdmVyVXJsLFxyXG5cdFx0XHRjaGFubmVsOiAnJyxcclxuXHRcdFx0dGFiTmFtZTogJ3NjJyxcclxuXHRcdFx0Y29sbGVjdGxpc3Q6IFtdLFxyXG5cdFx0XHRjUGFnZTogMSxcclxuXHRcdFx0Y1RvdGFsOiBudWxsLFxyXG5cdFx0XHRjb2xsZWN0TG9hZDogdHJ1ZSxcclxuXHRcdFx0c2VsZWN0Q29sbDogZmFsc2UsXHJcblx0XHRcdGNvbGxlY3RCb29rSWQ6ICcnLFxyXG5cdFx0XHRyZWFkbGlzdDogW10sXHJcblx0XHRcdHJQYWdlOiAxLFxyXG5cdFx0XHRyVG90YWw6IG51bGwsXHJcblx0XHRcdHJlYWRMb2FkOiB0cnVlLFxyXG5cdFx0XHRzZWxlY3RSZWFkOiBmYWxzZSxcclxuXHRcdFx0cmVhZEJvb2tJZDogJydcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uTG9hZChvcHRpb24pIHtcclxuXHRcdHRoaXMuY2hhbm5lbCA9IHVuaS5nZXRTdG9yYWdlU3luYygnY2hhbm5lbCcpIHx8ICdtYW4nXHJcblx0XHR0aGlzLnRhYk5hbWUgPSBvcHRpb24uaWQgfHwgJ3NjJ1xyXG5cdFx0dGhpcy5faW5pdENvbGxlY3QoKVxyXG5cdFx0dGhpcy5faW5pdFJlYWQoKVxyXG5cdH0sXHJcblx0b25SZWFkeSgpIHtcclxuXHRcdFxyXG5cdH0sXHJcblx0b25TaG93KCkge1xyXG5cdFx0Ly8gdGhpcy5faW5pdENvbGxlY3QoKVxyXG5cdFx0Ly8gdGhpcy5faW5pdFJlYWQoKVxyXG5cdH0sXHJcblx0b25SZWFjaEJvdHRvbSgpIHtcclxuXHRcdGlmKHRoaXMudGFiTmFtZSA9PT0gJ3NjJykge1xyXG5cdFx0XHR0aGlzLmNvbGxlY3RNb3JlTGlzdCgpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnJlYWRNb3JlTGlzdCgpXHJcblx0XHR9XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Li4ubWFwR2V0dGVycyhbXHJcblx0XHRcdCd1c2VySWQnXHJcblx0XHRdKVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0YXN5bmMgX2luaXRDb2xsZWN0KCkge1xyXG5cdFx0ICBsZXQgcGFyYSA9IHtcclxuXHRcdCAgICBjaGFubmVsOiB0aGlzLmNoYW5uZWwsXHJcblx0XHQgICAgdXNlcl9pZDogdGhpcy51c2VySWQsXHJcblx0XHQgICAgcGFnZTogdGhpcy5jUGFnZVxyXG5cdFx0ICB9XHJcblx0XHQgIGxldCByZXMgPSBhd2FpdCB0aGlzLiRhcGkuYm9va3NoZWxmLkJvb2tDYXNlTGlzdChwYXJhKVxyXG5cdFx0ICBpZiAocmVzLmNvZGUgPT09IDIwMCkge1xyXG5cdFx0ICAgIGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdCAgICBsZXQgZXh0cmEgPSByZXMuZXh0cmFcclxuXHRcdCAgICBpZiAoZXh0cmEuY291bnQgPCBleHRyYS5yb3dzKSB7XHJcblx0XHQgICAgICB0aGlzLmNvbGxlY3RMb2FkID0gZmFsc2VcclxuXHRcdCAgICB9XHJcblx0XHQgICAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0ICAgICAgLy8gdGhpcy4kc2V0KGl0ZW0sICdjaGVja2VkJywgZmFsc2UpXHJcblx0XHQgICAgICAvLyBpdGVtLnB1c2goe1xyXG5cdFx0ICAgICAgLy8gICBjaGVja2VkOiBmYWxzZVxyXG5cdFx0ICAgICAgLy8gfSlcclxuXHRcdCAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlXHJcblx0XHQgICAgfSlcclxuXHRcdCAgICB0aGlzLmNUb3RhbCA9IGV4dHJhLmNvdW50XHJcblx0XHQgICAgdGhpcy5jb2xsZWN0bGlzdCA9IHRoaXMuY29sbGVjdGxpc3QuY29uY2F0KGRhdGEpXHJcblx0XHQgIH0gZWxzZSB7XHJcblx0XHQgICAgdGhpcy5jb2xsZWN0TG9hZCA9IGZhbHNlXHJcblx0XHQgIH1cclxuXHRcdH0sXHJcblx0XHRhc3luYyBfaW5pdFJlYWQoKSB7XHJcblx0XHQgIGxldCBwYXJhID0ge1xyXG5cdFx0ICAgIGNoYW5uZWw6IHRoaXMuY2hhbm5lbCxcclxuXHRcdCAgICB1c2VyX2lkOiB0aGlzLnVzZXJJZCxcclxuXHRcdCAgICBwYWdlOiB0aGlzLnJQYWdlLFxyXG5cdFx0ICAgIHJvd3M6IDIwXHJcblx0XHQgIH1cclxuXHRcdCAgbGV0IHJlcyA9IGF3YWl0IHRoaXMuJGFwaS51c2VyLlJlYWRCb29rTGlzdChwYXJhKVxyXG5cdFx0ICBpZiAocmVzLmNvZGUgPT09IDIwMCkge1xyXG5cdFx0ICAgIGxldCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdCAgICBsZXQgZXh0cmEgPSByZXMuZXh0cmFcclxuXHRcdCAgICBpZiAoZXh0cmEuY291bnQgPCBleHRyYS5yb3dzKSB7XHJcblx0XHQgICAgICB0aGlzLnJlYWRMb2FkID0gZmFsc2VcclxuXHRcdCAgICB9XHJcblx0XHQgICAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0ICAgICAgLy8gdGhpcy4kc2V0KGl0ZW0sICdjaGVja2VkJywgZmFsc2UpXHJcblx0XHQgICAgICAvLyBpdGVtLnB1c2goe1xyXG5cdFx0ICAgICAgLy8gICBjaGVja2VkOiBmYWxzZVxyXG5cdFx0ICAgICAgLy8gfSlcclxuXHRcdCAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlXHJcblx0XHQgICAgfSlcclxuXHRcdCAgICB0aGlzLnJUb3RhbCA9IGV4dHJhLmNvdW50XHJcblx0XHQgICAgdGhpcy5yZWFkbGlzdCA9IHRoaXMucmVhZGxpc3QuY29uY2F0KGRhdGEpXHJcblx0XHQgIH0gZWxzZSB7XHJcblx0XHQgICAgdGhpcy5yZWFkTG9hZCA9IGZhbHNlXHJcblx0XHQgIH1cclxuXHRcdH0sXHJcblx0XHRjb2xsZWN0TW9yZUxpc3QoKSB7XHJcblx0XHQgIGxldCBsZW5ndGggPSB0aGlzLmNvbGxlY3RsaXN0Lmxlbmd0aFxyXG5cdFx0ICBpZiAobGVuZ3RoID49IHRoaXMuY1RvdGFsKSB7XHJcblx0XHQgICAgdGhpcy5jb2xsZWN0TG9hZCA9IGZhbHNlXHJcblx0XHQgICAgcmV0dXJuXHJcblx0XHQgIH0gZWxzZSB7XHJcblx0XHQgICAgdGhpcy5jUGFnZSsrXHJcblx0XHQgICAgdGhpcy5faW5pdENvbGxlY3QoKVxyXG5cdFx0ICB9XHJcblx0XHR9LFxyXG5cdFx0cmVhZE1vcmVMaXN0KCkge1xyXG5cdFx0ICBsZXQgbGVuZ3RoID0gdGhpcy5yZWFkbGlzdC5sZW5ndGhcclxuXHRcdCAgaWYgKGxlbmd0aCA+PSB0aGlzLnJUb3RhbCkge1xyXG5cdFx0ICAgIHRoaXMucmVhZExvYWQgPSBmYWxzZVxyXG5cdFx0ICAgIHJldHVyblxyXG5cdFx0ICB9IGVsc2Uge1xyXG5cdFx0ICAgIHRoaXMuclBhZ2UrK1xyXG5cdFx0ICAgIHRoaXMuX2luaXRSZWFkKClcclxuXHRcdCAgfVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIGRlbGV0ZUNvbGxlY3QoKSB7XHJcblx0XHQgIHRoaXMuY29sbGVjdGxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdCAgICBpZiAoaXRlbS5jaGVja2VkKSB7XHJcblx0XHQgICAgICB0aGlzLmNvbGxlY3RCb29rSWQgKz0gaXRlbS5ib29rX2lkICsgJywnXHJcblx0XHQgICAgfVxyXG5cdFx0ICB9KVxyXG5cdFx0ICB0aGlzLmNvbGxlY3RCb29rSWQgPSB0aGlzLmNvbGxlY3RCb29rSWQuc2xpY2UoMCwgLTEpXHJcblx0XHQgIGNvbnNvbGUubG9nKHRoaXMuY29sbGVjdEJvb2tJZClcclxuXHRcdCAgaWYgKHRoaXMuY29sbGVjdEJvb2tJZCkge1xyXG5cdFx0ICAgIGxldCBwYXJhID0ge1xyXG5cdFx0ICAgICAgdXNlcl9pZDogdGhpcy51c2VySWQsXHJcblx0XHQgICAgICBib29rX2lkOiB0aGlzLmNvbGxlY3RCb29rSWRcclxuXHRcdCAgICB9XHJcblx0XHQgICAgbGV0IHJlcyA9IGF3YWl0IHRoaXMuJGFwaS5ib29rc2hlbGYuRGVsZXRlVXNlckNhc2UocGFyYSlcclxuXHRcdCAgICBpZiAocmVzLmNvZGUgPT09IDIwMCkge1xyXG5cdFx0ICAgICAgdGhpcy5jb2xsZWN0Qm9va0lkID0gJydcclxuXHRcdCAgICAgIHRoaXMuY29sbGVjdExvYWQgPSB0cnVlXHJcblx0XHQgICAgICB0aGlzLmNQYWdlID0gMVxyXG5cdFx0ICAgICAgdGhpcy5jb2xsZWN0bGlzdCA9IFtdXHJcblx0XHQgICAgICB0aGlzLl9pbml0Q29sbGVjdCgpXHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHQgICAgICAgIHRpdGxlOiByZXMubXNnXHJcblx0XHQgICAgICB9KVxyXG5cdFx0ICAgIH1cclxuXHRcdCAgfSBlbHNlIHtcclxuXHRcdCAgICB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdCAgICAgIHRpdGxlOiAn6K+36YCJ5oup6ZyA6KaB5Yig6Zmk55qE5Lmm57GN77yBJ1xyXG5cdFx0ICAgIH0pXHJcblx0XHQgIH1cclxuXHRcdH0sXHJcblx0XHRhc3luYyBkZWxldGVSZWFkKCkge1xyXG5cdFx0ICB0aGlzLnJlYWRsaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHQgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xyXG5cdFx0ICAgICAgdGhpcy5yZWFkQm9va0lkICs9IGl0ZW0uYm9va19pZCArICcsJ1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgfSlcclxuXHRcdCAgdGhpcy5yZWFkQm9va0lkID0gdGhpcy5yZWFkQm9va0lkLnNsaWNlKDAsIC0xKVxyXG5cdFx0ICBjb25zb2xlLmxvZyh0aGlzLnJlYWRCb29rSWQpXHJcblx0XHQgIGlmICh0aGlzLnJlYWRCb29rSWQpIHtcclxuXHRcdCAgICBsZXQgcGFyYSA9IHtcclxuXHRcdCAgICAgIHVzZXJfaWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0ICAgICAgYm9va19pZDogdGhpcy5yZWFkQm9va0lkXHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIGxldCByZXMgPSBhd2FpdCB0aGlzLiRhcGkudXNlci5EZWxldGVVc2VyUmVhZChwYXJhKVxyXG5cdFx0ICAgIGlmIChyZXMuY29kZSA9PT0gMjAwKSB7XHJcblx0XHQgICAgICB0aGlzLnJlYWRCb29rSWQgPSAnJ1xyXG5cdFx0ICAgICAgdGhpcy5yZWFkTG9hZCA9IHRydWVcclxuXHRcdCAgICAgIHRoaXMuclBhZ2UgPSAxXHJcblx0XHQgICAgICB0aGlzLnJlYWRsaXN0ID0gW11cclxuXHRcdCAgICAgIHRoaXMuX2luaXRSZWFkKClcclxuXHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0ICAgICAgdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdCAgICAgICAgdGl0bGU6IHJlcy5tc2dcclxuXHRcdCAgICAgIH0pXHJcblx0XHQgICAgfVxyXG5cdFx0ICB9IGVsc2Uge1xyXG5cdFx0ICAgIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0ICAgICAgdGl0bGU6ICfor7fpgInmi6npnIDopoHliKDpmaTnmoTkuabnsY3vvIEnXHJcblx0XHQgICAgfSlcclxuXHRcdCAgfVxyXG5cdFx0fSxcclxuXHRcdGdvdG9SZWFkKGJJZCwgY0lkKSB7XHJcblx0XHQgIC8vIHJvdXRlci5wdXNoKHtcclxuXHRcdCAgLy8gICB1cmk6ICcvcGFnZXMvcmVhZCcsXHJcblx0XHQgIC8vICAgcGFyYW1zOiB7XHJcblx0XHQgIC8vICAgICBiSWQsXHJcblx0XHQgIC8vICAgICBjSWQsXHJcblx0XHQgIC8vICAgICBjbGlja1R5cGVcclxuXHRcdCAgLy8gICB9XHJcblx0XHQgIC8vIH0pXHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6IGAuLi9yZWFkL3JlYWQ/YklkPSR7YklkfSZjSWQ9JHtjSWR9YFxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdGhhbmRsZUNoZWNrZWQoaXRlbSkge1xyXG5cdFx0ICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkXHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0Q29sbFNob3coKSB7XHJcblx0XHQgIHRoaXMuc2VsZWN0Q29sbCA9ICF0aGlzLnNlbGVjdENvbGxcclxuXHRcdH0sXHJcblx0XHRzZWxlY3RDb2xsSGlkZSgpIHtcclxuXHRcdCAgdGhpcy5zZWxlY3RDb2xsID0gZmFsc2VcclxuXHRcdH0sXHJcblx0XHRzZWxlY3RSZWFkU2hvdygpIHtcclxuXHRcdCAgdGhpcy5zZWxlY3RSZWFkID0gIXRoaXMuc2VsZWN0UmVhZFxyXG5cdFx0fSxcclxuXHRcdHNlbGVjdFJlYWRIaWRlKCkge1xyXG5cdFx0ICB0aGlzLnNlbGVjdFJlYWQgPSBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdGhhbmRsZVRhYk5hdihuYW1lKSB7XHJcblx0XHQgIHRoaXMudGFiTmFtZSA9IG5hbWVcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG5AaW1wb3J0ICcuLi8uLi9jb21tb24vbGVzcy9jb25zdC5sZXNzJztcclxuQGltcG9ydCAnLi4vLi4vY29tbW9uL2xlc3MvbWl4aW4ubGVzcyc7IFxuXG4gIC5ib29rc2hlbGZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLnRhYnMtbmF2e1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDg4cnB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogODhycHg7XG4gICAgICAvLyBwYWRkaW5nOiAwIDMwcnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcclxuXHRcdFx0ei1pbmRleDogMTA7XG4gICAgICB0ZXh0e1xuICAgICAgICB3aWR0aDogMTkwcnB4O1xuICAgICAgICBoZWlnaHQ6IDg4cnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMzRycHg7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDRycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICAuYWN0aXZlLXRhYntcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogQGNvbG9yLWJhY2tncm91bmQtYztcbiAgICAgIH1cbiAgICB9XG4gICAgLmJvb2tzaGVsZi1jb250YWluZXJ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmctdG9wOiA4OHJweDtcbiAgICAgIC8vIHBhZGRpbmctYm90dG9tOiA5NnJweDtcbiAgICAgIC5jb2xsZWN0LWxpc3QsIC5yZWFkLWxpc3R7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAuYm9va3NoZWxmLWhlYWR7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogODVycHg7XG4gICAgICAgICAgcGFkZGluZzogMCAzMHJweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGNUY3O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzNHJweDtcbiAgICAgICAgICAuZWRpdC1idXR0b257XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDVycHggMTVycHg7XG4gICAgICAgICAgICBib3JkZXI6IDFycHggc29saWQgI0IyQUVBQjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMycnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaXRlbS1ib29re1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcbiAgICAgICAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMCAzMHJweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHJweCAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFycHggc29saWQgI0U4RTZFMztcbiAgICAgICAgICAucmFkaW8tYnRue1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbGxlY3QtYm9va3tcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0Ly8gd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICA+aW1hZ2V7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNzZycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjMzcnB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFycHggc29saWQgI0YyRjFFRjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2xsZWN0LXRleHR7XHJcblx0XHRcdFx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0XHRcdFx0Ly8gd2lkdGg6IGNhbGMoMTAwJSAtIDE3NnJweCk7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuICAgICAgICAgICAgICA+dGV4dHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gLm5vLXdyYXAoKTtcclxuXHRcdFx0XHRcdFx0XHRcdC5uby13cmFwLW11bHRpKDEpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbGxlY3QtYnRue1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNjJycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiA0OHJweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6IEBjb2xvci1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXJweCBzb2xpZCBAY29sb3ItYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFkLWJvb2t7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHJweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pY29uLXJlY29tbWVuZHtcbiAgICAgICAgICAgIHdpZHRoOiA4MXJweDtcbiAgICAgICAgICAgIGhlaWdodDogODFycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ35AL3N0YXRpYy9pY29ucy9ib29rc2hlbGYtdGoucG5nJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubG9hZC1tb3Jle1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHJweCAwO1xuICAgICAgICA+dGV4dHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5kZWxldGUtYnV0dG9ue1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDk4cnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XHJcblx0XHRcdHotaW5kZXg6IDEwO1xuICAgICAgdGV4dHtcbiAgICAgICAgd2lkdGg6IDIzN3JweDtcbiAgICAgICAgaGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogODBycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBjb2xvci1iYWNrZ3JvdW5kO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJweDtcbiAgICAgIH1cbiAgICAgIC5jYW5jZWwtYnRue1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUzcnB4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RTZFMztcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc3R5bGU+XG5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0xMC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2Jvb2tzaGVsZi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01OTg1OGU2YyZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0xMC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2Jvb2tzaGVsZi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01OTg1OGU2YyZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjU5OTI4OTEzOTM1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9