global.webpackJsonp([4],{

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phang__ = __webpack_require__(44);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__phang__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '排行榜'
  }
});

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_phang_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1128af3a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_phang_vue__ = __webpack_require__(47);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1128af3a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_phang_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1128af3a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_phang_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\phang\\phang.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] phang.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1128af3a", Component.options)
  } else {
    hotAPI.reload("data-v-1128af3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      session: "",
      key: "3rd_session",
      setdata: null,

      usermorning: "",
      userscore: "",
      morning: "",
      scorerank: "",
      deadline: true,
      sign: "",
      signtoday: "",
      style1: 'border-bottom:1px solid rgb(245,111,97)',
      style2: '',
      number: 1
    };
  },
  methods: {
    //微信API 
    //缓存获取
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
    //接收websocket信息
    getwebsocket() {
      return new Promise(function (resolve, reject) {
        wx.onSocketMessage(function (res) {
          resolve(res);
        });
      });
    },
    //发送请求
    setrequst(url, data) {
      var that = this;
      return new Promise(function (resolve, reject) {
        wx.request({
          url: url,
          method: 'POST',
          data: data,
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            resolve(res);
          },
          fail: function (res) {
            reject(res);
          }
        });
      });
    },
    toqiao() {
      this.style1 = 'border-bottom:1px solid rgb(245,111,97)', this.style2 = '', this.number = 1;
    },
    tojifeng() {
      this.style1 = '', this.style2 = 'border-bottom:1px solid rgb(245,111,97)', this.number = 2;
    }
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad() {
    wx.showToast({
      title: '加载中',
      icon: "loading",
      mask: 'true',
      duration: 500,
      complete: function () {}
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    try {
      var that = this;
      that.getstorage(that.key).then(res => {
        that.session = res.data;
        that.setdata = {
          session: that.session
        };
        var url = "https://myzhbit.cn/getup/web/index.php?r=rank/morningrank";
        that.setrequst(url, that.setdata);
        return that.getwebsocket();
      }).then(res => {
        var res = JSON.parse(res.data);
        that.signtoday = res.data.user.signtoday; //判断是否签到了
        if (that.signtoday) {
          that.usermorning = res.data.user.user; //签到了个人信息赋值
        } else {
          that.usermorning = res.data.content; //没有签到个人content
        }
        if (res.data.morningRank) {
          that.morning = res.data.morningRank; //起床排行 
        }
        var url = "https://myzhbit.cn/getup/web/index.php?r=rank/scorerank";
        that.setrequst(url, that.setdata);
        return that.getwebsocket();
      }).then(res => {
        var res = JSON.parse(res.data);
        //console.log(res.data.scoreRank);
        that.sign = res.data.user.sign; //判断是否已经签到过
        if (that.sign) {
          that.userscore = res.data.user.user; //个人信息赋值
        } else {
          that.userscore = res.data.user.content;
        }
        if (res.data.scoreRank) {
          that.scorerank = res.data.scoreRank; //积分排行
        }
      });
    } catch (e) {
      // Do something when catch error
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "head"
  }, [_c('div', {
    staticClass: "qiaodao",
    style: (_vm.style1),
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.toqiao()
      }
    }
  }, [_vm._v("签到排行")]), _vm._v(" "), _c('div', {
    staticClass: "jifeng",
    style: (_vm.style2),
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.tojifeng()
      }
    }
  }, [_vm._v("积分排行")])]), _vm._v(" "), (_vm.number == 1) ? _c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "spannumber"
  }, [_vm._v("名次")]), _vm._v(" "), _c('div', {
    staticClass: "avartUrl"
  }), _vm._v(" "), _vm._m(0)]) : _vm._e(), _vm._v(" "), (_vm.number == 1) ? _c('div', {
    staticClass: "signtoday",
    staticStyle: {
      "background-color": "#fff"
    }
  }, [(!_vm.signtoday) ? _c('div', {
    staticClass: "offsigntoday"
  }, [_vm._v("\n        你今天还没签到\n      ")]) : _vm._e(), _vm._v(" "), (_vm.signtoday) ? _c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "number",
    staticStyle: {
      "color": "rgb(245,111,97)"
    }
  }, [_vm._v(_vm._s(_vm.usermorning.rank))]), _vm._v(" "), _c('div', {
    staticClass: "avartUrl"
  }, [_c('img', {
    attrs: {
      "src": _vm.usermorning.avatarurl
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "nameTime"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.usermorning.nickname))]), _vm._v(" "), _c('div', {
    staticClass: "time"
  }, [_c('div', {
    staticStyle: {
      "width": "110rpx",
      "text-align": "center",
      "color": "rgb(245,111,97)"
    }
  }, [_vm._v(_vm._s(_vm.usermorning.time))])])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.number == 1) ? _c('scroll-view', {
    staticClass: "phone",
    attrs: {
      "scroll-y": "true"
    }
  }, _vm._l((_vm.morning), function(morning, index) {
    return _c('view', {
      key: morning,
      staticClass: "phb",
      staticStyle: {
        "margin-top": "17rpx"
      }
    }, [_c('div', {
      staticClass: "title",
      staticStyle: {
        "background-color": "#fff"
      }
    }, [_c('div', {
      staticClass: "number",
      staticStyle: {
        "color": "rgb(245,111,97)"
      }
    }, [(morning.rank < 4) ? _c('div', {
      class: 'no' + morning.rank
    }) : _vm._e(), _vm._v(" "), (morning.rank > 3) ? _c('div', {
      staticClass: "afferthird"
    }, [_vm._v(_vm._s(morning.rank))]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "avartUrl"
    }, [_c('img', {
      attrs: {
        "src": morning.avatarurl
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "nameTime"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(morning.nickname))]), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_c('div', {
      staticStyle: {
        "width": "110rpx",
        "text-align": "center",
        "color": "rgb(245,111,97)"
      }
    }, [_vm._v(_vm._s(morning.time))])])])])])
  })) : _vm._e(), _vm._v(" "), (_vm.number == 2) ? _c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "spannumber"
  }, [_vm._v("名次")]), _vm._v(" "), _c('div', {
    staticClass: "avartUrl"
  }), _vm._v(" "), _vm._m(1)]) : _vm._e(), _vm._v(" "), (_vm.number == 2) ? _c('div', {
    staticClass: "issign",
    staticStyle: {
      "background-color": "#fff"
    }
  }, [(!_vm.sign) ? _c('div', {
    staticClass: "offsign"
  }, [_c('test', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_vm._v("你还没开始签到获取积分～")])], 1) : _vm._e(), _vm._v(" "), (_vm.sign) ? _c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "number",
    staticStyle: {
      "color": "rgb(245,111,97)"
    }
  }, [_vm._v(_vm._s(_vm.userscore.ScoreRank))]), _vm._v(" "), _c('div', {
    staticClass: "avartUrl"
  }, [_c('img', {
    attrs: {
      "src": _vm.userscore.avatarurl
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "nameTime"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.userscore.nickname))]), _vm._v(" "), _c('div', {
    staticClass: "score"
  }, [_c('div', {
    staticStyle: {
      "width": "110rpx",
      "text-align": "center",
      "color": "rgb(245,111,97)"
    }
  }, [_vm._v(_vm._s(_vm.userscore.totalscore))])])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.number == 2) ? _c('scroll-view', {
    staticClass: "phone",
    attrs: {
      "scroll-y": "true"
    }
  }, _vm._l((_vm.scorerank), function(scorerank, index) {
    return (scorerank.totalscore > 0) ? _c('view', {
      key: scorerank,
      staticClass: "phb",
      staticStyle: {
        "margin-top": "17rpx"
      }
    }, [_c('div', {
      staticClass: "title",
      staticStyle: {
        "background-color": "#fff"
      }
    }, [_c('div', {
      staticClass: "number",
      staticStyle: {
        "color": "rgb(245,111,97)"
      }
    }, [(scorerank.rank < 4) ? _c('div', {
      class: 'no' + scorerank.rank
    }) : _vm._e(), _vm._v(" "), (scorerank.rank > 3) ? _c('div', {
      staticClass: "afferthird"
    }, [_vm._v(_vm._s(scorerank.rank))]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "avartUrl"
    }, [_c('img', {
      attrs: {
        "src": scorerank.avatarurl
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "nameTime"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(scorerank.nickname))]), _vm._v(" "), _c('div', {
      staticClass: "score"
    }, [_c('div', {
      staticStyle: {
        "width": "110rpx",
        "text-align": "center",
        "color": "rgb(245,111,97)"
      }
    }, [_vm._v(_vm._s(scorerank.totalscore))])])])])]) : _vm._e()
  })) : _vm._e()], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "spannameTime"
  }, [_c('div', {
    staticClass: "spanname"
  }, [_vm._v("昵称")]), _vm._v(" "), _c('div', {
    staticClass: "spantime"
  }, [_vm._v("签到时间")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "spannameTime"
  }, [_c('div', {
    staticClass: "spanname"
  }, [_vm._v("昵称")]), _vm._v(" "), _c('div', {
    staticClass: "spanscore"
  }, [_vm._v("积分数量")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1128af3a", esExports)
  }
}

/***/ })

},[43]);
//# sourceMappingURL=main.js.map