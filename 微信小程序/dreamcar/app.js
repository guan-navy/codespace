//应用
// Page()页面

App({//配置
  globalData:{
    
  },
  onLaunch(){
    //在应用启动的时候发送接口请求
    // console.log('应用启动')
    wx.request({
      //向以下地址发送请求
      url:'https://resources.ninghao.net/wxapp-case/db.json',
      success:(response) => {
        
        //前后端接口联调
        Object.assign(this.globalData,response.data)
        
      }
    })
  }
 
})