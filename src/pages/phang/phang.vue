<template>
    <div>
        <div class="head">
            <div class="qiaodao" @click="toqiao()" :style="style1">签到排行</div>
            <div class="jifeng" @click="tojifeng()" :style="style2">积分排行</div>
        </div>
        <div class="title" v-if="number==1">
          <div class="spannumber">名次</div>
          <div class="avartUrl"></div>
          <div class="spannameTime">
            <div class="spanname">昵称</div>
            <div class="spantime">签到时间</div>
          </div>
        </div>
        <div class="signtoday" style="background-color:#fff;" v-if="number==1">
          <div class="offsigntoday" v-if="!signtoday">
            你今天还没签到
          </div>
          <div class="title" v-if="signtoday">
            <div class="number" style="color:rgb(245,111,97)">{{usermorning.rank}}</div>
            <div class="avartUrl">
              <img v-bind:src="usermorning.avatarurl">
            </div>
            <div class="nameTime">
              <div class="name">{{usermorning.nickname}}</div>
              <div class="time" >
                <div style="width:110rpx;text-align:center;color:rgb(245,111,97)">{{usermorning.time}}</div>
              </div>
            </div>
          </div>
        </div>
 
        <scroll-view scroll-y="true" class="phone" v-if="number==1">
          <view class="phb" style="margin-top:17rpx" v-for="morning in morning" :key="morning">
            <div class="title" style="background-color:#fff;">
              <div class="number" style="color:rgb(245,111,97)">
                <div  v-if="morning.rank<4" :class="'no'+morning.rank"></div>
                <div  v-if="morning.rank>3" class="afferthird">{{morning.rank}}</div>
              </div>
              <div class="avartUrl">
                <img v-bind:src="morning.avatarurl">
              </div>
              <div class="nameTime">
                <div class="name">{{morning.nickname}}</div>
                <div class="time">
                  <div style="width:110rpx;text-align:center;color:rgb(245,111,97)">{{morning.time}}</div>
                </div>
              </div>
            </div>
          </view>
        </scroll-view>
        


        <div class="title" v-if="number==2">
          <div class="spannumber">名次</div>
          <div class="avartUrl"></div>
          <div class="spannameTime">
              <div class="spanname">昵称</div>
              <div class="spanscore">积分数量</div>
          </div>
        </div>
        <div class="issign" style="background-color:#fff;" v-if="number==2">
          <div class="offsign" v-if="!sign">
            <test>你还没开始签到获取积分～</test>
          </div> 
          <div class="title" v-if="sign">
            <div class="number" style="color:rgb(245,111,97)">{{userscore.ScoreRank}}</div>
            <div class="avartUrl">
              <img v-bind:src="userscore.avatarurl">
            </div>
            <div class="nameTime">
              <div class="name">{{userscore.nickname}}</div>
              <div class="score" >
                <div style="width:110rpx;text-align:center;color:rgb(245,111,97)">{{userscore.totalscore}}</div>
              </div>
            </div>
          </div>
         </div>
         <scroll-view scroll-y="true" class="phone" v-if="number==2">
          <view class="phb" style="margin-top:17rpx" v-for="scorerank in scorerank" :key="scorerank" v-if="scorerank.totalscore>0">
            <div class="title" style="background-color:#fff;">
                <div class="number" style="color:rgb(245,111,97)">
                  <div  v-if="scorerank.rank<4" :class="'no'+scorerank.rank"></div>
                  <div  v-if="scorerank.rank>3" class="afferthird">{{scorerank.rank}}</div>
                </div>
                <div class="avartUrl">
                  <img v-bind:src="scorerank.avatarurl">
                </div>
                <div class="nameTime">
                  <div class="name">{{scorerank.nickname}}</div>
                  <div class="score" >
                    <div style="width:110rpx;text-align:center;color:rgb(245,111,97)">{{scorerank.totalscore}}</div>
                  </div>
                </div>
            </div>
          </view>
         </scroll-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            session:"",
            key:"3rd_session",
            setdata:null,

            usermorning:"",
            userscore:"",
            morning:"",
            scorerank:"",
            deadline:true,
            sign:"",
            signtoday:"",
            style1:'border-bottom:1px solid rgb(245,111,97)',
            style2:'',
            number:1,
        }
       
    },
    methods:{
        //微信API 
        //缓存获取
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
        //接收websocket信息
        getwebsocket(){
            return new Promise(function (resolve, reject){
            wx.onSocketMessage(function(res) {
                resolve(res);
            })
            });
        },
        //发送请求
        setrequst(url,data){
            var that = this;
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
        toqiao(){
            this.style1 = 'border-bottom:1px solid rgb(245,111,97)',
            this.style2 ='',
            this.number = 1
        },
        tojifeng(){
            this.style1 = '',
            this.style2 = 'border-bottom:1px solid rgb(245,111,97)',
            this.number = 2
        },
    },



    /**
    * 生命周期函数--监听页面加载
    */
    onLoad(){ 
      wx.showToast({
      title: '加载中',
      icon: "loading",
      mask:'true',
      duration: 500,
      complete:function(){

      }
     }) 
    }, 

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(){
     try {
        var that = this;
        that.getstorage(that.key)
          .then((res) => {
            that.session = res.data;
            that.setdata = {
              session: that.session,
            }
            var url = "https://myzhbit.cn/getup/web/index.php?r=rank/morningrank";
            that.setrequst(url,that.setdata);
            return that.getwebsocket();
          })
          .then((res) => {
            var res = JSON.parse(res.data);
            that.signtoday = res.data.user.signtoday;//判断是否签到了
            if(that.signtoday){
              that.usermorning = res.data.user.user;//签到了个人信息赋值
            }else{
              that.usermorning = res.data.content;//没有签到个人content
            }
            if(res.data.morningRank){
              that.morning = res.data.morningRank;//起床排行 
            }
            var url = "https://myzhbit.cn/getup/web/index.php?r=rank/scorerank";
            that.setrequst(url,that.setdata);
            return that.getwebsocket();
          })
          .then((res) => {
            var res = JSON.parse(res.data);
            //console.log(res.data.scoreRank);
            that.sign = res.data.user.sign;//判断是否已经签到过
            if(that.sign){
              that.userscore = res.data.user.user;//个人信息赋值
            }else{
              that.userscore = res.data.user.content;
            }
            if(res.data.scoreRank){
              that.scorerank = res.data.scoreRank;//积分排行
            }
          })
      } catch (e) {
        // Do something when catch error
      }

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom(){
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(){
    
  },
}
</script>

<style lang="scss" scoped>
@import './phang'
</style>
