//util.js

//引入组件
import { Promise } from '../../libs/rsvp-latest.min';
import netUtil from "./netUtil.js";
import uiUtil from './uiUtil.js';


function login(){
  return new Promise( function(resolve, reject){
      wx.login({
        success:function(res){
          resolve(res);
        },
        fail:function(res){
          reject(res);
        }
      });
  });
}

 function getUserInfo(){
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
 }

function getWakeupInfo(openid) {
  var Config = getApp().Config; //注意与let的使用 diff
  return new Promise(function (resolve, reject) {
    wx.request({
      url: 'https://myzhbit.cn/wakeup/web/?r=rank/getuserinfo',//获取openid url
      method: 'POST',
      data: {
        openid:openid,
      },
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
}

//https://myzhbit.cn/upload/web/index.php?r=init/getopenid
//https://wilsonj.club/wakeup/web/index.php?r=init/getopenid1

 function getOpenIdAndKey(code, nickname, avatarUrl){
    //var Config = getApp().Config; //注意与let的使用 diff
    return new Promise(function (resolve, reject){
      wx.request({
        url: 'https://myzhbit.cn/wakeup/web/?r=init/getopenid',//获取openid url
        method: 'POST',
        data: {
          js_code: code,
          name : nickname,
          avatarUrl: avatarUrl
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          resolve(res);
          console.log(res);
        },
        fail: function (res) {
          reject(res);
        },
      });
    });
  }


module.exports = {
  "NET": netUtil, //用net 可以使用netUitl组建包
  "UI": uiUtil,
  "login": login,
  "getUserInfo": getUserInfo,
  "getOpenIdAndKey": getOpenIdAndKey,
  "getWakeupInfo": getWakeupInfo,
}