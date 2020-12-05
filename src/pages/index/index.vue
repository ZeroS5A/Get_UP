<template>
  <div class="container">
      <div class="phone"></div>
      <div class="head">
          <img class="bg" src="http://image.myzhbit.cn/myzhbit/Getup8/background.png"><!--http://image.myzhbit.cn/myzhbit/Getup/background2.png-->
          <img class="rule" @click="toRule()" src="http://image.myzhbit.cn/myzhbit/Getup/index/rule.png">
          <div class="time">
            <div class="detailtime" v-if="isSuccess">
              {{morningdata.time}}
            </div>
          </div>
          <div class="time" style="left:33%; top:277rpx" @click="comeOn()">
            <div v-if="!isSuccess">
              <img class="signbutton" src="http://image.myzhbit.cn/myzhbit/Getup/signbutton.png">
            </div>
          </div>
          <div class="des">
            <div v-if="isSuccess">
              ——签到时间——
            </div>
          </div>
          <div class="food" v-if="rankin == 1 && isSuccess">
           <div class="info">
            {{morningdata.mget}}
           </div>
          </div>
          <div class="detail" v-if="isSuccess">
            <span @click="tomorninginfo()">
             点击查看详情
            </span>
          </div>
      </div>

      <div class="newsign">
        <div class="someone">
          <div class="newtext">最新签到</div>
        </div>
        <view  v-for="users in users" :key="users" v-if="users.avatarurl"><div class="avatarurl"><img v-bind:src="users.avatarurl"></div></view> 
      </div>
      
      <div class="step">
        <h4 style="text-align: center;">连签加分</h4>
        <div class="cu-steps"><!--外部样式第40行修改位置，content是圆内容-->
          
          <div :class="num.name>onsign?'cu-item':'cu-item text-blue'" v-for="num in numList" :key="num">
            <text class="num"></text> 
            <img :src="'http://image.myzhbit.cn/myzhbit/Getup8/'+num.con" class="img">
          </div>
        </div>
      </div>

      <div class="DayAndNum">
         <div class="all">
           <div class="blockAll" data-index="0">
              <h4>累计签到</h4>
              <span>{{signdays}}</span>
           </div>
           <div class="blockAll" data-index="1">
              <h4>今日排行</h4>
              <span>{{morningrank}}</span>
           </div>
           <div class="blockAll" data-index="2">
              <h4>积分排行</h4>
              <span>{{totalscorerank}}</span>
           </div>
         </div>
      </div>

      <div class="last" @click="createShareImage()" v-if="isSuccess">
        点击生成分享图片
      </div>
      <canvas canvas-id="url" 
             style="width: 100px;height: 100px;position: absolute;left: -99999999px;top: -99999999px;"/>
      <canvas canvas-id="sharepicture" 
             style="width: 750px;height: 470px;position: absolute;left: -99999999px;top: -99999999px;"/>
      <card :cardNum='cardNum' :morningdata='morningdata'></card>
      <outtime :cardNum='cardNum' :morningdata='morningdata'></outtime>
      <div class="clickOut" @click="backTo()"></div>
  </div>
</template>

<script>
import card from '../../components/card.vue'
import outtime from '../../components/outtime.vue'
export default {
  data () {
    return {
      isSuccess:false,  //签到确认标示
      cardNum:0,        //子组件传值，弹窗需要
      morningdata:"",   //起床后需要信息

      avatarurl:"",      //头像
      nickname:"",       //昵称 
      urldown:"",        //头像下载处理 
      
      array:[{message:"foo"},{message:"loo"}],

      key:"3rd_session",//获取个人session
      session:null,       //个人的session
      
      users:[], //获取最新签到的用户头像

      stepdate:2,
      signdays:"",      //签到天数
      onsign:"",        //连续签到天数
      morningrank:"",   //起床排名
      totalscore:"",    //总分
      totalscorerank:"",//总分排名
      imgtime: "2018 / 11 / 19 / 周五",
      deadline:"",  //四六级时间
      rankin:0,     //奖励范围

      client_id:"",     //client_id websocket连接所需
      code:"",          //登录发出的code
      login:false,         //登录态确定
      openid:"",        //个人的openid

      timeout: 10000,   //心跳测试秒数
      timeoutObj: null, //清除定时器用的对象
      serverTimeoutObj: null,
      timer: null, //重连清除对象
      limit: 0 , //重连计算次数
      Reconnect: false,//重连确认

      test:{},
      //连续签到内容
      numList: [
        {
          name: '1',
          con:"datePlus0.png"
        }, {
          name: '2',
          con:"datePlus1-1.png"
        }, {
          name: '3',
          con:"datePlus2.png"
        }, {
          name: '4',
          con:"datePlus3.png"
        },{
          name: '5',
          con:"datePlus4.png"
        },{
          name: '6',
          con:"datePlus5.png"
        }, 
      ],
    }
  },
  
  //组件引入
  components:{
    card,
    outtime,
  },
 
  //方法实现
  methods: {
    //微信API（方法后期都需要封装）
    //
    getuserinfo(){
        return new Promise(function (resolve, reject) {
        wx.getUserInfo({
            success: function (res) {
                resolve(res);
            },
            fail: function (res) {
                reject(res);
            },
        });
        });
    },
    //websocket
    //websocket连接
    linkSocket(){
      var that = this;
      wx.connectSocket({
        url: 'wss://myzhbit.cn/wss',
        success: function (res) {
          console.log('连接成功')
          that.initEventHandle();
        },
      });
    },
    //接收websocket信息
    getwebsocket(){
        return new Promise(function (resolve, reject){
        wx.onSocketMessage(function(res) {
            resolve(res);
        })
        });
    },
    //重连
    reconnect(){
      var that = this;
      console.log("尝试重连中");
      if(that.Reconnect) return;
      that.Reconnect = true;
      clearTimeout(that.timer)
      if(that.limit<12){
        that.timer = setTimeout(() => {
          this.linkSocket();
          that.Reconnect = false;
        }, 2000);
        that.limit = that.limit+1;
      }
    },
    //心跳重组
    reset(){
      var that = this;
      clearTimeout(that.timeoutObj);
      clearTimeout(that.serverTimeoutObj);
      return that;
    },
    //心跳发送
    start(){
      var that = this;
      that.timeoutObj = setTimeout (() => {
        wx.sendSocketMessage({
          data:"ping",
          success(){
            console.log("发送ping成功");
          }
        });
        that.serverTimeoutObj = setTimeout(() => {
        }, that.timeout);
      }, that.timeout);
    },
    //事件处理&websocket数据监控
    initEventHandle(){
      var that = this;
      wx.onSocketMessage((res) => {
        if(res.data == "pong"){
          console.log("pongsuccess");
          that.reset().start(); //客户端每10秒  发送心跳
        }else{
          var data = JSON.parse(res.data);
          //client_id
          if(data.code == 'init'){
            that.client_id = data.client_id;
            var url = "https://myzhbit.cn/getup/web/index.php?r=socket/socket";
            var data = {
              session: that.session,
              client_id: that.client_id,
            }
            that.setrequst(url,data);
          }
          //起床接受
          if(data.datatype == 100){
            if(data.data.usersign){
              that.isSuccess = true;
              that.morningdata = data.data;
              that.imgtime = that.morningdata.imagetime;
              that.signdays = that.morningdata.signdays;
              that.onsign = that.morningdata.onsign;
              that.morningrank = that.morningdata.getupRank;
              that.totalscorerank = that.morningdata.scoreRank;
              that.rankin = that.morningdata.rankin;
              setTimeout(function(){
                that.cardNum = 1;
              },500);
              //起床以外的时间
            }else{ 
              that.isSuccess = false;
              that.morningdata = data.data;
              setTimeout(function(){
                that.cardNum = 2;
              },1000);
            }  
          }
          //url接收
          if(data.datatype == 101){
            var length = that.users.length;
            if(length != 8){
              that.users.push(data.data);
            }else if(length == 8){  //在满员的情况下才进行队列置换
              //向左推动 注意排行的顺序
              that.users.shift();   //去除数组头元素
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
              console.log('开始播放')
            })
          }
        }
      })
      wx.onSocketOpen(()=>{
        console.log('WebSocket连接打开');
      })
      wx.onSocketError((res)=>{ 
        var that = this;
        console.log('WebSocket连接打开失败');
        that.reconnect();
      })
      wx.onSocketClose((res)=> {
        var that = this;
        console.log('WebSocket 已关闭！');
        that.reconnect();
      })
    },

    //登录功能
    //获取code检查是否已经登陆了
    getcode(){
        return new Promise(function (resolve, reject) {
        wx.login({
            success: function (res) {
              resolve(res);
            },
            fail: function (res) {
              reject(res);
            },
        })
        });
    },

    //起床接口触发
    morningrequst(url,session,client_id){
        return new Promise(function (resolve, reject){
        wx.request({
            url: url,
            method: 'POST',
            data: {
              session: session,
              client_id: client_id,
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
            },
            fail: function (res) {
            },
        });
        });
    },
    //发出请求
    setrequst(url,data){
      return new Promise(function (resolve, reject){
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
            },
        });
      });
    },
    //设置缓存
    setstorage(key,data){
        return new Promise(function (resolve, reject) {
        wx.setStorage({
            key:key,
            data: data,
            success: function (res){
              resolve(res);
            }
        })
    });
    },
    //获取缓存
    getstorage(key){
        return new Promise(function (resolve, reject) {
        wx.getStorage({
            key:key,
            success: function (res){
              resolve(res);
            },
            fail: function (res){
              res.data = null;
              resolve(res);
            }
        })
    });
    },

    //页面转移
    //登录页面
    toLogin(){
      wx.redirectTo({
        url: '../login/main'
      })
    },
    //规则
    toRule(){
      wx.navigateTo({
        url: '../rules/main'
      })
    },
    //排行榜
    tophang(){
       wx.navigateTo({
        url: '../phang/main'
      })
    },
    //个人信息
    toperson(){
      wx.switchTab({
        url: '../person/main'
      })
    },
    //签到后显示的信息
    tomorninginfo(){
      var that = this;
      that.cardNum = 1;
    },

    // 签到
    comeOn(){
      var that = this;
      wx.showToast({
      title: '正在签到',
      icon: "loading",
      mask:'true',
      duration: 1000,
      complete:function(){
      that.getstorage(that.key)
      .then((res) => {
        that.session = res.data;
      })
      var url = "https://myzhbit.cn/getup/web/index.php?r=morning/getup";
      that.morningrequst(url,that.session,that.client_id);
      }
     })
    },
    backTo(){
      this.cardNum = 0;
    },

    //获取图片背景
    chooseImage(){
      return new Promise(function (resolve, reject) {
      wx.chooseImage({
        success:function (res){
          resolve(res);
        }
      })
      })
    },
    getImginfo(url){
      return new Promise(function (resolve, reject) {
      wx.getImageInfo({
        src: url,
        success: function (res) {
          resolve(res);
        }
      })
      })
    },
    getImg(url){
      return new Promise(function (resolve, reject) {
      wx.downloadFile({
        url: url,
        success: function (res) {
          if (res.statusCode === 200) {
            resolve(res);
          }
        },
        fail:function(res){
          console.log("获取图片失败"+res);
        }
      })
      })
    },
    //返回绘制图片详细地址
    canvasToTempFilePath(canvasId) {
      return new Promise(function (resolve, reject) {
      wx.canvasToTempFilePath({
        canvasId: canvasId,
        success: function (res) {
          resolve(res);
        }
      })
      })
    },
    //预览图片
    previewImg(path){
      console.log(path);
      return new Promise(function (resolve, reject) {
        wx.previewImage({
          urls: [path]
        })
      })
    },
    createAvatarurl(){
        var that = this;
        that.getImg(that.avatarurl)
        .then((res) => {
          var ctx = wx.createCanvasContext('url');
          ctx.save();
          ctx.arc(50, 50, 50, 0, 2 * Math.PI);
          ctx.setLineWidth(1);
          ctx.setStrokeStyle('white');
          ctx.clip();
          ctx.drawImage(res.tempFilePath, 0, 0, 100, 100);        
          ctx.draw(true,(()=>{
            setTimeout(() => {
              wx.canvasToTempFilePath({
                canvasId: "url",
                success: function (res) {
                  that.urldown = res.tempFilePath;
                }
              })
            }, 300);
          }));
          //return that.canvasToTempFilePath('url');
        })
    },
    createShareImage(){
      var that = this;
      wx.showToast({
      title: '正在生成图片',
      icon: "loading",
      mask:'true',
      duration: 3000,
      complete:function(){
        var tempurl = 'https://image.myzhbit.cn/myzhbit/Getup/share.png';
        var ctx = wx.createCanvasContext('sharepicture');
        that.getImg(tempurl)
        .then((res) => {
          var temp = res.tempFilePath;
          ctx.drawImage(temp,0, 0,750,470);
          ctx.draw();
          ctx.font = "100px 宋体"; 
          ctx.fillStyle = "#605f5f";
          ctx.fillText(that.morningdata.time,250,272);
          ctx.font = "normal normal bold 20px 宋体";
          ctx.strokeStyle = "#605f5f";
          ctx.lineWidth = 4;      
          ctx.fillStyle = "#ffffff";
          /***右边标题***/
          ctx.font = "normal normal bold 18px 宋体";
          ctx.strokeText(that.imgtime,19,35);
          ctx.fillText(that.imgtime,19,35);
          /***奖品***/
          ctx.font = "normal normal bold 25px 宋体";
          ctx.strokeText(that.morningdata.mget,19,85);
          ctx.fillText(that.morningdata.mget,19,85); 
          /***左侧标题***/
          /***四六级期限***/
          if(that.deadline < 10){
            ctx.font = "normal normal bold 21px 宋体";
            ctx.strokeText(that.deadline,695,36);
            ctx.fillText(that.deadline,695,36);
          }else if(that.deadline >= 10 && that.deadline < 100){
            ctx.font = "normal normal bold 21px 宋体";
            ctx.strokeText(that.deadline,688,36);
            ctx.fillText(that.deadline,688,36);
          }
          /***起床排名***/
          if(that.morningrank < 10){
            ctx.font = "normal normal bold 21px 宋体";
            ctx.strokeText(that.morningrank,695,66);
            ctx.fillText(that.morningrank,695,66);
          }else if(that.morningrank >= 10 && that.morningrank < 100){
            ctx.font = "normal normal bold 21px 宋体";
            ctx.strokeText(that.morningrank,689,66);
            ctx.fillText(that.morningrank,689,66);
          }else if(that.morningrank > 100){
            ctx.font = "normal normal bold 18px 宋体";
            ctx.strokeText(that.morningrank,684,66);
            ctx.fillText(that.morningrank,684,66);
          }
          /***签到天数***/
          if(that.morningdata.signdays < 10){
            ctx.font = "normal normal bold 21px 宋体";
            ctx.strokeText(that.morningdata.signdays,694,96);
            ctx.fillText(that.morningdata.signdays,694,96);
          }else if(that.morningdata.signdays >= 10 && that.morningdata.signdays < 100){
            ctx.font = "normal normal bold 21px 宋体";
            ctx.strokeText(that.morningdata.signdays,688,96);
            ctx.fillText(that.morningdata.signdays,688,96);
          }
          /**** ****/   
          ctx.drawImage(that.urldown,353,378,44,44);
          // ctx.draw(true);
          //把生成路径写在draw的回调方法中，保证在draw写完后再生成路径
          ctx.draw(true,(()=>{
            setTimeout(() => {
              wx.canvasToTempFilePath({
                canvasId: 'sharepicture',
                success: function (res) {
                  that.previewImg(res.tempFilePath);
                }
              })   
            }, 300);
          })());
        })      
      }//complete end
     })   
    },
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
    var that = this;
    that.getstorage(that.key)
    .then((res) => {
      that.session = res.data;
      return that.getcode();
    })
    .then((res) => {
      that.code = res.code;
      var data = {
        code : that.code,
        session : that.session,
      }
      var url = 'https://myzhbit.cn/getup/web/index.php?r=init/login';
      return that.setrequst(url, data);
    })
    .then((res) => {
      that.login = res.data.data.login;
      that.session = res.data.data.session;
      that.setstorage(that.key,that.session);
    })
    .then((res) => {
      if(that.login){
        that.linkSocket();
        wx.showToast({
        title: '加载中',
        icon: "loading",
        mask:'true',
        duration: 500,
        complete:function(){        
          that.getstorage(that.key)
          .then((res) => {
            var url = 'https://myzhbit.cn/getup/web/index.php?r=user/userdata';
            var data = {
              session: that.session
            }
            return that.setrequst(url,data);
          })
          .then((res) => {
            that.onsign = res.data.data.onsign;
            that.signdays = res.data.data.signdays;
            that.morningrank = res.data.data.morningrank;
            that.totalscorerank = res.data.data.scoreRank;
            that.isSuccess = res.data.data.usersign;
            that.deadline = res.data.data.englishtime;
            //console.log(res.data.data.lastten);
            if(res.data.data.lastten){
              that.users = Object.values(res.data.data.lastten);
            }
            if(that.isSuccess){
              that.morningdata = res.data.data.userinfo;
              that.imgtime = that.morningdata.imagetime;
            }
            if(res.data.data.userinfo.getupRank != 0){
              that.rankin = res.data.data.userinfo.rankin;
            }
          })
        }
        });
      }else{
        that.toLogin();
      }
    })
    .then((res) => {
       return that.getuserinfo();
    })
    .then((res) => {
      that.avatarurl = res.userInfo.avatarUrl;
      that.nickname = res.userInfo.nickName;
      var data = {
        session : that.session,
        avatarurl : that.avatarurl,
        nickname : that.nickname,
      }
      var url = "https://myzhbit.cn/getup/web/index.php?r=init/checkan";
      that.createAvatarurl();
      return that.setrequst(url, data);
    })
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow(){
    var that = this;
    that.initEventHandle();
    if(that.login){
      that.getstorage(that.key)
      .then((res) => {
        var url = 'https://myzhbit.cn/getup/web/index.php?r=user/userdata';
        that.session = res.data;
        var data = {
          session: that.session
        }
        return that.setrequst(url,data);
      })
      .then((res) => {
        that.onsign = res.data.data.onsign;
        that.signdays = res.data.data.signdays;
        that.morningrank = res.data.data.morningrank;
        that.totalscorerank = res.data.data.scoreRank;
        that.isSuccess = res.data.data.usersign;
        that.users = res.data.data.lastten;
        if(that.users){
          that.users = Object.values(that.users);
          //console.log(that.users);
        }
        if(that.isSuccess){
          that.morningdata = res.data.data.userinfo;
          that.imgtime = that.morningdata.imagetime;
        }
        if(res.data.data.userinfo.getupRank != 0){
          that.rankin = res.data.data.userinfo.rankin;
        }
      })
    }
  },


  created () {
    // 调用应用实例的方法获取全局数据
  },
  mounted () {
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    
  },

}
</script>


<style lang="scss" scoped>
  @import "./index";
</style>

