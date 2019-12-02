<template>
    <div class="content">
        <div class="successTip" :data-index="cardNum" v-if="cardNum==1">
            <div class="title">
                签到成功！
            </div>
            <div class="content1" v-if="morningdata.rankin == 0">
                早上好！<br>
                恭喜你是第{{morningdata.getupRank}}个起床的北鼻<br>
                {{morningdata.where1}}<br>
                {{morningdata.where2}}<br>
                {{morningdata.get}}<br>
                {{morningdata.whatmove}}<br>
            </div>
            <text class="content1" style="margin-top:10rpx;" v-if="morningdata.rankin == 1">
                早上好！<br>
                恭喜你是第{{morningdata.getupRank}}个起床的北鼻
            </text>
            <div class="content2" style="margin-top:70rpx" v-if="morningdata.rankin == 0">
                到<span style="color:rgb(156,210,235);">{{morningdata.datetime}}</span>为止<br>
                你已经连续签到第{{morningdata.onsign}}天<br>
                获得积分：{{morningdata.score}}分<br>
                积分共有：{{morningdata.totalscore}}分<br>
                积分排名：{{morningdata.scoreRank}}名<br>
            </div>
            <div class="content2" style="margin-top:20rpx" v-if="morningdata.rankin == 1">
                到<span style="color:rgb(156,210,235);">{{morningdata.datetime}}</span>为止<br>
                你已经连续签到第{{morningdata.onsign}}天<br>
                获得积分：{{morningdata.score}}分<br>
                积分共有：{{morningdata.totalscore}}分<br>
                积分排名：{{morningdata.scoreRank}}名<br>
                明天也要继续加油鸭！
            </div>
            <div class="img">
                <img src="http://image.myzhbit.cn/myzhbit/Getup/sure.png">
            </div>
        </div>
        <div class="topCard" v-if="cardNum==1"></div>
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
    width:100%;
    height: 1106rpx;
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
        height: 1280rpx;
        background-color: black;
        position: absolute;
        z-index: 1;
        top:0px;
        left: 0px;
        opacity:0.7;
        overflow: hidden;
    }
    .successTip{
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        width: 430rpx;
        height: 649rpx;
        background-color: #fff;
        border-radius: 19rpx;
        position: absolute;
        top:200rpx;
        left: 164rpx;
        text-align: center;
        letter-spacing: 1rpx;
        z-index: 999;
        .title{
            //flex-direction: column;
            //text-align: center;
            margin-left: 20rpx;
            margin-top: 68rpx;
        }
        .content1{
            width: 334rpx;
            height: 149rpx;
            font-size: 25rpx;
            letter-spacing: 1rpx;
            color: rgb(102,102,102);
            margin-left: 49rpx;
            margin-right: 49rpx;
            margin-top:30rpx;
        }
        .content2{
            width: 334rpx;
            height: 149rpx;
            font-size: 24rpx;
            letter-spacing: 1rpx;
            color: rgb(102,102,102);
            margin-left: 49rpx;
            margin-top:54rpx;
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
    .successTip[data-index="0"]{
        transform: translate3d(0rpx,900rpx,0);
        // display: none;
    }
    .successTip[data-index="1"]{
        transform: translate3d(0,50rpx,0);
    }
/*iphonex1040*/
@media screen and (width: 375px) and (height:642px){
    .content{
    width:100%;
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
        height: 1330rpx;
        background-color: black;
        position: absolute;
        z-index: 1;
        top:0px;
        left: 0px;
        opacity:0.7;
        overflow: hidden;
    }
    .successTip{
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        width: 430rpx;
        height: 649rpx;
        background-color: #fff;
        border-radius: 19rpx;
        //position: absolute;
        top:224rpx;
        left: 164rpx;
        text-align: center;
        letter-spacing: 1rpx;
        z-index: 999;
        .title{
            //flex-direction: column;
            //text-align: center;
            margin-left: 20rpx;
            margin-top: 68rpx;
        }
        .content1{
            width: 334rpx;
            height: 149rpx;
            font-size: 25rpx;
            letter-spacing: 1rpx;
            color: rgb(102,102,102);
            margin-left: 49rpx;
            margin-top:30rpx;
        }
        .content2{
            width: 334rpx;
            height: 149rpx;
            font-size: 24rpx;
            letter-spacing: 1rpx;
            color: rgb(102,102,102);
            margin-left: 49rpx;
            margin-top:54rpx;
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
    .successTip[data-index="0"]{
        transform: translate3d(0rpx,900rpx,0);
        // display: none;
    }
    .successTip[data-index="1"]{
        transform: translate3d(0,50rpx,0);
    }
}
/*安卓全面屏*/
@media screen and (min-width: 376px) and (min-height:643px){
    .content{
    width:100%;
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
        height: 1350rpx;
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

