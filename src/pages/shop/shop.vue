<template>

  <div>
    <!--手机获取模态窗-->
    <modal :hidden="modalstate" title="提示" confirm-text="提交" cancel-text="取消" @cancel="cancel()" @confirm="getPhone2()">  
      <div class="model-msg">请填写你的手机号码作为唯一凭据</div>
      <div>
      <input style="border: 2px solid #227D51;border-radius: 5px;width:60%;float:left;height:50rpx" type="text" placeholder="手机号码" v-model="userdata.phone" auto-focus>
      <button style="width:33%;float:right" size="mini" open-type="getPhoneNumber" @getphonenumber="getPhone" type="primary">自动获取</button>
      </div>
      <div style="clear:both"></div>
    </modal>
    <!--规则内容模态窗-->
    <modal :hidden="rulemodal" title="规则" confirm-text="好的" no-cancel="true" @confirm="cancel()">  
      <scroll-view  scroll-y="true" class="shop-model">
        <div>
          <div>
            
            <h2 class="h2">关于积分：</h2>
            
            <p>北鼻们签到一次能获得两种积分：
            <p></p>
            <p>1、<span style="color:red">排行积分</span>，用于积分排行 </p>
            <p>2、<span style="color:red">商城积分</span>，两种积分互不干扰，
              商城积分的使用不会影响北鼻签到总积分的排行榜排名，所以北鼻可尽情冲击21天后的终极大奖噢!</p>
            
            <h2 class="h2">关于兑换：</h2>
            
            <p>1、商品兑换无日期限制，可持续到所有商品被兑换完毕，但是由于其他意外可能会暂时下架噢</p>
            <p>2、第一次兑换商品需要手机号呢，这可以为以后我们给北鼻赠送或者补偿提供联络方式</p>
            <p></p>
            <h2 class="h2">关于使用：</h2>
            
            <p>1、北鼻兑换成功后，到对应的商铺去使用，向店员（或者我们的工作人员）出示该优惠券，并由店员点击使用按钮</p>
            <p>2、若是北鼻手误点了使用并确认使用，我们也无能为力呢~</p>
            <p>3、所以北鼻在兑换时请小心使用！</p>
            <p>-></p>
            <p>如果兑换失败或者其他问题，请及时在公众号向小北反馈噢</p>
            <p>-></p>
            <h2 class="h2">北理小报保留对以上规则的解释权</h2>
          </div>
      </div>
      </scroll-view>
    </modal>
    <!--商品内容模态窗-->
    <modal :hidden="shopmodal" :title="shoplins.description" confirm-text="好的" no-cancel="true" @confirm="cancel()">  
      <scroll-view  scroll-y="true" class="shop-model">
        <div>
          <img class="img" :src="shoplins.image">
          <div>
            
            <h2 class="h2">过期时间：</h2>
            
            <p>{{shoplins.soldoutTime}}</p>
            <p></p>
            
            <h2 class="h2">优惠说明：</h2>
            
            <p>{{shoplins.couponExplain}} </p>
            <p></p>
            
            <h2 class="h2">使用说明：</h2>
            
            <p>{{shoplins.useExplain}}</p>
          </div>
      </div>
      </scroll-view>

    </modal>

    <div class="head">
        <div class="list" @click="toshop()" :style="style1">商品列表</div>
        <div class="list" @click="tolog()" :style="style2">兑换记录</div>
        
    </div>
    
    <div class="jifen" v-if="number==1">
        <div class="yuer">积分余额</div>
        <div class="jifen-num">💰{{userdata.jifen}}分</div>
        <img class="rule" @click="showrule()" src="http://image.myzhbit.cn/myzhbit/Getup/index/rule.png">
    </div>

    <scroll-view  scroll-y="true" class="shop1" v-if="number==1">
      <div class="shop-list">
        <div class="shop-item" v-for="sl in shoplist" :key="sl">
          <div class="shop-msg" @click="shopDetail(sl)"><!-- :style="styleHead+sl.image+styleEnd"-->
            <div style="padding: 10rpx">
              <p style="font-size: 50rpx;font-weight: bold;color:black">{{sl.score}}<span style="font-size: 20rpx;">&nbsp;积分</span></p>
              <p></p>
              <p>{{sl.name}}</p>
              <div class="border"></div>
              <p style="font-size: 25rpx;">{{sl.description}}</p>
              
            </div>
          </div>
          <div class="shop-msg2">
            <div style="width:100%;text-align: center;">
              <div style="color:#5F6263">还剩<span style="color:red">{{sl.count}}</span>个</div>
            </div>
            <div class="button" @click="choseshop(sl)">
              兑换
            </div>
          </div>
        </div>
      </div>

    </scroll-view>

    <scroll-view  scroll-y="true" class="shop" v-if="number==3">
      <div class="shop-list" v-for="sl in shoplist" :key="sl">  
          <div class="shop-item" @click="choseshop(sl)">
            <div class="shop-img">
              <img class="shop-img" :src="sl.img">
              <div class="shop-img2">&nbsp;&nbsp;&nbsp;{{sl.name2}}</div>
            </div>
            <div class="shop-msg">
              <div class="left">
                {{sl.name}}
              </div>
              <div class="right">
                💰&nbsp;{{sl.much}}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;🎁&nbsp;{{sl.left}}
              </div>
            </div>
          </div>
      </div>
    </scroll-view>
    
    <scroll-view scroll-y="true" class="log" v-if="number==2">
      <div v-if="tick==''" style="text-align: center;margin-top:50rpx;color:#F19483">你还没有兑换任何奖品噢！</div>
      <div class="log-item" v-for="tk in tick" :key="tk">
        <div class="log-left" :style="tk.state==0?'background:rgb(110, 101, 98);':''">
          <div ><img class="log-img" :src="tk.image"></div>
          <div class="log-msg">
            <div style="font-weight: bold;">{{tk.name}}</div>
            <div>------------------</div>
            <div style="font-size: 25rpx;">{{tk.state==0?'使用日期':'截止使用'}}:{{tk.state==0?tk.useTime:tk.soldoutTime}}</div>
          </div>
          
        </div>
        <div class="log-right" @click="duihuan(tk)" :style="tk.state==0?'background:rgb(110, 101, 98);margin-left: 10px;':''">
          <span>{{tk.state==0?'已使用':'使用'}}</span>
        </div>
        
      </div>
      <!-- <button   @click="getuid()" type="primary">授权</button> -->
    </scroll-view>
  </div>
</template>

<script>

export default {
  components: {
   
  },

  data () {
    return {
      style1:'border-bottom:1px solid rgb(245,111,97)',
      style2:'',
      styleHead:'background-image: url(',
      styleEnd:')',
      number:'1',
      //三个模态窗状态
      modalstate:true,
      rulemodal:true,
      shopmodal:true,
      session:'',
      userdata:{
        phonestatue:'',
        phone:'',
        jifen:'', 
      },
      //商品列表+商品具体信息+优惠券列表
      shoplist:'',
      shoplins:'',
      tick:'',
    }
  },
  methods:{
    toshop(){
      this.style1 = 'border-bottom:1px solid rgb(245,111,97)',
      this.style2 ='',
      this.number = 1
    },
    tolog(){
      this.style1 = '',
      this.style2 ='border-bottom:1px solid rgb(245,111,97)',
      this.number = 2
    },
    tel (){
      this.modalstate=false

    },
    shopDetail(sll){
      this.shopmodal=false
      this.shoplins=sll;
    },
    //取消按钮  
    cancel(){  
      this.modalstate=true
      this.rulemodal=true
      this.shopmodal=true   
    },  
    //确认  
    confirm(){
      this.modalstate=true 
      wx.showToast({
        title: '填写成功',
        icon: 'success',
        duration: 1000
      })
    },
    //规则
    showrule(){
      this.rulemodal=false;
    },
    //兑换商品操作
    choseshop(sl){
      if(this.userdata.phonestatue==0){
        this.userdata.phone==''       
        this.tel();
      }else{
        wx.showModal({
          title: '提示',
          content: '确定兑换'+sl.name+'吗？',
          //改成这个样式可以把this传入
          success:(res)=>{
            if (res.confirm) {
              this.useshop(sl);
            } else if (res.cancel) {
              //console.log('用户点击取消')
            }
          }
        })        
      } 
    },
    //兑换券操作
    duihuan (tk){
      //this.userdata.jifen='999'
      if(tk.state==0){
        //tk.state='1'
      }else{
        wx.showModal({
          title: '确定兑换'+tk.name+'吗？',
          content: '非本人兑换，请仔细阅读规则噢!',
          success:(res)=> {
            if (res.confirm) {
              this.usetick(tk.id);
            } else if (res.cancel) {
              //console.log('用户点击取消')

            }
          }
        })
      }
      
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
    //存储获取封装
    getStorage(key){
      return new Promise(function (resolve, reject){
        wx.getStorage({
            key:key,
            success: (res)=>{
              //console.log(res);
              resolve(res);
            },
            fail: function (res){
              resolve(res);
            }
        });
      });
    },
    getuid(){
        wx.redirectTo({
          url: '../login/main'
        })
        wx.getUserInfo({
          success: function(res) {
            var userInfo = res.userInfo
            var nickName = userInfo.nickName
            var avatarUrl = userInfo.avatarUrl
            var gender = userInfo.gender //性别 0：未知、1：男、2：女
            var province = userInfo.province
            var city = userInfo.city
            var country = userInfo.country
          }
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
      .then(()=>{
        this.getuserdata();
      })
    },
    //获取用户信息
    getuserdata(){
      var url='https://myzhbit.cn/getup/web/index.php?r=user/userdata';
      var data={session:this.session};
      this.getrequest(url,data)
      .then((res)=>{
        this.userdata.jifen=res.data.data.shopscore;
        this.userdata.phonestatue=res.data.data.phonestatue;
      })
    },
    //获取商品信息
    getshoplist(){
      var url='https://myzhbit.cn/getup/web/?r=shop/display';
      var data='';
      this.getrequest(url,data)
      .then((res)=>{
        this.shoplist=res.data.data;
      })
    },
    //获取优惠券
    gettick(){
      var url='https://myzhbit.cn/getup/web/?r=shop/coupon';
      var data={session:this.session};
      this.getrequest(url,data)
      .then((res)=>{
        this.tick=res.data.data;
      })      
    },
    //使用优惠券
    usetick(tkk){
      var that = this;
      wx.showToast({
        title: "",
        icon: 'loading',
        mask:'true',
        duration: 1500,
        complete: function() {
          that.usecoupon(tkk)
          .then((res)=>{
            wx.showToast({
              title: res.data.data,
              icon: 'success',
              duration: 2000
            })
          })
          .then(()=>{
            that.gettick();
          })            
        }
      })      
    },
    //兑换优惠券请求
    usecoupon(tkk){
      var that=this;
      return new Promise(function (resolve, reject) {
        var url='https://myzhbit.cn/getup/web/?r=shop/usecoupon';
        var data={session:that.session,id:tkk};
        that.getrequest(url,data)
        .then((res)=>{
          resolve(res);
        })
      })
    },
    //兑换商品
    useshop(sl){
      var that = this;
      wx.showToast({
        title: "",
        icon: 'loading',
        mask:'true',
        duration: 1000,
        complete: function() {
          that.buycoupon(sl)
          .then((res)=>{
            
            wx.showToast({
              title: res.data.data,
              icon: 'none',
              duration: 2000
            })
          })
          .then(()=>{
            that.getshoplist();
            that.getuserdata();
            that.gettick();
          })
          console.log('兑换商品')               
        }
      })      

      /*旧逻辑处理
      if(Number(this.userdata.jifen)>=Number(sl.much) && 0<Number(sl.left)){
        this.userdata.jifen=this.userdata.jifen-sl.much;
        sl.left=sl.left-1;
        wx.showToast({
          title: '兑换成功',
          icon: 'success',
          duration: 1000
        })
      }else if(0>=Number(sl.left)){
        wx.showToast({
          title: '礼品数量不足！',
          icon: 'none',
          duration: 1500
        })
      }else if(Number(this.userdata.jifen)<Number(sl.much)){
        wx.showToast({
          title: '积分不足！',
          icon: 'none',
          duration: 1500
        })
      }*/
    },
    //兑换商品请求
    buycoupon(sl){
      var that=this;
      return new Promise(function (resolve, reject) {
        var url='https://myzhbit.cn/getup/web/?r=shop/buycoupon';
        var data={session:that.session,cid:sl.id,name:sl.name,score:sl.score};
        that.getrequest(url,data)
        .then((res)=>{
          resolve(res);
        })
      })      
    }
  },
  onShow(){
      this.getStorage("3rd_session")
      .then((res)=>{
        this.session=res.data;
      })
      .then(()=>{
        this.getuserdata();
      })
      .then(()=>{
        this.getshoplist();
        this.gettick();
      })

  },
  created () {
  
  }

}
</script>

<style lang="scss" scoped>
@import './shop';
</style>

