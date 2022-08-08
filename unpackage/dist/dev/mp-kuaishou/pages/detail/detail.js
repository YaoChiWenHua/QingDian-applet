(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ 62:
/*!*************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/main.js?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/detail/detail.vue */ 63));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 63:
/*!******************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/detail/detail.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=3e159eb4&scoped=true& */ 64);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 66);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_id_3e159eb4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&id=3e159eb4&lang=less&scoped=true& */ 68);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e159eb4",
  null,
  false,
  _detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/*!*************************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/detail/detail.vue?vue&type=template&id=3e159eb4&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=3e159eb4&scoped=true& */ 65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 65:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/detail/detail.vue?vue&type=template&id=3e159eb4&scoped=true& ***!
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
  var f0 = _vm.book.book_id ? _vm._f("wordsNum")(_vm.book.word_count) : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        f0: f0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 66:
/*!*******************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 67);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 67:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 17));


























































































var _base = __webpack_require__(/*! ../../api/base */ 26);

var _mixin = __webpack_require__(/*! ../../common/js/mixin */ 35);
var _vuex = __webpack_require__(/*! vuex */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var RowBook = function RowBook() {__webpack_require__.e(/*! require.ensure | components/rowbook */ "components/rowbook").then((function () {return resolve(__webpack_require__(/*! ../../components/rowbook */ 230));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =

{
  mixins: [_mixin.wordsNumMixin],
  components: {
    RowBook: RowBook },

  data: function data() {
    return {
      base: _base.coverUrl,
      bookId: '',
      book: {},
      cataloglist: [],
      total: '',
      recommendlist: [],
      otherlist: [],
      isBookShelf: false };

  },
  onLoad: function onLoad(option) {
    this.bookId = option.id;
    this._initData();
    if (this.userId) {
      this.getIsBookShelf();
    }
  },
  onShow: function onShow() {
    // if (this.userId) {
    // 	this.getIsBookShelf()
    // }
  },
  onReady: function onReady() {
    // this._initData()
  },
  computed: _objectSpread({},
  (0, _vuex.mapGetters)([
  'userId'])),


  methods: {
    // 添加书架
    addBookShelf: function addBookShelf() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var para, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!
                _this.userId) {_context.next = 8;break;}
                para = {
                  user_id: _this.userId,
                  book_id: _this.bookId };_context.next = 4;return (

                  _this.$api.bookshelf.AddUserCase(para));case 4:res = _context.sent;
                if (res.code === 200) {
                  _this.isBookShelf = true;
                } else {
                  _this.isBookShelf = true;
                }_context.next = 9;break;case 8:

                uni.showToast({
                  title: '请先登录',
                  icon: 'none',
                  duration: 2000 });case 9:case "end":return _context.stop();}}}, _callee);}))();


    },
    getIsBookShelf: function getIsBookShelf() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var para, res, status;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                para = {
                  user_id: _this2.userId,
                  book_id: _this2.bookId };_context2.next = 3;return (

                  _this2.$api.bookshelf.BookIsCase(para));case 3:res = _context2.sent;
                if (res.code === 200) {
                  status = res.data.is_case === 'Y' ? true : false;
                  _this2.isBookShelf = status;
                }case 5:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    gotoRead: function gotoRead(cid) {
      // let title = this.data.book.book_title
      // uni.setStorageSync('__bookid__', this.bookId)
      // uni.setStorageSync('__sectionid__', 0)
      // uni.navigateTo({
      //   // url: `../read/read?title=${title}`
      //   url: `../read/read`
      // })
      uni.navigateTo({
        url: "../read/read?bId=".concat(this.bookId, "&cId=").concat(cid) });

    },
    _initData: function _initData() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var para, res, catalog, list, list3;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                para = {
                  book_id: _this3.bookId };

                uni.showLoading({
                  title: '加载中...' });_context3.next = 4;return (

                  _this3.$api.book.Detail(para));case 4:res = _context3.sent;
                if (res.code === 200) {
                  _this3.book = res.data;
                  uni.setNavigationBarTitle({
                    title: res.data.book_title });

                }_context3.next = 8;return (
                  _this3.$api.book.Directory({
                    book_id: _this3.bookId,
                    sort: 1,
                    rows: 4 }));case 8:catalog = _context3.sent;

                if (catalog.code === 200) {
                  _this3.total = catalog.extra.count;
                  _this3.cataloglist = catalog.data;
                }_context3.next = 12;return (
                  _this3.$api.book.RecommendBook({
                    book_id: _this3.bookId,
                    rows: 4 }));case 12:list = _context3.sent;

                if (list.code === 200) {
                  _this3.recommendlist = list.data;
                }
                uni.hideLoading();_context3.next = 17;return (
                  _this3.$api.book.SimilarBook({
                    book_id: _this3.bookId,
                    rows: 4 }));case 17:list3 = _context3.sent;

                if (list3.code === 200) {
                  _this3.otherlist = list3.data;
                }case 19:case "end":return _context3.stop();}}}, _callee3);}))();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 68:
/*!****************************************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/detail/detail.vue?vue&type=style&index=0&id=3e159eb4&lang=less&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_3e159eb4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&id=3e159eb4&lang=less&scoped=true& */ 69);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_3e159eb4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_3e159eb4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_3e159eb4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_3e159eb4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_3e159eb4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/detail/detail.vue?vue&type=style&index=0&id=3e159eb4&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[62,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZT9mZTM4Iiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlPzhiNmMiLCJ3ZWJwYWNrOi8vL0Q6L1lhb0NoaS9Db2RlL+aWsOW/q+aJi+Wwj+eoi+W6jy/lsI/nqIvluo8vd3hkZW1vLXFpbmdkaWFuLXJlYWQvcGFnZXMvZGV0YWlsL2RldGFpbC52dWU/NGQzNSIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZT8xMmY0IiwidW5pLWFwcDovLy9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZT85NzVlIiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlP2M3N2YiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7OztBQUdBO0FBQ0EsK0YsOEZBSEE7QUFDQUEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDLENBR0FDLFVBQVUsQ0FBQ0MsZUFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDMEQ7QUFDTDtBQUNzQzs7O0FBRzNGO0FBQ2lMO0FBQ2pMLGdCQUFnQixrTEFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBeXFCLENBQWdCLHlvQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMyRjdyQjs7QUFFQTtBQUNBLGdEOztBQUVBO0FBQ0EsZ0NBREE7QUFFQTtBQUNBLG9CQURBLEVBRkE7O0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSxnQkFGQTtBQUdBLGNBSEE7QUFJQSxxQkFKQTtBQUtBLGVBTEE7QUFNQSx1QkFOQTtBQU9BLG1CQVBBO0FBUUEsd0JBUkE7O0FBVUEsR0FoQkE7QUFpQkEsUUFqQkEsa0JBaUJBLE1BakJBLEVBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBdkJBO0FBd0JBLFFBeEJBLG9CQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBNUJBO0FBNkJBLFNBN0JBLHFCQTZCQTtBQUNBO0FBQ0EsR0EvQkE7QUFnQ0E7QUFDQTtBQUNBLFVBREEsRUFEQSxDQWhDQTs7O0FBcUNBO0FBQ0E7QUFDQSxnQkFGQSwwQkFFQTtBQUNBLDRCQURBO0FBRUEsb0JBRkEsR0FFQTtBQUNBLHVDQURBO0FBRUEsdUNBRkEsRUFGQTs7QUFNQSx3REFOQSxTQU1BLEdBTkE7QUFPQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EsaUJBWEE7O0FBYUE7QUFDQSwrQkFEQTtBQUVBLDhCQUZBO0FBR0EsZ0NBSEEsSUFiQTs7O0FBbUJBLEtBckJBO0FBc0JBLGtCQXRCQSw0QkFzQkE7QUFDQSxvQkFEQSxHQUNBO0FBQ0Esd0NBREE7QUFFQSx3Q0FGQSxFQURBOztBQUtBLHdEQUxBLFNBS0EsR0FMQTtBQU1BO0FBQ0Esd0JBREEsR0FDQSx1Q0FEQTtBQUVBO0FBQ0EsaUJBVEE7QUFVQSxLQWhDQTtBQWlDQSxZQWpDQSxvQkFpQ0EsR0FqQ0EsRUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBREE7O0FBR0EsS0E1Q0E7QUE2Q0EsYUE3Q0EsdUJBNkNBO0FBQ0Esb0JBREEsR0FDQTtBQUNBLHdDQURBLEVBREE7O0FBSUE7QUFDQSxpQ0FEQSxJQUpBOztBQU9BLCtDQVBBLFNBT0EsR0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBLDhDQURBOztBQUdBLGlCQWJBO0FBY0E7QUFDQSwwQ0FEQTtBQUVBLDJCQUZBO0FBR0EsMkJBSEEsR0FkQSxTQWNBLE9BZEE7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBLGlCQXRCQTtBQXVCQTtBQUNBLDBDQURBO0FBRUEsMkJBRkEsR0F2QkEsVUF1QkEsSUF2QkE7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBLGtDQTlCQTtBQStCQTtBQUNBLDBDQURBO0FBRUEsMkJBRkEsR0EvQkEsVUErQkEsS0EvQkE7O0FBbUNBO0FBQ0E7QUFDQSxpQkFyQ0E7QUFzQ0EsS0FuRkEsRUFyQ0EsRTs7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUFBO0FBQUE7QUFBQTtBQUFvd0MsQ0FBZ0IscW9DQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBeHhDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvZGV0YWlsL2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbi8vIEB0cy1pZ25vcmVcbnd4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvZGV0YWlsL2RldGFpbC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlMTU5ZWI0JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2UxNTllYjQmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzZTE1OWViNFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTE1OWViNCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIGYwID0gX3ZtLmJvb2suYm9va19pZCA/IF92bS5fZihcIndvcmRzTnVtXCIpKF92bS5ib29rLndvcmRfY291bnQpIDogbnVsbFxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIGYwOiBmMFxuICAgICAgfVxuICAgIH1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJib29rXCI+XHJcblx0ICA8dmlldyBjbGFzcz1cIndyYXBwZXJcIj5cclxuXHQgICAgPHZpZXcgY2xhc3M9XCJib29rLXRpdGxlXCIgdi1pZj1cImJvb2suYm9va19pZFwiPlxyXG5cdCAgICAgIDxpbWFnZSA6c3JjPVwiYCR7YmFzZX0ke2Jvb2suYm9va19pZH0vJHtib29rLmNvdmVyfWBcIiAvPlxyXG5cdCAgICAgIDx2aWV3IGNsYXNzPVwiYm9vay10ZXh0XCI+XHJcblx0ICAgICAgICA8dmlldyBjbGFzcz1cInRpdGxlMVwiPnt7Ym9vay5ib29rX3RpdGxlfX08L3ZpZXc+XHJcblx0ICAgICAgICA8dmlldz7kuablj7d7e2Jvb2suYm9va19pZH19PC92aWV3PlxyXG5cdCAgICAgICAgPHZpZXc+e3tib29rLnBlbl9uYW1lfX08L3ZpZXc+XHJcblx0ICAgICAgICA8dmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQ+e3tib29rLndvcmRfY291bnQgfCB3b3Jkc051bX19IHwgPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJvb2stc3RhdHVzXCI+e3tib29rLmlzX2ZpbmlzaD09PSdZJz8n5bey5a6M57uTJzon6L+e6L295LitJ319PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdCAgICAgICAgPHZpZXc+e3tib29rLmFsbF9jbGlja3195qyh54K55Ye7PC92aWV3PlxyXG5cdCAgICAgIDwvdmlldz5cclxuXHQgICAgPC92aWV3PlxyXG5cdCAgICA8dmlldyBjbGFzcz1cImJvb2staW50cm9cIiB2LWlmPVwiYm9vay5ib29rX2lkXCI+XHJcblx0ICAgICAgPHZpZXcgY2xhc3M9XCJpbnRyby1jb250XCI+XHJcblx0ICAgICAgICB7e2Jvb2suZGVzY3JpcHRpb259fVxyXG5cdCAgICAgIDwvdmlldz5cclxuXHQgICAgPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJvb2stY2F0YWxvZ1wiPlxyXG5cdFx0XHQgIDx2aWV3IGNsYXNzPVwiY2F0YWxvZy10aXRsZVwiPlxyXG5cdFx0XHQgICAgPHZpZXc+XHJcblx0XHRcdCAgICAgIDx0ZXh0IGNsYXNzPVwiY2F0YWxvZy10ZXh0XCI+55uu5b2VIMK3IDwvdGV4dD5cclxuXHRcdFx0ICAgICAgPHRleHQ+e3t0b3RhbH19IOeroDwvdGV4dD5cclxuXHRcdFx0ICAgIDwvdmlldz5cclxuXHRcdFx0ICAgIDxuYXZpZ2F0b3IgOnVybD1cImAuLi9jYXRhbG9nL2NhdGFsb2c/aWQ9JHtib29rLmJvb2tfaWR9JnRpdGxlPSR7Ym9vay5ib29rX3RpdGxlfWBcIj5cclxuXHRcdFx0ICAgICAgPHRleHQ+e3tib29rLmxhc3RfdXBkYXRlX2NoYXB0ZXJfZGF0ZX19ID48L3RleHQ+XHJcblx0XHRcdCAgICA8L25hdmlnYXRvcj5cclxuXHRcdFx0ICA8L3ZpZXc+XHJcblx0XHRcdCAgPHZpZXcgY2xhc3M9XCJjYXRhbG9nLWxpc3RcIj5cclxuXHRcdFx0ICAgIDxibG9jayB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY2F0YWxvZ2xpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0ICAgICAgPHZpZXcgY2xhc3M9XCJjYXRhbG9nLWl0ZW1cIiBAY2xpY2s9XCJnb3RvUmVhZChpdGVtLmNpbmRleClcIj5cclxuXHRcdFx0ICAgICAgICA8dmlldz5cclxuXHRcdFx0ICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaXRlbS10aXRsZVwiPnt7aXRlbS5jaGFwdGVyX3RpdGxlfX08L3RleHQ+XHJcblx0XHRcdCAgICAgICAgICA8dGV4dCB2LWlmPVwiaW5kZXg9PT0wXCIgY2xhc3M9XCJpY29ucy1uZXdcIj48L3RleHQ+XHJcblx0XHRcdCAgICAgICAgPC92aWV3PlxyXG5cdFx0XHQgICAgICAgIDx0ZXh0IHYtaWY9XCJpdGVtLmlzX3ZpcD09PSdZJ1wiIGNsYXNzPVwiaWNvbnMtdmlwXCI+PC90ZXh0PlxyXG5cdFx0XHQgICAgICA8L3ZpZXc+XHJcblx0XHRcdCAgICA8L2Jsb2NrPlxyXG5cdFx0XHQgIDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJvb2stbGlzdFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm9vay1oZWFkXCI+XHJcblx0XHRcdFx0ICA8dGV4dD7mjqjojZDkuabnsY08L3RleHQ+XHJcblx0XHRcdFx0ICA8IS0tIDxuYXZpZ2F0b3IgdXJsPVwiXCI+5pu05aSaPjwvbmF2aWdhdG9yPiAtLT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaXN0LXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdDxibG9jayB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcmVjb21tZW5kbGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHQ8cm93LWJvb2sgOml0ZW09XCJpdGVtXCI+PC9yb3ctYm9vaz5cclxuXHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm9vay1saXN0IG90aGVyLWxpc3RcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvb2staGVhZFwiPlxyXG5cdFx0XHRcdCAgPHRleHQ+5ZCM57G75o6o6I2QPC90ZXh0PlxyXG5cdFx0XHRcdCAgPCEtLSA8bmF2aWdhdG9yIHVybD1cIlwiPuabtOWkmj48L25hdmlnYXRvcj4gLS0+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwib3RoZXItd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0PGJsb2NrIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBvdGhlcmxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdCAgPHZpZXcgY2xhc3M9XCJvdGhlci1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0PG5hdmlnYXRvciA6dXJsPVwiYC4uL2RldGFpbC9kZXRhaWw/aWQ9JHtpdGVtLmJvb2tfaWR9YFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJgJHtiYXNlfSR7aXRlbS5ib29rX2lkfS8ke2l0ZW0uY292ZXJ9YFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dD57e2l0ZW0uYm9va190aXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvbmF2aWdhdG9yPlxyXG5cdFx0XHRcdFx0ICA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdCAgPC92aWV3PlxyXG5cdCAgPCEtLSA8dmlldyBjbGFzcz1cImJvdHRvbS1maXhlZC1idG5cIj5cclxuXHQgICAgPHZpZXcgY2xhc3M9XCJidXR0b25zXCI+XHJcblx0ICAgICAgPGJ1dHRvbiBAdGFwPVwiZGVsZXRlQm9va1NoZWxmXCIgdi1pZj1cImlzQm9va1NoZWxmXCIgY2xhc3M9XCJzaGlmdG91dC1idG5cIiBwbGFpbj1cInRydWVcIj7np7vlh7rkuabmnrY8L2J1dHRvbj5cclxuXHQgICAgICA8YnV0dG9uIEB0YXA9XCJhZGRCb29rU2hlbGZcIiB2LWVsc2UgY2xhc3M9XCJjYW5jZWwtYnRuXCIgcGxhaW49XCJ0cnVlXCI+5re75Yqg5Lmm5p62PC9idXR0b24+XHJcblx0ICAgICAgPGJ1dHRvbiBAdGFwPVwiZ290b1JlYWRcIiBjbGFzcz1cImRlbGV0ZS1idG5cIiBwbGFpbj1cInRydWVcIj7lvIDlp4vpmIXor7s8L2J1dHRvbj5cclxuXHQgICAgPC92aWV3PlxyXG5cdCAgPC92aWV3PiAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZml4ZWQtYnV0dG9uXCI+XHJcblx0XHQgIDx2aWV3IHYtaWY9XCJpc0Jvb2tTaGVsZlwiPuW3suWKoOWFpeS5puaetjwvdmlldz5cclxuXHRcdCAgPHZpZXcgdi1lbHNlIEBjbGljaz1cImFkZEJvb2tTaGVsZlwiPuWKoOWFpeS5puaetjwvdmlldz5cclxuXHRcdCAgPHZpZXcgY2xhc3M9XCJyZWFkLWJ1dHRvblwiIEBjbGljaz1cImdvdG9SZWFkKDEpXCI+5byA5aeL6ZiF6K+7PC92aWV3PlxyXG5cdFx0ICA8bmF2aWdhdG9yIGNsYXNzPVwiYnV5LWJ1dHRvblwiIHVybD1cIi4uL3JlY2hhcmdlL3JlY2hhcmdlXCI+XHJcblx0XHQgICAgPHRleHQgY2xhc3M9XCJpY29uZm9udCBpY29ucy1idXlcIj4mI3hlNjQwOzwvdGV4dD5cclxuXHRcdCAgICA8dGV4dD7lhYXlgLw8L3RleHQ+XHJcblx0XHQgIDwvbmF2aWdhdG9yPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcbmltcG9ydCB7Y292ZXJVcmx9IGZyb20gJy4uLy4uL2FwaS9iYXNlJ1xyXG5pbXBvcnQgUm93Qm9vayBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Jvd2Jvb2snXHJcbmltcG9ydCB7IHdvcmRzTnVtTWl4aW4gfSBmcm9tICcuLi8uLi9jb21tb24vanMvbWl4aW4nXHJcbmltcG9ydCB7bWFwR2V0dGVyc30gZnJvbSAndnVleCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRtaXhpbnM6IFt3b3Jkc051bU1peGluXSxcclxuXHRjb21wb25lbnRzOiB7XHJcblx0XHRSb3dCb29rXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YmFzZTogY292ZXJVcmwsXHJcblx0XHRcdGJvb2tJZDogJycsXHJcblx0XHRcdGJvb2s6IHt9LFxyXG5cdFx0XHRjYXRhbG9nbGlzdDogW10sXHJcblx0XHRcdHRvdGFsOiAnJyxcclxuXHRcdFx0cmVjb21tZW5kbGlzdDogW10sXHJcblx0XHRcdG90aGVybGlzdDogW10sXHJcblx0XHRcdGlzQm9va1NoZWxmOiBmYWxzZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25Mb2FkKG9wdGlvbikge1xyXG5cdFx0dGhpcy5ib29rSWQgPSBvcHRpb24uaWRcclxuXHRcdHRoaXMuX2luaXREYXRhKClcclxuXHRcdGlmICh0aGlzLnVzZXJJZCkge1xyXG5cdFx0XHR0aGlzLmdldElzQm9va1NoZWxmKClcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uU2hvdygpIHtcclxuXHRcdC8vIGlmICh0aGlzLnVzZXJJZCkge1xyXG5cdFx0Ly8gXHR0aGlzLmdldElzQm9va1NoZWxmKClcclxuXHRcdC8vIH1cclxuXHR9LFxyXG5cdG9uUmVhZHkoKSB7XHJcblx0XHQvLyB0aGlzLl9pbml0RGF0YSgpXHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Li4ubWFwR2V0dGVycyhbXHJcblx0XHRcdCd1c2VySWQnXHJcblx0XHRdKVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly8g5re75Yqg5Lmm5p62XHJcblx0XHRhc3luYyBhZGRCb29rU2hlbGYoKSB7XHJcblx0XHQgIGlmICh0aGlzLnVzZXJJZCkge1xyXG5cdFx0ICAgIGxldCBwYXJhID0ge1xyXG5cdFx0ICAgICAgdXNlcl9pZDogdGhpcy51c2VySWQsXHJcblx0XHQgICAgICBib29rX2lkOiB0aGlzLmJvb2tJZFxyXG5cdFx0ICAgIH1cclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgdGhpcy4kYXBpLmJvb2tzaGVsZi5BZGRVc2VyQ2FzZShwYXJhKVxyXG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMjAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzQm9va1NoZWxmID0gdHJ1ZVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzQm9va1NoZWxmID0gdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdCAgfSBlbHNlIHtcclxuXHRcdCAgICB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdCAgICAgIHRpdGxlOiAn6K+35YWI55m75b2VJyxcclxuXHRcdCAgICAgIGljb246ICdub25lJyxcclxuXHRcdCAgICAgIGR1cmF0aW9uOiAyMDAwXHJcblx0XHQgICAgfSlcclxuXHRcdCAgfVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIGdldElzQm9va1NoZWxmKCkge1xyXG5cdFx0ICBsZXQgcGFyYSA9IHtcclxuXHRcdCAgICB1c2VyX2lkOiB0aGlzLnVzZXJJZCxcclxuXHRcdCAgICBib29rX2lkOiB0aGlzLmJvb2tJZFxyXG5cdFx0ICB9XHJcblx0XHRcdGxldCByZXMgPSBhd2FpdCB0aGlzLiRhcGkuYm9va3NoZWxmLkJvb2tJc0Nhc2UocGFyYSlcclxuXHRcdFx0aWYgKHJlcy5jb2RlID09PSAyMDApIHtcclxuXHRcdFx0XHRsZXQgc3RhdHVzID0gcmVzLmRhdGEuaXNfY2FzZSA9PT0gJ1knID8gdHJ1ZSA6IGZhbHNlXHJcblx0XHRcdFx0dGhpcy5pc0Jvb2tTaGVsZiA9IHN0YXR1c1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Z290b1JlYWQoY2lkKSB7XHJcblx0XHQgIC8vIGxldCB0aXRsZSA9IHRoaXMuZGF0YS5ib29rLmJvb2tfdGl0bGVcclxuXHRcdCAgLy8gdW5pLnNldFN0b3JhZ2VTeW5jKCdfX2Jvb2tpZF9fJywgdGhpcy5ib29rSWQpXHJcblx0XHQgIC8vIHVuaS5zZXRTdG9yYWdlU3luYygnX19zZWN0aW9uaWRfXycsIDApXHJcblx0XHQgIC8vIHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdCAgLy8gICAvLyB1cmw6IGAuLi9yZWFkL3JlYWQ/dGl0bGU9JHt0aXRsZX1gXHJcblx0XHQgIC8vICAgdXJsOiBgLi4vcmVhZC9yZWFkYFxyXG5cdFx0ICAvLyB9KVxyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiBgLi4vcmVhZC9yZWFkP2JJZD0ke3RoaXMuYm9va0lkfSZjSWQ9JHtjaWR9YFxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIF9pbml0RGF0YSgpIHtcclxuXHRcdFx0bGV0IHBhcmEgPSB7XHJcblx0XHRcdFx0Ym9va19pZDogdGhpcy5ib29rSWRcclxuXHRcdFx0fVxyXG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdHRpdGxlOiAn5Yqg6L295LitLi4uJ1xyXG5cdFx0XHR9KVxyXG5cdFx0XHRsZXQgcmVzID0gYXdhaXQgdGhpcy4kYXBpLmJvb2suRGV0YWlsKHBhcmEpXHJcblx0XHRcdGlmIChyZXMuY29kZSA9PT0gMjAwKSB7XHJcblx0XHRcdFx0dGhpcy5ib29rID0gcmVzLmRhdGFcclxuXHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHRcdHRpdGxlOiByZXMuZGF0YS5ib29rX3RpdGxlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgY2F0YWxvZyA9IGF3YWl0IHRoaXMuJGFwaS5ib29rLkRpcmVjdG9yeSh7XHJcblx0XHRcdCAgYm9va19pZDogdGhpcy5ib29rSWQsXHJcblx0XHRcdCAgc29ydDogMSxcclxuXHRcdFx0ICByb3dzOiA0XHJcblx0XHRcdH0pXHJcblx0XHRcdGlmIChjYXRhbG9nLmNvZGUgPT09IDIwMCkge1xyXG5cdFx0XHQgIHRoaXMudG90YWwgPSBjYXRhbG9nLmV4dHJhLmNvdW50XHJcblx0XHRcdCAgdGhpcy5jYXRhbG9nbGlzdCA9IGNhdGFsb2cuZGF0YVxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBsaXN0ID0gYXdhaXQgdGhpcy4kYXBpLmJvb2suUmVjb21tZW5kQm9vayh7XHJcblx0XHRcdCAgYm9va19pZDogdGhpcy5ib29rSWQsXHJcblx0XHRcdCAgcm93czogNFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRpZiAobGlzdC5jb2RlID09PSAyMDApIHtcclxuXHRcdFx0ICB0aGlzLnJlY29tbWVuZGxpc3QgPSBsaXN0LmRhdGFcclxuXHRcdFx0fVxyXG5cdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRsZXQgbGlzdDMgPSBhd2FpdCB0aGlzLiRhcGkuYm9vay5TaW1pbGFyQm9vayh7XHJcblx0XHRcdCAgYm9va19pZDogdGhpcy5ib29rSWQsXHJcblx0XHRcdCAgcm93czogNFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRpZiAobGlzdDMuY29kZSA9PT0gMjAwKSB7XHJcblx0XHRcdCAgdGhpcy5vdGhlcmxpc3QgPSBsaXN0My5kYXRhXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cclxuQGltcG9ydCAnLi4vLi4vY29tbW9uL2xlc3MvY29uc3QnO1xyXG5AaW1wb3J0ICcuLi8uLi9jb21tb24vbGVzcy9taXhpbic7XHJcblx0XHJcblx0LmJvb2t7XHJcblx0ICB3aWR0aDogMTAwJTtcclxuXHQgIC53cmFwcGVye1xyXG5cdCAgICBwYWRkaW5nOiAyMHJweCAzMHJweCAxMDBycHggMzBycHg7XHJcblx0ICAgIC5ib29rLXRpdGxle1xyXG5cdCAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdCAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdCAgICAgIGltYWdle1xyXG5cdCAgICAgICAgd2lkdGg6IDIwOHJweDtcclxuXHQgICAgICAgIGhlaWdodDogMjY1cnB4O1xyXG5cdCAgICAgICAgYm94LXNoYWRvdzogQGNvbG9yLWltZztcclxuXHQgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdCAgICAgIH1cclxuXHQgICAgICAuYm9vay10ZXh0e1xyXG5cdFx0XHRcdFx0ZmxleDogMTtcclxuXHQgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdCAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0ICAgICAgICBoZWlnaHQ6IDI2NXJweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAzMHJweDtcclxuXHQgICAgICAgIHZpZXd7XHJcblx0ICAgICAgICAgIGZvbnQtc2l6ZTogMjRycHg7XHJcblx0ICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgLnRpdGxlMXtcclxuXHQgICAgICAgICAgZm9udC1zaXplOiAzNnJweDtcclxuXHQgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0ICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgLmJvb2stc3RhdHVze1xyXG5cdCAgICAgICAgICBjb2xvcjogIzAwQ0MzOTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHQgICAgLmJvb2staW50cm97XHJcblx0ICAgICAgbWFyZ2luLXRvcDogMzBycHg7XHJcblx0ICAgICAgLmludHJvLWNvbnR7XHJcblx0ICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG5cdCAgICAgICAgZm9udC1zaXplOiAyOHJweDtcclxuXHQgICAgICAgIGNvbG9yOiAjMzMzO1xyXG5cdFx0XHRcdFx0Lm5vLXdyYXAtbXVsdGkoMyk7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblx0XHRcdC5ib29rLWNhdGFsb2d7XHJcblx0XHRcdCAgbWFyZ2luLXRvcDogMzBycHg7XHJcblx0XHRcdCAgLmNhdGFsb2ctdGl0bGV7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0ICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdCAgICBwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0XHRcdCAgICBib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICNGMUYwRUU7XHJcblx0XHRcdCAgICAuY2F0YWxvZy10ZXh0e1xyXG5cdFx0XHQgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0ICAgICAgZm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0ICAgICAgY29sb3I6ICMzMzM7XHJcblx0XHRcdCAgICB9XHJcblx0XHRcdCAgICB0ZXh0e1xyXG5cdFx0XHQgICAgICBmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHQgIH1cclxuXHRcdFx0ICAuY2F0YWxvZy1saXN0e1xyXG5cdFx0XHQgICAgLmNhdGFsb2ctaXRlbXtcclxuXHRcdFx0ICAgICAgZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHQgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQgICAgICBoZWlnaHQ6IDcwcnB4O1xyXG5cdFx0XHQgICAgICAuaXRlbS10aXRsZXtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI2cnB4O1xyXG5cdFx0XHRcdFx0XHRcdC5uby13cmFwKCk7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgLmljb25zLW5ld3tcclxuXHRcdFx0ICAgICAgICBtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHQgIH1cclxuXHRcdFx0fVxyXG5cdFx0XHQuYm9vay1saXN0e1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0XHRcdC5ib29rLWhlYWR7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdCAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdCAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHQgIGhlaWdodDogNzBycHg7XHJcblx0XHRcdFx0XHRib3JkZXItdG9wOiAycnB4IHNvbGlkIEBjb2xvci1iYWNrZ3JvdW5kLWQ7XHJcblx0XHRcdFx0ICA+dGV4dHtcclxuXHRcdFx0XHQgICAgZm9udC1zaXplOiAyOHJweDtcclxuXHRcdFx0XHQgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0ICAgIGNvbG9yOiAjMzMzO1xyXG5cdFx0XHRcdCAgfVxyXG5cdFx0XHRcdCAgPmF7XHJcblx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRcdFx0ICB9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5saXN0LXdyYXBwZXJ7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Lm90aGVyLWxpc3R7XHJcblx0XHRcdCAgcGFkZGluZy1ib3R0b206IDIwcnB4O1xyXG5cdFx0XHQgIG1hcmdpbi1ib3R0b206IDIwcnB4O1xyXG5cdFx0XHQgIC8qIHBhZGRpbmctYm90dG9tOiAxMTBweDsgKi9cclxuXHRcdFx0ICAub3RoZXItd3JhcHBlcntcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0XHQgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHQgICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuXHRcdFx0ICAgIC5vdGhlci1pdGVte1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHQgICAgICB3aWR0aDogMTQ1cnB4O1xyXG5cdFx0XHQgICAgICBpbWFnZXtcclxuXHRcdFx0ICAgICAgICB3aWR0aDogMTQ1cnB4O1xyXG5cdFx0XHQgICAgICAgIGhlaWdodDogMjAxcnB4O1xyXG5cdFx0XHQgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIHRleHR7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgICAgIGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRcdCAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdCAgICAgICAgY29sb3I6ICMzMzM7XHJcblx0XHRcdFx0XHRcdFx0Lm5vLXdyYXAoKTtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHQgIH1cclxuXHRcdFx0fVxyXG5cdCAgfVxyXG5cdFx0LmZpeGVkLWJ1dHRvbntcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdCAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHQgIHdpZHRoOiAxMDAlO1xyXG5cdFx0ICBoZWlnaHQ6IDEwMHJweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDEwMHJweDtcclxuXHRcdCAgLy8gcGFkZGluZzogMCAzMHJweDtcclxuXHRcdCAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdFx0Ym9yZGVyLXRvcDogMXJweCBzb2xpZCBAY29sb3ItYmFja2dyb3VuZC1kO1xyXG5cdFx0ICBwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHQgIGJvdHRvbTogMDtcclxuXHRcdCAgbGVmdDogMDtcclxuXHRcdFx0ei1pbmRleDogOTtcclxuXHRcdCAgPnZpZXd7XHJcblx0XHQgICAgd2lkdGg6IDIxN3JweDtcclxuXHRcdCAgICBoZWlnaHQ6IDEwMCU7XHJcblx0XHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0ICAgIGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHQgICAgY29sb3I6ICMzMzM7XHJcblx0XHQgIH1cclxuXHRcdCAgLnJlYWQtYnV0dG9ue1xyXG5cdFx0ICAgIHdpZHRoOiAyNTZycHg7XHJcblx0XHQgICAgYmFja2dyb3VuZC1jb2xvcjogQGNvbG9yLWJhY2tncm91bmQ7XHJcblx0XHQgICAgY29sb3I6ICNmZmY7XHJcblx0XHQgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBycHg7XHJcblx0XHQgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0ICB9XHJcblx0XHQgIC5idXktYnV0dG9ue1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHQgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdCAgICB3aWR0aDogMjE3cnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRcdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRcdFx0Lmljb25zLWJ1eXtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNXJweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogNTBycHg7XHJcblx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdFx0XHRcdH1cclxuXHRcdCAgfVxyXG5cdFx0fVxyXG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2UxNTllYjQmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2UxNTllYjQmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1OTkyODkxMzk1NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==