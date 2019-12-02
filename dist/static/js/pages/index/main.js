global.webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(13);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '首页'
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_28c74443_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(24);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(14)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-28c74443"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_28c74443_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28c74443", Component.options)
  } else {
    hotAPI.reload("data-v-28c74443", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_outtime_vue__ = __webpack_require__(20);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isSuccess: false, //签到确认标示
      cardNum: 0, //子组件传值，弹窗需要
      morningdata: "", //起床后需要信息

      avatarurl: "", //头像
      nickname: "", //昵称 
      urldown: "", //头像下载处理 

      array: [{ message: "foo" }, { message: "loo" }],

      key: "3rd_session", //获取个人session
      session: null, //个人的session

      users: [], //获取最新签到的用户头像

      stepdate: 2,
      signdays: "", //签到天数
      onsign: "", //连续签到天数
      morningrank: "", //起床排名
      totalscore: "", //总分
      totalscorerank: "", //总分排名
      imgtime: "2018 / 11 / 19 / 周五",
      deadline: "", //四六级时间
      rankin: 0, //奖励范围

      client_id: "", //client_id websocket连接所需
      code: "", //登录发出的code
      login: false, //登录态确定
      openid: "", //个人的openid

      timeout: 10000, //心跳测试秒数
      timeoutObj: null, //清除定时器用的对象
      serverTimeoutObj: null,
      timer: null, //重连清除对象
      limit: 0, //重连计算次数
      Reconnect: false, //重连确认

      test: {},
      //连续签到内容
      numList: [{
        name: '1',
        con: "datePlus0.png"
      }, {
        name: '2',
        con: "datePlus1-1.png"
      }, {
        name: '3',
        con: "datePlus2.png"
      }, {
        name: '4',
        con: "datePlus3.png"
      }, {
        name: '5',
        con: "datePlus4.png"
      }, {
        name: '6',
        con: "datePlus5.png"
      }]
    };
  },

  //组件引入
  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card_vue__["a" /* default */],
    outtime: __WEBPACK_IMPORTED_MODULE_1__components_outtime_vue__["a" /* default */]
  },

  //方法实现
  methods: {
    //微信API（方法后期都需要封装）
    //
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
    //websocket
    //websocket连接
    linkSocket() {
      var that = this;
      wx.connectSocket({
        url: 'wss://myzhbit.cn/wss',
        success: function (res) {
          console.log('连接成功');
          that.initEventHandle();
        }
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
    //重连
    reconnect() {
      var that = this;
      console.log("尝试重连中");
      if (that.Reconnect) return;
      that.Reconnect = true;
      clearTimeout(that.timer);
      if (that.limit < 12) {
        that.timer = setTimeout(() => {
          this.linkSocket();
          that.Reconnect = false;
        }, 2000);
        that.limit = that.limit + 1;
      }
    },
    //心跳重组
    reset() {
      var that = this;
      clearTimeout(that.timeoutObj);
      clearTimeout(that.serverTimeoutObj);
      return that;
    },
    //心跳发送
    start() {
      var that = this;
      that.timeoutObj = setTimeout(() => {
        wx.sendSocketMessage({
          data: "ping",
          success() {
            console.log("发送ping成功");
          }
        });
        that.serverTimeoutObj = setTimeout(() => {}, that.timeout);
      }, that.timeout);
    },
    //事件处理&websocket数据监控
    initEventHandle() {
      var that = this;
      wx.onSocketMessage(res => {
        if (res.data == "pong") {
          console.log("pongsuccess");
          that.reset().start(); //客户端每10秒  发送心跳
        } else {
          var data = JSON.parse(res.data);
          //client_id
          if (data.code == 'init') {
            that.client_id = data.client_id;
            var url = "https://myzhbit.cn/getup/web/index.php?r=socket/socket";
            var data = {
              session: that.session,
              client_id: that.client_id
            };
            that.setrequst(url, data);
          }
          //起床接受
          if (data.datatype == 100) {
            if (data.data.usersign) {
              that.isSuccess = true;
              that.morningdata = data.data;
              that.imgtime = that.morningdata.imagetime;
              that.signdays = that.morningdata.signdays;
              that.onsign = that.morningdata.onsign;
              that.morningrank = that.morningdata.getupRank;
              that.totalscorerank = that.morningdata.scoreRank;
              that.rankin = that.morningdata.rankin;
              setTimeout(function () {
                that.cardNum = 1;
              }, 500);
              //起床以外的时间
            } else {
              that.isSuccess = false;
              that.morningdata = data.data;
              setTimeout(function () {
                that.cardNum = 2;
              }, 1000);
            }
          }
          //url接收
          if (data.datatype == 101) {
            var length = that.users.length;
            if (length != 8) {
              that.users.push(data.data);
            } else if (length == 8) {
              //在满员的情况下才进行队列置换
              //向左推动 注意排行的顺序
              that.users.shift(); //去除数组头元素
              that.users.push(data.data); //增加数组尾元素
              //向右推动
              //that.users.pop();  //去除数组尾元素
              //that.users.unshift(data.data) //增加数组头元素
            }
            const innerAudioContext = wx.createInnerAudioContext();
            innerAudioContext.autoplay = true;
            innerAudioContext.loop = false;
            innerAudioContext.src = 'http://image.myzhbit.cn/music/newsign.wav';
            innerAudioContext.onPlay(() => {
              console.log('开始播放');
            });
          }
        }
      });
      wx.onSocketOpen(() => {
        console.log('WebSocket连接打开');
      });
      wx.onSocketError(res => {
        var that = this;
        console.log('WebSocket连接打开失败');
        that.reconnect();
      });
      wx.onSocketClose(res => {
        var that = this;
        console.log('WebSocket 已关闭！');
        that.reconnect();
      });
    },

    //登录功能
    //获取code检查是否已经登陆了
    getcode() {
      return new Promise(function (resolve, reject) {
        wx.login({
          success: function (res) {
            resolve(res);
          },
          fail: function (res) {
            reject(res);
          }
        });
      });
    },

    //起床接口触发
    morningrequst(url, session, client_id) {
      return new Promise(function (resolve, reject) {
        wx.request({
          url: url,
          method: 'POST',
          data: {
            session: session,
            client_id: client_id
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {},
          fail: function (res) {}
        });
      });
    },
    //发出请求
    setrequst(url, data) {
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
    //设置缓存
    setstorage(key, data) {
      return new Promise(function (resolve, reject) {
        wx.setStorage({
          key: key,
          data: data,
          success: function (res) {
            resolve(res);
          }
        });
      });
    },
    //获取缓存
    getstorage(key) {
      return new Promise(function (resolve, reject) {
        wx.getStorage({
          key: key,
          success: function (res) {
            resolve(res);
          },
          fail: function (res) {
            res.data = null;
            resolve(res);
          }
        });
      });
    },

    //页面转移
    //登录页面
    toLogin() {
      wx.redirectTo({
        url: '../login/main'
      });
    },
    //规则
    toRule() {
      wx.navigateTo({
        url: '../rules/main'
      });
    },
    //排行榜
    tophang() {
      wx.navigateTo({
        url: '../phang/main'
      });
    },
    //个人信息
    toperson() {
      wx.switchTab({
        url: '../person/main'
      });
    },
    //签到后显示的信息
    tomorninginfo() {
      var that = this;
      that.cardNum = 1;
    },

    // 签到
    comeOn() {
      var that = this;
      wx.showToast({
        title: '正在签到',
        icon: "loading",
        mask: 'true',
        duration: 1000,
        complete: function () {
          that.getstorage(that.key).then(res => {
            that.session = res.data;
          });
          var url = "https://myzhbit.cn/getup/web/index.php?r=morning/getup";
          that.morningrequst(url, that.session, that.client_id);
        }
      });
    },
    backTo() {
      this.cardNum = 0;
    },

    //获取图片背景
    chooseImage() {
      return new Promise(function (resolve, reject) {
        wx.chooseImage({
          success: function (res) {
            resolve(res);
          }
        });
      });
    },
    getImginfo(url) {
      return new Promise(function (resolve, reject) {
        wx.getImageInfo({
          src: url,
          success: function (res) {
            resolve(res);
          }
        });
      });
    },
    getImg(url) {
      return new Promise(function (resolve, reject) {
        wx.downloadFile({
          url: url,
          success: function (res) {
            if (res.statusCode === 200) {
              resolve(res);
            }
          },
          fail: function (res) {
            console.log("获取图片失败" + res);
          }
        });
      });
    },
    //返回绘制图片详细地址
    canvasToTempFilePath(canvasId) {
      return new Promise(function (resolve, reject) {
        wx.canvasToTempFilePath({
          canvasId: canvasId,
          success: function (res) {
            resolve(res);
          }
        });
      });
    },
    //预览图片
    previewImg(path) {
      console.log(path);
      return new Promise(function (resolve, reject) {
        wx.previewImage({
          urls: [path]
        });
      });
    },
    createAvatarurl() {
      var that = this;
      that.getImg(that.avatarurl).then(res => {
        var ctx = wx.createCanvasContext('url');
        ctx.save();
        ctx.arc(50, 50, 50, 0, 2 * Math.PI);
        ctx.setLineWidth(1);
        ctx.setStrokeStyle('white');
        ctx.clip();
        ctx.drawImage(res.tempFilePath, 0, 0, 100, 100);
        ctx.draw();
        return that.canvasToTempFilePath('url');
      }).then(res => {
        that.urldown = res.tempFilePath;
      });
    },
    createShareImage() {
      var that = this;
      wx.showToast({
        title: '正在生成图片',
        icon: "loading",
        mask: 'true',
        duration: 4000,
        complete: function () {
          var tempurl = 'https://image.myzhbit.cn/myzhbit/Getup/share.png';
          var ctx = wx.createCanvasContext('sharepicture');
          that.getImg(tempurl).then(res => {
            var temp = res.tempFilePath;
            ctx.drawImage(temp, 0, 0, 750, 470);
            ctx.draw();
            ctx.font = "100px 宋体";
            ctx.fillStyle = "#605f5f";
            ctx.fillText(that.morningdata.time, 250, 272);
            ctx.font = "normal normal bold 20px 宋体";
            ctx.strokeStyle = "#605f5f";
            ctx.lineWidth = 4;
            ctx.fillStyle = "#ffffff";
            /***右边标题***/
            ctx.font = "normal normal bold 18px 宋体";
            ctx.strokeText(that.imgtime, 19, 35);
            ctx.fillText(that.imgtime, 19, 35);
            /***左侧标题***/
            /***四六级期限***/
            if (that.deadline < 10) {
              ctx.font = "normal normal bold 21px 宋体";
              ctx.strokeText(that.deadline, 695, 36);
              ctx.fillText(that.deadline, 695, 36);
            } else if (that.deadline >= 10 && that.deadline < 100) {
              ctx.font = "normal normal bold 21px 宋体";
              ctx.strokeText(that.deadline, 688, 36);
              ctx.fillText(that.deadline, 688, 36);
            }
            /***起床排名***/
            if (that.morningrank < 10) {
              ctx.font = "normal normal bold 21px 宋体";
              ctx.strokeText(that.morningrank, 695, 66);
              ctx.fillText(that.morningrank, 695, 66);
            } else if (that.morningrank >= 10 && that.morningrank < 100) {
              ctx.font = "normal normal bold 21px 宋体";
              ctx.strokeText(that.morningrank, 689, 66);
              ctx.fillText(that.morningrank, 689, 66);
            } else if (that.morningrank > 100) {
              ctx.font = "normal normal bold 18px 宋体";
              ctx.strokeText(that.morningrank, 684, 66);
              ctx.fillText(that.morningrank, 684, 66);
            }
            /***签到天数***/
            if (that.morningdata.signdays < 10) {
              ctx.font = "normal normal bold 21px 宋体";
              ctx.strokeText(that.morningdata.signdays, 694, 96);
              ctx.fillText(that.morningdata.signdays, 694, 96);
            } else if (that.morningdata.signdays >= 10 && that.morningdata.signdays < 100) {
              ctx.font = "normal normal bold 21px 宋体";
              ctx.strokeText(that.morningdata.signdays, 688, 96);
              ctx.fillText(that.morningdata.signdays, 688, 96);
            }
            /**** ****/
            ctx.drawImage(that.urldown, 353, 378, 44, 44);
            ctx.draw(true);
            return that.canvasToTempFilePath('sharepicture');
          }).then(res => {
            that.previewImg(res.tempFilePath);
          });
        }
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    var that = this;
    that.getstorage(that.key).then(res => {
      that.session = res.data;
      return that.getcode();
    }).then(res => {
      that.code = res.code;
      var data = {
        code: that.code,
        session: that.session
      };
      var url = 'https://myzhbit.cn/getup/web/index.php?r=init/login';
      return that.setrequst(url, data);
    }).then(res => {
      that.login = res.data.data.login;
      that.session = res.data.data.session;
      that.setstorage(that.key, that.session);
    }).then(res => {
      if (that.login) {
        that.linkSocket();
        wx.showToast({
          title: '加载中',
          icon: "loading",
          mask: 'true',
          duration: 500,
          complete: function () {
            that.getstorage(that.key).then(res => {
              var url = 'https://myzhbit.cn/getup/web/index.php?r=user/userdata';
              var data = {
                session: that.session
              };
              return that.setrequst(url, data);
            }).then(res => {
              that.onsign = res.data.data.onsign;
              that.signdays = res.data.data.signdays;
              that.morningrank = res.data.data.morningrank;
              that.totalscorerank = res.data.data.scoreRank;
              that.isSuccess = res.data.data.usersign;
              that.deadline = res.data.data.englishtime;
              //console.log(res.data.data.lastten);
              if (res.data.data.lastten) {
                that.users = Object.values(res.data.data.lastten);
              }
              if (that.isSuccess) {
                that.morningdata = res.data.data.userinfo;
                that.imgtime = that.morningdata.imagetime;
              }
              if (res.data.data.userinfo.getupRank != 0) {
                that.rankin = res.data.data.userinfo.rankin;
              }
            });
          }
        });
      } else {
        that.toLogin();
      }
    }).then(res => {
      return that.getuserinfo();
    }).then(res => {
      that.avatarurl = res.userInfo.avatarUrl;
      that.nickname = res.userInfo.nickName;
      var data = {
        session: that.session,
        avatarurl: that.avatarurl,
        nickname: that.nickname
      };
      var url = "https://myzhbit.cn/getup/web/index.php?r=init/checkan";
      that.createAvatarurl();
      return that.setrequst(url, data);
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var that = this;
    that.initEventHandle();
    if (that.login) {
      that.getstorage(that.key).then(res => {
        var url = 'https://myzhbit.cn/getup/web/index.php?r=user/userdata';
        that.session = res.data;
        var data = {
          session: that.session
        };
        return that.setrequst(url, data);
      }).then(res => {
        that.onsign = res.data.data.onsign;
        that.signdays = res.data.data.signdays;
        that.morningrank = res.data.data.morningrank;
        that.totalscorerank = res.data.data.scoreRank;
        that.isSuccess = res.data.data.usersign;
        that.users = res.data.data.lastten;
        if (that.users) {
          that.users = Object.values(that.users);
          //console.log(that.users);
        }
        if (that.isSuccess) {
          that.morningdata = res.data.data.userinfo;
          that.imgtime = that.morningdata.imagetime;
        }
        if (res.data.data.userinfo.getupRank != 0) {
          that.rankin = res.data.data.userinfo.rankin;
        }
      });
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
  },
  mounted() {},
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_card_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_87a3403c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_card_vue__ = __webpack_require__(19);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-87a3403c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_87a3403c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_card_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-87a3403c", Component.options)
  } else {
    hotAPI.reload("data-v-87a3403c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            morningdata: "",
            cardNum: 0
        };
    },
    props: ['cardNum', 'morningdata'],
    methods: {}
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [(_vm.cardNum == 1) ? _c('div', {
    staticClass: "successTip",
    attrs: {
      "data-index": _vm.cardNum
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n            签到成功！\n        ")]), _vm._v(" "), (_vm.morningdata.rankin == 0) ? _c('div', {
    staticClass: "content1"
  }, [_vm._v("\n            早上好！"), _c('br'), _vm._v("\n            恭喜你是第" + _vm._s(_vm.morningdata.getupRank) + "个起床的北鼻"), _c('br'), _vm._v("\n            " + _vm._s(_vm.morningdata.where1)), _c('br'), _vm._v("\n            " + _vm._s(_vm.morningdata.where2)), _c('br'), _vm._v("\n            " + _vm._s(_vm.morningdata.get)), _c('br'), _vm._v("\n            " + _vm._s(_vm.morningdata.whatmove)), _c('br')], 1) : _vm._e(), _vm._v(" "), (_vm.morningdata.rankin == 1) ? _c('text', {
    staticClass: "content1",
    staticStyle: {
      "margin-top": "10rpx"
    }
  }, [_vm._v("\n            早上好！"), _c('br'), _vm._v("\n            恭喜你是第" + _vm._s(_vm.morningdata.getupRank) + "个起床的北鼻\n        ")], 1) : _vm._e(), _vm._v(" "), (_vm.morningdata.rankin == 0) ? _c('div', {
    staticClass: "content2",
    staticStyle: {
      "margin-top": "70rpx"
    }
  }, [_vm._v("\n            到"), _c('span', {
    staticStyle: {
      "color": "rgb(156,210,235)"
    }
  }, [_vm._v(_vm._s(_vm.morningdata.datetime))]), _vm._v("为止"), _c('br'), _vm._v("\n            你已经连续签到第" + _vm._s(_vm.morningdata.onsign) + "天"), _c('br'), _vm._v("\n            获得积分：" + _vm._s(_vm.morningdata.score) + "分"), _c('br'), _vm._v("\n            积分共有：" + _vm._s(_vm.morningdata.totalscore) + "分"), _c('br'), _vm._v("\n            积分排名：" + _vm._s(_vm.morningdata.scoreRank) + "名"), _c('br')], 1) : _vm._e(), _vm._v(" "), (_vm.morningdata.rankin == 1) ? _c('div', {
    staticClass: "content2",
    staticStyle: {
      "margin-top": "20rpx"
    }
  }, [_vm._v("\n            到"), _c('span', {
    staticStyle: {
      "color": "rgb(156,210,235)"
    }
  }, [_vm._v(_vm._s(_vm.morningdata.datetime))]), _vm._v("为止"), _c('br'), _vm._v("\n            你已经连续签到第" + _vm._s(_vm.morningdata.onsign) + "天"), _c('br'), _vm._v("\n            获得积分：" + _vm._s(_vm.morningdata.score) + "分"), _c('br'), _vm._v("\n            积分共有：" + _vm._s(_vm.morningdata.totalscore) + "分"), _c('br'), _vm._v("\n            积分排名：" + _vm._s(_vm.morningdata.scoreRank) + "名"), _c('br'), _vm._v("\n            明天也要继续加油鸭！\n        ")], 1) : _vm._e(), _vm._v(" "), _vm._m(0)]) : _vm._e(), _vm._v(" "), (_vm.cardNum == 1) ? _c('div', {
    staticClass: "topCard"
  }) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img"
  }, [_c('img', {
    attrs: {
      "src": "http://image.myzhbit.cn/myzhbit/Getup/sure.png"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-87a3403c", esExports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_outtime_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9f17888e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_outtime_vue__ = __webpack_require__(23);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9f17888e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_outtime_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9f17888e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_outtime_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\outtime.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] outtime.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9f17888e", Component.options)
  } else {
    hotAPI.reload("data-v-9f17888e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            morningdata: "",
            cardNum: 0
        };
    },
    props: ['cardNum', 'morningdata'],
    methods: {}
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [(_vm.cardNum == 2) ? _c('div', {
    staticClass: "TimeTip",
    attrs: {
      "data-index": _vm.cardNum
    }
  }, [(_vm.morningdata.nowtime == -1) ? _c('div', {
    staticClass: "title"
  }, [_vm._v("\n            还没到时间啦:(\n        ")]) : _vm._e(), _vm._v(" "), (_vm.morningdata.nowtime == -3) ? _c('div', {
    staticClass: "title"
  }, [_vm._v("\n            活动还没开始哦\n        ")]) : _vm._e(), _vm._v(" "), (_vm.morningdata.nowtime == -2) ? _c('div', {
    staticClass: "title"
  }, [_vm._v("\n            今日未签到\n            ")]) : _vm._e(), _vm._v(" "), (_vm.morningdata.nowtime == -2) ? _c('div', {
    staticClass: "content1"
  }, [_vm._v("\n            今日签到时间已经结束啦"), _c('br'), _vm._v("\n            北鼻晚安！"), _c('br'), _vm._v("\n            内测签到时间是"), _c('br'), _vm._v("\n            20:00～24:00\n            ")], 1) : _vm._e(), _vm._v(" "), (_vm.morningdata.nowtime == -3) ? _c('div', {
    staticClass: "content1"
  }, [_vm._v("\n            北鼻，活动开始时间是"), _c('br'), _vm._v("\n            2019-11-28哦"), _c('br')], 1) : _vm._e(), _vm._v(" "), (_vm.morningdata.nowtime == -1) ? _c('div', {
    staticClass: "content1"
  }, [_vm._v("\n            内测签到时间是"), _c('br'), _vm._v("\n            20:00～24:00噢\n            ")], 1) : _vm._e(), _vm._v(" "), _vm._m(0)]) : _vm._e(), _vm._v(" "), (_vm.cardNum == 2) ? _c('div', {
    staticClass: "topCard"
  }) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img"
  }, [_c('img', {
    attrs: {
      "src": "http://image.myzhbit.cn/myzhbit/Getup/sure.png"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9f17888e", esExports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "phone"
  }), _vm._v(" "), _c('div', {
    staticClass: "head"
  }, [_c('img', {
    staticClass: "bg",
    attrs: {
      "src": "http://image.myzhbit.cn/myzhbit/Getup8/background.png"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "rule",
    attrs: {
      "src": "http://image.myzhbit.cn/myzhbit/Getup/index/rule.png",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.toRule()
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "time"
  }, [(_vm.isSuccess) ? _c('div', {
    staticClass: "detailtime"
  }, [_vm._v("\n            " + _vm._s(_vm.morningdata.time) + "\n          ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "time",
    staticStyle: {
      "left": "33%",
      "top": "277rpx"
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.comeOn()
      }
    }
  }, [(!_vm.isSuccess) ? _c('div', [_c('img', {
    staticClass: "signbutton",
    attrs: {
      "src": "http://image.myzhbit.cn/myzhbit/Getup/signbutton.png"
    }
  })]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "des"
  }, [(_vm.isSuccess) ? _c('div', [_vm._v("\n            ——签到时间——\n          ")]) : _vm._e()]), _vm._v(" "), (_vm.rankin == 1 && _vm.isSuccess) ? _c('div', {
    staticClass: "food"
  }, [_c('div', {
    staticClass: "info"
  }, [_vm._v("\n          " + _vm._s(_vm.morningdata.mget) + "\n         ")])]) : _vm._e(), _vm._v(" "), (_vm.isSuccess) ? _c('div', {
    staticClass: "detail"
  }, [_c('span', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.tomorninginfo()
      }
    }
  }, [_vm._v("\n           点击查看详情\n          ")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "newsign"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.users), function(users, index) {
    return (users.avatarurl) ? _c('view', {
      key: users
    }, [_c('div', {
      staticClass: "avatarurl"
    }, [_c('img', {
      attrs: {
        "src": users.avatarurl
      }
    })])]) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_c('h4', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("连签加分")]), _vm._v(" "), _c('div', {
    staticClass: "cu-steps"
  }, _vm._l((_vm.numList), function(num, index) {
    return _c('div', {
      key: num,
      class: num.name > _vm.onsign ? 'cu-item' : 'cu-item text-blue'
    }, [_c('text', {
      staticClass: "num"
    }), _vm._v(" "), _c('img', {
      staticClass: "img",
      attrs: {
        "src": 'http://image.myzhbit.cn/myzhbit/Getup8/' + num.con
      }
    })])
  }))], 1), _vm._v(" "), _c('div', {
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
  }, [_c('h4', [_vm._v("积分排行")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.totalscorerank))])], 1)])]), _vm._v(" "), (_vm.isSuccess) ? _c('div', {
    staticClass: "last",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.createShareImage()
      }
    }
  }, [_vm._v("\n      点击生成分享图片\n    ")]) : _vm._e(), _vm._v(" "), _c('canvas', {
    staticStyle: {
      "width": "100px",
      "height": "100px",
      "position": "absolute",
      "left": "-99999999px",
      "top": "-99999999px"
    },
    attrs: {
      "canvas-id": "url"
    }
  }), _vm._v(" "), _c('canvas', {
    staticStyle: {
      "width": "750px",
      "height": "470px",
      "position": "absolute",
      "left": "-99999999px",
      "top": "-99999999px"
    },
    attrs: {
      "canvas-id": "sharepicture"
    }
  }), _vm._v(" "), _c('card', {
    attrs: {
      "cardNum": _vm.cardNum,
      "morningdata": _vm.morningdata,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('outtime', {
    attrs: {
      "cardNum": _vm.cardNum,
      "morningdata": _vm.morningdata,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "clickOut",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.backTo()
      }
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "someone"
  }, [_c('div', {
    staticClass: "newtext"
  }, [_vm._v("最新签到")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-28c74443", esExports)
  }
}

/***/ })
],[12]);
//# sourceMappingURL=main.js.map