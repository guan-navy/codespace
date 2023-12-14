// App来到Page的桥梁
const app = getApp()
Page({
  //页面的数据
  data:{
   //这里的参数才能够热更新
    slides:null,
    entities:null

  },


  // 生命周期
  onLoad(){
      console.log(app,'页面显示了')

      //响应式页面,热更新
      setTimeout(() =>{
        this.setData({
          slides:app.globalData.slides,
          entities:app.globalData.vehicles
        })
      },2000)
    
  },
  onReady(){
    console.log('ready GO');
  }
})