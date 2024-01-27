
# 后端搭建
1. 初始化该文件是一个项目
 npm init -y 
2. 创建app.js
3. 安装koa npm i koa
4. 安装nodemo,运行代码,每次改完代码之后不需要重新启动代码
--------------创建路由接口routes------------------------
5. koa的路由 npm i @koa/router
 - const Router = require('@koa/router') //路由对象的构造函数
6. koa无法解析post传递的参数
 - npm i koa-bodyparser
 - 并且在app.js中添加
 const  bodyParser = require('koa-bodyparser');//让koa能够解析post参数
 app.use(bodyParser())

--------------创建数据库连接controllers ------------------------
7. config->index.js中配置mysql文件 


# 一些注意点

- node 的抛出方式和原生js不同