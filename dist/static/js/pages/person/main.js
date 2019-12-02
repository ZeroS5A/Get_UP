global.webpackJsonp([5],{

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person__ = __webpack_require__(39);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__person__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '个人中心'
  }
});

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_person_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e3cbe086_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_person_vue__ = __webpack_require__(42);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(40)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e3cbe086"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_person_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e3cbe086_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_person_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\person\\person.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] person.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3cbe086", Component.options)
  } else {
    hotAPI.reload("data-v-e3cbe086", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 41:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      avatarUrl: "",
      username: "",
      signdays: "",
      morningrank: "",
      totalscore: "",
      datedata: "",
      rank: " ",
      isSuccess: false,
      key: "3rd_session",

      modalstate: true,
      rulemodal: true,
      userdata: {
        phonestatue: '',
        phone: '',
        jifen: ''
      }
    };
  },
  methods: {
    //微信API
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
    setrequst(url, session) {
      return new Promise(function (resolve, reject) {
        wx.request({
          url: url,
          method: 'POST',
          data: {
            session: session
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            resolve(res);
            //console.log(res);
          },
          fail: function (res) {
            reject(res);
            //console.log(res);
          }
        });
      });
    },
    //取消按钮  
    cancel() {
      this.modalstate = true;
      this.rulemodal = true;
    },
    //确认 
    confirm() {
      this.modalstate = true;
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 1000
      });
    },
    //自动获取手机按钮
    getPhone(e) {
      if (e.mp.detail.iv == null) {
        wx.showToast({
          title: '呜呜，被拒绝了',
          icon: 'none',
          duration: 2000
        });
        console.log("获取手机失败");
      } else {
        var etc = {
          session: this.session,
          encryptedData: e.mp.detail.encryptedData,
          iv: e.mp.detail.iv,
          phone: this.userdata.phone
        };
        this.upPhone(etc);
      }
    },
    //手动提交手机
    getPhone2() {
      //判断手机号正则
      if (!/^1[34578]\d{9}$/.test(this.userdata.phone)) {
        wx.showToast({
          title: "手机号填错啦！！可以试试自动噢~",
          icon: 'none',
          duration: 2000
        });
      } else {
        var etc = { session: this.session, encryptedData: '', iv: '', phone: this.userdata.phone };
        this.upPhone(etc);
      }
    },
    //上传手机请求
    upPhone(etc) {
      var url = 'https://myzhbit.cn/getup/web/?r=init/getnumber';
      var data = etc;

      this.getrequest(url, data).then(res => {
        this.confirm();
      });
    },
    //请求获取封装
    getrequest(url, data) {
      return new Promise(function (resolve, reject) {
        wx.request({
          url: url,
          method: 'POST',
          data: data,
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            //console.log(res);
            resolve(res);
          },
          fail: function (res) {
            reject(res);
          }
        });
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    try {
      var that = this;
      wx.showToast({
        title: '加载中',
        icon: "loading",
        mask: 'true',
        duration: 500,
        complete: function () {
          that.getstorage(that.key).then(res => {
            that.session = res.data;
            var url = 'https://myzhbit.cn/getup/web/index.php?r=user/userdata';
            return that.setrequst(url, that.session);
          }).then(res => {
            that.username = res.data.data.nickName;
            that.avatarUrl = res.data.data.avatarUrl;
            that.signdays = res.data.data.signdays;
            that.morningrank = res.data.data.morningrank;
            that.totalscore = res.data.data.totalscore;
            that.isSuccess = res.data.data.usersign;
            var url = "https://myzhbit.cn/getup/web/index.php?r=user/signrecord";
            return that.setrequst(url, that.session);
          }).then(res => {
            that.datedata = res.data.data;
            //console.log(that.datedata);
          });
        }
      });
    } catch (e) {
      // Do something when catch error
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

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

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('modal', {
    staticStyle: {
      "padding": "0"
    },
    attrs: {
      "hidden": _vm.modalstate,
      "title": "重新绑定手机号",
      "confirm-text": "提交",
      "cancel-text": "取消",
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "cancel": function($event) {
        _vm.cancel()
      },
      "confirm": function($event) {
        _vm.getPhone2()
      }
    }
  }, [_c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userdata.phone),
      expression: "userdata.phone"
    }],
    staticStyle: {
      "border": "2px solid #227D51",
      "border-radius": "5px",
      "width": "60%",
      "float": "left",
      "height": "50rpx"
    },
    attrs: {
      "type": "text",
      "placeholder": "手机号码",
      "auto-focus": "",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.userdata.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userdata.phone = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticStyle: {
      "width": "33%",
      "float": "right"
    },
    attrs: {
      "size": "mini",
      "open-type": "getPhoneNumber",
      "type": "primary",
      "eventid": '1'
    },
    on: {
      "getphonenumber": _vm.getPhone
    }
  }, [_vm._v("自动获取")])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "hidden": _vm.rulemodal,
      "title": "关于我们",
      "confirm-text": "好的",
      "no-cancel": "true",
      "eventid": '3',
      "mpcomid": '1'
    },
    on: {
      "confirm": function($event) {
        _vm.cancel()
      }
    }
  }, [_c('scroll-view', {
    staticClass: "shop-model",
    attrs: {
      "scroll-y": "true"
    }
  }, [_c('div', {
    staticStyle: {
      "height": "30px"
    }
  }), _vm._v(" "), _c('h2', [_vm._v("Hi 各位北理珠北鼻们！")]), _vm._v(" "), _c('p', [_vm._v("\n          作为北理珠最大的非官方媒体，我们一直尽最大的努力建设一个可爱、自由的地方给大家带来欢乐\n        ")]), _vm._v(" "), _c('h2', [_vm._v("你想知道的，我们都有！")]), _vm._v(" "), _c('p', [_vm._v("后台回复关键字即可获取相关信息")]), _vm._v(" "), _c('h2', [_vm._v("你想说的，我们帮你！")]), _vm._v(" "), _c('p', [_vm._v("欢迎评论或者投稿（大声栏目）")]), _vm._v(" "), _c('p'), _vm._v(" "), _c('img', {
    staticClass: "img",
    attrs: {
      "src": "http://image.myzhbit.cn/%E5%B0%8F%E6%8A%A5%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg"
    }
  }), _vm._v(" "), _c('h2', [_vm._v("最后欢迎北鼻在后台留下你的建议或意见！")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "5px",
      "float": "right"
    }
  }, [_vm._v("BY  electronicAE.、Climsi、Sevexw、ZeroS")])], 1), _vm._v(" "), _c('div')], 1), _vm._v(" "), _c('div', {
    staticClass: "head"
  }, [_c('div', {
    staticClass: "top"
  }, [_c('div', {
    staticClass: "img"
  }, [_c('open-data', {
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "username"
  }, [_c('open-data', {
    attrs: {
      "type": "userNickName",
      "open-gid": "xxxxxx",
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "sign"
  }, [(!_vm.isSuccess) ? _c('div', {
    staticClass: "No"
  }, [_vm._v("\n            未签到\n          ")]) : _vm._e(), _vm._v(" "), (_vm.isSuccess) ? _c('div', {
    staticClass: "Is"
  }, [_vm._v("\n            已签到\n          ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "DayAndNum"
  }, [_c('div', {
    staticClass: "all"
  }, [_c('div', {
    staticClass: "blockAll",
    attrs: {
      "data-index": "0"
    }
  }, [_c('h4', [_vm._v("累计签到")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.signdays))])], 1), _vm._v(" "), _c('div', {
    staticClass: "blockAll",
    attrs: {
      "data-index": "1"
    }
  }, [_c('h4', [_vm._v("今日排行")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.morningrank))])], 1), _vm._v(" "), _c('div', {
    staticClass: "blockAll",
    attrs: {
      "data-index": "2"
    }
  }, [_c('h4', [_vm._v("总积分")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.totalscore))])], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "ather"
  }, [_c('div', {
    staticClass: "rebind",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.modalstate = false
      }
    }
  }, [_c('p', {
    staticClass: "left"
  }, [_vm._v("重新绑定手机")]), _c('p', {
    staticClass: "right"
  }, [_vm._v(">")])], 1), _vm._v(" "), _c('div', {
    staticClass: "about",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.rulemodal = false
      }
    }
  }, [_c('p', {
    staticClass: "left"
  }, [_vm._v("关于我们")]), _c('p', {
    staticClass: "right"
  }, [_vm._v(">")])], 1)]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('scroll-view', {
    staticClass: "scoll-look",
    attrs: {
      "scroll-y": ""
    }
  }, [_c('div', {
    staticClass: "user"
  }, [_c('div', {
    staticClass: "date"
  }, _vm._l((_vm.datedata), function(item, key, index) {
    return _c('div', {
      key: index,
      staticClass: "datetr"
    }, [(item.rank == 0) ? _c('div', {
      staticClass: "datetd"
    }, [_vm._v(_vm._s(item.date))]) : _vm._e(), _vm._v(" "), (item.rank < 11 && item.rank != 0) ? _c('div', {
      staticClass: "datetd",
      staticStyle: {
        "color": "rgb(245,111,97)"
      }
    }, [_vm._v(_vm._s(item.date))]) : _vm._e(), _vm._v(" "), (item.rank > 10) ? _c('div', {
      staticClass: "datetd"
    }, [_vm._v(_vm._s(item.date))]) : _vm._e()])
  })), _vm._v(" "), _c('div', {
    staticClass: "table"
  }, _vm._l((_vm.datedata), function(item, key, user) {
    return _c('div', {
      key: user,
      staticClass: "tr"
    }, [(item.rank == 0) ? _c('div', {
      staticClass: "tdnorank",
      staticStyle: {
        "width": "25%"
      }
    }, [_vm._v("未签到")]) : _vm._e(), _vm._v(" "), (item.rank == 0) ? _c('div', {
      staticClass: "tdrank",
      staticStyle: {
        "width": "60rpx"
      }
    }) : _vm._e(), _vm._v(" "), (item.rank == 0) ? _c('div', {
      staticClass: "tdscore"
    }, [_vm._v("0")]) : _vm._e(), _vm._v(" "), (item.rank == 0) ? _c('div', {
      staticClass: "tdsignscore"
    }, [_vm._v("+0")]) : _vm._e(), _vm._v(" "), (item.rank < 11 && item.rank != 0) ? _c('div', {
      staticClass: "td",
      staticStyle: {
        "color": "rgb(245,111,97)",
        "width": "25%"
      }
    }, [_vm._v(_vm._s(item.time))]) : _vm._e(), _vm._v(" "), (item.rank < 11 && item.rank != 0) ? _c('div', {
      staticClass: "tdrank",
      staticStyle: {
        "color": "rgb(156,210,235)"
      }
    }, [_vm._v("前十")]) : _vm._e(), _vm._v(" "), (item.rank < 11 && item.rank != 0) ? _c('div', {
      staticClass: "td",
      staticStyle: {
        "color": "rgb(245,111,97)"
      }
    }, [_vm._v(_vm._s(item.score))]) : _vm._e(), _vm._v(" "), (item.rank < 11 && item.rank != 0) ? _c('div', {
      staticClass: "td",
      staticStyle: {
        "color": "rgb(245,111,97)"
      }
    }, [_vm._v(_vm._s(item.signscore))]) : _vm._e(), _vm._v(" "), (item.rank > 10) ? _c('div', {
      staticClass: "td",
      staticStyle: {
        "width": "25%"
      }
    }, [_vm._v(_vm._s(item.time))]) : _vm._e(), _vm._v(" "), (item.rank > 10) ? _c('div', {
      staticClass: "tdrank",
      staticStyle: {
        "width": "60rpx"
      }
    }) : _vm._e(), _vm._v(" "), (item.rank > 10) ? _c('div', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.score))]) : _vm._e(), _vm._v(" "), (item.rank > 10) ? _c('div', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.signscore))]) : _vm._e()])
  }))])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "recoveTitle"
  }, [_c('img', {
    attrs: {
      "src": "http://image.myzhbit.cn/myzhbit/Getup/record.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "userdata"
  }, [_c('div', {
    staticClass: "tr"
  }, [_c('div', {
    staticClass: "th",
    staticStyle: {
      "width": "25%"
    }
  }, [_vm._v("签到时间")]), _vm._v(" "), _c('div', {
    staticClass: "th",
    staticStyle: {
      "width": "60rpx"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "th"
  }, [_vm._v("签到积分")]), _vm._v(" "), _c('div', {
    staticClass: "th"
  }, [_vm._v("连签加分")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e3cbe086", esExports)
  }
}

/***/ })

},[38]);
//# sourceMappingURL=main.js.map