import Vue from 'vue'
import App from './person'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '个人中心'
  }
}
