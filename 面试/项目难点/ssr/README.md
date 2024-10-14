# ssr 有区分度的东西
CSR client side rendering
- 网络请求
 - index.html root 挂载 点 script main.js
 - 对seo不友好
 爬虫只会爬取静态页面index.html,不能够进入js并执行
 e.g.
 csdn的话呢使用的技术比较老旧但是爬虫可以爬取到,相反掘金的话呢使用的技术比较新,爬虫爬不到

 - 问题就来了如何去使用vue这种js框架,又能兼顾seo
- pc /mobile
pc端流量来自百度seo非常重要
mobile端来自链接分享,app的内嵌页面,seo没有那么重要

- pc站 gogle/baidu
- vue可以在服务其端运行
 平台无关性渲染逻辑:虚拟DOM--> 怎么去渲染成一个页面

- 平台无关性渲染
 - vue除了客户端渲染挂载之外,其它的都可以在服务端运行
 - 响应式组件虚拟DOM 都可以只在node环境运行
 - 虚拟DOM渲染为何种界面,可以由平台决定
  - uniapp 小程序
  html
- 怎么样去优化seo呢
    组件内容界面需要的string返回 除了挂载其他都做
    爬虫就能拿到
- CSR SSR 平台无关性渲染 
  @vue/server-renderer VDOM - > 渲染字符串


css文件js文件还有图片这类的静态资源是存放在cdn服务器上的


- 简历上写
了解服务端渲染ssr和Nuxt开发