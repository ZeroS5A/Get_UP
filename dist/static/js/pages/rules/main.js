global.webpackJsonp([3],{

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rules__ = __webpack_require__(49);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__rules__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '规则'
  }
});

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_rules_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_82aa8066_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_rules_vue__ = __webpack_require__(52);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(50)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_rules_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_82aa8066_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_rules_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\rules\\rules.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] rules.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-82aa8066", Component.options)
  } else {
    hotAPI.reload("data-v-82aa8066", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 50:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "board"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n       [打开方式]\n    ")]), _vm._v(" "), _c('ol', {
    staticClass: "ol"
  }, [_c('li', {
    staticClass: "li"
  }, [_vm._v("① 点击在菜单栏的 [起床]")]), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_vm._v("② 在后台回复 [起床]")]), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_vm._v("③ 在小程序中搜索 [起床争霸赛]")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "board"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n       [打卡时间]\n    ")]), _vm._v(" "), _c('ol', {
    staticClass: "ol"
  }, [_c('li', {
    staticClass: "li"
  }, [_vm._v("每天早上6:30-10:30")]), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_vm._v("在小程序首页点击 [签到] 进行打卡，即完成签到")]), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_vm._v("积分会按照北鼻签到的时间段来给，越早签到,积分越多哦~")])], 1), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
    staticClass: "board"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n       [连签规则]\n    ")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('ol', {
    staticClass: "ol"
  }, [_c('li', {
    staticClass: "li"
  }, [_vm._v("关于连续签到：连续签到 2 天及以上的北鼻，可获得连签加分，")]), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_vm._v("连续签到积分上线为5分！断签的北鼻只能重新开始啦~")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "board"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n       [关于签到失败]\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "ol"
  }, [_c('div', {
    staticClass: "li"
  }, [_vm._v("北鼻如遇签到失败，可以多尝试几次；")]), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_vm._v("若多次签到仍不成功，请在后台联系小北。")]), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_vm._v("为了帮助大家赶上新一天的早餐而不是新一天的午餐，起床争")]), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_vm._v("霸会一直开放给有需要的你们使用~")]), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_vm._v("每天按时认真签到的北鼻，除了收获满满的成就感，更重要是")]), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_vm._v("养成早起的好习惯。")]), _vm._v(" "), _c('li', {
    staticClass: "li"
  }, [_vm._v(" 希望大家能够坚持，小北与你们同在！")])], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "table"
  }, [_c('div', {
    staticClass: "thead"
  }, [_c('div', {
    staticClass: "th"
  }, [_vm._v("时间")]), _vm._v(" "), _c('div', {
    staticClass: "th"
  }, [_vm._v("积分")])]), _vm._v(" "), _c('div', {
    staticClass: "tbody"
  }, [_c('div', {
    staticClass: "td"
  }, [_vm._v("\n            6:30-6:40\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            20\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            6:40-7:30\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            19\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            7:30-8:30\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            18\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            8:30-10:30\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            17\n          ")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "table_"
  }, [_c('div', {
    staticClass: "thead"
  }, [_c('div', {
    staticClass: "th"
  }, [_vm._v("连续签到天数")]), _vm._v(" "), _c('div', {
    staticClass: "th"
  }, [_vm._v("连续签到积分")])]), _vm._v(" "), _c('div', {
    staticClass: "tbody"
  }, [_c('div', {
    staticClass: "td"
  }, [_vm._v("\n            2\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            1\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            3\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            2\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            4\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            3\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            5\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            4\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            6\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            5\n          ")]), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            7\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            5\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            8\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            5\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            ...\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "td"
  }, [_vm._v("\n            ...\n          ")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-82aa8066", esExports)
  }
}

/***/ })

},[48]);
//# sourceMappingURL=main.js.map