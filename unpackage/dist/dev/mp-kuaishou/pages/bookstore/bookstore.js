(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/bookstore/bookstore"],{

/***/ 143:
/*!*******************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/main.js?{"page":"pages%2Fbookstore%2Fbookstore"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _bookstore = _interopRequireDefault(__webpack_require__(/*! ./pages/bookstore/bookstore.vue */ 144));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_bookstore.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 144:
/*!************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookstore/bookstore.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bookstore_vue_vue_type_template_id_1a01ae78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookstore.vue?vue&type=template&id=1a01ae78&scoped=true& */ 145);
/* harmony import */ var _bookstore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookstore.vue?vue&type=script&lang=js& */ 147);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bookstore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bookstore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _bookstore_vue_vue_type_style_index_0_id_1a01ae78_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookstore.vue?vue&type=style&index=0&id=1a01ae78&lang=less&scoped=true& */ 149);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _bookstore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bookstore_vue_vue_type_template_id_1a01ae78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bookstore_vue_vue_type_template_id_1a01ae78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a01ae78",
  null,
  false,
  _bookstore_vue_vue_type_template_id_1a01ae78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/bookstore/bookstore.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 145:
/*!*******************************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookstore/bookstore.vue?vue&type=template&id=1a01ae78&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_template_id_1a01ae78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bookstore.vue?vue&type=template&id=1a01ae78&scoped=true& */ 146);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_template_id_1a01ae78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_template_id_1a01ae78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_template_id_1a01ae78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_template_id_1a01ae78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 146:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookstore/bookstore.vue?vue&type=template&id=1a01ae78&scoped=true& ***!
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
  var l0 = _vm.__map(_vm.booklist, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var f0 = _vm._f("wordsNum")(item.word_count)

    return {
      $orig: $orig,
      f0: f0
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

/***/ 147:
/*!*************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookstore/bookstore.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bookstore.vue?vue&type=script&lang=js& */ 148);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 148:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookstore/bookstore.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 17));
































































var _base = __webpack_require__(/*! ../../api/base */ 26);
var _mixin = __webpack_require__(/*! ../../common/js/mixin */ 35);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =

{
  mixins: [_mixin.wordsNumMixin],
  data: function data() {
    return {
      base: _base.coverUrl,
      channel: '',
      booklist: [],
      classifyList: [],
      classIndex: 0,
      progressList: [
      { id: '', name: '全部' },
      { id: 'N', name: '连载' },
      { id: 'Y', name: '完结' }],

      progressIndex: 0,
      attrList: [
      { id: '', name: '全部' },
      { id: 'N', name: '免费' },
      { id: 'Y', name: '付费' }],

      attrIndex: 0,
      sortList: [
      { id: 'new', name: '最新' },
      { id: 'click', name: '点击' }],

      sortIndex: 0,
      loadingShow: true,
      page: 1,
      total: null,
      category_id: '',
      is_finish: '',
      is_vip: '',
      hits: '',
      time: 'desc' };

  },
  onLoad: function onLoad(option) {
    this.channel = option.channel;
    this._initClassifyData();
    this._initData();
  },
  onReady: function onReady() {

  },
  onReachBottom: function onReachBottom() {
    this.loadMoreList();
  },
  methods: {
    _initClassifyData: function _initClassifyData() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var para, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                para = {
                  channel: _this.channel };_context.next = 3;return (

                  _this.$api.store.GetBookCategory(para));case 3:res = _context.sent;
                if (res.code === 200) {
                  _this.classifyList = res.data;
                  _this.classifyList.unshift({
                    id: '',
                    name: '全部' });

                }case 5:case "end":return _context.stop();}}}, _callee);}))();
    },
    _initData: function _initData() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var para, res, data, extra;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                para = {
                  channel: _this2.channel,
                  category_id: _this2.category_id,
                  is_finish: _this2.is_finish,
                  is_vip: _this2.is_vip,
                  hits: _this2.hits,
                  time: _this2.time,
                  page: _this2.page };_context2.next = 3;return (

                  _this2.$api.store.Index(para));case 3:res = _context2.sent;
                if (res.code === 200) {
                  data = res.data;
                  extra = res.extra;
                  if (extra.count < extra.rows) {
                    _this2.loadingShow = false;
                  }
                  _this2.total = extra.count;
                  _this2.booklist = _this2.booklist.concat(data);
                } else {
                  _this2.loadingShow = false;
                }case 5:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    classItem: function classItem(item, index, flag) {
      if (flag === 1) {
        this.classIndex = index;
        this.category_id = item.id;
      } else if (flag === 2) {
        this.progressIndex = index;
        this.is_finish = item.id;
      } else if (flag === 3) {
        this.attrIndex = index;
        this.is_vip = item.id;
      } else if (flag === 4) {
        this.sortIndex = index;
        if (item.id === 'new') {
          this.time = 'desc';
          this.hits = '';
        } else {
          this.time = '';
          this.hits = 'desc';
        }
      }
      this.booklist = [];
      this.page = 1;
      this.total = null;
      this.loadingShow = true;
      this._initData();
    },
    gotoDetail: function gotoDetail(id) {
      // router.push({
      //   uri: '/pages/detail',
      //   params: {
      //     bookId: id,
      //     clickType: 3
      //   }
      // })
    },
    loadMoreList: function loadMoreList() {
      var length = this.booklist.length;
      if (length >= this.total) {
        this.loadingShow = false;
        return;
      } else {
        this.page++;
        this._initData();
      }
    } } };exports.default = _default;

/***/ }),

/***/ 149:
/*!**********************************************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookstore/bookstore.vue?vue&type=style&index=0&id=1a01ae78&lang=less&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_style_index_0_id_1a01ae78_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bookstore.vue?vue&type=style&index=0&id=1a01ae78&lang=less&scoped=true& */ 150);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_style_index_0_id_1a01ae78_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_style_index_0_id_1a01ae78_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_style_index_0_id_1a01ae78_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_style_index_0_id_1a01ae78_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bookstore_vue_vue_type_style_index_0_id_1a01ae78_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 150:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/bookstore/bookstore.vue?vue&type=style&index=0&id=1a01ae78&lang=less&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[143,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9ib29rc3RvcmUvYm9va3N0b3JlLnZ1ZT9mZWU2Iiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL2Jvb2tzdG9yZS9ib29rc3RvcmUudnVlPzBhM2EiLCJ3ZWJwYWNrOi8vL0Q6L1lhb0NoaS9Db2RlL+aWsOW/q+aJi+Wwj+eoi+W6jy/lsI/nqIvluo8vd3hkZW1vLXFpbmdkaWFuLXJlYWQvcGFnZXMvYm9va3N0b3JlL2Jvb2tzdG9yZS52dWU/NjQyMiIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9ib29rc3RvcmUvYm9va3N0b3JlLnZ1ZT9mZDE5IiwidW5pLWFwcDovLy9wYWdlcy9ib29rc3RvcmUvYm9va3N0b3JlLnZ1ZSIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9ib29rc3RvcmUvYm9va3N0b3JlLnZ1ZT81MjIwIiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL2Jvb2tzdG9yZS9ib29rc3RvcmUudnVlPzgxN2EiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7OztBQUdBO0FBQ0EseUcsOEZBSEE7QUFDQUEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDLENBR0FDLFVBQVUsQ0FBQ0Msa0JBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtJO0FBQ2xJO0FBQzZEO0FBQ0w7QUFDc0M7OztBQUc5RjtBQUNpTDtBQUNqTCxnQkFBZ0Isa0xBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9HQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUE0cUIsQ0FBZ0IsNG9CQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNpRWhzQjtBQUNBLGtFOztBQUVBO0FBQ0EsZ0NBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLGlCQUZBO0FBR0Esa0JBSEE7QUFJQSxzQkFKQTtBQUtBLG1CQUxBO0FBTUE7QUFDQSw0QkFEQTtBQUVBLDZCQUZBO0FBR0EsNkJBSEEsQ0FOQTs7QUFXQSxzQkFYQTtBQVlBO0FBQ0EsNEJBREE7QUFFQSw2QkFGQTtBQUdBLDZCQUhBLENBWkE7O0FBaUJBLGtCQWpCQTtBQWtCQTtBQUNBLCtCQURBO0FBRUEsaUNBRkEsQ0FsQkE7O0FBc0JBLGtCQXRCQTtBQXVCQSx1QkF2QkE7QUF3QkEsYUF4QkE7QUF5QkEsaUJBekJBO0FBMEJBLHFCQTFCQTtBQTJCQSxtQkEzQkE7QUE0QkEsZ0JBNUJBO0FBNkJBLGNBN0JBO0FBOEJBLGtCQTlCQTs7QUFnQ0EsR0FuQ0E7QUFvQ0EsUUFwQ0Esa0JBb0NBLE1BcENBLEVBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F4Q0E7QUF5Q0EsU0F6Q0EscUJBeUNBOztBQUVBLEdBM0NBO0FBNENBLGVBNUNBLDJCQTRDQTtBQUNBO0FBQ0EsR0E5Q0E7QUErQ0E7QUFDQSxxQkFEQSwrQkFDQTtBQUNBLG9CQURBLEdBQ0E7QUFDQSx3Q0FEQSxFQURBOztBQUlBLHdEQUpBLFNBSUEsR0FKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsOEJBRkE7O0FBSUEsaUJBWEE7QUFZQSxLQWJBO0FBY0EsYUFkQSx1QkFjQTtBQUNBLG9CQURBLEdBQ0E7QUFDQSx5Q0FEQTtBQUVBLGlEQUZBO0FBR0EsNkNBSEE7QUFJQSx1Q0FKQTtBQUtBLG1DQUxBO0FBTUEsbUNBTkE7QUFPQSxtQ0FQQSxFQURBOztBQVVBLCtDQVZBLFNBVUEsR0FWQTtBQVdBO0FBQ0Esc0JBREEsR0FDQSxRQURBO0FBRUEsdUJBRkEsR0FFQSxTQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQVJBLE1BUUE7QUFDQTtBQUNBLGlCQXJCQTtBQXNCQSxLQXBDQTtBQXFDQSxhQXJDQSxxQkFxQ0EsSUFyQ0EsRUFxQ0EsS0FyQ0EsRUFxQ0EsSUFyQ0EsRUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E5REE7QUErREEsY0EvREEsc0JBK0RBLEVBL0RBLEVBK0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXZFQTtBQXdFQSxnQkF4RUEsMEJBd0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpGQSxFQS9DQSxFOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7QUFBdXdDLENBQWdCLHdvQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTN4QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2Jvb2tzdG9yZS9ib29rc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG4vLyBAdHMtaWdub3JlXG53eC5fX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2Jvb2tzdG9yZS9ib29rc3RvcmUudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vYm9va3N0b3JlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYTAxYWU3OCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Jvb2tzdG9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Jvb2tzdG9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYm9va3N0b3JlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhMDFhZTc4Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWEwMWFlNzhcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvYm9va3N0b3JlL2Jvb2tzdG9yZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2Jvb2tzdG9yZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWEwMWFlNzgmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBsMCA9IF92bS5fX21hcChfdm0uYm9va2xpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgdmFyICRvcmlnID0gX3ZtLl9fZ2V0X29yaWcoaXRlbSlcblxuICAgIHZhciBmMCA9IF92bS5fZihcIndvcmRzTnVtXCIpKGl0ZW0ud29yZF9jb3VudClcblxuICAgIHJldHVybiB7XG4gICAgICAkb3JpZzogJG9yaWcsXG4gICAgICBmMDogZjBcbiAgICB9XG4gIH0pXG5cbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBsMDogbDBcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9ib29rc3RvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9ib29rc3RvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImJvb2stc3RvcmVcIj5cblx0XHQ8dmlldyBjbGFzcz1cInN0b3JlLWhlYWRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkLXN0eWxlXCI+XHJcblx0XHRcdCAgPHZpZXcgY2xhc3M9XCJpY29uIGljb24tZmVubGVpXCI+PC92aWV3PlxyXG5cdFx0XHQgIDx2aWV3IGNsYXNzPVwiaGVhZC1yaWdodFwiPlxyXG5cdFx0XHQgICAgPHZpZXc+5YiG57G777yaPC92aWV3PlxyXG5cdFx0XHQgICAgPGJsb2NrIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjbGFzc2lmeUxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0ICAgICAgPHRleHQgOmNsYXNzPVwieydhY3RpdmUtdGV4dCc6Y2xhc3NJbmRleD09PWluZGV4fVwiIEBjbGljaz1cImNsYXNzSXRlbShpdGVtLCBpbmRleCwgMSlcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHQgICAgPC9ibG9jaz5cclxuXHRcdFx0ICA8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkLXN0eWxlXCI+XHJcblx0XHRcdCAgPHZpZXcgY2xhc3M9XCJpY29uIGljb24tamluZHVcIj48L3ZpZXc+XHJcblx0XHRcdCAgPHZpZXcgY2xhc3M9XCJoZWFkLXJpZ2h0XCI+XHJcblx0XHRcdCAgICA8dmlldz7ov5vluqbvvJo8L3ZpZXc+XHJcblx0XHRcdCAgICA8YmxvY2sgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHByb2dyZXNzTGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHQgICAgICA8dGV4dCA6Y2xhc3M9XCJ7J2FjdGl2ZS10ZXh0Jzpwcm9ncmVzc0luZGV4PT09aW5kZXh9XCIgQGNsaWNrPVwiY2xhc3NJdGVtKGl0ZW0sIGluZGV4LCAyKVwiPnt7aXRlbS5uYW1lfX08L3RleHQ+XHJcblx0XHRcdCAgICA8L2Jsb2NrPlxyXG5cdFx0XHQgIDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImhlYWQtc3R5bGVcIj5cclxuXHRcdFx0ICA8dmlldyBjbGFzcz1cImljb24gaWNvbi1zaHV4aW5nXCI+PC92aWV3PlxyXG5cdFx0XHQgIDx2aWV3IGNsYXNzPVwiaGVhZC1yaWdodFwiPlxyXG5cdFx0XHQgICAgPHZpZXc+5bGe5oCn77yaPC92aWV3PlxyXG5cdFx0XHQgICAgPGJsb2NrIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBhdHRyTGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHQgICAgICA8dGV4dCA6Y2xhc3M9XCJ7J2FjdGl2ZS10ZXh0JzphdHRySW5kZXg9PT1pbmRleH1cIiBAY2xpY2s9XCJjbGFzc0l0ZW0oaXRlbSwgaW5kZXgsIDMpXCI+e3tpdGVtLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0ICAgIDwvYmxvY2s+XHJcblx0XHRcdCAgPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZC1zdHlsZVwiPlxyXG5cdFx0XHQgIDx2aWV3IGNsYXNzPVwiaWNvbiBpY29uLXBhaXh1XCI+PC92aWV3PlxyXG5cdFx0XHQgIDx2aWV3IGNsYXNzPVwiaGVhZC1yaWdodFwiPlxyXG5cdFx0XHQgICAgPHZpZXc+5o6S5bqP77yaPC92aWV3PlxyXG5cdFx0XHQgICAgPGJsb2NrIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBzb3J0TGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHQgICAgICA8dGV4dCA6Y2xhc3M9XCJ7J2FjdGl2ZS10ZXh0Jzpzb3J0SW5kZXg9PT1pbmRleH1cIiBAY2xpY2s9XCJjbGFzc0l0ZW0oaXRlbSwgaW5kZXgsIDQpXCI+e3tpdGVtLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0ICAgIDwvYmxvY2s+XHJcblx0XHRcdCAgPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImxpc3QtbWFpblwiPlxyXG5cdFx0XHQ8YmxvY2sgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGJvb2tsaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdCAgPG5hdmlnYXRvciBjbGFzcz1cInN0b3JlLWl0ZW1cIiA6dXJsPVwiYC4uL2RldGFpbC9kZXRhaWw/aWQ9JHtpdGVtLmJvb2tfaWR9YFwiPlxyXG5cdFx0XHQgICAgPGltYWdlIDpzcmM9XCJgJHtiYXNlfSR7aXRlbS5ib29rX2lkfS8ke2l0ZW0uY292ZXJ9YFwiIDpsYXp5LWxvYWQ9XCJ0cnVlXCI+PC9pbWFnZT5cclxuXHRcdFx0ICAgIDx2aWV3IGNsYXNzPVwiaXRlbS1yaWdodFwiPlxyXG5cdFx0XHQgICAgICA8dGV4dCBjbGFzcz1cInJpZ2h0LXRpdGxlXCI+e3tpdGVtLmJvb2tfdGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0ICAgICAgPHZpZXcgY2xhc3M9XCJyaWdodC1ib3R0b21cIj5cclxuXHRcdFx0ICAgICAgICA8dGV4dD57e2l0ZW0uY2F0ZWdvcnlfdGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0ICAgICAgICA8dGV4dCBjbGFzcz1cImJsdWVcIj57e2l0ZW0uaXNfZmluaXNoPT09J1knPyflt7Llroznu5MnOifov57ovb3kuK0nfX08L3RleHQ+XHJcblx0XHRcdCAgICAgICAgPHRleHQgY2xhc3M9XCJvcmFuZ2VcIj57e2l0ZW0ud29yZF9jb3VudCB8IHdvcmRzTnVtfX08L3RleHQ+XHJcblx0XHRcdCAgICAgIDwvdmlldz5cclxuXHRcdFx0ICAgICAgPHRleHQ+5pyA5paw77yae3tpdGVtLmxhc3RfdXBkYXRlX2NoYXB0ZXJfbmFtZX19PC90ZXh0PlxyXG5cdFx0XHQgICAgICA8dGV4dD7mm7TmlrDml7bpl7TvvJp7e2l0ZW0ubGFzdF91cGRhdGVfY2hhcHRlcl9kYXRlfX08L3RleHQ+XHJcblx0XHRcdCAgICA8L3ZpZXc+XHJcblx0XHRcdCAgPC9uYXZpZ2F0b3I+XHJcblx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibW9yZVwiPlxyXG5cdFx0XHQgIDx0ZXh0IHYtc2hvdz1cImxvYWRpbmdTaG93XCI+5q2j5Zyo5Yqg6L295LitLi4uPC90ZXh0PlxyXG5cdFx0XHQgIDx0ZXh0IHYtc2hvdz1cIiFsb2FkaW5nU2hvd1wiPuayoeacieabtOWkmuS5puexjTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5pbXBvcnQge2NvdmVyVXJsfSBmcm9tICcuLi8uLi9hcGkvYmFzZSdcclxuaW1wb3J0IHt3b3Jkc051bU1peGlufSBmcm9tICcuLi8uLi9jb21tb24vanMvbWl4aW4nXHJcblx0XG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bWl4aW5zOiBbd29yZHNOdW1NaXhpbl0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGJhc2U6IGNvdmVyVXJsLFxyXG5cdFx0XHRjaGFubmVsOiAnJyxcclxuXHRcdFx0Ym9va2xpc3Q6IFtdLFxyXG5cdFx0XHRjbGFzc2lmeUxpc3Q6IFtdLFxyXG5cdFx0XHRjbGFzc0luZGV4OiAwLFxyXG5cdFx0XHRwcm9ncmVzc0xpc3Q6IFtcclxuXHRcdFx0ICB7aWQ6ICcnLCBuYW1lOiAn5YWo6YOoJ30sXHJcblx0XHRcdCAge2lkOiAnTicsIG5hbWU6ICfov57ovb0nfSxcclxuXHRcdFx0ICB7aWQ6ICdZJywgbmFtZTogJ+WujOe7kyd9XHJcblx0XHRcdF0sXHJcblx0XHRcdHByb2dyZXNzSW5kZXg6IDAsXHJcblx0XHRcdGF0dHJMaXN0OiBbXHJcblx0XHRcdCAge2lkOiAnJywgbmFtZTogJ+WFqOmDqCd9LFxyXG5cdFx0XHQgIHtpZDogJ04nLCBuYW1lOiAn5YWN6LS5J30sXHJcblx0XHRcdCAge2lkOiAnWScsIG5hbWU6ICfku5jotLknfVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRhdHRySW5kZXg6IDAsXHJcblx0XHRcdHNvcnRMaXN0OiBbXHJcblx0XHRcdCAge2lkOiAnbmV3JywgbmFtZTogJ+acgOaWsCd9LFxyXG5cdFx0XHQgIHtpZDogJ2NsaWNrJywgbmFtZTogJ+eCueWHuyd9XHJcblx0XHRcdF0sXHJcblx0XHRcdHNvcnRJbmRleDogMCxcclxuXHRcdFx0bG9hZGluZ1Nob3c6IHRydWUsXHJcblx0XHRcdHBhZ2U6IDEsXHJcblx0XHRcdHRvdGFsOiBudWxsLFxyXG5cdFx0XHRjYXRlZ29yeV9pZDogJycsXHJcblx0XHRcdGlzX2ZpbmlzaDogJycsXHJcblx0XHRcdGlzX3ZpcDogJycsXHJcblx0XHRcdGhpdHM6ICcnLFxyXG5cdFx0XHR0aW1lOiAnZGVzYydcblx0XHR9XG5cdH0sXHJcblx0b25Mb2FkKG9wdGlvbikge1xyXG5cdFx0dGhpcy5jaGFubmVsID0gb3B0aW9uLmNoYW5uZWxcclxuXHRcdHRoaXMuX2luaXRDbGFzc2lmeURhdGEoKVxyXG5cdFx0dGhpcy5faW5pdERhdGEoKVxyXG5cdH0sXHJcblx0b25SZWFkeSgpIHtcclxuXHRcdFxyXG5cdH0sXHJcblx0b25SZWFjaEJvdHRvbSgpIHtcclxuXHRcdHRoaXMubG9hZE1vcmVMaXN0KClcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGFzeW5jIF9pbml0Q2xhc3NpZnlEYXRhKCkge1xyXG5cdFx0ICBsZXQgcGFyYSA9IHtcclxuXHRcdCAgICBjaGFubmVsOiB0aGlzLmNoYW5uZWxcclxuXHRcdCAgfVxyXG5cdFx0ICBsZXQgcmVzID0gYXdhaXQgdGhpcy4kYXBpLnN0b3JlLkdldEJvb2tDYXRlZ29yeShwYXJhKVxyXG5cdFx0ICBpZiAocmVzLmNvZGUgPT09IDIwMCkge1xyXG5cdFx0ICAgIHRoaXMuY2xhc3NpZnlMaXN0ID0gcmVzLmRhdGFcclxuXHRcdCAgICB0aGlzLmNsYXNzaWZ5TGlzdC51bnNoaWZ0KHtcclxuXHRcdCAgICAgIGlkOiAnJyxcclxuXHRcdCAgICAgIG5hbWU6ICflhajpg6gnXHJcblx0XHQgICAgfSlcclxuXHRcdCAgfSBcclxuXHRcdH0sXHJcblx0XHRhc3luYyBfaW5pdERhdGEoKSB7XHJcblx0XHQgIGxldCBwYXJhID0ge1xyXG5cdFx0ICAgIGNoYW5uZWw6IHRoaXMuY2hhbm5lbCxcclxuXHRcdCAgICBjYXRlZ29yeV9pZDogdGhpcy5jYXRlZ29yeV9pZCxcclxuXHRcdCAgICBpc19maW5pc2g6IHRoaXMuaXNfZmluaXNoLFxyXG5cdFx0ICAgIGlzX3ZpcDogdGhpcy5pc192aXAsXHJcblx0XHQgICAgaGl0czogdGhpcy5oaXRzLFxyXG5cdFx0ICAgIHRpbWU6IHRoaXMudGltZSxcclxuXHRcdCAgICBwYWdlOiB0aGlzLnBhZ2VcclxuXHRcdCAgfVxyXG5cdFx0ICBsZXQgcmVzID0gYXdhaXQgdGhpcy4kYXBpLnN0b3JlLkluZGV4KHBhcmEpXHJcblx0XHQgIGlmIChyZXMuY29kZSA9PT0gMjAwKSB7XHJcblx0XHQgICAgbGV0IGRhdGEgPSByZXMuZGF0YVxyXG5cdFx0ICAgIGxldCBleHRyYSA9IHJlcy5leHRyYVxyXG5cdFx0ICAgIGlmIChleHRyYS5jb3VudCA8IGV4dHJhLnJvd3MpIHtcclxuXHRcdCAgICAgIHRoaXMubG9hZGluZ1Nob3cgPSBmYWxzZVxyXG5cdFx0ICAgIH1cclxuXHRcdCAgICB0aGlzLnRvdGFsID0gZXh0cmEuY291bnRcclxuXHRcdCAgICB0aGlzLmJvb2tsaXN0ID0gdGhpcy5ib29rbGlzdC5jb25jYXQoZGF0YSlcclxuXHRcdCAgfSBlbHNlIHtcclxuXHRcdCAgICB0aGlzLmxvYWRpbmdTaG93ID0gZmFsc2VcclxuXHRcdCAgfVxyXG5cdFx0fSxcclxuXHRcdGNsYXNzSXRlbShpdGVtLCBpbmRleCwgZmxhZykge1xyXG5cdFx0ICBpZiAoZmxhZyA9PT0gMSkge1xyXG5cdFx0ICAgIHRoaXMuY2xhc3NJbmRleCA9IGluZGV4XHJcblx0XHQgICAgdGhpcy5jYXRlZ29yeV9pZCA9IGl0ZW0uaWRcclxuXHRcdCAgfSBlbHNlIGlmIChmbGFnID09PSAyKSB7XHJcblx0XHQgICAgdGhpcy5wcm9ncmVzc0luZGV4ID0gaW5kZXhcclxuXHRcdCAgICB0aGlzLmlzX2ZpbmlzaCA9IGl0ZW0uaWRcclxuXHRcdCAgfSBlbHNlIGlmIChmbGFnID09PSAzKSB7XHJcblx0XHQgICAgdGhpcy5hdHRySW5kZXggPSBpbmRleFxyXG5cdFx0ICAgIHRoaXMuaXNfdmlwID0gaXRlbS5pZFxyXG5cdFx0ICB9IGVsc2UgaWYgKGZsYWcgPT09IDQpIHtcclxuXHRcdCAgICB0aGlzLnNvcnRJbmRleCA9IGluZGV4XHJcblx0XHQgICAgaWYgKGl0ZW0uaWQgPT09ICduZXcnKSB7XHJcblx0XHQgICAgICB0aGlzLnRpbWUgPSAnZGVzYydcclxuXHRcdCAgICAgIHRoaXMuaGl0cyA9ICcnXHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgIHRoaXMudGltZSA9ICcnXHJcblx0XHQgICAgICB0aGlzLmhpdHMgPSAnZGVzYydcclxuXHRcdCAgICB9XHJcblx0XHQgIH1cclxuXHRcdCAgdGhpcy5ib29rbGlzdCA9IFtdXHJcblx0XHQgIHRoaXMucGFnZSA9IDFcclxuXHRcdCAgdGhpcy50b3RhbCA9IG51bGxcclxuXHRcdCAgdGhpcy5sb2FkaW5nU2hvdyA9IHRydWVcclxuXHRcdCAgdGhpcy5faW5pdERhdGEoKVxyXG5cdFx0fSxcclxuXHRcdGdvdG9EZXRhaWwoaWQpIHtcclxuXHRcdCAgLy8gcm91dGVyLnB1c2goe1xyXG5cdFx0ICAvLyAgIHVyaTogJy9wYWdlcy9kZXRhaWwnLFxyXG5cdFx0ICAvLyAgIHBhcmFtczoge1xyXG5cdFx0ICAvLyAgICAgYm9va0lkOiBpZCxcclxuXHRcdCAgLy8gICAgIGNsaWNrVHlwZTogM1xyXG5cdFx0ICAvLyAgIH1cclxuXHRcdCAgLy8gfSlcclxuXHRcdH0sXHJcblx0XHRsb2FkTW9yZUxpc3QoKSB7XHJcblx0XHQgIGxldCBsZW5ndGggPSB0aGlzLmJvb2tsaXN0Lmxlbmd0aFxyXG5cdFx0ICBpZiAobGVuZ3RoID49IHRoaXMudG90YWwpIHtcclxuXHRcdCAgICB0aGlzLmxvYWRpbmdTaG93ID0gZmFsc2VcclxuXHRcdCAgICByZXR1cm5cclxuXHRcdCAgfSBlbHNlIHtcclxuXHRcdCAgICB0aGlzLnBhZ2UrK1xyXG5cdFx0ICAgIHRoaXMuX2luaXREYXRhKClcclxuXHRcdCAgfVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cclxuQGltcG9ydCAnLi4vLi4vY29tbW9uL2xlc3MvY29uc3QnO1xyXG5AaW1wb3J0ICcuLi8uLi9jb21tb24vbGVzcy9taXhpbic7XHJcblxyXG5cdC5ib29rLXN0b3Jle1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHQuc3RvcmUtaGVhZHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdCAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdCAgLy8gd2lkdGg6IDEwMCU7XHJcblx0XHQgIHBhZGRpbmc6IDAgMzBycHg7XHJcblx0XHQgIG1hcmdpbi1ib3R0b206IDIwcnB4O1xyXG5cdFx0ICAuaGVhZC1zdHlsZXtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ICAgIG1hcmdpbi10b3A6IDMwcnB4O1xyXG5cdFx0ICAgIC5pY29ue1xyXG5cdFx0ICAgICAgd2lkdGg6IDM5cnB4O1xyXG5cdFx0ICAgICAgaGVpZ2h0OiAzOXJweDtcclxuXHRcdCAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHQgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHQgICAgICAmLWZlbmxlaXtcclxuXHRcdCAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+QC9zdGF0aWMvaWNvbnMvcy1mZW5sZWkucG5nJyk7XHJcblx0XHQgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzdycHggMzVycHg7XHJcblx0XHQgICAgICB9XHJcblx0XHQgICAgICAmLWppbmR1e1xyXG5cdFx0ICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ35AL3N0YXRpYy9pY29ucy9zLWppbmR1LnBuZycpO1xyXG5cdFx0ICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDM4cnB4IDM4cnB4O1xyXG5cdFx0ICAgICAgfVxyXG5cdFx0ICAgICAgJi1zaHV4aW5ne1xyXG5cdFx0ICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ35AL3N0YXRpYy9pY29ucy9zLXNodXhpbmcucG5nJyk7XHJcblx0XHQgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzlycHggMzdycHg7XHJcblx0XHQgICAgICB9XHJcblx0XHQgICAgICAmLXBhaXh1e1xyXG5cdFx0ICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ35AL3N0YXRpYy9pY29ucy9zLXBhaXh1LnBuZycpO1xyXG5cdFx0ICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcnB4IDM5cnB4O1xyXG5cdFx0ICAgICAgfVxyXG5cdFx0ICAgIH1cclxuXHRcdCAgICAuaGVhZC1yaWdodHtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0ICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdCAgICAgIG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHRcdCAgICAgID52aWV3e1xyXG5cdFx0ICAgICAgICBmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0ICAgICAgICBjb2xvcjogIzMzMztcclxuXHRcdCAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHQgICAgICB9XHJcblx0XHQgICAgICA+dGV4dHtcclxuXHRcdCAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHJweDtcclxuXHRcdCAgICAgICAgY29sb3I6ICMzMzM7XHJcblx0XHQgICAgICAgIGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHQgICAgICB9XHJcblx0XHQgICAgICAuYWN0aXZlLXRleHR7XHJcblx0XHQgICAgICAgIGNvbG9yOiBAY29sb3ItYmFja2dyb3VuZDtcclxuXHRcdCAgICAgIH1cclxuXHRcdCAgICB9XHJcblx0XHQgIH1cclxuXHRcdH1cclxuXHRcdC5saXN0LW1haW57XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQuc3RvcmUtaXRlbXtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQgIC8vIHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgIHBhZGRpbmc6IDIycnB4IDA7XHJcblx0XHRcdCAgbWFyZ2luOiAwIDMwcnB4O1xyXG5cdFx0XHQgIGJvcmRlci10b3A6IDFycHggc29saWQgI0VERUNFQTtcclxuXHRcdFx0ICBpbWFnZXtcclxuXHRcdFx0ICAgIHdpZHRoOiAxNDVycHg7XHJcblx0XHRcdCAgICBoZWlnaHQ6IDIwMXJweDtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IEBjb2xvci1pbWc7XHJcblx0XHRcdCAgfVxyXG5cdFx0XHQgIC5pdGVtLXJpZ2h0e1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgIHdpZHRoOiA3NSU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDIwMXJweDtcclxuXHRcdFx0ICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdCAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdFx0ICAgID50ZXh0e1xyXG5cdFx0XHQgICAgICBmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0XHQgICAgICAubm8td3JhcCgpO1xyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHQgICAgLnJpZ2h0LXRpdGxle1xyXG5cdFx0XHQgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0ICAgICAgY29sb3I6ICMzMzM7XHJcblx0XHRcdCAgICB9XHJcblx0XHRcdCAgICAucmlnaHQtYm90dG9te1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQgICAgICBwYWRkaW5nLWJvdHRvbTogM3JweDtcclxuXHRcdFx0ICAgICAgdGV4dHtcclxuXHRcdFx0ICAgICAgICBwYWRkaW5nOiAzcnB4IDEwcnB4O1xyXG5cdFx0XHQgICAgICAgIG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0XHRcdCAgICAgICAgYm9yZGVyOiAxcnB4IHNvbGlkICMzYmNiNzg7XHJcblx0XHRcdCAgICAgICAgY29sb3I6ICMzYmNiNzg7XHJcblx0XHRcdCAgICAgICAgYm9yZGVyLXJhZGl1czogNXJweDtcclxuXHRcdFx0ICAgICAgICBmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIC5ibHVle1xyXG5cdFx0XHQgICAgICAgIGNvbG9yOiAjMDBBMUU4O1xyXG5cdFx0XHQgICAgICAgIGJvcmRlci1jb2xvcjogIzAwQTFFODtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICAub3Jhbmdle1xyXG5cdFx0XHQgICAgICAgIGNvbG9yOiAjRkY4RjAwO1xyXG5cdFx0XHQgICAgICAgIGJvcmRlci1jb2xvcjogI0ZGOEYwMDtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHQgIH1cclxuXHRcdFx0fVxyXG5cdFx0XHQubW9yZXtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQgIHBhZGRpbmc6IDEwcnB4IDA7XHJcblx0XHRcdCAgPnRleHR7XHJcblx0XHRcdCAgICBmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0XHQgIH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9ib29rc3RvcmUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWEwMWFlNzgmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9ib29rc3RvcmUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWEwMWFlNzgmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1OTkyODkxMzk1NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==