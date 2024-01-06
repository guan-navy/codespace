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