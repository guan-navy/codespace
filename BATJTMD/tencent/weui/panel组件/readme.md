# 企业级界面开发规则

 - html css js 功能分离
 - css 架构
    -reset.css  因为页面会自带很多属性需要重置调这些属性，reset就是去除浏览器的样式区别，无差别页面显示
        浏览器好多家 edge chrome 内核 需要重置
        文档流 从body开始
        盒子在页面占了多少呢
        公摊
        标准的盒子模型=content（内容）+padding（内边距）+border（边框）+margin（外边距）
        两种盒子模型
        IE盒模型=content（自动缩放）+padding+border+margin    box-sizing:border-box
    - base.css通用样式
 - css命名套路
    - page
     __hd__bd__ft
    - btn panel cell
    -框架组件 BEM
- css + 兄弟选择器
- google 图片格式
    base64 图片 小点简单的         直接放在css文件里面
    jpg|png|jpeg|wtt|webp         比较大，需要下载的线程请求 请求的并发，降低性能
