# 路由
服务端用来描述路径的
前端借鉴路由的称呼,来描述url和组件的映射关系

# 实现前端路由需要解决的问题(单页应用的兴起)
1. 如何修改url,还不引起页面的刷新
2. 如何知道url变化了


# hash

浏览器url后拼接 #xxx 会被认为是hash值,而hash值的变更,是不会引起浏览器页面的刷新

- 修改url的方式
1. a标签
2. 浏览器的前进后退
3. window.location的前进后退


以上方式导致url变更都会触发hashchange事件


# history

history 提供了一个pushState方法,可以修改url且不会引起页面刷新,提供了popState事件,仅当浏览器前进后退时生效