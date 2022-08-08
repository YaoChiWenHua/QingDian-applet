(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/phone/phone"],{

/***/ 151:
/*!***********************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/main.js?{"page":"pages%2Fphone%2Fphone"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _phone = _interopRequireDefault(__webpack_require__(/*! ./pages/phone/phone.vue */ 152));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_phone.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 152:
/*!****************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/phone/phone.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phone_vue_vue_type_template_id_68ec6724_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.vue?vue&type=template&id=68ec6724&scoped=true& */ 153);
/* harmony import */ var _phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone.vue?vue&type=script&lang=js& */ 155);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _phone_vue_vue_type_style_index_0_id_68ec6724_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone.vue?vue&type=style&index=0&id=68ec6724&lang=less&scoped=true& */ 157);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _phone_vue_vue_type_template_id_68ec6724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _phone_vue_vue_type_template_id_68ec6724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "68ec6724",
  null,
  false,
  _phone_vue_vue_type_template_id_68ec6724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/phone/phone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 153:
/*!***********************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/phone/phone.vue?vue&type=template&id=68ec6724&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_template_id_68ec6724_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./phone.vue?vue&type=template&id=68ec6724&scoped=true& */ 154);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_template_id_68ec6724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_template_id_68ec6724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_template_id_68ec6724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_template_id_68ec6724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 154:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/phone/phone.vue?vue&type=template&id=68ec6724&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 155:
/*!*****************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/phone/phone.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./phone.vue?vue&type=script&lang=js& */ 156);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 156:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/phone/phone.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 17));

























































var _vuex = __webpack_require__(/*! vuex */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =

{
  data: function data() {
    return {
      phone: '',
      code: '',
      codeId: '',
      seconds: 60,
      countDownShow: true,
      authorShow: true,
      checked: true };

  },
  onLoad: function onLoad() {

  },
  onReady: function onReady() {

  },
  computed: _objectSpread({},
  (0, _vuex.mapGetters)([
  'userId'])),


  methods: {
    authorAgree: function authorAgree() {
      this.authorShow = false;
    },
    handleCheck: function handleCheck() {
      this.checked = !this.checked;
    },
    handlePhone: function handlePhone(e) {
      this.phone = e.target.value;
    },
    handleCode: function handleCode(e) {
      this.code = e.target.value;
    },
    submitBtn: function submitBtn() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var para, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                _this.checkPhoneNum()) {_context.next = 4;break;}return _context.abrupt("return");case 4:if (!(

                _this.code.length < 4)) {_context.next = 9;break;}
                uni.showToast({
                  icon: 'none',
                  title: '验证码长度为4位' });return _context.abrupt("return");case 9:if (


                _this.checked) {_context.next = 14;break;}
                uni.showToast({
                  icon: 'none',
                  title: '请勾选用户和隐私协议' });return _context.abrupt("return");case 14:



                para = {
                  user_id: _this.userId,
                  mobile: _this.phone,
                  code: _this.code,
                  codeId: _this.codeId,
                  openFrom: 'toutiao' };

                // uni.showLoading({
                //   title: '正在绑定...'
                // })
                _context.next = 17;return _this.$api.login.BindPhone(para);case 17:res = _context.sent;
                // uni.hideLoading()
                if (res.code === 200) {
                  uni.showToast({
                    title: '绑定成功！' });

                  // this._inintUserInfo()
                  // 跳转
                  uni.switchTab({
                    url: '/pages/user/user' });

                } else {
                  uni.showToast({
                    icon: 'none',
                    title: res.msg });

                }case 19:case "end":return _context.stop();}}}, _callee);}))();

    },
    queryCode: function queryCode() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var para, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!

                _this2.checkPhoneNum()) {_context2.next = 6;break;}
                para = {
                  mobile: _this2.phone };

                // uni.showLoading({
                //   title: '正在发送...'
                // })
                _context2.next = 4;return _this2.$api.login.GetBindPhoneCode(para);case 4:res = _context2.sent;
                // uni.hideLoading()
                if (res.code === 200) {
                  _this2.countDownShow = false;
                  _this2.countDown();
                  uni.showToast({
                    title: '短信验证码已发送到手机' });

                  _this2.codeId = res.data.codeId;
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: res.msg });

                }case 6:case "end":return _context2.stop();}}}, _callee2);}))();

    },
    // 倒计时
    countDown: function countDown() {var _this3 = this;
      if (this.seconds == 0) {
        this.countDownShow = true;
        this.seconds = 60;
        return;
      } else {
        this.countDownShow = false;
        this.seconds--;
      }
      setTimeout(function () {
        _this3.countDown();
      }, 1000);
    },
    // 校验手机号
    checkPhoneNum: function checkPhoneNum() {
      if (this.phone === '') {
        uni.showToast({
          icon: 'none',
          title: '手机号码不能为空' });

        return false;
      } else if (!/^1(3|4|5|7|8)\d{9}$/.test(this.phone)) {
        uni.showToast({
          icon: 'none',
          title: '请输入有效的手机号码' });

        return false;
      } else {
        return true;
      }
    },
    goBack: function goBack() {
      uni.navigateBack();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 157:
/*!**************************************************************************************************************************************!*\
  !*** D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/phone/phone.vue?vue&type=style&index=0&id=68ec6724&lang=less&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_style_index_0_id_68ec6724_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./phone.vue?vue&type=style&index=0&id=68ec6724&lang=less&scoped=true& */ 158);
/* harmony import */ var _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_style_index_0_id_68ec6724_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_style_index_0_id_68ec6724_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_style_index_0_id_68ec6724_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_style_index_0_id_68ec6724_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tool_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phone_vue_vue_type_style_index_0_id_68ec6724_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 158:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/YaoChi/Code/新快手小程序/小程序/wxdemo-qingdian-read/pages/phone/phone.vue?vue&type=style&index=0&id=68ec6724&lang=less&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[151,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9waG9uZS9waG9uZS52dWU/NjYzNSIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9waG9uZS9waG9uZS52dWU/NzNjMiIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9waG9uZS9waG9uZS52dWU/OWVlOCIsIndlYnBhY2s6Ly8vRDovWWFvQ2hpL0NvZGUv5paw5b+r5omL5bCP56iL5bqPL+Wwj+eoi+W6jy93eGRlbW8tcWluZ2RpYW4tcmVhZC9wYWdlcy9waG9uZS9waG9uZS52dWU/ZWQ2NiIsInVuaS1hcHA6Ly8vcGFnZXMvcGhvbmUvcGhvbmUudnVlIiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL3Bob25lL3Bob25lLnZ1ZT8wNzQxIiwid2VicGFjazovLy9EOi9ZYW9DaGkvQ29kZS/mlrDlv6vmiYvlsI/nqIvluo8v5bCP56iL5bqPL3d4ZGVtby1xaW5nZGlhbi1yZWFkL3BhZ2VzL3Bob25lL3Bob25lLnZ1ZT81MDdiIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3NEQUFBOzs7QUFHQTtBQUNBLDZGLDhGQUhBO0FBQ0FBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QyxDQUdBQyxVQUFVLENBQUNDLGNBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThIO0FBQzlIO0FBQ3lEO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNpTDtBQUNqTCxnQkFBZ0Isa0xBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQXdxQixDQUFnQix3b0JBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMEQ1ckIsZ0Q7O0FBRUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxlQURBO0FBRUEsY0FGQTtBQUdBLGdCQUhBO0FBSUEsaUJBSkE7QUFLQSx5QkFMQTtBQU1BLHNCQU5BO0FBT0EsbUJBUEE7O0FBU0EsR0FYQTtBQVlBLFFBWkEsb0JBWUE7O0FBRUEsR0FkQTtBQWVBLFNBZkEscUJBZUE7O0FBRUEsR0FqQkE7QUFrQkE7QUFDQTtBQUNBLFVBREEsRUFEQSxDQWxCQTs7O0FBdUJBO0FBQ0EsZUFEQSx5QkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGVBSkEseUJBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxlQVBBLHVCQU9BLENBUEEsRUFPQTtBQUNBO0FBQ0EsS0FUQTtBQVVBLGNBVkEsc0JBVUEsQ0FWQSxFQVVBO0FBQ0E7QUFDQSxLQVpBO0FBYUEsYUFiQSx1QkFhQTtBQUNBLHFDQURBOztBQUdBLHFDQUhBO0FBSUE7QUFDQSw4QkFEQTtBQUVBLG1DQUZBLElBSkE7OztBQVNBLDZCQVRBO0FBVUE7QUFDQSw4QkFEQTtBQUVBLHFDQUZBLElBVkE7Ozs7QUFnQkEsb0JBaEJBLEdBZ0JBO0FBQ0EsdUNBREE7QUFFQSxxQ0FGQTtBQUdBLGtDQUhBO0FBSUEsc0NBSkE7QUFLQSxxQ0FMQSxFQWhCQTs7QUF1QkE7QUFDQTtBQUNBO0FBekJBLDBDQTBCQSxnQ0ExQkEsU0EwQkEsR0ExQkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0Esa0NBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsMkNBREE7O0FBR0EsaUJBVEEsTUFTQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxrQ0FGQTs7QUFJQSxpQkExQ0E7O0FBNENBLEtBekRBO0FBMERBLGFBMURBLHVCQTBEQTs7QUFFQSxzQ0FGQTtBQUdBLG9CQUhBLEdBR0E7QUFDQSxzQ0FEQSxFQUhBOztBQU1BO0FBQ0E7QUFDQTtBQVJBLDBDQVNBLHdDQVRBLFFBU0EsR0FUQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FEQTs7QUFHQTtBQUNBLGlCQVBBLE1BT0E7QUFDQTtBQUNBLGdDQURBO0FBRUEsa0NBRkE7O0FBSUEsaUJBdkJBOztBQXlCQSxLQW5GQTtBQW9GQTtBQUNBLGFBckZBLHVCQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxJQUZBO0FBR0EsS0FqR0E7QUFrR0E7QUFDQSxpQkFuR0EsMkJBbUdBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsMkJBRkE7O0FBSUE7QUFDQSxPQU5BLE1BTUE7QUFDQTtBQUNBLHNCQURBO0FBRUEsNkJBRkE7O0FBSUE7QUFDQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0EsS0FuSEE7QUFvSEEsVUFwSEEsb0JBb0hBO0FBQ0E7QUFDQSxLQXRIQSxFQXZCQSxFOzs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBO0FBQW13QyxDQUFnQixvb0NBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F2eEM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9waG9uZS9waG9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbi8vIEB0cy1pZ25vcmVcbnd4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvcGhvbmUvcGhvbmUudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcGhvbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZWM2NzI0JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcGhvbmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9waG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcGhvbmUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjhlYzY3MjQmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2OGVjNjcyNFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9waG9uZS9waG9uZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3Bob25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OGVjNjcyNCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9waG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3Bob25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJsb2dpblwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJsb2dpbi1iZ1wiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgQGNsaWNrPVwiZ29CYWNrXCI+JiN4ZTY1Yjs8L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImxvZ2luLW1haW5cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dC1ib3hcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uLXBob25lXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ljb25zL2ljb24tcGhvbmUucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdGNsYXNzPVwicGhvbmUtaW5wdXRcIiBcclxuXHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLloavlhpnpnIDopoHnu5HlrprnmoTmiYvmnLrlj7fnoIFcIlxyXG5cdFx0XHRcdFx0bWF4bGVuZ3RoPVwiMTFcIlxyXG5cdFx0XHRcdFx0OnZhbHVlPVwicGhvbmVcIlxyXG5cdFx0XHRcdFx0QGlucHV0PVwiaGFuZGxlUGhvbmVcIj5cclxuXHRcdFx0XHQ8L2lucHV0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXQtYm94XCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaWNvbi15em1cIiBzcmM9XCIuLi8uLi9zdGF0aWMvaWNvbnMvaWNvbi15em0ucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdGlkPVwicGhvbmUtaW5wdXRcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJjb2RlLWlucHV0XCIgXHJcblx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi5aGr5YaZ6aqM6K+B56CBXCJcclxuXHRcdFx0XHRcdG1heGxlbmd0aD1cIjRcIlxyXG5cdFx0XHRcdFx0OnZhbHVlPVwiY29kZVwiXHJcblx0XHRcdFx0XHRAaW5wdXQ9XCJoYW5kbGVDb2RlXCI+XHJcblx0XHRcdFx0PC9pbnB1dD5cclxuXHRcdFx0XHQ8dGV4dCB2LXNob3c9XCJjb3VudERvd25TaG93XCIgY2xhc3M9XCJxdWVyeS1jb2RlIGFjdGl2ZS1jb2RlXCIgQGNsaWNrPVwicXVlcnlDb2RlXCI+6I635Y+W6aqM6K+B56CBPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IHYtc2hvdz1cIiFjb3VudERvd25TaG93XCIgY2xhc3M9XCJxdWVyeS1jb2RlXCI+e3tzZWNvbmRzfX1z5YaN5qyh6I635Y+WPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYXV0aG9yLXJhZGlvXCI+XHJcblx0XHRcdFx0PHJhZGlvIGNvbG9yPVwiI0ZGNDA0MlwiIDpjaGVja2VkPVwiY2hlY2tlZFwiIEB0YXA9XCJoYW5kbGVDaGVja1wiLz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImF1dGhvci10ZXh0XCI+XHJcblx0XHRcdFx0XHTnmbvlvZXljbPop4bkuLrlkIzmhI88bmF2aWdhdG9yIGNsYXNzPVwiY29sb3ItcmVkXCIgdXJsPVwiL3BhZ2VzL2FncmVlbWVudC9hZ3JlZW1lbnRcIj7jgIrpnZLngrnmnI3liqHljY/orq7jgIs8L25hdmlnYXRvcj7lkow8bmF2aWdhdG9yIGNsYXNzPVwiY29sb3ItcmVkXCIgdXJsPVwiL3BhZ2VzL3BvbGljeS9wb2xpY3lcIj7jgIrpnZLngrnpmpDnp4HmlL/nrZbjgIs8L25hdmlnYXRvcj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJhdXRoLWxvZ2luXCIgQGNsaWNrPVwic3VibWl0QnRuXCI+57uR5a6a5omL5py65Y+3PC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYXV0aC10ZXh0XCI+5pys5pyN5Yqh55Sx55G25rGg5paH5YyW5o+Q5L6b5oqA5pyv5pSv5oyBPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImF1dGhvci1wb3B1cFwiIHYtc2hvdz1cImF1dGhvclNob3dcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhdXRob3ItbWFpblwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXV0aG9yLXRpdGxlXCI+6ZqQ56eB5pS/562W5LiO5pyN5Yqh5Y2P6K6uPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXV0aG9yLXRleHRcIj5cclxuXHRcdFx0XHRcdOaEn+iwouS9v+eUqOmdkueCuemYheivu++8geS4uuS6huW4ruWKqeaCqOWuieWFqOS9v+eUqOS6p+WTgeWSjOacjeWKoe+8jOWcqOaCqOWQjOaEj+W5tuaOiOadg+eahOWfuuehgOS4iu+8jOaIkeS7rOWPr+iDveS8muaUtumbhuaCqOeahOiuvuWkh+S/oeaBr+OAguivt+aCqOWcqOS9v+eUqOWJjeWKoeW/heS7lOe7humYheivu+W5tumAj+W9u+eQhuinozxuYXZpZ2F0b3IgdXJsPVwiL3BhZ2VzL2FncmVlbWVudC9hZ3JlZW1lbnRcIiBjbGFzcz1cImNvbG9yLXJlZFwiPuOAiuacjeWKoeWNj+iuruOAizwvbmF2aWdhdG9yPuWSjDxuYXZpZ2F0b3IgdXJsPVwiL3BhZ2VzL3BvbGljeS9wb2xpY3lcIiBjbGFzcz1cImNvbG9yLXJlZFwiPuOAiumakOengeaUv+etluOAizwvbmF2aWdhdG9yPuOAguWmguaCqOWQjOaEj+atpOWNj+iuruWSjOaUv+etlu+8jOivt+eCueWHu+KAnOWQjOaEj+KAneW5tuW8gOWni+S9v+eUqOaIkeS7rOeahOS6p+WTgeWSjOacjeWKoe+8jOaIkeS7rOWwveWKm+S/neaKpOaCqOeahOS4quS6uuS/oeaBr+WuieWFqOOAglxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImF1dGhvci1idG5zXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNhbmNlbC1idG5cIiBAY2xpY2s9XCJnb0JhY2tcIj7kuI3lkIzmhI88L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJhdXRob3JBZ3JlZVwiPuWQjOaEjzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5pbXBvcnQge21hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnXHJcblx0XG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cGhvbmU6ICcnLFxyXG5cdFx0XHRjb2RlOiAnJyxcclxuXHRcdFx0Y29kZUlkOiAnJyxcclxuXHRcdFx0c2Vjb25kczogNjAsXHJcblx0XHRcdGNvdW50RG93blNob3c6IHRydWUsXHJcblx0XHRcdGF1dGhvclNob3c6IHRydWUsXHJcblx0XHRcdGNoZWNrZWQ6IHRydWVcblx0XHR9XG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0XHJcblx0fSxcclxuXHRvblJlYWR5KCkge1xyXG5cdFx0XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Li4ubWFwR2V0dGVycyhbXHJcblx0XHRcdCd1c2VySWQnXHJcblx0XHRdKVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0YXV0aG9yQWdyZWUoKSB7XHJcblx0XHRcdHRoaXMuYXV0aG9yU2hvdyA9IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0aGFuZGxlQ2hlY2soKSB7XHJcblx0XHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWRcclxuXHRcdH0sXHJcblx0XHRoYW5kbGVQaG9uZShlKSB7XHJcblx0XHRcdHRoaXMucGhvbmUgPSBlLnRhcmdldC52YWx1ZVxyXG5cdFx0fSxcclxuXHRcdGhhbmRsZUNvZGUoZSkge1xyXG5cdFx0XHR0aGlzLmNvZGUgPSBlLnRhcmdldC52YWx1ZVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIHN1Ym1pdEJ0bigpIHtcclxuXHRcdFx0aWYgKCF0aGlzLmNoZWNrUGhvbmVOdW0oKSkge1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuY29kZS5sZW5ndGggPCA0KXtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn6aqM6K+B56CB6ZW/5bqm5Li6NOS9jSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9IGVsc2UgaWYgKCF0aGlzLmNoZWNrZWQpIHtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAn6K+35Yu+6YCJ55So5oi35ZKM6ZqQ56eB5Y2P6K6uJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGV0IHBhcmEgPSB7XHJcblx0XHRcdFx0XHR1c2VyX2lkOiB0aGlzLnVzZXJJZCxcclxuXHRcdFx0XHRcdG1vYmlsZTogdGhpcy5waG9uZSxcclxuXHRcdFx0XHRcdGNvZGU6IHRoaXMuY29kZSxcclxuXHRcdFx0XHRcdGNvZGVJZDogdGhpcy5jb2RlSWQsXHJcblx0XHRcdFx0XHRvcGVuRnJvbTogJ3RvdXRpYW8nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0Ly8gICB0aXRsZTogJ+ato+WcqOe7keWumi4uLidcclxuXHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdGxldCByZXMgPSBhd2FpdCB0aGlzLiRhcGkubG9naW4uQmluZFBob25lKHBhcmEpXHJcblx0XHRcdFx0Ly8gdW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDIwMCkge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn57uR5a6a5oiQ5Yqf77yBJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC8vIHRoaXMuX2luaW50VXNlckluZm8oKVxyXG5cdFx0XHRcdFx0Ly8g6Lez6L2sXHJcblx0XHRcdFx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3VzZXIvdXNlcidcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiByZXMubXNnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIHF1ZXJ5Q29kZSgpIHtcclxuXHRcdFx0Ly8gdGhpcy4kZWxlbWVudCgncGhvbmUtaW5wdXQnKS5mb2N1cyh7Zm9jdXM6ZmFsc2V9KVxyXG5cdFx0XHRpZiAodGhpcy5jaGVja1Bob25lTnVtKCkpIHtcclxuXHRcdFx0XHRsZXQgcGFyYSA9IHtcclxuXHRcdFx0XHRcdG1vYmlsZTogdGhpcy5waG9uZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyB1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdC8vICAgdGl0bGU6ICfmraPlnKjlj5HpgIEuLi4nXHJcblx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHRsZXQgcmVzID0gYXdhaXQgdGhpcy4kYXBpLmxvZ2luLkdldEJpbmRQaG9uZUNvZGUocGFyYSlcclxuXHRcdFx0XHQvLyB1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMjAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNvdW50RG93blNob3cgPSBmYWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5jb3VudERvd24oKVxyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn55+t5L+h6aqM6K+B56CB5bey5Y+R6YCB5Yiw5omL5py6J1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHRoaXMuY29kZUlkID0gcmVzLmRhdGEuY29kZUlkXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiByZXMubXNnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIOWAkuiuoeaXtlxyXG5cdFx0Y291bnREb3duKCkge1xyXG5cdFx0XHRpZiAodGhpcy5zZWNvbmRzID09IDApIHtcclxuXHRcdFx0XHR0aGlzLmNvdW50RG93blNob3cgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy5zZWNvbmRzID0gNjBcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNvdW50RG93blNob3cgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMuc2Vjb25kcy0tXHJcblx0XHRcdH1cclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5jb3VudERvd24oKVxyXG5cdFx0XHR9LCAxMDAwKVxyXG5cdFx0fSxcclxuXHRcdC8vIOagoemqjOaJi+acuuWPt1xyXG5cdFx0Y2hlY2tQaG9uZU51bSgpIHtcclxuXHRcdFx0aWYgKHRoaXMucGhvbmUgPT09ICcnKSB7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+aJi+acuuWPt+eggeS4jeiDveS4uuepuidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0XHR9IGVsc2UgaWYoISgvXjEoM3w0fDV8N3w4KVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZSkpKSB7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+ivt+i+k+WFpeacieaViOeahOaJi+acuuWPt+eggSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRnb0JhY2soKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbkBpbXBvcnQgJy4uLy4uL2NvbW1vbi9sZXNzL2NvbnN0Lmxlc3MnO1xuXG4gIC5sb2dpbntcclxuXHRcdHdpZHRoOiAxMDAlO1xuICAgIC5sb2dpbi1iZ3tcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA1NzJycHg7XG4gICAgICBwYWRkaW5nOiAzMHJweCAwIDAgMzBycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJ35AL3N0YXRpYy9sb2dpbi1iZy5wbmcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdFx0XHQuaWNvbmZvbnR7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogNTVycHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiA1NHJweDtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0fVxuICAgIH1cbiAgICAubG9naW4tbWFpbntcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLmlucHV0LWJveHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBoZWlnaHQ6IDEyN3JweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnJweCBzb2xpZCAjRjJGMUYwO1xyXG5cdFx0XHRcdC8vIGZvbnQtc2l6ZTogNDJycHg7XG4gICAgICAgIC5pY29uLXBob25le1xuICAgICAgICAgIHdpZHRoOiAyN3JweDtcbiAgICAgICAgICBoZWlnaHQ6IDQzcnB4O1xuICAgICAgICB9XG4gICAgICAgIC5pY29uLXl6bXtcbiAgICAgICAgICB3aWR0aDogMzFycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzOXJweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM2cnB4O1xyXG4gICAgICAgIH1cclxuXHRcdFx0XHQvLyAuaW5wdXQtcGxhY2Vob2xkZXJ7XHJcblx0XHRcdFx0Ly8gXHRmb250LXNpemU6IDQycnB4O1xyXG5cdFx0XHRcdC8vIH1cbiAgICAgICAgLnF1ZXJ5LWNvZGV7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXJweDtcbiAgICAgICAgICBjb2xvcjogQGNvbG9yLWJhY2tncm91bmQ7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFycHggc29saWQgI0UwREVEOTtcclxuXHRcdFx0XHRcdC8vIGZvbnQtc2l6ZTogMzJycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZS1jb2RlOmFjdGl2ZXtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hdXRob3ItcmFkaW97XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHJweDtcbiAgICAgICAgLmF1dGhvci10ZXh0e1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIC5hdXRoLXJ1bGV7XG4gICAgICAvLyAgIHdpZHRoOiA4MCU7XG4gICAgICAvLyAgIG1hcmdpbi10b3A6IDMwcnB4O1xuICAgICAgLy8gICB0ZXh0e1xuICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMjRycHg7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vICAgPnZpZXd7XG4gICAgICAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICAuaWNvbi1jaGVja3tcbiAgICAgIC8vICAgICB3aWR0aDogMjZycHg7XG4gICAgICAvLyAgICAgaGVpZ2h0OiAyNnJweDtcbiAgICAgIC8vICAgICBtYXJnaW4tcmlnaHQ6IDEwcnB4O1xuICAgICAgLy8gICAgIGJhY2tncm91bmQ6IHVybCgnfkAvc3RhdGljL2ljb25zL2xvZ2luLWNoZWNrLnBuZycpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICAgIC5zdWJtaXQtYnV0dG9ue1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHJweDtcbiAgICAgICAgLmF1dGgtbG9naW57XG4gICAgICAgICAgd2lkdGg6IDQ1MnJweDtcbiAgICAgICAgICBoZWlnaHQ6IDkwcnB4O1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDkwcnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDM0cnB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBjb2xvci1iYWNrZ3JvdW5kO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdXRoLWxvZ2luOmFjdGl2ZXtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cbiAgICAgICAgLmF1dGgtdGV4dHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzNXJweDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5hdXRob3ItcG9wdXB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XHJcblx0XHRcdHotaW5kZXg6IDk7XG4gICAgICAuYXV0aG9yLW1haW57XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIHBhZGRpbmc6IDMwcnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXJweDtcbiAgICAgICAgZm9udC1zaXplOiAzMnJweDtcclxuXHRcdFx0XHQvLyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAuYXV0aG9yLXRpdGxle1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMzZycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF1dGhvci10ZXh0e1xuICAgICAgICAgIHBhZGRpbmc6IDIwcnB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmF1dGhvci1idG5ze1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHR7XG4gICAgICAgICAgICB3aWR0aDogMTgwcnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQGNvbG9yLWJhY2tncm91bmQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FuY2VsLWJ0bntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XHJcblx0XHQuY29sb3ItcmVke1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHQgIGNvbG9yOiBAY29sb3ItYmFja2dyb3VuZFxyXG5cdFx0fVxuICB9XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vcGhvbmUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjhlYzY3MjQmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9waG9uZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02OGVjNjcyNCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjU5OTI4OTEzOTM1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L3Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9