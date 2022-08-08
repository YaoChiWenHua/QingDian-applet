(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/read/read"],{

/***/ 70:
/*!*********************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/main.js?{"page":"pages%2Fread%2Fread"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _read = _interopRequireDefault(__webpack_require__(/*! ./pages/read/read.vue */ 71));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_read.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 71:
/*!**************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/read/read.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read.vue?vue&type=template&id=95d93a74&scoped=true& */ 72);
/* harmony import */ var _read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read.vue?vue&type=script&lang=js& */ 74);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read.vue?vue&type=style&index=0&id=95d93a74&lang=less&scoped=true& */ 76);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "95d93a74",
  null,
  false,
  _read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/read/read.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/*!*********************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/read/read.vue?vue&type=template&id=95d93a74&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./read.vue?vue&type=template&id=95d93a74&scoped=true& */ 73);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 73:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/read/read.vue?vue&type=template&id=95d93a74&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 74:
/*!***************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/read/read.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./read.vue?vue&type=script&lang=js& */ 75);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 75:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/read/read.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 17));































































































































var _vuex = __webpack_require__(/*! vuex */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =

{
  data: function data() {
    return {
      // userId: '',
      bookId: '',
      sectionId: '',
      book: {},
      showSet: false,
      scrollHeight: 0,
      cataloguelist: [],
      showCataMenu: false,
      nightMode: false,
      setFontSize: true,
      fontSize: 42,
      page: 1,
      total: '',
      pickerlist: [],
      pickerIndex: 0,
      preSectionId: '',
      isDisablePre: false,
      nextSectionId: '',
      isDisableNext: false,
      isBookShelf: true };

  },
  onLoad: function onLoad(option) {
    // this.bookId = uni.getStorageSync('__bookid__'
    // this.sectionId = uni.getStorageSync('__sectionid__') || 0
    this.bookId = option.bId;
    this.sectionId = option.cId;
    this.getReadBookData(this.sectionId);
    this.getBookDirectoryData();
    if (this.userId) {
      this.getIsBookShelf();
    }
  },
  onReady: function onReady() {
    var windowHeight = uni.getSystemInfoSync().windowHeight;
    var sHeight = windowHeight - 60 - 49;
    this.scrollHeight = sHeight * 2;
    // console.log(this.scrollHeight)
  },
  onShow: function onShow() {
    // this.getIsBookShelf()
  },
  onUnload: function onUnload() {var _this = this;
    if (this.isBookShelf && this.userId) {
      uni.showModal({
        title: '加入收藏',
        content: '下次看书更方便',
        cancelText: '残忍拒绝',
        confirmText: '加入收藏',
        success: function success(res) {
          if (res.confirm) {
            console.log('确定');
            _this.addBookShelf();
          } else if (res.cancel) {
            console.log('取消');
          }
        } });

    }
  },
  computed: _objectSpread({},
  (0, _vuex.mapGetters)([
  'userId',
  'userInfo'])),


  methods: _objectSpread({
    // p标签加样式
    // htmlReplace(txt) {
    //   let result = txt
    //   const regex = new RegExp('<p', 'gi')
    //   result = result.replace(regex, `<p style="padding: 8px 0;"`)
    //   return result
    // },
    // 购买单章节
    buyOneChapter: function buyOneChapter(item) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var para, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                // let status = this.subAuto ? 'Y' : 'N'
                // this._initSubAuto(status)
                para = {
                  user_id: _this2.userId,
                  book_id: _this2.bookId,
                  chapter_id: item.chapter_id,
                  price: item.price };

                uni.showLoading({
                  title: '正在购买...' });_context.next = 4;return (

                  _this2.$api.chapter.OneBuying(para));case 4:res = _context.sent;
                uni.hideLoading();
                if (res.code === 200) {
                  _this2.getReadBookData(item.cindex);
                  // this._inintUserInfo()
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: res.msg });

                }case 7:case "end":return _context.stop();}}}, _callee);}))();
    },
    _inintUserInfo: function _inintUserInfo() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var para, res, user;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                para = {
                  user_id: _this3.userId };_context2.next = 3;return (

                  _this3.$api.user.UserInfo(para));case 3:res = _context2.sent;
                if (res.code === 200) {
                  user = res.data;
                  _this3.setUserInfo(user);
                }case 5:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    setShowBtn: function setShowBtn() {
      this.showSet = !this.showSet;
    },
    nigthModeBtn: function nigthModeBtn() {
      if (this.nightMode) {








        uni.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#F5EEE9'
          // animation: {}
        });






      } else {








        uni.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#292929'
          // animation: {}
        });






      }
      this.nightMode = !this.nightMode,
      this.showSet = false;
    },
    showCataMenuBtn: function showCataMenuBtn() {
      this.showCataMenu = !this.showCataMenu,
      this.showSet = false;
    },
    fontSizeBtn: function fontSizeBtn() {
      this.setFontSize = !this.setFontSize;
    },
    subFontSizeBtn: function subFontSizeBtn() {
      var num = this.fontSize;
      if (num <= 20) {
        return;
      }
      num = num - 4;
      this.fontSize = num;
    },
    addFontSizeBtn: function addFontSizeBtn() {
      var num = this.fontSize;
      if (num >= 98) {
        return;
      }
      num = num + 4;
      this.fontSize = num;
    },
    // 加入书架
    addBookShelf: function addBookShelf() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var para, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!
                _this4.userId) {_context3.next = 8;break;}
                para = {
                  user_id: _this4.userId,
                  book_id: _this4.bookId };_context3.next = 4;return (

                  _this4.$api.bookshelf.AddUserCase(para));case 4:res = _context3.sent;
                if (res.code === 200) {
                  uni.showToast({
                    title: '加入收藏成功',
                    duration: 2000 });

                  _this4.isBookShelf = false;
                } else {
                  _this4.isBookShelf = true;
                }_context3.next = 9;break;case 8:

                uni.showToast({
                  title: '请先登录',
                  icon: 'none',
                  duration: 2000 });

                // uni.switchTab({
                //   url: '../user/user'
                // })
              case 9:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    gotoBookDetails: function gotoBookDetails() {
      uni.navigateTo({
        url: "../detail/detail?id=".concat(this.bookId) });

    },
    // 选择目录
    selectCatalogue: function selectCatalogue(cid) {
      this.showCataMenu = false,
      this.showSet = false;
      this.getReadBookData(cid);
    },
    changePickerValue: function changePickerValue(e) {
      var index = parseInt(e.detail.value);
      this.pickerIndex = index,
      this.page = index + 1;
      this.getBookDirectoryData();
    },
    // 上一章
    preChapter: function preChapter() {
      // uni.pageScrollTo({
      //   scrollTop: 0,
      //   duration: 0
      // })
      this.getReadBookData(this.preSectionId);
    },
    // 下一章
    nextChapter: function nextChapter() {
      this.getReadBookData(this.nextSectionId);
    },
    returnBtn: function returnBtn() {
      return;
    },
    getIsBookShelf: function getIsBookShelf() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var para, res, status;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                para = {
                  user_id: _this5.userId,
                  book_id: _this5.bookId };_context4.next = 3;return (

                  _this5.$api.bookshelf.BookIsCase(para));case 3:res = _context4.sent;
                if (res.code === 200) {
                  status = res.data.is_case === 'Y' ? false : true;
                  _this5.isBookShelf = status;
                }case 5:case "end":return _context4.stop();}}}, _callee4);}))();
    },
    getReadBookData: function getReadBookData(sId) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var para, res, data, extra;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                para = {
                  book_id: _this6.bookId,
                  user_id: _this6.userId,
                  sort: sId };

                // uni.showLoading({
                // 	title: '加载中...'
                // })
                _context5.next = 3;return _this6.$api.read.Chapter(para);case 3:res = _context5.sent;
                // uni.hideLoading()
                uni.pageScrollTo({
                  scrollTop: 0,
                  duration: 0 });

                if (res.code === 200) {
                  data = res.data;
                  extra = res.extra;
                  // data.content = this.htmlReplace(data.content)
                  // data.content = parseHtml(data.content)
                  // uni.setStorageSync('__sectionid__', data.chapter_id)
                  uni.setNavigationBarTitle({
                    title: data.chapter_title });

                  _this6.book = data;
                  // this.sectionId = data.chapter_id
                  _this6.sectionId = data.cindex;
                  _this6.preSectionId = extra.pre;
                  _this6.nextSectionId = extra.next;
                  if (data.is_fee === 'Y' && _this6.userId) {
                    _this6._inintUserInfo();
                  }
                  if (extra.pre === 0) {
                    _this6.isDisablePre = true;
                  } else {
                    _this6.isDisablePre = false;
                  }
                  if (extra.next === 0) {
                    _this6.isDisableNext = true;
                  } else {
                    _this6.isDisableNext = false;
                  }
                }case 6:case "end":return _context5.stop();}}}, _callee5);}))();
    },
    getBookDirectoryData: function getBookDirectoryData() {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var para, res;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                para = {
                  book_id: _this7.bookId,
                  page: _this7.page,
                  rows: 100 };_context6.next = 3;return (

                  _this7.$api.book.Directory(para));case 3:res = _context6.sent;
                if (res.code === 200) {
                  // let list = this.pickerlist
                  _this7.cataloguelist = res.data,
                  _this7.total = res.extra.count;
                  if (_this7.pickerlist.length === 0) {
                    _this7.setPickerData(res.extra.count);
                  }
                }case 5:case "end":return _context6.stop();}}}, _callee6);}))();
    },
    setPickerData: function setPickerData(total) {
      var arr = [];
      var num = Math.floor(total / 100);
      for (var i = 0; i <= num; i++) {
        var a = i * 100 + 1;
        var b = (i + 1) * 100;
        if (b > total) b = total;
        var c = a + '-' + b;
        arr.push(c);
      }
      this.pickerlist = arr;
    },
    gotoRecharge: function gotoRecharge() {
      uni.navigateTo({
        url: '/pages/recharge/recharge' });

    },
    gotoLogin: function gotoLogin() {
      uni.switchTab({
        url: '/pages/user/user' });

    } },
  (0, _vuex.mapMutations)([
  'setUserInfo'])) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 76:
/*!************************************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/read/read.vue?vue&type=style&index=0&id=95d93a74&lang=less&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./read.vue?vue&type=style&index=0&id=95d93a74&lang=less&scoped=true& */ 77);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 77:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/read/read.vue?vue&type=style&index=0&id=95d93a74&lang=less&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[70,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9yZWFkL3JlYWQudnVlP2Q1MzkiLCJ3ZWJwYWNrOi8vL0Q6L1lhb0NoaS9Db2RlL+aWsOW/q+aJi+Wwj+eoi+W6jy/lsI/nqIvluo8vd3hkZW1vLXFpbmdkaWFuLXJlYWQvcGFnZXMvcmVhZC9yZWFkLnZ1ZT9mYjU0Iiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL3JlYWQvcmVhZC52dWU/ZmU5NCIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9yZWFkL3JlYWQudnVlPzgzZjYiLCJ1bmktYXBwOi8vL3BhZ2VzL3JlYWQvcmVhZC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L1lhb0NoaS9Db2RlL+aWsOW/q+aJi+Wwj+eoi+W6jy/lsI/nqIvluo8vd3hkZW1vLXFpbmdkaWFuLXJlYWQvcGFnZXMvcmVhZC9yZWFkLnZ1ZT9kNzEwIiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL3JlYWQvcmVhZC52dWU/OGJkNyJdLCJuYW1lcyI6WyJ3eCIsIl9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzREFBQTs7O0FBR0E7QUFDQSx5Riw4RkFIQTtBQUNBQSxFQUFFLENBQUNDLGlDQUFILEdBQXVDQyxtQkFBdkMsQ0FHQUMsVUFBVSxDQUFDQyxhQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUM3SDtBQUN3RDtBQUNMO0FBQ3NDOzs7QUFHekY7QUFDaUw7QUFDakwsZ0JBQWdCLGtMQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUF1cUIsQ0FBZ0IsdW9CQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnSTNyQixnRDs7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBRkE7QUFHQSxtQkFIQTtBQUlBLGNBSkE7QUFLQSxvQkFMQTtBQU1BLHFCQU5BO0FBT0EsdUJBUEE7QUFRQSx5QkFSQTtBQVNBLHNCQVRBO0FBVUEsdUJBVkE7QUFXQSxrQkFYQTtBQVlBLGFBWkE7QUFhQSxlQWJBO0FBY0Esb0JBZEE7QUFlQSxvQkFmQTtBQWdCQSxzQkFoQkE7QUFpQkEseUJBakJBO0FBa0JBLHVCQWxCQTtBQW1CQSwwQkFuQkE7QUFvQkEsdUJBcEJBOztBQXNCQSxHQXhCQTtBQXlCQSxRQXpCQSxrQkF5QkEsTUF6QkEsRUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQW5DQTtBQW9DQSxTQXBDQSxxQkFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBekNBO0FBMENBLFFBMUNBLG9CQTBDQTtBQUNBO0FBQ0EsR0E1Q0E7QUE2Q0EsVUE3Q0Esc0JBNkNBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsMEJBRkE7QUFHQSwwQkFIQTtBQUlBLDJCQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsU0FaQTs7QUFjQTtBQUNBLEdBOURBO0FBK0RBO0FBQ0E7QUFDQSxVQURBO0FBRUEsWUFGQSxFQURBLENBL0RBOzs7QUFxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBVEEseUJBU0EsSUFUQSxFQVNBO0FBQ0E7QUFDQTtBQUNBLG9CQUhBLEdBR0E7QUFDQSx3Q0FEQTtBQUVBLHdDQUZBO0FBR0EsNkNBSEE7QUFJQSxtQ0FKQSxFQUhBOztBQVNBO0FBQ0Esa0NBREEsSUFUQTs7QUFZQSxxREFaQSxTQVlBLEdBWkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUhBLE1BR0E7QUFDQTtBQUNBLGdDQURBO0FBRUEsa0NBRkE7O0FBSUEsaUJBdEJBO0FBdUJBLEtBaENBO0FBaUNBLGtCQWpDQSw0QkFpQ0E7QUFDQSxvQkFEQSxHQUNBO0FBQ0Esd0NBREEsRUFEQTs7QUFJQSxpREFKQSxTQUlBLEdBSkE7QUFLQTtBQUNBLHNCQURBLEdBQ0EsUUFEQTtBQUVBO0FBQ0EsaUJBUkE7QUFTQSxLQTFDQTtBQTJDQSxjQTNDQSx3QkEyQ0E7QUFDQTtBQUNBLEtBN0NBO0FBOENBLGdCQTlDQSwwQkE4Q0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQSwrQkFEQTtBQUVBO0FBQ0E7QUFIQTs7Ozs7OztBQVdBLE9BcEJBLE1Bb0JBOzs7Ozs7Ozs7QUFTQTtBQUNBLCtCQURBO0FBRUE7QUFDQTtBQUhBOzs7Ozs7O0FBV0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsS0ExRkE7QUEyRkEsbUJBM0ZBLDZCQTJGQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSxLQTlGQTtBQStGQSxlQS9GQSx5QkErRkE7QUFDQTtBQUNBLEtBakdBO0FBa0dBLGtCQWxHQSw0QkFrR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpHQTtBQTBHQSxrQkExR0EsNEJBMEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FqSEE7QUFrSEE7QUFDQSxnQkFuSEEsMEJBbUhBO0FBQ0EsNkJBREE7QUFFQSxvQkFGQSxHQUVBO0FBQ0Esd0NBREE7QUFFQSx3Q0FGQSxFQUZBOztBQU1BLHlEQU5BLFNBTUEsR0FOQTtBQU9BO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLGtDQUZBOztBQUlBO0FBQ0EsaUJBTkEsTUFNQTtBQUNBO0FBQ0EsaUJBZkE7O0FBaUJBO0FBQ0EsK0JBREE7QUFFQSw4QkFGQTtBQUdBLGdDQUhBOztBQUtBO0FBQ0E7QUFDQTtBQXhCQTtBQTBCQSxLQTdJQTtBQThJQSxtQkE5SUEsNkJBOElBO0FBQ0E7QUFDQSx1REFEQTs7QUFHQSxLQWxKQTtBQW1KQTtBQUNBLG1CQXBKQSwyQkFvSkEsR0FwSkEsRUFvSkE7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFDQSxLQXhKQTtBQXlKQSxxQkF6SkEsNkJBeUpBLENBekpBLEVBeUpBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUE7QUFDQSxLQTlKQTtBQStKQTtBQUNBLGNBaEtBLHdCQWdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRLQTtBQXVLQTtBQUNBLGVBeEtBLHlCQXdLQTtBQUNBO0FBQ0EsS0ExS0E7QUEyS0EsYUEzS0EsdUJBMktBO0FBQ0E7QUFDQSxLQTdLQTtBQThLQSxrQkE5S0EsNEJBOEtBO0FBQ0Esb0JBREEsR0FDQTtBQUNBLHdDQURBO0FBRUEsd0NBRkEsRUFEQTs7QUFLQSx3REFMQSxTQUtBLEdBTEE7QUFNQTtBQUNBLHdCQURBLEdBQ0EsdUNBREE7QUFFQTtBQUNBLGlCQVRBO0FBVUEsS0F4TEE7QUF5TEEsbUJBekxBLDJCQXlMQSxHQXpMQSxFQXlMQTtBQUNBLG9CQURBLEdBQ0E7QUFDQSx3Q0FEQTtBQUVBLHdDQUZBO0FBR0EsMkJBSEEsRUFEQTs7QUFNQTtBQUNBO0FBQ0E7QUFSQSwwQ0FTQSw4QkFUQSxRQVNBLEdBVEE7QUFVQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSw2QkFGQTs7QUFJQTtBQUNBLHNCQURBLEdBQ0EsUUFEQTtBQUVBLHVCQUZBLEdBRUEsU0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQTFDQTtBQTJDQSxLQXBPQTtBQXFPQSx3QkFyT0Esa0NBcU9BO0FBQ0Esb0JBREEsR0FDQTtBQUNBLHdDQURBO0FBRUEsbUNBRkE7QUFHQSwyQkFIQSxFQURBOztBQU1BLGtEQU5BLFNBTUEsR0FOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBLGdEQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBZEE7QUFlQSxLQXBQQTtBQXFQQSxpQkFyUEEseUJBcVBBLEtBclBBLEVBcVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhRQTtBQWlRQSxnQkFqUUEsMEJBaVFBO0FBQ0E7QUFDQSx1Q0FEQTs7QUFHQSxLQXJRQTtBQXNRQSxhQXRRQSx1QkFzUUE7QUFDQTtBQUNBLCtCQURBOztBQUdBLEtBMVFBO0FBMlFBO0FBQ0EsZUFEQSxFQTNRQSxDQXJFQSxFOzs7Ozs7Ozs7Ozs7O0FDbElBO0FBQUE7QUFBQTtBQUFBO0FBQWt3QyxDQUFnQixtb0NBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F0eEM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9yZWFkL3JlYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG4vLyBAdHMtaWdub3JlXG53eC5fX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL3JlYWQvcmVhZC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9yZWFkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NWQ5M2E3NCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWFkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9yZWFkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTk1ZDkzYTc0Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOTVkOTNhNzRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcmVhZC9yZWFkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vcmVhZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTVkOTNhNzQmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vcmVhZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3JlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwicmVhZFwiIDpjbGFzcz1cIm5pZ2h0TW9kZT8nbmlnaHQtbW9kZSc6ICcnXCIgQHRhcD1cInNldFNob3dCdG5cIj5cclxuXHQgIDx2aWV3IGNsYXNzPVwid3JhcHBlclwiIHYtaWY9XCJib29rLmNvbnRlbnRcIj5cclxuXHQgICAgPHZpZXcgY2xhc3M9XCJib29rLXRpdGxlXCI+XHJcblx0ICAgICAgPHZpZXcgY2xhc3M9XCJ0aXRsZVwiPnt7Ym9vay5jaGFwdGVyX3RpdGxlfX08L3ZpZXc+XHJcblx0ICAgICAgPHZpZXcgY2xhc3M9XCJ0aXRsZS10aW1lXCI+5Y+R5biD77yae3tib29rLmNyZWF0ZV9kYXRlfX08L3ZpZXc+XHJcblx0ICAgIDwvdmlldz5cclxuXHQgICAgPHZpZXcgY2xhc3M9XCJyZWFkLW1haW5cIiA6c3R5bGU9XCJ7Zm9udFNpemU6IGZvbnRTaXplICsgJ3JweCd9XCI+XHJcblx0ICAgICAgPCEtLSA8cmljaC10ZXh0IGNsYXNzPVwiYm9vay1jb250XCIgbm9kZXM9XCJ7e2Jvb2suY29udGVudH19XCIgOnN0eWxlPVwie2ZvbnQtc2l6ZTpmb250U2l6ZSsncnB4J31cIj48L3JpY2gtdGV4dD4gLS0+XHJcblx0ICAgICAgPCEtLSA8cmljaC10ZXh0IGNsYXNzPVwiYm9vay1jb250XCIgOm5vZGVzPVwiYm9vay5jb250ZW50XCIgOnN0eWxlPVwie2ZvbnRTaXplOiBmb250U2l6ZSArICdycHgnfVwiPjwvcmljaC10ZXh0PiAtLT5cclxuXHRcdFx0XHQ8YmxvY2sgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGJvb2suY29udGVudFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0PHZpZXc+e3tpdGVtfX08L3ZpZXc+XHJcblx0XHRcdFx0PC9ibG9jaz5cclxuXHQgICAgPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInJlYWQtdmlwXCIgdi1pZj1cImJvb2suaXNfZmVlPT09J1knXCI+XHJcblx0XHRcdCAgPHZpZXcgY2xhc3M9XCJ2aXAtY29udGVudFwiPlxyXG5cdFx0XHQgICAgPHRleHQ+5pys56ug5pivVklQ56ug6IqCPC90ZXh0PlxyXG5cdFx0XHQgICAgPHRleHQ+4oCU4oCU5oSf6LCi5pSv5oyB5L2c5a6277yM5pSv5oyB5q2j54mI6ZiF6K+74oCU4oCUPC90ZXh0PlxyXG5cdFx0XHQgIDwvdmlldz5cclxuXHRcdFx0ICA8dmlldyBjbGFzcz1cImhhdmUtbG9naW5cIiB2LWlmPVwidXNlcklkXCI+XHJcblx0XHRcdCAgICA8dmlldyBjbGFzcz1cInVzZXItbW9uZXlcIj5cclxuXHRcdFx0ICAgICAgPHZpZXc+XHJcblx0XHRcdCAgICAgICAgPHRleHQ+5L2Z6aKd77yaPC90ZXh0PlxyXG5cdFx0XHQgICAgICAgIDx0ZXh0IGNsYXNzPVwiY29sb3ItcmVkXCI+e3t1c2VySW5mby5tb25leX19PC90ZXh0PiBcclxuXHRcdFx0ICAgICAgICA8dGV4dD7pmIXluIE8L3RleHQ+XHJcblx0XHRcdCAgICAgIDwvdmlldz5cclxuXHRcdFx0ICAgICAgPCEtLSA8dmlldz5cclxuXHRcdFx0ICAgICAgICA8dGV4dD7ku6Pph5HliLjvvJo8L3RleHQ+XHJcblx0XHRcdCAgICAgICAgPHRleHQgY2xhc3M9XCJjb2xvci1yZWRcIj57e3VzZXJJbmZvLnZvdWNoZXJfbW9uZXl9fTwvdGV4dD4gXHJcblx0XHRcdCAgICAgIDwvdmlldz4gLS0+XHJcblx0XHRcdCAgICA8L3ZpZXc+XHJcblx0XHRcdCAgICA8dmlldyBjbGFzcz1cIm5vdC1hdXRvXCI+XHJcblx0XHRcdCAgICAgIDx2aWV3IGNsYXNzPVwiZGVmYXVsdC1idXR0b25cIiB2LWlmPVwidXNlckluZm8ubW9uZXk+PTAmJnVzZXJJbmZvLm1vbmV5Pj1ib29rLnByaWNlXCIgQGNsaWNrLm5hdGl2ZS5zdG9wPVwiYnV5T25lQ2hhcHRlcihib29rKVwiPue7p+e7remYheivu++8iHt7Ym9vay5wcmljZX196ZiF5biB77yJPC92aWV3PlxyXG5cdFx0XHQgICAgICA8dmlldyBjbGFzcz1cImRlZmF1bHQtYnV0dG9uXCIgdi1lbHNlIEBjbGljay5uYXRpdmUuc3RvcD1cImdvdG9SZWNoYXJnZVwiPuS9memineS4jei2s++8jOivt+WFheWAvDwvdmlldz5cclxuXHRcdFx0ICAgIDwvdmlldz5cclxuXHRcdFx0ICAgIDwhLS0gPHZpZXcgY2xhc3M9XCJoYXZlLWF1dG9cIiBlbGlmPVwie3tpdGVtLmF1dG89PT0nWScmJnVzZXJJbmZvLm1vbmV5PGl0ZW0ucHJpY2V9fVwiPlxyXG5cdFx0XHQgICAgICA8dGV4dCBjbGFzcz1cImRlZmF1bHQtYnV0dG9uXCIgQGNsaWNrPVwiZ290b1JlY2hhcmdlXCI+5L2Z6aKd5LiN6Laz77yM6K+35YWF5YC8PC90ZXh0PlxyXG5cdFx0XHQgICAgPC92aWV3PiAtLT5cclxuXHRcdFx0ICA8L3ZpZXc+XHJcblx0XHRcdCAgPHZpZXcgY2xhc3M9XCJub3QtbG9naW5cIiB2LWVsc2U+XHJcblx0XHRcdCAgICA8dGV4dCBjbGFzcz1cImRlZmF1bHQtYnV0dG9uXCIgQGNsaWNrLm5hdGl2ZS5zdG9wPVwiZ290b0xvZ2luXCI+55m75b2V6ZiF6K+7PC90ZXh0PlxyXG5cdFx0XHQgIDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdCAgICA8dmlldyBjbGFzcz1cImJvdHRvbS1idG5cIiBAdGFwLm5hdGl2ZS5zdG9wPlxyXG5cdCAgICAgIDxidXR0b24gOnBsYWluPVwidHJ1ZVwiIDpkaXNhYmxlZD1cImlzRGlzYWJsZVByZVwiIEB0YXAubmF0aXZlLnN0b3A9XCJwcmVDaGFwdGVyXCI+5LiK5LiA56ugPC9idXR0b24+XHJcblx0ICAgICAgPGJ1dHRvbiBAdGFwLm5hdGl2ZS5zdG9wPVwic2hvd0NhdGFNZW51QnRuXCIgY2xhc3M9XCJib29rLWNhdGFsb2d1ZVwiPlxyXG5cdCAgICAgICAgPHRleHQgY2xhc3M9XCJpY29uZm9udCBpY29uLW11bHUxXCI+PC90ZXh0PlxyXG5cdCAgICAgICAg55uu5b2VXHJcblx0ICAgICAgPC9idXR0b24+XHJcblx0ICAgICAgPGJ1dHRvbiA6cGxhaW49XCJ0cnVlXCIgOmRpc2FibGVkPVwiaXNEaXNhYmxlTmV4dFwiIEB0YXAubmF0aXZlLnN0b3A9XCJuZXh0Q2hhcHRlclwiPuS4i+S4gOeroDwvYnV0dG9uPlxyXG5cdCAgICA8L3ZpZXc+XHJcblx0ICA8L3ZpZXc+XHJcblx0ICA8IS0tIOS5puexjeebruW9lSAtLT5cclxuXHQgIDwhLS0gPHZpZXcgY2xhc3M9XCJjYXRhbG9ndWUtbWVudVwiIDpjbGFzcz1cInNob3dDYXRhTWVudT8nc2xpZGVJblRvcCc6JydcIiA6c3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOm5pZ2h0TW9kZT8nIzI5MjkyOSc6JyNGNUVFRTknXCIgQHRvdWNobW92ZS5uYXRpdmUuc3RvcD1cInJldHVybkJ0blwiPiAtLT5cclxuXHQgIDwhLS0gPHZpZXcgY2xhc3M9XCJjYXRhbG9ndWUtbWVudVwiIDpjbGFzcz1cInNob3dDYXRhTWVudT8nc2xpZGVJblRvcCc6JydcIiBAdG91Y2htb3ZlLm5hdGl2ZS5zdG9wPiAtLT5cclxuXHQgIDx2aWV3IGNsYXNzPVwiY2F0YWxvZ3VlLW1lbnVcIiA6Y2xhc3M9XCJzaG93Q2F0YU1lbnU/J3NsaWRlSW5Ub3AnOicnXCI+XHJcblx0ICAgIDx2aWV3IGNsYXNzPVwiY2F0YS1oZWFkXCIgQHRvdWNobW92ZS5uYXRpdmUuc3RvcD5cclxuXHQgICAgICA8dmlldz7nm67lvZXvvIjlhbF7e3RvdGFsfX3nq6DvvIk8L3ZpZXc+XHJcblx0ICAgICAgPHBpY2tlciBtb2RlPVwic2VsZWN0b3JcIiA6cmFuZ2U9XCJwaWNrZXJsaXN0XCIgOnZhbHVlPVwiaW5kZXhcIiBAY2hhbmdlPVwiY2hhbmdlUGlja2VyVmFsdWVcIj5cclxuXHQgICAgICAgIDx2aWV3PlxyXG5cdCAgICAgICAgICB7e3BpY2tlcmxpc3RbcGlja2VySW5kZXhdfX1cclxuXHQgICAgICAgICAgPHRleHQgY2xhc3M9XCJpY29uZm9udCBpY29uLWljb25cIj48L3RleHQ+XHJcblx0ICAgICAgICA8L3ZpZXc+XHJcblx0ICAgICAgPC9waWNrZXI+XHJcblx0ICAgIDwvdmlldz5cclxuXHQgICAgPHNjcm9sbC12aWV3IGNsYXNzPVwiY2F0YS1tYWluXCIgOnN0eWxlPVwie2hlaWdodDpzY3JvbGxIZWlnaHQrJ3JweCd9XCIgOnNjcm9sbC15PVwidHJ1ZVwiPlxyXG5cdCAgICAgIDxibG9jayB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY2F0YWxvZ3VlbGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdCAgICAgICAgPHZpZXcgY2xhc3M9XCJjYXRhLWNvbnQgbm8td3JhcFwiIDpjbGFzcz1cIml0ZW0uY2luZGV4PT1zZWN0aW9uSWQ/J2FjdGl2ZS10aXRsZSc6JydcIiA6ZGF0YS1pdGVtPVwiaXRlbVwiIEBjbGljay5uYXRpdmUuc3RvcD1cInNlbGVjdENhdGFsb2d1ZShpdGVtLmNpbmRleClcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXRhLWNvbnQtbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHRleHQgY2xhc3M9XCJjYXRhLW51bWJlclwiPnt7aW5kZXg8OT8nMCcrKGluZGV4KzEpOmluZGV4KzF9fTwvdGV4dD4gLS0+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjYXRhLW51bWJlclwiPnt7aW5kZXgrMSsocGFnZS0xKSoxMDB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNhdGEtdGl0bGVcIj57e2l0ZW0uY2hhcHRlcl90aXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJpdGVtLmlzX3ZpcD09PSdZJ1wiIGNsYXNzPVwiaWNvbnMtdmlwXCI+PC92aWV3PlxyXG5cdCAgICAgICAgPC92aWV3PlxyXG5cdCAgICAgIDwvYmxvY2s+XHJcblx0ICAgIDwvc2Nyb2xsLXZpZXc+XHJcblx0ICAgIDx2aWV3IGNsYXNzPVwiY2xvc2UtYnRuXCIgQHRvdWNobW92ZS5uYXRpdmUuc3RvcD5cclxuXHQgICAgICA8YnV0dG9uIEB0YXAubmF0aXZlLnN0b3A9XCJzaG93Q2F0YU1lbnVCdG5cIiA6cGxhaW49XCJ0cnVlXCI+5YWz6ZetPC9idXR0b24+XHJcblx0ICAgIDwvdmlldz5cclxuXHQgIDwvdmlldz5cclxuXHQgIDwhLS0g6K6+572uIC0tPlxyXG5cdCAgPHZpZXcgY2xhc3M9XCJzZXR0aW5nXCIgOmNsYXNzPVwic2hvd1NldD8nc2xpZGVJbkJvdHRvbSc6JydcIiBAdGFwLm5hdGl2ZS5zdG9wPVwicmV0dXJuQnRuXCI+XHJcblx0ICAgIDx2aWV3IGNsYXNzPVwic2V0dGluZy1ib3R0b21cIj5cclxuXHQgICAgICA8dmlldyB2LXNob3c9XCJzZXRGb250U2l6ZVwiPlxyXG5cdCAgICAgICAgPHZpZXcgY2xhc3M9XCJzZXQtaGVhZFwiPlxyXG5cdCAgICAgICAgICA8YnV0dG9uIDpwbGFpbj1cInRydWVcIiA6ZGlzYWJsZWQ9XCJpc0Rpc2FibGVQcmVcIiBAdGFwLm5hdGl2ZS5zdG9wPVwicHJlQ2hhcHRlclwiPuS4iuS4gOeroDwvYnV0dG9uPlxyXG5cdCAgICAgICAgICA8dmlldyBjbGFzcz1cInRpdGxlIG5vLXdyYXBcIj57e2Jvb2suY2hhcHRlcl90aXRsZX19PC92aWV3PlxyXG5cdCAgICAgICAgICA8YnV0dG9uIDpwbGFpbj1cInRydWVcIiA6ZGlzYWJsZWQ9XCJpc0Rpc2FibGVOZXh0XCIgQHRhcC5uYXRpdmUuc3RvcD1cIm5leHRDaGFwdGVyXCI+5LiL5LiA56ugPC9idXR0b24+XHJcblx0ICAgICAgICA8L3ZpZXc+XHJcblx0ICAgICAgPC92aWV3PlxyXG5cdCAgICAgIDx2aWV3IHYtc2hvdz1cIiFzZXRGb250U2l6ZVwiPlxyXG5cdCAgICAgICAgPHZpZXcgY2xhc3M9XCJzZXQtZm9udHNpemVcIj5cclxuXHQgICAgICAgICAgPHRleHQgY2xhc3M9XCJmb250c2l6ZS10aXRsZVwiPuWtl+S9kzwvdGV4dD5cclxuXHQgICAgICAgICAgPHZpZXcgQHRhcC5uYXRpdmUuc3RvcD1cInN1YkZvbnRTaXplQnRuXCIgOmNsYXNzPVwiZm9udFNpemU8PTIwPydmb250c2l6ZS1kaXNhYmxlJzonJ1wiPlxyXG5cdCAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIj4mI3hlNjllOzwvdGV4dD5cclxuXHQgICAgICAgICAgPC92aWV3PlxyXG5cdCAgICAgICAgICA8dmlldyBAdGFwLm5hdGl2ZS5zdG9wPVwiYWRkRm9udFNpemVCdG5cIiA6Y2xhc3M9XCJmb250U2l6ZT49OTg/J2ZvbnRzaXplLWRpc2FibGUnOicnXCI+XHJcblx0ICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJpY29uZm9udFwiPiYjeGU2OWM7PC90ZXh0PlxyXG5cdCAgICAgICAgICA8L3ZpZXc+XHJcblx0ICAgICAgICA8L3ZpZXc+XHJcblx0ICAgICAgPC92aWV3PlxyXG5cdCAgICAgIDx2aWV3IGNsYXNzPVwic2V0LWljb25zXCI+XHJcblx0ICAgICAgIDx2aWV3IEB0YXAubmF0aXZlLnN0b3A9XCJzaG93Q2F0YU1lbnVCdG5cIj5cclxuXHQgICAgICAgICAgPHZpZXcgY2xhc3M9XCJpY29uZm9udFwiPiYjeGU2MDM7PC92aWV3PlxyXG5cdCAgICAgICAgICA8dmlldyBjbGFzcz1cInRleHRcIj7nm67lvZU8L3ZpZXc+XHJcblx0ICAgICAgIDwvdmlldz5cclxuXHQgICAgICAgIDx2aWV3IEB0YXAubmF0aXZlLnN0b3A9XCJuaWd0aE1vZGVCdG5cIj5cclxuXHQgICAgICAgICAgPHZpZXcgY2xhc3M9XCJpY29uZm9udFwiPnt7bmlnaHRNb2RlPycmI3hlNjJkOyc6JyYjeGU2NmQ7J319PC92aWV3PlxyXG5cdCAgICAgICAgICA8dmlldyBjbGFzcz1cInRleHRcIj57e25pZ2h0TW9kZT8n5pel6Ze0Jzon5aSc6Ze0J319PC92aWV3PlxyXG5cdCAgICAgICAgPC92aWV3PlxyXG5cdCAgICAgICAgPHZpZXcgQHRhcC5uYXRpdmUuc3RvcD1cImZvbnRTaXplQnRuXCI+XHJcblx0ICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaWNvbmZvbnRcIj4mI3hlNjI5Ozwvdmlldz5cclxuXHQgICAgICAgICAgPHZpZXcgY2xhc3M9XCJ0ZXh0XCI+6K6+572uPC92aWV3PlxyXG5cdCAgICAgICAgPC92aWV3PlxyXG5cdCAgICAgIDwvdmlldz5cclxuXHQgICAgPC92aWV3PlxyXG5cdCAgPC92aWV3PlxyXG5cdCAgPCEtLSDlj7PovrnmjInpkq4tLT5cclxuXHQgIDx2aWV3IGNsYXNzPVwicmlnaHQtYnRuXCIgOmNsYXNzPVwic2hvd1NldD8nc2xpZGVJbkJvdHRvbSc6JydcIiBAdGFwLm5hdGl2ZS5zdG9wPVwicmV0dXJuQnRuXCI+XHJcblx0ICAgIDx2aWV3IEB0YXAubmF0aXZlLnN0b3A9XCJnb3RvQm9va0RldGFpbHNcIj7kuabnsY3or6bmg4U8L3ZpZXc+XHJcblx0ICAgIDx2aWV3IHYtaWY9XCJpc0Jvb2tTaGVsZlwiIEB0YXAubmF0aXZlLnN0b3A9XCJhZGRCb29rU2hlbGZcIj7liqDlhaXkuabmnrY8L3ZpZXc+XHJcblx0ICA8L3ZpZXc+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuLy8gaW1wb3J0IHBhcnNlSHRtbCBmcm9tICcuLi8uLi9jb21tb24vaHRtbC1wYXJzZXIuanMnXHJcbmltcG9ydCB7bWFwR2V0dGVycywgbWFwTXV0YXRpb25zfSBmcm9tICd2dWV4J1xyXG5cdFxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdC8vIHVzZXJJZDogJycsXHJcblx0XHRcdGJvb2tJZDogJycsXHJcblx0XHRcdHNlY3Rpb25JZDogJycsXHJcblx0XHRcdGJvb2s6IHt9LFxyXG5cdFx0XHRzaG93U2V0OiBmYWxzZSxcclxuXHRcdFx0c2Nyb2xsSGVpZ2h0OiAwLFxyXG5cdFx0XHRjYXRhbG9ndWVsaXN0OiBbXSxcclxuXHRcdFx0c2hvd0NhdGFNZW51OiBmYWxzZSxcclxuXHRcdFx0bmlnaHRNb2RlOiBmYWxzZSxcclxuXHRcdFx0c2V0Rm9udFNpemU6IHRydWUsXHJcblx0XHRcdGZvbnRTaXplOiA0MixcclxuXHRcdFx0cGFnZTogMSxcclxuXHRcdFx0dG90YWw6ICcnLFxyXG5cdFx0XHRwaWNrZXJsaXN0OiBbXSxcclxuXHRcdFx0cGlja2VySW5kZXg6IDAsXHJcblx0XHRcdHByZVNlY3Rpb25JZDogJycsXHJcblx0XHRcdGlzRGlzYWJsZVByZTogZmFsc2UsXHJcblx0XHRcdG5leHRTZWN0aW9uSWQ6ICcnLFxyXG5cdFx0XHRpc0Rpc2FibGVOZXh0OiBmYWxzZSxcclxuXHRcdFx0aXNCb29rU2hlbGY6IHRydWVcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uTG9hZChvcHRpb24pIHtcclxuXHRcdC8vIHRoaXMuYm9va0lkID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX2Jvb2tpZF9fJ1xyXG5cdFx0Ly8gdGhpcy5zZWN0aW9uSWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fc2VjdGlvbmlkX18nKSB8fCAwXHJcblx0XHR0aGlzLmJvb2tJZCA9IG9wdGlvbi5iSWRcclxuXHRcdHRoaXMuc2VjdGlvbklkID0gb3B0aW9uLmNJZFxyXG5cdFx0dGhpcy5nZXRSZWFkQm9va0RhdGEodGhpcy5zZWN0aW9uSWQpXHJcblx0XHR0aGlzLmdldEJvb2tEaXJlY3RvcnlEYXRhKClcclxuXHRcdGlmKHRoaXMudXNlcklkKSB7XHJcblx0XHRcdHRoaXMuZ2V0SXNCb29rU2hlbGYoKVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25SZWFkeSgpIHtcclxuXHRcdGNvbnN0IHdpbmRvd0hlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxyXG5cdFx0bGV0IHNIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSA2MCAtIDQ5XHJcblx0XHR0aGlzLnNjcm9sbEhlaWdodCA9IHNIZWlnaHQgKiAyXHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnNjcm9sbEhlaWdodClcclxuXHR9LFxyXG5cdG9uU2hvdygpIHtcclxuXHRcdC8vIHRoaXMuZ2V0SXNCb29rU2hlbGYoKVxyXG5cdH0sXHJcblx0b25VbmxvYWQoKSB7XHJcblx0XHRpZiAodGhpcy5pc0Jvb2tTaGVsZiAmJiB0aGlzLnVzZXJJZCkge1xyXG5cdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHR0aXRsZTogJ+WKoOWFpeaUtuiXjycsXHJcblx0XHRcdFx0Y29udGVudDogJ+S4i+asoeeci+S5puabtOaWueS+vycsXHJcblx0XHRcdFx0Y2FuY2VsVGV4dDogJ+aui+W/jeaLkue7nScsXHJcblx0XHRcdFx0Y29uZmlybVRleHQ6ICfliqDlhaXmlLbol48nLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+ehruWumicpXHJcblx0XHRcdFx0XHRcdHRoaXMuYWRkQm9va1NoZWxmKClcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5Y+W5raIJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Li4ubWFwR2V0dGVycyhbXHJcblx0XHRcdCd1c2VySWQnLFxyXG5cdFx0XHQndXNlckluZm8nXHJcblx0XHRdKVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly8gcOagh+etvuWKoOagt+W8j1xyXG5cdFx0Ly8gaHRtbFJlcGxhY2UodHh0KSB7XHJcblx0XHQvLyAgIGxldCByZXN1bHQgPSB0eHRcclxuXHRcdC8vICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCc8cCcsICdnaScpXHJcblx0XHQvLyAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKHJlZ2V4LCBgPHAgc3R5bGU9XCJwYWRkaW5nOiA4cHggMDtcImApXHJcblx0XHQvLyAgIHJldHVybiByZXN1bHRcclxuXHRcdC8vIH0sXHJcblx0XHQvLyDotK3kubDljZXnq6DoioJcclxuXHRcdGFzeW5jIGJ1eU9uZUNoYXB0ZXIoaXRlbSkge1xyXG5cdFx0XHQvLyBsZXQgc3RhdHVzID0gdGhpcy5zdWJBdXRvID8gJ1knIDogJ04nXHJcblx0XHRcdC8vIHRoaXMuX2luaXRTdWJBdXRvKHN0YXR1cylcclxuXHRcdFx0bGV0IHBhcmEgPSB7XHJcblx0XHRcdCAgdXNlcl9pZDogdGhpcy51c2VySWQsXHJcblx0XHRcdCAgYm9va19pZDogdGhpcy5ib29rSWQsXHJcblx0XHRcdCAgY2hhcHRlcl9pZDogaXRlbS5jaGFwdGVyX2lkLFxyXG5cdFx0XHQgIHByaWNlOiBpdGVtLnByaWNlXHJcblx0XHRcdH1cclxuXHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0ICB0aXRsZTogJ+ato+WcqOi0reS5sC4uLidcclxuXHRcdFx0fSlcclxuXHRcdFx0bGV0IHJlcyA9IGF3YWl0IHRoaXMuJGFwaS5jaGFwdGVyLk9uZUJ1eWluZyhwYXJhKVxyXG5cdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRpZiAocmVzLmNvZGUgPT09IDIwMCkge1xyXG5cdFx0XHQgIHRoaXMuZ2V0UmVhZEJvb2tEYXRhKGl0ZW0uY2luZGV4KVxyXG5cdFx0XHQgIC8vIHRoaXMuX2luaW50VXNlckluZm8oKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHQgIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHQgICAgdGl0bGU6IHJlcy5tc2dcclxuXHRcdFx0ICB9KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgX2luaW50VXNlckluZm8oKSB7XHJcblx0XHQgIGxldCBwYXJhID0ge1xyXG5cdFx0ICAgIHVzZXJfaWQ6IHRoaXMudXNlcklkXHJcblx0XHQgIH1cclxuXHRcdCAgbGV0IHJlcyA9IGF3YWl0IHRoaXMuJGFwaS51c2VyLlVzZXJJbmZvKHBhcmEpXHJcblx0XHQgIGlmIChyZXMuY29kZSA9PT0gMjAwKSB7XHJcblx0XHQgICAgbGV0IHVzZXIgPSByZXMuZGF0YVxyXG5cdFx0XHRcdHRoaXMuc2V0VXNlckluZm8odXNlcilcclxuXHRcdCAgfVxyXG5cdFx0fSxcclxuXHRcdHNldFNob3dCdG4oKSB7XHJcblx0XHRcdHRoaXMuc2hvd1NldCA9ICF0aGlzLnNob3dTZXRcclxuXHRcdH0sXHJcblx0XHRuaWd0aE1vZGVCdG4oKSB7XHJcblx0XHQgIGlmICh0aGlzLm5pZ2h0TW9kZSkge1xyXG5cdFx0XHRcdC8vI2lmZGVmIE1QLVRPVVRJQU9cclxuXHRcdFx0XHR0dC5zZXROYXZpZ2F0aW9uQmFyQ29sb3Ioe1xyXG5cdFx0XHRcdCAgZnJvbnRDb2xvcjogJyNmZmZmZmYnLFxyXG5cdFx0XHRcdCAgYmFja2dyb3VuZENvbG9yOiAnIzI5MjkyOSdcclxuXHRcdFx0XHQgIC8vIGFuaW1hdGlvbjoge31cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vI2VuZGlmXHJcblx0XHRcdFx0Ly8jaWZuZGVmIE1QLVRPVVRJQU9cclxuXHRcdCAgICB1bmkuc2V0TmF2aWdhdGlvbkJhckNvbG9yKHtcclxuXHRcdCAgICAgIGZyb250Q29sb3I6ICcjMDAwMDAwJyxcclxuXHRcdCAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUVFRTknXHJcblx0XHQgICAgICAvLyBhbmltYXRpb246IHt9XHJcblx0XHQgICAgfSlcclxuXHRcdFx0XHQvLyNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU4gfHwgTVAtQkFJRFVcclxuXHRcdCAgICB1bmkuc2V0QmFja2dyb3VuZENvbG9yKHtcclxuXHRcdCAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUVFRTknXHJcblx0XHQgICAgfSlcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdCAgfSBlbHNlIHtcclxuXHRcdFx0XHQvLyNpZmRlZiBNUC1UT1VUSUFPXHJcblx0XHRcdFx0dHQuc2V0TmF2aWdhdGlvbkJhckNvbG9yKHtcclxuXHRcdFx0XHQgIGZyb250Q29sb3I6ICcjZmZmZmZmJyxcclxuXHRcdFx0XHQgIGJhY2tncm91bmRDb2xvcjogJyMyOTI5MjknXHJcblx0XHRcdFx0ICAvLyBhbmltYXRpb246IHt9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyNlbmRpZlxyXG5cdFx0XHRcdC8vI2lmbmRlZiBNUC1UT1VUSUFPXHJcblx0XHQgICAgdW5pLnNldE5hdmlnYXRpb25CYXJDb2xvcih7XHJcblx0XHQgICAgICBmcm9udENvbG9yOiAnI2ZmZmZmZicsXHJcblx0XHQgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjkyOTI5J1xyXG5cdFx0ICAgICAgLy8gYW5pbWF0aW9uOiB7fVxyXG5cdFx0ICAgIH0pXHJcblx0XHRcdFx0Ly8jZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOIHx8IE1QLUJBSURVXHJcblx0XHQgICAgdW5pLnNldEJhY2tncm91bmRDb2xvcih7XHJcblx0XHQgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjkyOTI5J1xyXG5cdFx0ICAgIH0pXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHQgIH1cclxuXHRcdFx0dGhpcy5uaWdodE1vZGUgPSAhdGhpcy5uaWdodE1vZGUsXHJcblx0XHRcdHRoaXMuc2hvd1NldCA9IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0c2hvd0NhdGFNZW51QnRuKCkge1xyXG5cdFx0XHR0aGlzLnNob3dDYXRhTWVudSA9ICF0aGlzLnNob3dDYXRhTWVudSxcclxuXHRcdCAgdGhpcy5zaG93U2V0ID0gZmFsc2VcclxuXHRcdH0sXHJcblx0XHRmb250U2l6ZUJ0bigpIHtcclxuXHRcdFx0dGhpcy5zZXRGb250U2l6ZSA9ICF0aGlzLnNldEZvbnRTaXplXHJcblx0XHR9LFxyXG5cdFx0c3ViRm9udFNpemVCdG4oKSB7XHJcblx0XHRcdGxldCBudW0gPSB0aGlzLmZvbnRTaXplXHJcblx0XHRcdGlmIChudW0gPD0gMjApIHtcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHRudW0gPSBudW0gLSA0XHJcblx0XHRcdHRoaXMuZm9udFNpemUgPSBudW1cclxuXHRcdH0sXHJcblx0XHRhZGRGb250U2l6ZUJ0bigpIHtcclxuXHRcdCAgbGV0IG51bSA9IHRoaXMuZm9udFNpemVcclxuXHRcdCAgaWYgKG51bSA+PSA5OCkge1xyXG5cdFx0ICAgIHJldHVyblxyXG5cdFx0ICB9XHJcblx0XHQgIG51bSA9IG51bSArIDRcclxuXHRcdCAgdGhpcy5mb250U2l6ZSA9IG51bVxyXG5cdFx0fSxcclxuXHRcdC8vIOWKoOWFpeS5puaetlxyXG5cdFx0YXN5bmMgYWRkQm9va1NoZWxmKCkge1xyXG5cdFx0ICBpZiAodGhpcy51c2VySWQpIHtcclxuXHRcdCAgICBsZXQgcGFyYSA9IHtcclxuXHRcdCAgICAgIHVzZXJfaWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0ICAgICAgYm9va19pZDogdGhpcy5ib29rSWRcclxuXHRcdCAgICB9XHJcblx0XHRcdFx0bGV0IHJlcyA9IGF3YWl0IHRoaXMuJGFwaS5ib29rc2hlbGYuQWRkVXNlckNhc2UocGFyYSlcclxuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDIwMCkge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5Yqg5YWl5pS26JeP5oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR0aGlzLmlzQm9va1NoZWxmID0gZmFsc2VcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Jvb2tTaGVsZiA9IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHQgIH0gZWxzZSB7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0ICB0aXRsZTogJ+ivt+WFiOeZu+W9lScsXHJcblx0XHRcdFx0ICBpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0ICBkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHQgICAgLy8gdW5pLnN3aXRjaFRhYih7XHJcblx0XHQgICAgLy8gICB1cmw6ICcuLi91c2VyL3VzZXInXHJcblx0XHQgICAgLy8gfSlcclxuXHRcdCAgfVxyXG5cdFx0fSxcclxuXHRcdGdvdG9Cb29rRGV0YWlscygpIHtcclxuXHRcdCAgdW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0ICAgIHVybDogYC4uL2RldGFpbC9kZXRhaWw/aWQ9JHt0aGlzLmJvb2tJZH1gXHJcblx0XHQgIH0pICBcclxuXHRcdH0sXHJcblx0XHQvLyDpgInmi6nnm67lvZVcclxuXHRcdHNlbGVjdENhdGFsb2d1ZShjaWQpIHtcclxuXHRcdCAgdGhpcy5zaG93Q2F0YU1lbnUgPSBmYWxzZSxcclxuXHRcdCAgdGhpcy5zaG93U2V0ID0gZmFsc2VcclxuXHRcdCAgdGhpcy5nZXRSZWFkQm9va0RhdGEoY2lkKVxyXG5cdFx0fSxcclxuXHRcdGNoYW5nZVBpY2tlclZhbHVlKGUpIHtcclxuXHRcdCAgbGV0IGluZGV4ID0gcGFyc2VJbnQoZS5kZXRhaWwudmFsdWUpXHJcblx0XHQgIHRoaXMucGlja2VySW5kZXggPSBpbmRleCxcclxuXHRcdCAgdGhpcy5wYWdlID0gaW5kZXggKyAxXHJcblx0XHQgIHRoaXMuZ2V0Qm9va0RpcmVjdG9yeURhdGEoKVxyXG5cdFx0fSxcclxuXHRcdC8vIOS4iuS4gOeroFxyXG5cdFx0cHJlQ2hhcHRlcigpIHtcclxuXHRcdCAgLy8gdW5pLnBhZ2VTY3JvbGxUbyh7XHJcblx0XHQgIC8vICAgc2Nyb2xsVG9wOiAwLFxyXG5cdFx0ICAvLyAgIGR1cmF0aW9uOiAwXHJcblx0XHQgIC8vIH0pXHJcblx0XHQgIHRoaXMuZ2V0UmVhZEJvb2tEYXRhKHRoaXMucHJlU2VjdGlvbklkKVxyXG5cdFx0fSxcclxuXHRcdC8vIOS4i+S4gOeroFxyXG5cdFx0bmV4dENoYXB0ZXIoKSB7XHJcblx0XHQgIHRoaXMuZ2V0UmVhZEJvb2tEYXRhKHRoaXMubmV4dFNlY3Rpb25JZClcclxuXHRcdH0sXHJcblx0XHRyZXR1cm5CdG4oKSB7XHJcblx0XHQgIHJldHVyblxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIGdldElzQm9va1NoZWxmKCkge1xyXG5cdFx0ICBsZXQgcGFyYSA9IHtcclxuXHRcdCAgICB1c2VyX2lkOiB0aGlzLnVzZXJJZCxcclxuXHRcdCAgICBib29rX2lkOiB0aGlzLmJvb2tJZFxyXG5cdFx0ICB9XHJcblx0XHRcdGxldCByZXMgPSBhd2FpdCB0aGlzLiRhcGkuYm9va3NoZWxmLkJvb2tJc0Nhc2UocGFyYSlcclxuXHRcdFx0aWYgKHJlcy5jb2RlID09PSAyMDApIHtcclxuXHRcdFx0XHRsZXQgc3RhdHVzID0gcmVzLmRhdGEuaXNfY2FzZSA9PT0gJ1knID8gZmFsc2UgOiB0cnVlXHJcblx0XHRcdFx0dGhpcy5pc0Jvb2tTaGVsZiA9IHN0YXR1c1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgZ2V0UmVhZEJvb2tEYXRhKHNJZCkge1xyXG5cdFx0ICBsZXQgcGFyYSA9IHtcclxuXHRcdCAgICBib29rX2lkOiB0aGlzLmJvb2tJZCxcclxuXHRcdCAgICB1c2VyX2lkOiB0aGlzLnVzZXJJZCxcclxuXHRcdCAgICBzb3J0OiBzSWRcclxuXHRcdCAgfVxyXG5cdFx0XHQvLyB1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHQvLyBcdHRpdGxlOiAn5Yqg6L295LitLi4uJ1xyXG5cdFx0XHQvLyB9KVxyXG5cdFx0XHRsZXQgcmVzID0gYXdhaXQgdGhpcy4kYXBpLnJlYWQuQ2hhcHRlcihwYXJhKVxyXG5cdFx0XHQvLyB1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHR1bmkucGFnZVNjcm9sbFRvKHtcclxuXHRcdFx0XHRzY3JvbGxUb3A6IDAsXHJcblx0XHRcdFx0ZHVyYXRpb246IDBcclxuXHRcdFx0fSlcclxuXHRcdFx0aWYgKHJlcy5jb2RlID09PSAyMDApIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhXHJcblx0XHRcdFx0bGV0IGV4dHJhID0gcmVzLmV4dHJhXHJcblx0XHRcdFx0Ly8gZGF0YS5jb250ZW50ID0gdGhpcy5odG1sUmVwbGFjZShkYXRhLmNvbnRlbnQpXHJcblx0XHRcdFx0Ly8gZGF0YS5jb250ZW50ID0gcGFyc2VIdG1sKGRhdGEuY29udGVudClcclxuXHRcdFx0XHQvLyB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fc2VjdGlvbmlkX18nLCBkYXRhLmNoYXB0ZXJfaWQpXHJcblx0XHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcblx0XHRcdFx0XHR0aXRsZTogZGF0YS5jaGFwdGVyX3RpdGxlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGlzLmJvb2sgPSBkYXRhXHJcblx0XHRcdFx0Ly8gdGhpcy5zZWN0aW9uSWQgPSBkYXRhLmNoYXB0ZXJfaWRcclxuXHRcdFx0XHR0aGlzLnNlY3Rpb25JZCA9IGRhdGEuY2luZGV4XHJcblx0XHRcdFx0dGhpcy5wcmVTZWN0aW9uSWQgPSBleHRyYS5wcmVcclxuXHRcdFx0XHR0aGlzLm5leHRTZWN0aW9uSWQgPSBleHRyYS5uZXh0XHJcblx0XHRcdFx0aWYgKGRhdGEuaXNfZmVlID09PSAnWScgJiYgdGhpcy51c2VySWQpIHtcclxuXHRcdFx0XHQgIHRoaXMuX2luaW50VXNlckluZm8oKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZXh0cmEucHJlID09PSAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzRGlzYWJsZVByZSA9IHRydWVcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Rpc2FibGVQcmUgPSBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZXh0cmEubmV4dCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Rpc2FibGVOZXh0ID0gdHJ1ZVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzRGlzYWJsZU5leHQgPSBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIGdldEJvb2tEaXJlY3RvcnlEYXRhKCkge1xyXG5cdFx0ICBsZXQgcGFyYSA9IHtcclxuXHRcdCAgICBib29rX2lkOiB0aGlzLmJvb2tJZCxcclxuXHRcdCAgICBwYWdlOiB0aGlzLnBhZ2UsXHJcblx0XHQgICAgcm93czogMTAwXHJcblx0XHQgIH1cclxuXHRcdFx0bGV0IHJlcyA9IGF3YWl0IHRoaXMuJGFwaS5ib29rLkRpcmVjdG9yeShwYXJhKVxyXG5cdFx0XHRpZiAocmVzLmNvZGUgPT09IDIwMCkge1xyXG5cdFx0XHRcdC8vIGxldCBsaXN0ID0gdGhpcy5waWNrZXJsaXN0XHJcblx0XHRcdFx0dGhpcy5jYXRhbG9ndWVsaXN0ID0gcmVzLmRhdGEsXHJcblx0XHRcdFx0dGhpcy50b3RhbCA9IHJlcy5leHRyYS5jb3VudFxyXG5cdFx0XHRcdGlmICh0aGlzLnBpY2tlcmxpc3QubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldFBpY2tlckRhdGEocmVzLmV4dHJhLmNvdW50KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHNldFBpY2tlckRhdGEodG90YWwpIHtcclxuXHRcdCAgbGV0IGFyciA9IFtdXHJcblx0XHQgIGxldCBudW0gPSBNYXRoLmZsb29yKHRvdGFsIC8gMTAwKVxyXG5cdFx0ICBmb3IgKGxldCBpID0gMDsgaSA8PSBudW07IGkrKykge1xyXG5cdFx0ICAgIGxldCBhID0gKGkgKiAxMDApICsgMVxyXG5cdFx0ICAgIGxldCBiID0gKGkgKyAxKSAqIDEwMFxyXG5cdFx0ICAgIGlmIChiID4gdG90YWwpIGIgPSB0b3RhbFxyXG5cdFx0ICAgIGxldCBjID0gYSArICctJyArIGJcclxuXHRcdCAgICBhcnIucHVzaChjKVxyXG5cdFx0ICB9XHJcblx0XHQgIHRoaXMucGlja2VybGlzdCA9IGFyclxyXG5cdFx0fSxcclxuXHRcdGdvdG9SZWNoYXJnZSgpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy9yZWNoYXJnZS9yZWNoYXJnZSdcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRnb3RvTG9naW4oKSB7XHJcblx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdHVybDogJy9wYWdlcy91c2VyL3VzZXInXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0Li4ubWFwTXV0YXRpb25zKFtcclxuXHRcdFx0J3NldFVzZXJJbmZvJ1xyXG5cdFx0XSlcclxuXHRcdFxyXG5cdH1cclxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cclxuQGltcG9ydCAnLi4vLi4vY29tbW9uL2xlc3MvY29uc3QubGVzcyc7XHJcblx0XHJcblx0LnJlYWR7XHJcblx0ICB3aWR0aDogMTAwJTtcclxuXHQgIC8vIGhlaWdodDogMTAwJTtcclxuXHQgIGJhY2tncm91bmQtY29sb3I6ICNGNUVFRTk7XHJcblx0ICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxuXHQgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgIC53cmFwcGVye1xyXG5cdCAgICBwYWRkaW5nOiAwIDMwcnB4O1xyXG5cdCAgICBjb2xvcjogIzMzMztcclxuXHQgICAgLmJvb2stdGl0bGV7XHJcblx0XHRcdFx0cGFkZGluZy10b3A6IDMwcnB4O1xyXG5cdCAgICAgIC50aXRsZXtcclxuXHQgICAgICAgIGZvbnQtc2l6ZTogNDBycHg7XHJcblx0ICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHQgICAgICB9XHJcblx0ICAgICAgLnRpdGxlLXRpbWV7XHJcblx0ICAgICAgICBwYWRkaW5nOiAxMHJweCAwIDIwcnB4IDA7XHJcblx0ICAgICAgICBmb250LXNpemU6IDIycnB4O1xyXG5cdCAgICAgICAgLy8gY29sb3I6ICM2NjY7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblx0ICAgIC5yZWFkLW1haW57XHJcblx0ICAgICAgd2lkdGg6IDEwMCU7XHJcblx0ICAgICAgPnZpZXd7XHJcblx0ICAgICAgICAvLyBjb2xvcjogIzMzMztcclxuXHQgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0ICAgICAgICB0ZXh0LWluZGVudDogMmVtO1xyXG5cdCAgICAgICAgLy8gZm9udC1zaXplOiAzNnJweDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDVycHggMDtcclxuXHQgICAgICAgIC8vIHB7XHJcblx0ICAgICAgICAvLyAgIHBhZGRpbmc6IDEwcnB4IDAgIWltcG9ydGFudDsgXHJcblx0ICAgICAgICAvLyB9XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblx0XHRcdC5yZWFkLXZpcHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0ICB3aWR0aDogMTAwJTtcclxuXHRcdFx0ICBwYWRkaW5nLXRvcDogMTAwcnB4O1xyXG5cdFx0XHQgIC8vIHBhZGRpbmctYm90dG9tOiAxMDBycHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdFx0ICAudmlwLWNvbnRlbnR7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0ICAgIHRleHR7XHJcblx0XHRcdCAgICAgIHBhZGRpbmc6IDhycHggMDtcclxuXHRcdFx0ICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHQgICAgICAvLyBjb2xvcjogIzMzMztcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0ICB9XHJcblx0XHRcdCAgLm5vdC1sb2dpbntcclxuXHRcdFx0ICAgIHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgbWFyZ2luLXRvcDogMTAwcnB4O1xyXG5cdFx0XHQgIH1cclxuXHRcdFx0ICAuaGF2ZS1sb2dpbntcclxuXHRcdFx0ICAgIHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgbWFyZ2luLXRvcDogMTAwcnB4O1xyXG5cdFx0XHRcdFx0LnVzZXItbW9uZXl7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdD52aWV3e1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNTBycHg7XHJcblx0XHRcdFx0XHRcdFx0LmNvbG9yLXJlZHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBAY29sb3ItYmFja2dyb3VuZDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0ICAgIC8vIC5ub3QtYXV0bywgLmhhdmUtYXV0b3tcclxuXHRcdFx0ICAgIC8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0ICAgIC8vIH1cclxuXHRcdFx0ICB9XHJcblx0XHRcdCAgLmRlZmF1bHQtYnV0dG9ue1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHQgICAgd2lkdGg6IDEwMCU7XHJcblx0XHRcdCAgICBoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHQgICAgbWFyZ2luLXRvcDogMzBycHg7XHJcblx0XHRcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdCAgICBmb250LXNpemU6IDM0cnB4O1xyXG5cdFx0XHQgICAgY29sb3I6ICNmZmY7XHJcblx0XHRcdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAY29sb3ItYmFja2dyb3VuZDtcclxuXHRcdFx0ICAgIGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0XHQgIH1cclxuXHRcdFx0ICAuZGVmYXVsdC1idXR0b246YWN0aXZle1xyXG5cdFx0XHQgICAgb3BhY2l0eTogMC42O1xyXG5cdFx0XHQgIH1cclxuXHRcdFx0fVxyXG5cdCAgICAuYm90dG9tLWJ0bntcclxuXHQgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdCAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHQgICAgICB3aWR0aDogMTAwJTtcclxuXHQgICAgICBwYWRkaW5nOiA2MHJweCAwO1xyXG5cdCAgICAgIGJ1dHRvbntcclxuXHQgICAgICAgIHdpZHRoOiAxOTBycHg7XHJcblx0ICAgICAgICBoZWlnaHQ6IDY4cnB4O1xyXG5cdCAgICAgICAgbGluZS1oZWlnaHQ6IDY4cnB4O1xyXG5cdCAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNjBycHg7XHJcblx0ICAgICAgICBmb250LXNpemU6IDMwcnB4O1xyXG5cdCAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHQgICAgICAgIGJvcmRlcjogMnJweCBzb2xpZCAjRDhENkQxO1xyXG5cdCAgICAgICAgY29sb3I6ICMzMzM7XHJcblx0ICAgICAgfVxyXG5cdFx0XHRcdGJ1dHRvbjphY3RpdmV7XHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjY7XHJcblx0XHRcdFx0fVxyXG5cdCAgICAgIC5ib29rLWNhdGFsb2d1ZXtcclxuXHQgICAgICAgIHdpZHRoOiAyMzhycHg7XHJcblx0XHRcdFx0XHQuaWNvbi1tdWx1MXtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdFx0XHRcdH1cclxuXHQgICAgICB9XHJcblx0XHRcdFx0YnV0dG9uLWRpc2FibGVke1xyXG5cdFx0XHRcdFx0Y29sb3I6ICM5OTk7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xyXG5cdFx0XHRcdH1cclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cdCAgLmNhdGFsb2d1ZS1tZW51e1xyXG5cdCAgICB3aWR0aDogMTAwJTtcclxuXHQgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RUVFOTtcclxuXHQgICAgcG9zaXRpb246IGZpeGVkO1xyXG5cdCAgICB0b3A6IDA7XHJcblx0ICAgIGxlZnQ6IDA7XHJcblx0ICAgIHJpZ2h0OiAwO1xyXG5cdCAgICBib3R0b206IDA7XHJcblx0ICAgIHotaW5kZXg6IDEwMDtcclxuXHQgICAgb3BhY2l0eTogMDtcclxuXHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcblx0ICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblx0ICAgIC5jYXRhLWhlYWR7XHJcblx0ICAgICAgZGlzcGxheTogZmxleDtcclxuXHQgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0ICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQgICAgICBoZWlnaHQ6IDkwcnB4O1xyXG5cdCAgICAgIHBhZGRpbmc6IDAgNDBycHg7XHJcblx0ICAgICAgbWFyZ2luLWJvdHRvbTogMzBycHg7XHJcblx0ICAgIH1cclxuXHQgICAgLmNhdGEtbWFpbntcclxuXHQgICAgICB3aWR0aDogMTAwJTtcclxuXHQgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDQwcnB4O1xyXG5cdCAgICAgIC5jYXRhLWNvbnR7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG5cdCAgICAgICAgaGVpZ2h0OiAxMDBycHg7XHJcblx0ICAgICAgICBsaW5lLWhlaWdodDogMTAwcnB4O1xyXG5cdCAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTVycHg7XHJcblx0ICAgICAgICBwYWRkaW5nOiAxMHJweCA0MHJweDtcclxuXHQgICAgICAgIGJvcmRlci10b3A6IDJycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0ICAgICAgICAuY2F0YS1udW1iZXJ7XHJcblx0ICAgICAgICAgIGZvbnQtc2l6ZTogMjRycHg7XHJcblx0ICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgLmNhdGEtdGl0bGV7XHJcblx0ICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHJweDtcclxuXHQgICAgICAgICAgZm9udC1zaXplOiAzMHJweDtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgICYuYWN0aXZlLXRpdGxle1xyXG5cdCAgICAgICAgICBjb2xvcjogI0ZGNTA1MjtcclxuXHQgICAgICAgICAgLmNhdGEtbnVtYmVye1xyXG5cdCAgICAgICAgICAgIGNvbG9yOiAjRkY1MDUyO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cdCAgICAgIC5jYXRhLWNvbnQ6bGFzdC1jaGlsZHtcclxuXHQgICAgICAgIGJvcmRlci1ib3R0b206IDJycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblx0ICAgIC5jbG9zZS1idG57XHJcblx0ICAgICAgd2lkdGg6IDEwMCU7XHJcblx0ICAgICAgaGVpZ2h0OiA5NnJweDtcclxuXHQgICAgICAvLyBib3JkZXItdG9wOiAycnB4IHNvbGlkICNFN0UzREU7XHJcblx0ICAgICAgYnV0dG9ue1xyXG5cdCAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cdCAgICAgICAgbGluZS1oZWlnaHQ6IDk2cnB4O1xyXG5cdCAgICAgICAgZm9udC1zaXplOiAzMHJweDtcclxuXHQgICAgICAgIGNvbG9yOiAjMzMzO1xyXG5cdCAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cdCAgLnNldHRpbmd7XHJcblx0ICAgIHdpZHRoOiAxMDAlO1xyXG5cdCAgICBoZWlnaHQ6IDM0MHJweDtcclxuXHQgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG5cdCAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMxO1xyXG5cdCAgICBwb3NpdGlvbjogZml4ZWQ7XHJcblx0ICAgIGJvdHRvbTogMDtcclxuXHQgICAgbGVmdDogMDtcclxuXHQgICAgei1pbmRleDogMTk7XHJcblx0ICAgIG9wYWNpdHk6IDA7XHJcblx0ICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcblx0ICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblx0ICAgIC5zZXR0aW5nLWJvdHRvbXtcclxuXHQgICAgICBwYWRkaW5nOiAwIDMwcnB4O1xyXG5cdCAgICAgIC5zZXQtaGVhZHtcclxuXHQgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdCAgICAgICAgd2lkdGg6IDEwMCU7XHJcblx0ICAgICAgICBtYXJnaW4tdG9wOiA1MHJweDtcclxuXHQgICAgICAgIGZvbnQtc2l6ZTogMzBycHg7XHJcblx0ICAgICAgICBidXR0b257XHJcblx0ICAgICAgICAgIHdpZHRoOiAxNjBycHg7XHJcblx0ICAgICAgICAgIGhlaWdodDogNTBycHg7XHJcblx0ICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHJweDtcclxuXHQgICAgICAgICAgZm9udC1zaXplOiAzMHJweDtcclxuXHQgICAgICAgICAgY29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjogMnJweCBzb2xpZCAjNzQ3MTZDO1xyXG5cdCAgICAgICAgICAvLyBib3JkZXItY29sb3I6ICM3NDcxNkM7XHJcblx0ICAgICAgICB9XHJcblx0XHRcdFx0XHRidXR0b246YWN0aXZle1xyXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAuNjtcclxuXHRcdFx0XHRcdH1cclxuXHQgICAgICAgIGJ1dHRvbi1kaXNhYmxlZHtcclxuXHQgICAgICAgICAgY29sb3I6ICM5QTk2OTE7XHJcblx0ICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogIzlBOTY5MTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIC50aXRsZXtcclxuXHQgICAgICAgICAgd2lkdGg6IDMwMHJweDtcclxuXHQgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHQgICAgICAgICAgY29sb3I6ICNmZmY7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cdCAgICAgIC5zZXQtZm9udHNpemV7XHJcblx0ICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdCAgICAgICAgd2lkdGg6IDEwMCU7XHJcblx0ICAgICAgICBtYXJnaW4tdG9wOiA1MHJweDtcclxuXHQgICAgICAgIC5mb250c2l6ZS10aXRsZXtcclxuXHQgICAgICAgICAgcGFkZGluZy1yaWdodDogMjNycHg7XHJcblx0ICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cdCAgICAgICAgICBmb250LXNpemU6IDMwcnB4O1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgdmlld3tcclxuXHQgICAgICAgICAgd2lkdGg6IDE2MHJweDtcclxuXHQgICAgICAgICAgaGVpZ2h0OiA1MHJweDtcclxuXHQgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdCAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0ICAgICAgICAgIGJvcmRlcjogMnJweCBzb2xpZCAjOUE5NjkxO1xyXG5cdCAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuXHQgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBycHg7XHJcblx0ICAgICAgICAgIC5pY29uZm9udHtcclxuXHQgICAgICAgICAgICBmb250LXNpemU6IDQ1cnB4O1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICB2aWV3Omxhc3QtY2hpbGR7XHJcblx0ICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3MXJweDtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIC5mb250c2l6ZS1kaXNhYmxle1xyXG5cdCAgICAgICAgICBjb2xvcjogIzlBOTY5MTtcclxuXHQgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNUE1ODU1O1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHQgICAgICAuc2V0LWljb25ze1xyXG5cdCAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHQgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHQgICAgICAgIHdpZHRoOiA4NCU7XHJcblx0ICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuXHQgICAgICAgIG1hcmdpbi10b3A6IDc1cnB4O1xyXG5cdCAgICAgICAgY29sb3I6ICNmZmY7XHJcblx0ICAgICAgICAudGV4dHtcclxuXHQgICAgICAgICAgbWFyZ2luLXRvcDogMjBycHg7XHJcblx0ICAgICAgICAgIGZvbnQtc2l6ZTogMzBycHg7XHJcblx0ICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgLmljb25mb250e1xyXG5cdCAgICAgICAgICBmb250LXNpemU6IDYwcnB4O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblx0ICB9XHJcblx0ICAucmlnaHQtYnRue1xyXG5cdCAgICB3aWR0aDogMTgzcnB4O1xyXG5cdCAgICBoZWlnaHQ6IDIwMHJweDtcclxuXHQgICAgcG9zaXRpb246IGZpeGVkO1xyXG5cdCAgICBib3R0b206IDM5MHJweDtcclxuXHQgICAgcmlnaHQ6IDA7XHJcblx0ICAgIHotaW5kZXg6IDE5O1xyXG5cdCAgICBvcGFjaXR5OiAwO1xyXG5cdCAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG5cdCAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG5cdCAgICB2aWV3e1xyXG5cdCAgICAgIHdpZHRoOiAxODNycHg7XHJcblx0ICAgICAgaGVpZ2h0OiA2MHJweDtcclxuXHQgICAgICBtYXJnaW4tdG9wOiAzMnJweDtcclxuXHQgICAgICBsaW5lLWhlaWdodDogNjBycHg7XHJcblx0ICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuXHQgICAgICBjb2xvcjogI2ZmZjtcclxuXHQgICAgICBmb250LXNpemU6IDI4cnB4O1xyXG5cdCAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcnB4O1xyXG5cdCAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcnB4O1xyXG5cdCAgICB9XHJcblx0ICB9XHJcblx0ICAuc2xpZGVJbkJvdHRvbXtcclxuXHQgICAgb3BhY2l0eTogMTtcclxuXHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHQgIH1cclxuXHQgIC5zbGlkZUluVG9we1xyXG5cdCAgICBvcGFjaXR5OiAxO1xyXG5cdCAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG5cdCAgfVxyXG5cdCAgLy8gLnNsaWRlSW5SaWdodHtcclxuXHQgIC8vICAgb3BhY2l0eTogMTtcclxuXHQgIC8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHQgIC8vIH1cclxuXHR9XHJcblx0XHJcblx0Lm5pZ2h0LW1vZGV7XHJcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG5cdCAgLndyYXBwZXJ7XHJcblx0ICAgIGNvbG9yOiAjOUE5NjkxO1xyXG5cdCAgICAuYm90dG9tLWJ0bntcclxuXHQgICAgICBidXR0b257XHJcblx0ICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG5cdCAgICAgICAgYm9yZGVyLWNvbG9yOiAjOUE5NjkxO1xyXG5cdCAgICAgICAgY29sb3I6ICM5QTk2OTE7XHJcblx0ICAgICAgfVxyXG5cdFx0XHRcdC8vIGJ1dHRvbltkaXNhYmxlZF1cclxuXHQgICAgICBidXR0b24tZGlzYWJsZWR7XHJcblx0ICAgICAgICBjb2xvcjojNjY2O1xyXG5cdCAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxuXHQgICAgICAgIGJvcmRlci1jb2xvcjogIzY2NjtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHQgIH1cclxuXHQgIC5jYXRhbG9ndWUtbWVudXtcclxuXHQgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxuXHQgICAgLmNhdGEtaGVhZHtcclxuXHQgICAgICBjb2xvcjogIzlBOTY5MTtcclxuXHQgICAgfVxyXG5cdCAgICAuY2F0YS1tYWlue1xyXG5cdCAgICAgIC5jYXRhLWNvbnR7XHJcblx0ICAgICAgICBjb2xvcjogIzlBOTY5MTtcclxuXHQgICAgICAgIGJvcmRlci1jb2xvcjogIzlBOTY5MTtcclxuXHQgICAgICB9XHJcblx0ICAgICAgLmNhdGEtY29udDpsYXN0LWNoaWxke1xyXG5cdCAgICAgICAgYm9yZGVyLWNvbG9yOiAjOUE5NjkxO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgICAuY2xvc2UtYnRue1xyXG5cdCAgICAgIGJ1dHRvbntcclxuXHQgICAgICAgIGNvbG9yOiAjOUE5NjkxO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9yZWFkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTk1ZDkzYTc0Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vcmVhZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05NWQ5M2E3NCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjU5OTI4OTEzOTUzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9