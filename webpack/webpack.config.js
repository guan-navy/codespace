//编写配置的时候呢,需要使用commonjs的规范


const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path');
module.exports = {
    //开发环境
    mode: 'development',
    //生产环境
    // mode: 'production',
    // 入口文件，Webpack将从这里开始打包
    //单入口写法
    optimization:{

    },
    entry: './app.js',
    //多入口写法
    // entry: {
    //     app: './app.js',
    //     print: './print.js'
    // },
    // 输出文件的配置
    output: {
      // 输出文件的路径，__dirname是Node.js的一个全局变量，表示当前文件所在的目录
      //因为出口的路径的话需要绝对路径来写
      path: path.resolve(__dirname ,'/dist'),
      // 输出文件的名称
      //当有多个入口文件的时候，需要使用[name]来表示入口文件的名称
      //哈希值如果内容发生改变，那么[hash]就会改变
      //截取哈希值的四位,因为hash值太长了
      filename: "[name].[hash:4].bundle.js"
    },
    devServer: {
    //   contentBase: './dist',
    //   //端口号
    //   port: 8080
    },
    //loader,用来定义对某种文件的处理方案
    module: {
      rules: [
        {
          test:/\.js$/,
          use: {
            loader: 'babel-loader',
            // preset 提前的编译规范
            //options里面是每个插件自己的配置
           
          }
        }
      ]
    },
    //插件
    plugins: [
        //代码规范
      new ESLintPlugin()
    ]
  };