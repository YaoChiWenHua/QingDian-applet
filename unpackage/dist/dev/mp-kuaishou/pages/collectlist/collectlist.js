(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/collectlist/collectlist"],{

/***/ 215:
/*!***********************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/main.js?{"page":"pages%2Fcollectlist%2Fcollectlist"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _collectlist = _interopRequireDefault(__webpack_require__(/*! ./pages/collectlist/collectlist.vue */ 216));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_collectlist.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 216:
/*!****************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/collectlist/collectlist.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collectlist_vue_vue_type_template_id_df01c9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collectlist.vue?vue&type=template&id=df01c9d0&scoped=true& */ 217);
/* harmony import */ var _collectlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collectlist.vue?vue&type=script&lang=js& */ 219);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _collectlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _collectlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _collectlist_vue_vue_type_style_index_0_id_df01c9d0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collectlist.vue?vue&type=style&index=0&id=df01c9d0&lang=less&scoped=true& */ 221);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _collectlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _collectlist_vue_vue_type_template_id_df01c9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _collectlist_vue_vue_type_template_id_df01c9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "df01c9d0",
  null,
  false,
  _collectlist_vue_vue_type_template_id_df01c9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/collectlist/collectlist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 217:
/*!***********************************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/collectlist/collectlist.vue?vue&type=template&id=df01c9d0&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_template_id_df01c9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./collectlist.vue?vue&type=template&id=df01c9d0&scoped=true& */ 218);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_template_id_df01c9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_template_id_df01c9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_template_id_df01c9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_template_id_df01c9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 218:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/collectlist/collectlist.vue?vue&type=template&id=df01c9d0&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 219:
/*!*****************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/collectlist/collectlist.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./collectlist.vue?vue&type=script&lang=js& */ 220);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 220:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/collectlist/collectlist.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 17));


























var _vuex = __webpack_require__(/*! vuex */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =

{
  data: function data() {
    return {
      collectlist: [],
      collectBookId: '',
      cTotal: 0,
      selectColl: false };

  },
  computed: _objectSpread({},
  (0, _vuex.mapGetters)([
  'userId'])),


  onLoad: function onLoad() {
    this._initCollectlist();
  },
  methods: {
    _initCollectlist: function _initCollectlist() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var para, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                para = {
                  user_id: _this.userId,
                  page: 1,
                  rows: 100 };_context.next = 3;return (

                  _this.$api.bookshelf.BookCaseList(para));case 3:res = _context.sent;
                if (res.code === 200) {
                  res.data.forEach(function (item, index) {
                    item.checked = false;
                  });
                  _this.cTotal = res.extra.count;
                  _this.collectlist = res.data;
                } else {
                  _this.cTotal = 0;
                  _this.collectlist = [];
                }case 5:case "end":return _context.stop();}}}, _callee);}))();
    },
    gotoRead: function gotoRead(item) {
      uni.navigateTo({
        url: "../read/otherread?id=".concat(item.flow_id, "&bid=").concat(item.book_id) });

    },
    selectCollShow: function selectCollShow() {
      this.selectColl = !this.selectColl;
    },
    selectCollHide: function selectCollHide() {
      this.selectColl = false;
    },
    deleteCollect: function deleteCollect() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var para, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                _this2.collectlist.forEach(function (item, index) {
                  if (item.checked) {
                    _this2.collectBookId += item.book_id + ',';
                  }
                });
                _this2.collectBookId = _this2.collectBookId.slice(0, -1);
                console.log(_this2.collectBookId);if (!
                _this2.collectBookId) {_context2.next = 11;break;}
                para = {
                  user_id: _this2.userId,
                  book_id: _this2.collectBookId };_context2.next = 7;return (

                  _this2.$api.bookshelf.DeleteUserCase(para));case 7:res = _context2.sent;
                if (res.code === 200) {
                  _this2.collectBookId = '';
                  _this2.collectlist = [];
                  _this2._initCollectlist();
                  _this2.selectColl = false;
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: res.msg });

                  _this2.collectBookId = '';
                }_context2.next = 12;break;case 11:

                uni.showToast({
                  icon: 'none',
                  title: '请选择需要删除的书籍！' });case 12:case "end":return _context2.stop();}}}, _callee2);}))();


    },
    handleChecked: function handleChecked(item) {
      if (this.selectColl) {
        item.checked = !item.checked;
      } else {
        this.gotoRead(item);
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 221:
/*!**************************************************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/collectlist/collectlist.vue?vue&type=style&index=0&id=df01c9d0&lang=less&scoped=true& ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_style_index_0_id_df01c9d0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./collectlist.vue?vue&type=style&index=0&id=df01c9d0&lang=less&scoped=true& */ 222);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_style_index_0_id_df01c9d0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_style_index_0_id_df01c9d0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_style_index_0_id_df01c9d0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_style_index_0_id_df01c9d0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collectlist_vue_vue_type_style_index_0_id_df01c9d0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 222:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/collectlist/collectlist.vue?vue&type=style&index=0&id=df01c9d0&lang=less&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[215,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9jb2xsZWN0bGlzdC9jb2xsZWN0bGlzdC52dWU/MTUxOSIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9jb2xsZWN0bGlzdC9jb2xsZWN0bGlzdC52dWU/ZjI4MiIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9jb2xsZWN0bGlzdC9jb2xsZWN0bGlzdC52dWU/MWVhNyIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9jb2xsZWN0bGlzdC9jb2xsZWN0bGlzdC52dWU/Nzg1YSIsInVuaS1hcHA6Ly8vcGFnZXMvY29sbGVjdGxpc3QvY29sbGVjdGxpc3QudnVlIiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL2NvbGxlY3RsaXN0L2NvbGxlY3RsaXN0LnZ1ZT85NTMzIiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL2NvbGxlY3RsaXN0L2NvbGxlY3RsaXN0LnZ1ZT9iMTdiIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3NEQUFBOzs7QUFHQTtBQUNBLCtHLDhGQUhBO0FBQ0FBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QyxDQUdBQyxVQUFVLENBQUNDLG9CQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvSTtBQUNwSTtBQUMrRDtBQUNMO0FBQ3NDOzs7QUFHaEc7QUFDaUw7QUFDakwsZ0JBQWdCLGtMQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLGtHQUFNO0FBQ1IsRUFBRSwyR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUE4cUIsQ0FBZ0IsOG9CQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMkJsc0IsZ0Q7O0FBRUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLHVCQUZBO0FBR0EsZUFIQTtBQUlBLHVCQUpBOztBQU1BLEdBUkE7QUFTQTtBQUNBO0FBQ0EsVUFEQSxFQURBLENBVEE7OztBQWNBLFFBZEEsb0JBY0E7QUFDQTtBQUNBLEdBaEJBO0FBaUJBO0FBQ0Esb0JBREEsOEJBQ0E7QUFDQSxvQkFEQSxHQUNBO0FBQ0EsdUNBREE7QUFFQSx5QkFGQTtBQUdBLDJCQUhBLEVBREE7O0FBTUEseURBTkEsU0FNQSxHQU5BO0FBT0E7QUFDQTtBQUNBO0FBQ0EsbUJBRkE7QUFHQTtBQUNBO0FBQ0EsaUJBTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQSxpQkFoQkE7QUFpQkEsS0FsQkE7QUFtQkEsWUFuQkEsb0JBbUJBLElBbkJBLEVBbUJBO0FBQ0E7QUFDQSx1RkFEQTs7QUFHQSxLQXZCQTtBQXdCQSxrQkF4QkEsNEJBd0JBO0FBQ0E7QUFDQSxLQTFCQTtBQTJCQSxrQkEzQkEsNEJBMkJBO0FBQ0E7QUFDQSxLQTdCQTtBQThCQSxpQkE5QkEsMkJBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFKQTtBQUtBO0FBQ0Esa0RBUEE7QUFRQSxvQ0FSQTtBQVNBLG9CQVRBLEdBU0E7QUFDQSx3Q0FEQTtBQUVBLCtDQUZBLEVBVEE7O0FBYUEsNERBYkEsU0FhQSxHQWJBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUxBLE1BS0E7QUFDQTtBQUNBLGdDQURBO0FBRUEsa0NBRkE7O0FBSUE7QUFDQSxpQkF6QkE7O0FBMkJBO0FBQ0EsOEJBREE7QUFFQSxzQ0FGQSxJQTNCQTs7O0FBZ0NBLEtBOURBO0FBK0RBLGlCQS9EQSx5QkErREEsSUEvREEsRUErREE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBckVBLEVBakJBLEU7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBeXdDLENBQWdCLDBvQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTd4QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2NvbGxlY3RsaXN0L2NvbGxlY3RsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuLy8gQHRzLWlnbm9yZVxud3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9jb2xsZWN0bGlzdC9jb2xsZWN0bGlzdC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jb2xsZWN0bGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGYwMWM5ZDAmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb2xsZWN0bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbGxlY3RsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jb2xsZWN0bGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZjAxYzlkMCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImRmMDFjOWQwXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NvbGxlY3RsaXN0L2NvbGxlY3RsaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY29sbGVjdGxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmMDFjOWQwJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbGxlY3RsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY29sbGVjdGxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImNvbGxlY3QtbGlzdFwiIDpzdHlsZT1cInsnbWFyZ2luQm90dG9tJzpzZWxlY3RDb2xsPyc5OHJweCc6JzBycHgnfVwiPlxyXG5cdCAgPHZpZXcgY2xhc3M9XCJib29rc2hlbGYtaGVhZFwiPlxyXG5cdCAgICA8dGV4dD7lhbEge3tjVG90YWx9fSDmnKw8L3RleHQ+XHJcblx0ICAgIDxibG9jaz5cclxuXHQgICAgICA8dGV4dCBjbGFzcz1cImVkaXQtYnV0dG9uXCIgQGNsaWNrPVwic2VsZWN0Q29sbFNob3dcIj57e3NlbGVjdENvbGw/J+WPlua2iCc6J+e8lui+kSd9fTwvdGV4dD5cclxuXHQgICAgPC9ibG9jaz5cclxuXHQgIDwvdmlldz5cclxuXHQgIDxibG9jayB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY29sbGVjdGxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHQgICAgPHZpZXcgY2xhc3M9XCJpdGVtLWJvb2tcIiBAY2xpY2s9XCJoYW5kbGVDaGVja2VkKGl0ZW0pXCI+XHJcblx0ICAgICAgPHZpZXcgY2xhc3M9XCJyYWRpby1idG5cIiB2LXNob3c9XCJzZWxlY3RDb2xsXCI+XHJcblx0XHRcdFx0XHQ8cmFkaW8gY29sb3I9XCIjZmY1MDUyXCIgOmNoZWNrZWQ9XCJpdGVtLmNoZWNrZWRcIj48L3JhZGlvPlxyXG5cdCAgICAgIDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlYWQtYm9va1wiPlxyXG5cdFx0XHRcdCAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7aXRlbS5ib29rX3RpdGxlfX08L3RleHQ+XHJcblx0XHRcdFx0ICA8dGV4dD7kvZzogIXvvJp7e2l0ZW0ucGVuX25hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cdFxyXG5cdCAgPC9ibG9jaz5cclxuXHRcdDx2aWV3IHYtc2hvdz1cInNlbGVjdENvbGxcIiBjbGFzcz1cImRlbGV0ZS1idXR0b25cIj5cclxuXHRcdCAgPHRleHQgY2xhc3M9XCJjYW5jZWwtYnRuXCIgQGNsaWNrPVwic2VsZWN0Q29sbEhpZGVcIj7lj5bmtog8L3RleHQ+XHJcblx0XHQgIDx0ZXh0IEBjbGljaz1cImRlbGV0ZUNvbGxlY3RcIj7liKDpmaQ8L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuaW1wb3J0IHttYXBHZXR0ZXJzfSBmcm9tICd2dWV4J1xyXG5cdFxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb2xsZWN0bGlzdDogW10sXHJcblx0XHRcdGNvbGxlY3RCb29rSWQ6ICcnLFxyXG5cdFx0XHRjVG90YWw6IDAsXHJcblx0XHRcdHNlbGVjdENvbGw6IGZhbHNlLFxuXHRcdH1cblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Li4ubWFwR2V0dGVycyhbXHJcblx0XHRcdCd1c2VySWQnXHJcblx0XHRdKVxyXG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0dGhpcy5faW5pdENvbGxlY3RsaXN0KClcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGFzeW5jIF9pbml0Q29sbGVjdGxpc3QoKSB7XHJcblx0XHRcdGxldCBwYXJhID0ge1xyXG5cdFx0XHRcdHVzZXJfaWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0XHRcdHBhZ2U6IDEsXHJcblx0XHRcdFx0cm93czogMTAwXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJlcyA9IGF3YWl0IHRoaXMuJGFwaS5ib29rc2hlbGYuQm9va0Nhc2VMaXN0KHBhcmEpXHJcblx0XHRcdGlmIChyZXMuY29kZSA9PT0gMjAwKSB7XHJcblx0XHRcdFx0cmVzLmRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHQgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGlzLmNUb3RhbCA9IHJlcy5leHRyYS5jb3VudFxyXG5cdFx0XHRcdHRoaXMuY29sbGVjdGxpc3QgPSByZXMuZGF0YVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY1RvdGFsID0gMFxyXG5cdFx0XHRcdHRoaXMuY29sbGVjdGxpc3QgPSBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Z290b1JlYWQoaXRlbSkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiBgLi4vcmVhZC9vdGhlcnJlYWQ/aWQ9JHtpdGVtLmZsb3dfaWR9JmJpZD0ke2l0ZW0uYm9va19pZH1gXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0Q29sbFNob3coKSB7XHJcblx0XHQgIHRoaXMuc2VsZWN0Q29sbCA9ICF0aGlzLnNlbGVjdENvbGxcclxuXHRcdH0sXHJcblx0XHRzZWxlY3RDb2xsSGlkZSgpIHtcclxuXHRcdCAgdGhpcy5zZWxlY3RDb2xsID0gZmFsc2VcclxuXHRcdH0sXHJcblx0XHRhc3luYyBkZWxldGVDb2xsZWN0KCkge1xyXG5cdFx0ICB0aGlzLmNvbGxlY3RsaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHQgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xyXG5cdFx0ICAgICAgdGhpcy5jb2xsZWN0Qm9va0lkICs9IGl0ZW0uYm9va19pZCArICcsJ1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgfSlcclxuXHRcdCAgdGhpcy5jb2xsZWN0Qm9va0lkID0gdGhpcy5jb2xsZWN0Qm9va0lkLnNsaWNlKDAsIC0xKVxyXG5cdFx0ICBjb25zb2xlLmxvZyh0aGlzLmNvbGxlY3RCb29rSWQpXHJcblx0XHQgIGlmICh0aGlzLmNvbGxlY3RCb29rSWQpIHtcclxuXHRcdCAgICBsZXQgcGFyYSA9IHtcclxuXHRcdCAgICAgIHVzZXJfaWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0ICAgICAgYm9va19pZDogdGhpcy5jb2xsZWN0Qm9va0lkXHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIGxldCByZXMgPSBhd2FpdCB0aGlzLiRhcGkuYm9va3NoZWxmLkRlbGV0ZVVzZXJDYXNlKHBhcmEpXHJcblx0XHQgICAgaWYgKHJlcy5jb2RlID09PSAyMDApIHtcclxuXHRcdCAgICAgIHRoaXMuY29sbGVjdEJvb2tJZCA9ICcnXHJcblx0XHQgICAgICB0aGlzLmNvbGxlY3RsaXN0ID0gW11cclxuXHRcdFx0XHRcdHRoaXMuX2luaXRDb2xsZWN0bGlzdCgpXHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdENvbGwgPSBmYWxzZVxyXG5cdFx0ICAgIH0gZWxzZSB7XHJcblx0XHQgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0ICAgICAgICB0aXRsZTogcmVzLm1zZ1xyXG5cdFx0ICAgICAgfSlcclxuXHRcdFx0XHRcdHRoaXMuY29sbGVjdEJvb2tJZCA9ICcnXHJcblx0XHQgICAgfVxyXG5cdFx0ICB9IGVsc2Uge1xyXG5cdFx0ICAgIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0ICAgICAgdGl0bGU6ICfor7fpgInmi6npnIDopoHliKDpmaTnmoTkuabnsY3vvIEnXHJcblx0XHQgICAgfSlcclxuXHRcdCAgfVxyXG5cdFx0fSxcclxuXHRcdGhhbmRsZUNoZWNrZWQoaXRlbSkge1xyXG5cdFx0XHRpZiAodGhpcy5zZWxlY3RDb2xsKSB7XHJcblx0XHRcdFx0aXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZ290b1JlYWQoaXRlbSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cclxuQGltcG9ydCAnLi4vLi4vY29tbW9uL2xlc3MvY29uc3QnO1xyXG5cdFxuXHQuY29sbGVjdC1saXN0e1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHQuYm9va3NoZWxmLWhlYWR7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdCAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdCAgLy8gd2lkdGg6IDEwMCU7XHJcblx0XHQgIGhlaWdodDogODVycHg7XHJcblx0XHQgIHBhZGRpbmc6IDAgMzBycHg7XHJcblx0XHQgIG1hcmdpbi1ib3R0b206IDEwcnB4O1xyXG5cdFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGNUY3O1xyXG5cdFx0XHRmb250LXNpemU6IDM0cnB4O1xyXG5cdFx0ICAuZWRpdC1idXR0b257XHJcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0ICAgIHBhZGRpbmc6IDVycHggMTVycHg7XHJcblx0XHQgICAgYm9yZGVyOiAxcnB4IHNvbGlkICNCMkFFQUI7XHJcblx0XHQgICAgYm9yZGVyLXJhZGl1czogMTBycHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdCAgfVxyXG5cdFx0fVxyXG5cdFx0Lml0ZW0tYm9va3tcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdCAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdCAgbWFyZ2luOiAwIDMwcnB4O1xyXG5cdFx0ICBwYWRkaW5nOiAyMHJweCAwO1xyXG5cdFx0ICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICNFOEU2RTM7XHJcblx0XHQgIC5yZWFkLWJvb2t7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ICAgIHRleHR7XHJcblx0XHQgICAgICBmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgICAudGl0bGV7XHJcblx0XHQgICAgICBmb250LXNpemU6IDM0cnB4O1xyXG5cdFx0ICAgICAgY29sb3I6ICMzMzM7XHJcblx0XHQgICAgfVxyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0XHQuZGVsZXRlLWJ1dHRvbntcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdCAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHQgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHQgIHdpZHRoOiAxMDAlO1xyXG5cdFx0ICBoZWlnaHQ6IDk4cnB4O1xyXG5cdFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0ICBwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHQgIGJvdHRvbTogMDtcclxuXHRcdCAgbGVmdDogMDtcclxuXHRcdFx0ei1pbmRleDogMTA7XHJcblx0XHQgIHRleHR7XHJcblx0XHQgICAgd2lkdGg6IDIzN3JweDtcclxuXHRcdCAgICBoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHQgICAgY29sb3I6ICNmZmY7XHJcblx0XHQgICAgYmFja2dyb3VuZC1jb2xvcjogQGNvbG9yLWJhY2tncm91bmQ7XHJcblx0XHQgICAgYm9yZGVyLXJhZGl1czogMTBycHg7XHJcblx0XHQgIH1cclxuXHRcdCAgLmNhbmNlbC1idG57XHJcblx0XHQgICAgbWFyZ2luLXJpZ2h0OiA1M3JweDtcclxuXHRcdCAgICBjb2xvcjogIzMzMztcclxuXHRcdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFNkUzO1xyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0fVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0xMC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbGxlY3RsaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRmMDFjOWQwJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY29sbGVjdGxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGYwMWM5ZDAmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1OTkyODkxMzkzNVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==