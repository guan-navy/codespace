# 命令行初始化vue

- 流程:

1. npm init vite 安装初始化
2. y
3. 选择 vue javascript
4. 运行它弹出的要求运行的命令
5. npm run build

- vue脚手架
- npm init vite

 1. 初始化vue项目,下载了项目模版starter
 2. vite 快

- cd rate 进入项目目录
   /src 开发目录
- npm i 安装依赖
- npm run dev
   scripts
- npm run build
  dist 部署到云平台上面
- 按组件划分
    每个组件都是vue文件
  - html 结构
  - script js
  - style css

## main.js

- 入口文件
- createApp(App).mount('#app')
    挂载的原因是改变传统低效率的dom编程
    原生的js不支持vue的语法

## 组件思想

- components
  开发单位是html标签 没有复用性
  vue 提供了组件概念 可以复用
  组件是一堆html ,css js 的集合,完成某个展示和功能
  开发任务的拆分

- DOM树 ->组件树
  这个组件做过,可以不用写,组件的复用
  .vue 组件思想 分工 复用优化

- devtool
- 数据 MVVM思想
- ref 响应式
