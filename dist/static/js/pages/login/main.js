global.webpackJsonp([6],{

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(26);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__login__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '登录'
  }
});

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_login_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0980c59e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_login_vue__ = __webpack_require__(37);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(27)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0980c59e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0980c59e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_login_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0980c59e", Component.options)
  } else {
    hotAPI.reload("data-v-0980c59e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_promise__);
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


/* harmony default export */ __webpack_exports__["a"] = ({
    //数据初始化
    data() {
        return {
            iv: null, //微信解密需要iv
            encryptedData: null, //微信解密需要en

            session: null, //个人session
            key: "3rd_session" //获取session
        };
    },
    methods: {
        //跳转函数
        getstorage(key) {
            return new Promise(function (resolve, reject) {
                wx.getStorage({
                    key: key,
                    success: function (res) {
                        resolve(res);
                    }
                });
            });
        },
        getuserinfo() {
            return new Promise(function (resolve, reject) {
                wx.getUserInfo({
                    success: function (res) {
                        resolve(res);
                    },
                    fail: function (res) {
                        reject(res);
                    }
                });
            });
        },
        getopenid(session, encryptedData, iv) {
            return new Promise(function (resolve, reject) {
                wx.request({
                    url: 'https://myzhbit.cn/getup/web/index.php?r=init/userinfo', //获取openid url
                    method: 'POST',
                    data: {
                        session: session,
                        encryptedData: encryptedData,
                        iv: iv
                    },
                    header: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    success: function (res) {
                        resolve(res);
                    },
                    fail: function (res) {
                        reject(res);
                        //console.log(res);
                    }
                });
            });
        },
        toIndex() {
            wx.reLaunch({
                url: '../index/main'
            });
        },

        //登录功能
        bindGetUserInfo(res) {
            var that = this;
            that.getuserinfo().then(res => {
                that.iv = res.iv;
                that.encryptedData = res.encryptedData;
                return that.getstorage(that.key);
            }).then(res => {
                that.session = res.data;
                return that.getopenid(that.session, that.encryptedData, that.iv);
            }).then(res => {
                that.toIndex();
            });
        }

    },
    created() {}
});

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "head"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "login",
    staticStyle: {
      "background-image": "url(http://image.myzhbit.cn/myzhbit/Getup/loginbutton.png)"
    },
    attrs: {
      "lang": "zh_CN",
      "open-type": "getUserInfo",
      "plain": "true",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  })], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('image', {
    staticClass: "clock",
    attrs: {
      "src": "http://image.myzhbit.cn/myzhbit/Getup/clock.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('image', {
    staticClass: "tittle",
    attrs: {
      "src": "http://image.myzhbit.cn/myzhbit/Getup/logintittle.png"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0980c59e", esExports)
  }
}

/***/ })

},[25]);
//# sourceMappingURL=main.js.map