/**
 * 基于Promise封装网络请求
 * 引入了https://github.com/tildeio/rsvp.js
 */

import { Promise } from '../../libs/rsvp-latest.min';

export default class NetUtil{

  //发生Post请求，格式为JSON
  static postJson(url, data){
    return NetUtil.requestJson(url, data,"post");
    }
    //发生get请求，格式为JSON
    static getJson() {
      return NetUtil.requestJson(url, data, "get");
    }

    //发起请求
    static requestJson(url,data,method){
      data = data || {};
      return new Promise(function(resolve,reject){
        wx.request({
          url: url,
          method:method,
          data:data,
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success:function(res){
            resolve(res);
          },
          fail: function (res) {
            reject(res);
          }
        })
      })
    }

    // 上传文件
    static uploadFile(url, filePath, name, data) {
      data = data || {};
      return new Promise(function (resolve, reject) {
        wx.uploadFile({
          "url": url,
          "filePath": filePath,
          "name": name,
          "formData": data,
          success: function (res) {
            resolve(res);
          },
          fail: function (err) {
            reject(err);
          }
        })
      });
    }
}