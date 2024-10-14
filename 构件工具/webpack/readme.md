默认找webpack.config.js

npm run webpack 使用项目当中的webpack去打包的

安装webpack4之后还要安装webpack-cli-g
通过使用npx使用本地的依赖
也可以在本地的脚本当中指定webpack来规定就是用本地的webpack去打包的

#
在没有指定打包配置文件命令的时候
默认是使用的是webpack.config.js的配置文件

# mode
不同模式下的打包的区别
生产模式下的代码是经过压缩的，会简化代码的执行
