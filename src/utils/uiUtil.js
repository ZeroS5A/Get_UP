export default class UiUtil{ //这样的写法 可以在其他组件中起别名

  static loading(title, time){
        wx.showToast({
          title: title ||'loading...',
          icon: "loading",
          duration:time
        });
      }
   static SuccessToast(title){
     wx.showToast({
       title: title,
       icon: "success",
       duration: 1000
     });
   }   
}