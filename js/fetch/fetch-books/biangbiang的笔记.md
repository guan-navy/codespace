# 全栈快速一览

- 前端 也要以http服务  将html/css/js请求到本地展现
  5501 web服务
- 后端 接口服务 
    主要体现是在某个url下返回json数据
  3000 端口

- 前后端分离
  使用json-server快速的把后端数据server启动了
  使用 -npm init -y指令将我们的项目变为后端项目
  <!-- npm init -y 的命令的作用是在当前目录下创建一个新的 package.json 文件，
  其中包含一些默认的配置，而不需要用户进行交互式的配置。这对于快速创建一个简单的 Node.js 项目，
  或者在一些自动化的场景中很有用。 -->
  使用 -npm run dev
  <!-- 
  dev: 是在 package.json 文件中定义的一个脚本名称。在 scripts 部分，你会找到一个类似如下的定义：
  "scripts": {
  "dev": "some-command"
  }
  这就意味着当你运行 npm run dev 时，实际上执行的是 "some-command"。
   -->
  使用 -npm i json-server  给个json文件就可以启动数据服务
  <!-- json-server -i db.json 的命令的作用是启动 JSON Server，并使用 db.json 文件中的数据，
  同时指定资源的标识符属性为 -i 后面提供的属性值。这对于定制 JSON Server 的行为，
  特别是在标识符方面进行定制，是很有用的。例如，如果你的资源对象有一个名为 "uuid" 的属性作为标识符，
  你可以运行 json-server -i uuid db.json。-->
 

      db.json 快速的伪造数据
  
  - package.json
      script
      "dev":"json-server -w db.json"  启动json文件
      <!-- json-server -w db.json 命令的作用是启动 JSON Server 并使用 db.json 文件中的数据。
      这个命令通常在开发阶段用于模拟后端 API，使前端开发人员能够在没有实际后端服务器的情况下进行开发和测试。 -->


- resetful api
    一切皆资源 url设计规则
    资源展示的方式，resetful api 遵守的
    GET https://localhost:3000/posts
    GEt https://localhost:3000/posts/:id
    CRUD
    POST https://localhost:3000/posts
    DELETE https://localhost:3000/posts/3


如何为第一篇文章添加一条评论

  - 选择相应的请求方法 + 相关的资源路径 + 请求体(options)
  - 设计url + 选择方法

  GET /posts/:pid/comments/:cid