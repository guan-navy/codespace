## 项目亮点
- 使用了elementplus
 - 登录注册页 表单
  - 表单的目的是收集数据:model双向绑定
  每一个el-input v-model= "username"
  - 表单的校验配置一下就好
  - 用户体验做好
   -自动聚焦
   - @keyup.enter
   - ref 属性 DOm标记


- 为什么element-plus 图标要搞得这么复杂
 - 全部引入作为一个全局组件
 然后在main.js中注册
 这样就不用在每个页面都引入了
 而且还可以直接使用
 - 之后按需加载
    图标库有点大,如果用户使用别的图标,节省空间
 - 其他选择 
 - 单独安装图标库
   app.component()全局挂载一下,用到哪些就挂载哪些

## ts
- 写js就好,再做点加法
- 最关心的数据
 - ref
 - reactive
 - props
 - store
- 函数的参数

## vue考题
- <component : is "comName"/>
 循环或者动态输出组件
- <template/>

## 项目亮点
- 带有角色校验的菜单
  - 菜单
  el-emnu>el-submenu>el-menu-item
 - 选中当前菜单
 :default-active= "route-path"
 - 哪些菜单可看到
 指令?自定义指令
 store->permiss rolelist user includes?
 添加一个数据项key  任何组件都可以调用
 localStorage读取
 localStorage 允许你在用户的浏览器中存储键值对，并且这些数据可以在同一域名下的页面间共享。在Element Plus框架中，你可以使用localStorage来存储和检索与应用程序相关的信息，例如用户的首选项、状态或其他需要在会话之间保持持久性的数据。

## 考题
- 自定义指令
- 自定义指令
 app.directives(name)
 v-name
 mounted(el,bingding)
 el['hidden'] = true
 el.style.opacity = 0 v-show

 ## 项目难点
  - 多组件状态的共享与设计
   - vuex 和pinia
   用pinia
   学vuex modules 很灵活 加一个 defineStore
   没有vuex 的树状约束 执行函数就拿下hook
   语法很简洁
   学vuex 设计模式 state mutation action getter 安全
   -学习过一些项目 github开源 vue-music
   vue -admin
   - 因为当我在多个组件 特别是兄弟跨页面级别组件
   有共享状态需求的时候,我封装了一个store函数
   原来是用ref+props+emits换成store