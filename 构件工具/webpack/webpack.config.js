// const plugin = require("plugin")//插件示例
const eslintPlugin  =require('eslint-webpack-plugin')
// commonjs node环境下的模块导出
module.exports = {
    //单入口的写法
    // entry:'./src/index.js'
    // entry:['./src/app.js','./src/index.js']
    // 多入口的写法
    mode:'development',


    entry: {
        app:'./src/app.js',
      
    },
    output:{
        // __dirname 是nodejs的全局变量，代表当前文件所在的目录的绝对路径
        // 哈希是表示内容是否有改变，只要内容有改变，哈希就会改变
        // 哈希的长度是32位
        // 哈希的作用是为了避免缓存，当内容没有改变时，浏览器会使用缓存，当内容改变时，浏览器会重新加载(强缓存，协商缓存)
        // 哈希的长度可以通过hash:6来指定

        path:__dirname+'/dist',
        filename:'[name].[hash].js'

    },
    resolve:{

    }
    ,
    module:{ 
        // 用于对于不同文件的编译，比如js文件的编译，css文件的编译，图片文件的编译等等
        rules:[
            {
                // 基本格式
                test:/\.js$/,
                // use:['babel-loader','eslint-loader']
                use:{
                    // 需要给定转换标准
                    loader:'babel-loader',
                    // options可以放到.babelrc文件中
                }
            }
        ]
    },
    plugins:[
        // new plugin()
        new eslintPlugin()
    ],
   
  
}
