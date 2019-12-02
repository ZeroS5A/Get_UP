import Vue from 'vue'
import App from './App'
import "./utils/steps.wxss"

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main','pages/shop/main','pages/person/main','pages/phang/main','pages/rules/main','pages/login/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      "selectedColor":"#f56f61",
      "backgroundColor":"#fff",
      "borderStyle":"white",
      "list": [{
        "width":"10rpx",
        "height":"10rpx",
        "pagePath": "pages/index/main",
        "iconPath":"./static/assets/首页灰.png",
        "selectedIconPath":"./static/assets/首页.png",
        "text": "首页"
      },{
        "pagePath": "pages/shop/main",
        "iconPath":"./static/assets/购物车灰.png",
        "selectedIconPath":"./static/assets/购物车红.png",
        "text": "商城"
      },{
        "pagePath": "pages/phang/main",
        "iconPath":"./static/assets/排行榜灰.png",
        "selectedIconPath":"./static/assets/排行榜红.png",
        "text": "排行榜"
      },{
        "pagePath": "pages/person/main",
        "iconPath":"./static/assets/个人中心灰.png",
        "selectedIconPath":"./static/assets/个人中心.png",
        "text": "个人中心"
      }]
    }
  }
}
