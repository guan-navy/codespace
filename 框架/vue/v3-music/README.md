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