# 全栈快速一览

- 前端 http 服务html/css/js
    5501 web服务
- 后端 接口服务
 url json数据
 3000端口返回数据
- 前后端分离
    json-server 快速的把后端数据server启动了
    - npm init -y 这个命令快速地把我们的项目变成后端项目
    - npm i json -server 给个json文件就可以启动数据服务
    - npm i -g yarn    

ChatGPT
这是一个使用 npm 安装全局包（global package）的命令。在这里，npm i 是 npm install 的缩写，-g 表示全局安装，而 yarn 是要安装的包的名称。

具体来说，这个命令将安装 Yarn，它是一个 JavaScript 包管理器，用于管理项目的依赖关系。全局安装意味着 Yarn 将在你的整个系统中可用，而不仅仅是在当前项目中。

在这之后，你就可以在命令行中使用 yarn 命令来执行 Yarn 的各种功能，例如安装项目的依赖、运行脚本等。这对于管理 JavaScript 项目中的依赖项和执行任务非常有用。

如果你已经安装了 npm，你也可以使用 npm install -g yarn 来完成相同的操作。在这种情况下，npm 将用于全局安装 Yarn。
     db.json 快速的伪造数据
    - package.json 项目的描述文件
        script 
        "dev":"json-server -w db.json"
        - -w会一直监听文件的改变 db.json
        - script 项目支持的脚本

map

- restful api 前后端构建接口的规则 json-server遵守这个规则
 一切皆资源 也是一个url设计规则
 资源展示的方式, restful api遵守的
 GET http://localhost:3000/posts
 GET http://localhost:3000/posts/:id
 CRUD
    post请求增加文件
    http://localhost:3000/posts 
    body raw json
    DELETE请求  
    http://localhost:3000/posts/3
    PATCH 请求修改数据
    http://localhost:3000/posts/3

为第一篇文章添加评论
- 请求方式post
- http://localhost:3000/posts/3/comments
 - 选中post第几篇文章
 - 再在comments里 
    - 选择相应的请求方法 + 相关的资源路径 + 请求体 (options)
    - 设计url + 选择方法
GET /posts/:pid/comments?:cid
patch 部分修改