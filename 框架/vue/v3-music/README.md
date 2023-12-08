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
 - npm i -D 开发阶段devDependencies
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
