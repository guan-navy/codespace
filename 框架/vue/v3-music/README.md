# vue 网易云音乐

- 界面
 - vite开发项目
 npm init vite 安装开发脚手架 创建vue项目 取名 运行 
 - 前端
  5173
 - 后端
  3000
 - npm 换源
    npm config set registry https://registry.npmmirror.com

 - css
 - npm i -D 开发阶段安装的devDependencies,如果是生产阶段也需要的话,就是就不需要 -D
 - tailwindcss 60% css开发 原子化css开发
   - npm i -D tailwindcss postcss autoprefixer
   - npx tailwindcss init -p 初始化
    npx命令执行安装或者是未安装的包
   -  content: [
    //让该目录下所有的该后缀文件都支持tailwind
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
 - 切页面
 - 组件化思维
  - 根组件 App.vue
  - layout 组件
    - Menu
    - Header
    
 - vite.config.js 是vite工程化的配置文件
    - alias 短路径
     @ -> ./src 

企业级开发框架 elment-plus PC版
   好组件就拿来用
   vue是渐进式mvvm开发框架开发模式
- npm i element-plus
   Element Plus 是一个基于 Vue.js 的 UI 组件库，用于构建用户界面,饿了么的ui组件库
- vite 写了一段让Element plus 自动引入的代码
- 通用组件
   /components/common/
   不属于特定的组件,极高的复用性 在多个项目中可以复用

- 图标字体库使用
   - 要用到哪些图标?
      import{}from''

- 断点调试法
   当我们开始想写项目的时候,在github 上找排名靠前的vue-music 看不懂的地方 一路更下去,优秀的代码学习方法
   -组件和数据接口分离 /components
      让组件干净 template
   - 数据统一管理 utils
      - api.js
      业务接口,该函数名字自带解释功能
      - http.js
         复用axios的底层封装
- 开发文档
   - 前端要响应式数据
   - 数据请求要分离到utils/api.js
   - 后端是一个黑盒子
      1. 基于http
         axios提供get
      2. 看后端给的开发文档
         /url GET/post params{}
         response什么
   - 自己的项目
     - Laf做后端
      - 数据库
      - 云函数
      - 开发文档 亮点

- 有哪些组件,组件的分类
      - 父子组件

      - 页面组件
         vue-router views/
      - 通用组件
         components/common/
      - 框架UI组件

      - 业务组件 /components
- 路由的组件流程
 - router 配置文件
 - views /页面级别文件
 - 路由接管了应用
   会有好多页面的,views比components更加高级
 - App.vue router