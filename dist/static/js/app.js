global.webpackJsonp([7],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_steps_wxss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_steps_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_steps_wxss__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/shop/main', 'pages/person/main', 'pages/phang/main', 'pages/rules/main', 'pages/login/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "selectedColor": "#f56f61",
      "backgroundColor": "#fff",
      "borderStyle": "white",
      "list": [{
        "width": "10rpx",
        "height": "10rpx",
        "pagePath": "pages/index/main",
        "iconPath": "./static/assets/首页灰.png",
        "selectedIconPath": "./static/assets/首页.png",
        "text": "首页"
      }, {
        "pagePath": "pages/shop/main",
        "iconPath": "./static/assets/购物车灰.png",
        "selectedIconPath": "./static/assets/购物车红.png",
        "text": "商城"
      }, {
        "pagePath": "pages/phang/main",
        "iconPath": "./static/assets/排行榜灰.png",
        "selectedIconPath": "./static/assets/排行榜红.png",
        "text": "排行榜"
      }, {
        "pagePath": "pages/person/main",
        "iconPath": "./static/assets/个人中心灰.png",
        "selectedIconPath": "./static/assets/个人中心.png",
        "text": "个人中心"
      }]
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(9);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(7)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5274e0c", Component.options)
  } else {
    hotAPI.reload("data-v-a5274e0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mta_wechat_analysis__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mta_wechat_analysis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mta_wechat_analysis__);


/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      phone: false,
      userInfo: false
    };
  },
  created() {
    wx.getSystemInfo({ success: res => {
        let modelmes = res.model.search('iPhone X');
        if (modelmes === 0) {
          var that = this;
          that.phone = true;
        }
      }
    });
  }
});

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[5]);
//# sourceMappingURL=app.js.map