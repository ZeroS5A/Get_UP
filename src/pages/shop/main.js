import Vue from 'vue'
import App from './shop'

const app = new Vue(App)
app.$mount()

export default {
    config: {
      navigationBarTitleText: '积分商城'
    }
  }