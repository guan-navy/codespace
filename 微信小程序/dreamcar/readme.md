# 小程序业务架构

- App和Page概念
App全局 pages共享的
app.js 共享globalData
app.wxss 样式
app.json 应用的配置

- globalData 如何来到page中的
 - const app = getApp()
  拿到全局对象
 - data 初始化站位符
 {
   data:{
     user:{}//空的
   }
 }
 - 生命周期
  数据来自于后端接口
  onLoad wxml+wxss
  - this.setData({
    user:真正的值
  })

  - 页面会热更新 重新绘制{{}}这部分

  - 循环输出的概念
   - 模版在{{直出}}外,数组列表输出的常态
   - block只承载 wx:for
   不会出现在文档流里
   - item 默认
    item.image
- css 架构思路
Dry 原则 不要重复自己
css 业务拆分 一个元素多个类名
 - app.wxss 全局样式
  - 公用的样式
  - 模块化
- page.wxss 页面业务样式