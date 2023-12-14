# 小程序外包

- 当下最流行的线上线下结合程序
    外卖App 移动时代红利 手机,定位GPS LBS location base service
    陌陌 LBS

- 小程序 中小商家, 扫码拿小程序 线下的实体店,立马线上化,软件化 o2o
    offline to oline 轻量化,不用安装

# 汽车4s店小程序开发
- 商业级的中小型外包程序,需要什么样的开发能力
- 开发约定,架构思路 简单
 - pages 概念
    - 由页面构成
     - wxml html  也是xml的一种 用来写结构 weixinxml 没有div只有view
     对象字面量 Json 是数据交换标准
     xml是早于json的数据交换标准
     <review>
        <name>但总</neme>
        <age></age>
     </review>
     {
        name:"但总"
        age:18
     }
    - 我们只需要做一个切图仔
    - wxss css
    - js 交互  数据的管理  Ajax 网络请求向后端发送
    - json 配置文件
    - app.json
        app开头的都是全局的,是所有页面共享的
- 数据驱动界面的思想 MVVM
 - 可以在js中可以配置一个data区域
  {{数据绑定 占位符 info.name}}
  wxml 静态页面 模版
  data 模版数据
  页面 = 模版+数据
  数据改变,模版会从新编译,显示新的页面

- 优质项目开发思路
 - wxml有着html不具备的组件,imge,swiper可以实现幻灯片
 看文档
 - css开发, 将样式按照原子功能,封装,有利于未来项目的复用
    - 当你发现在重复写样式的时候
     white hero section
     一行或者是几行css新成了一个功能模块
     .sub-header{
        副标题
        font-size:;
        line-height:;
        font-famiy:;
     }
    - 慢慢积累经验