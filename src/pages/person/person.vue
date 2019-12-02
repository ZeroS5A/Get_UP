<template>

  <div>
      <!--手机获取模态窗-->
    <modal :hidden="modalstate" title="重新绑定手机号" confirm-text="提交" cancel-text="取消" @cancel="cancel()" @confirm="getPhone2()" style="padding:0">  
      <div>
      <input style="border: 2px solid #227D51;border-radius: 5px;width:60%;float:left;height:50rpx" type="text" placeholder="手机号码" v-model="userdata.phone" auto-focus>
      <button style="width:33%;float:right" size="mini" open-type="getPhoneNumber" @getphonenumber="getPhone" type="primary">自动获取</button>
      </div>
      <div style="clear:both"></div>
    </modal>
        <!--规则内容模态窗-->
    <modal :hidden="rulemodal" title="关于我们" confirm-text="好的" no-cancel="true" @confirm="cancel()">  
      <scroll-view  scroll-y="true" class="shop-model">
          <div style="height:30px"></div>
          <h2>Hi 各位北理珠北鼻们！</h2>
          <p>
            作为北理珠最大的非官方媒体，我们一直尽最大的努力建设一个可爱、自由的地方给大家带来欢乐
          </p>
          <h2>你想知道的，我们都有！</h2>
            <p>后台回复关键字即可获取相关信息</p>
          <h2>你想说的，我们帮你！</h2>
            <p>欢迎评论或者投稿（大声栏目）</p>
          </p>

          <img src="http://image.myzhbit.cn/%E5%B0%8F%E6%8A%A5%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg" class="img">

          <h2>最后欢迎北鼻在后台留下你的建议或意见！</h2>
          <p style="font-size:5px;float:right">BY  electronicAE.、Climsi、Sevexw、ZeroS</p>
      </scroll-view>
      <div></div>
    </modal>
     <div class="head">
        <div class="top">
          <div class="img">
            <open-data  type="userAvatarUrl"></open-data>
          </div>
          <div class="username">
            <open-data type="userNickName" open-gid="xxxxxx"></open-data>
          </div>
          <div class="sign">
            <div class="No" v-if="!isSuccess">
              未签到
            </div>
            <div class="Is" v-if="isSuccess">
              已签到
            </div>
          </div>
        </div>
        <div class="bottom">
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
                    <h4>总积分</h4>
                    <span>{{totalscore}}</span>
                </div>
              </div>
            </div>
        </div>
        
     </div>
     <div class="ather">
        <div class="rebind" @click="modalstate=false"><p class="left">重新绑定手机</p><p class="right">></p></div>
        <div class="about" @click="rulemodal=false"><p class="left">关于我们</p><p class="right">></p></div>
     </div>
     
     <div class="recoveTitle">
        <img src="http://image.myzhbit.cn/myzhbit/Getup/record.png">
        <div class="userdata">
          <div class="tr">
            <div class="th" style="width: 25%">签到时间</div>
            <div class="th" style="width:60rpx"></div>
            <div class="th">签到积分</div>
            <div class="th">连签加分</div>
          </div>
        </div>
     </div>
     <scroll-view scroll-y class="scoll-look">
      <div class="user">
        <div class="date">
          <div v-for="(item,key,index) in datedata" :key="index" class="datetr">
            <div class="datetd" v-if="item.rank==0">{{item.date}}</div>
            <div class="datetd" style="color:rgb(245,111,97)" v-if="item.rank<11 && item.rank!=0">{{item.date}}</div>
            <div class="datetd" v-if="item.rank>10">{{item.date}}</div>
          </div>
        </div>
        <div class="table">
          <div v-for="(item,key,user) in datedata" :key="user" class="tr">
            <div class="tdnorank" style="width: 25%" v-if="item.rank==0">未签到</div>
            <div class="tdrank" style="width:60rpx;" v-if="item.rank==0"></div>
            <div class="tdscore" v-if="item.rank==0">0</div>
            <div class="tdsignscore" v-if="item.rank==0">+0</div>

            <div class="td" style="color:rgb(245,111,97);width: 25%" v-if="item.rank<11 && item.rank!=0">{{item.time}}</div>
            <div class="tdrank" style="color:rgb(156,210,235);" v-if="item.rank<11 && item.rank!=0">前十</div>
            <div class="td" style="color:rgb(245,111,97);" v-if="item.rank<11 && item.rank!=0">{{item.score}}</div>
            <div class="td" style="color:rgb(245,111,97);" v-if="item.rank<11 && item.rank!=0">{{item.signscore}}</div>

            <div class="td" style="width: 25%" v-if="item.rank>10">{{item.time}}</div>
            <div class="tdrank" style="width:60rpx;" v-if="item.rank>10"></div>
            <div class="td" v-if="item.rank>10">{{item.score}}</div>
            <div class="td" v-if="item.rank>10">{{item.signscore}}</div>
          </div>
        </div>
      </div>
     </scroll-view>
  </div>
</template>


<script>
export default {
  data() {
    return {
       avatarUrl:"",
       username:"",
       signdays:"",
       morningrank:"",
       totalscore:"",
       datedata:"",
       rank:" ",
       isSuccess:false,
       key:"3rd_session",

       modalstate:true,
       rulemodal:true,
        userdata:{
          phonestatue:'',
          phone:'',
          jifen:'', 
        },
    }
  },
  methods: {
    //微信API
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
    setrequst(url,session){
        return new Promise(function (resolve, reject){
        wx.request({
            url: url,
            method: 'POST',
            data: {
              session: session,
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                resolve(res);
                //console.log(res);
            },
            fail: function (res) {
                reject(res);
                //console.log(res);
            },
        });
        });
    },
    //取消按钮  
    cancel(){  
      this.modalstate=true
      this.rulemodal=true
    },  
    //确认 
    confirm(){
      this.modalstate=true 
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 1000
      })
    },
    //自动获取手机按钮
    getPhone(e){
      if(e.mp.detail.iv==null){
        wx.showToast({
          title: '呜呜，被拒绝了',
          icon: 'none',
          duration: 2000
        })
        console.log("获取手机失败")
      }else{
        var etc={
          session:this.session,
          encryptedData:e.mp.detail.encryptedData,
          iv:e.mp.detail.iv,
          phone:this.userdata.phone
        };
        this.upPhone(etc);
        }
    },
    //手动提交手机
    getPhone2(){
      //判断手机号正则
      if(!(/^1[34578]\d{9}$/.test(this.userdata.phone))){
        wx.showToast({
          title: "手机号填错啦！！可以试试自动噢~",
          icon: 'none',
          duration: 2000
        })
      }else{
        var etc={session:this.session,encryptedData:'',iv:'',phone:this.userdata.phone}
        this.upPhone(etc);    
      }

    },
    //上传手机请求
    upPhone(etc){
      var url='https://myzhbit.cn/getup/web/?r=init/getnumber';
      var data=etc;
      
      this.getrequest(url,data)
      .then((res)=>{
        this.confirm();
      })
    },
    //请求获取封装
    getrequest(url, data){
      return new Promise(function (resolve, reject){
        wx.request({
            url: url,
            method: 'POST',
            data: data,
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                //console.log(res);
                resolve(res);
            },
            fail: function (res) {
                reject(res);
            },
        });
      });
    },
  },
  
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
  }, 

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(){
     try {
      var that = this;
      wx.showToast({
        title: '加载中',
        icon: "loading",
        mask:'true',
        duration: 500,
        complete:function(){
            that.getstorage(that.key)
            .then((res) => {
              that.session = res.data
              var url = 'https://myzhbit.cn/getup/web/index.php?r=user/userdata';
              return that.setrequst(url,that.session);
            })
            .then((res) => {
              that.username = res.data.data.nickName;
              that.avatarUrl = res.data.data.avatarUrl;
              that.signdays = res.data.data.signdays;
              that.morningrank = res.data.data.morningrank;
              that.totalscore = res.data.data.totalscore;
              that.isSuccess = res.data.data.usersign;
              var url = "https://myzhbit.cn/getup/web/index.php?r=user/signrecord";
              return that.setrequst(url,that.session);
            })
            .then((res) => {
              that.datedata = res.data.data;
              //console.log(that.datedata);
            })
        }
      });
    } catch (e) {
        // Do something when catch error
    }
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
  @import "./person";
</style>


