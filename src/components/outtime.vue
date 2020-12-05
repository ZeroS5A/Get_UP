<template>
    <div class="content">
        <div class="TimeTip" :data-index="cardNum" v-if="cardNum==2">
            <div class="title" v-if="morningdata.nowtime==-1">
                还没到时间啦:(
            </div>
            <div class="title" v-if="morningdata.nowtime==-3">
                活动还没开始哦
            </div>
            <div class="title" v-if="morningdata.nowtime==-2">
                <!--今日未签到-->
                 今日无早起 
            </div>
            <div class="content1" v-if="morningdata.nowtime==-2">
                <!-- 今日签到时间已经结束啦<br>
                北鼻晚安！<br>
                内测签到时间是<br>
                20:00～24:00-->
                今日早起时间已经结束啦~<br>
                北鼻调好闹钟，明日再战！<br>
                签到时间是6:30～10:30哦 
            </div>
            <div class="content1" v-if="morningdata.nowtime==-3">
                北鼻，活动开始时间是<br>
                2019-11-28哦<br>
            </div>  
            <div class="content1" v-if="morningdata.nowtime==-1">
                <!--内测签到时间是<br>
                20:00～24:00噢-->
                签到时间是6:30～10:30哦<br>
                北鼻再睡一会吧~ 
            </div>
            <div class="img">
                <img src="http://image.myzhbit.cn/myzhbit/Getup/sure.png">
             </div>
        </div>
        <div class="topCard" v-if="cardNum==2"></div>
    </div>
</template>

<script>
export default {
    data(){
      return{
        morningdata:"",
        cardNum:0,
        }
    },
    props:['cardNum','morningdata'],
    methods:{
    },
}
</script>


<style lang="scss" scoped>
.content{
    width:100%;;
    height: 800rpx;
    // background-color: red;
    // position: absolute;
    // top:796rpx;
    // left: 346rpx;
    margin-top:-1106rpx;
    overflow: hidden;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}
    .topCard{
        width: 100%;
        height: 1200rpx;
        background-color: black;
        position: absolute;
        z-index: 1;
        top:0px;
        left: 0px;
        opacity:0.7;
        overflow: hidden;
    }
    .TimeTip{
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        width: 430rpx;
        height: 649rpx;
        background-color: #fff;
        border-radius: 19rpx;
        position: absolute;
        top:250rpx;
        left: 164rpx;
        text-align: center;
        z-index: 999;
        .title{
            margin-top:62rpx;
        }
        .content1{
            width: 297rpx;
            height: 149rpx;
            color: rgb(102,102,102);
            font-size: 24rpx;
            margin-left: 65rpx;
            margin-top:77rpx;
        }
        .content2{
            width: 334rpx;
            height: 149rpx;
            font-size: 24rpx;
            color: rgb(102,102,102);
            margin-left: 49rpx;
            margin-top:10rpx;
        }
        .img{
            position: absolute;
            left: 182rpx;
            bottom:24rpx;
            justify-content: center;
            img{
                width: 60rpx;
                height: 60rpx;
            }
        }
    }
    .TimeTip[data-index="0"]{
        transform: translate3d(0rpx,900rpx,0);
        // display: none;
    }
    .TimeTip[data-index="2"]{
        transform: translate3d(0,50rpx,0);
    }
/*iphonex1040*/
@media screen and (width: 375px) and (height:642px){
    .content{
    width:100%;
    height: 1100rpx;
    margin-top:-1106rpx;
    overflow: hidden;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .topCard{
        width: 100%;
        height: 1280rpx;
        background-color: black;
        position: absolute;
        z-index: 1;
        top:0px;
        left: 0px;
        opacity:0.7;
        overflow: hidden;
    }
}
/*安卓全面屏+XR*/
@media screen and (min-width: 376px) and (min-height:643px){
    .content{
    width:100%;
    height: 1300rpx;
    // background-color: red;
    // position: absolute;
    // top:796rpx;
    // left: 346rpx;
    margin-top:-1106rpx;
    overflow: hidden;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .topCard{
        width: 100%;
        height: 1300rpx;
        background-color: black;
        position: absolute;
        z-index: 1;
        top:0px;
        left: 0px;
        opacity:0.7;
        overflow: hidden;
    }
}
</style>

