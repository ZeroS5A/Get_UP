<template>
  <div>
    <div class="board">
      <div class="title">
         [打开方式]
      </div>
      <ol class="ol">
        <li class="li">① 点击在菜单栏的 [起床]</li>
        <li class="li">② 在后台回复 [起床]</li>
        <li class="li">③ 在小程序中搜索 [起床争霸赛]</li>
      </ol>
    </div>
    <div class="board">
      <div class="title">
         [打卡时间]
      </div>
      <ol class="ol">
        <li class="li">每天早上6:30-10:30</li>
        <li class="li">在小程序首页点击 [签到] 进行打卡，即完成签到</li>
        <li class="li">积分会按照北鼻签到的时间段来给，越早签到,积分越多哦~</li>
      </ol>
      <div class="table">
        <div class="thead">
            <div class="th">时间</div>
            <div class="th">积分</div>
        </div>
       <div class="tbody">
            <div class="td">
              6:30-6:40
            </div>
            <div class="td">
              20
            </div>
            <div class="td">
              6:40-7:30
            </div>
            <div class="td">
              19
            </div>
            <div class="td">
              7:30-8:30
            </div>
            <div class="td">
              18
            </div>
            <div class="td">
              8:30-10:30
            </div>
            <div class="td">
              17
            </div>
        </div>
      </div>
    </div>
    <div class="board">
      <div class="title">
         [连签规则]
      </div>
      <div class="table_">
        <div class="thead">
            <div class="th">连续签到天数</div>
            <div class="th">连续签到积分</div>
        </div>
        <div class="tbody">
            <div class="td">
              2
            </div>
            <div class="td">
              1
            </div>
            <div class="td">
              3
            </div>
            <div class="td">
              2
            </div>
            <div class="td">
              4
            </div>
            <div class="td">
              3
            </div>
            <div class="td">
              5
            </div>
            <div class="td">
              4
            </div>
            <div class="td">
              6
            </div>
            <div class="td">
              5
            </div><div class="td">
              7
            </div>
            <div class="td">
              5
            </div>
            <div class="td">
              8
            </div>
            <div class="td">
              5
            </div>
            <div class="td">
              ...
            </div>
            <div class="td">
              ...
            </div>
        </div>
      </div>
      <ol class="ol">
        <li class="li">关于连续签到：连续签到 2 天及以上的北鼻，可获得连签加分，</li>
        <li class="li">连续签到积分上线为5分！断签的北鼻只能重新开始啦~</li>
      </ol>
    </div>
    <div class="board">
      <div class="title">
         [关于签到失败]
      </div>
      <div  class="ol">
        <div class="li">北鼻如遇签到失败，可以多尝试几次；</div>
        <li class="li">若多次签到仍不成功，请在后台联系小北。</li>
        <li class="li">为了帮助大家赶上新一天的早餐而不是新一天的午餐，起床争</li>
        <li class="li">霸会一直开放给有需要的你们使用~</li>
        <li class="li">每天按时认真签到的北鼻，除了收获满满的成就感，更重要是</li>
        <li class="li">养成早起的好习惯。</li>
        <li class="li"> 希望大家能够坚持，小北与你们同在！</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.board{
  margin-top: 10rpx;
  height: 100%;
  padding-left: 58rpx;
  padding-top:24rpx; 
  background: white; 
}
.title{
  color:rgb(245,111,97);
  font-size: 28rpx;
}
.ol{
  color:rgb(51,51,51);
  margin-top: 24rpx;
  font-size: 24rpx;
  padding-bottom: 24rpx;
}
.li{
  margin-top: 8rpx;
}
.table{
  text-align: center;
  width: 80%;
  height: 230rpx;
}
.table_{
  text-align: center;
  margin-top: 24rpx;
  width: 80%;
  height: 332rpx;
}
.thead{
  height: 36rpx;
  width: 100%;
}
.th{
  height: 36rpx;
  width: 50%;
  font-size: 24rpx;
  padding-left: 20rpx;
  float: left;
  border: 1px solid gray;
  box-sizing: border-box;
}
.td{
  height: 36rpx;
  width: 50%;
  font-size: 24rpx;
  padding-left: 20rpx;
  float: left;
  border: 1px solid gray;
  box-sizing: border-box;
}
</style>
