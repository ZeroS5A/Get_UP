<script>
import mta from 'mta-wechat-analysis';
export default {
  data() {
    return{
      phone: false,
      userInfo: false
    }
  },
  created () {
    wx.getSystemInfo({ success: res => {
      let modelmes = res.model.search('iPhone X')
      if (modelmes === 0) {
        var that  = this;
        that.phone = true;
      }
     }
    })
  },
}
</script>

<style>
page{
  background-color: #F8F8F9;
}

/* this rule will be remove */
* {
  padding: 0px;
  margin: 0px;
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
