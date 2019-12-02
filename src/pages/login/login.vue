<template>
    <div class="head">
        <div>
            <image class="clock" src="http://image.myzhbit.cn/myzhbit/Getup/clock.png"></image>
        </div>
        <div>
            <image class="tittle" src="http://image.myzhbit.cn/myzhbit/Getup/logintittle.png"></image>
        </div>
        <div>
            <button class="login" lang="zh_CN" open-type='getUserInfo' @getuserinfo="bindGetUserInfo" style="background-image:url(http://image.myzhbit.cn/myzhbit/Getup/loginbutton.png);" plain='true'></button>
        </div>
    </div>  
</template>

<script>
import promise from 'promise';
export default {
  //数据初始化
  data () {
    return {
       iv: null,           //微信解密需要iv
       encryptedData: null,//微信解密需要en

       session: null,      //个人session
       key: "3rd_session", //获取session
    }
  },
  methods:{
    //跳转函数
    getstorage(key){
        return new Promise(function (resolve, reject) {
        wx.getStorage({
            key:key,
            success: function (res){
                resolve(res);
            }
        })
    });
    },
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
    getopenid(session,encryptedData,iv){
        return new Promise(function (resolve, reject){
        wx.request({
            url: 'https://myzhbit.cn/getup/web/index.php?r=init/userinfo',//获取openid url
            method: 'POST',
            data: {
                session: session,
                encryptedData: encryptedData,
                iv: iv,
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
            },
        });
        });
    },
    toIndex(){
        wx.reLaunch({
            url: '../index/main'
        })
    },
    
    //登录功能
    bindGetUserInfo(res){
        var that = this;
        that.getuserinfo()
        .then((res) => {
            that.iv = res.iv;
            that.encryptedData = res.encryptedData;
            return that.getstorage(that.key);
        })
        .then((res) => {
            that.session = res.data;
            return that.getopenid(that.session,that.encryptedData,that.iv); 
        })
        .then((res) => {
            that.toIndex();
        })
    },

  },
  created(){
    
  },
}
</script>

<style lang="scss" scoped>
  @import "./login";
</style>


