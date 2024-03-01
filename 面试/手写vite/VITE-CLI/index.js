#!/usr/bin/env node
// 基于koa开发一个静态的服务器
const Koa = require('koa')
const send = require('koa-send')
const path = require('path') // Add this line to import the 'path' module
const  compilerSFC = require('@vue/compiler-sfc')
const app = new Koa()
const streamToString = stream => new Promise((resolve, reject) => {
    const chunks = []
    stream.on('data', chunk => chunks.push(chunk))
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')))
    stream.on('error', error => reject(error))
})

// 3.加载第三方模块
app.use(async (ctx, next) => {
    // ctx.path --> /@modules/vue
    if(ctx.path.startsWith('/@modules/')) { // Fix the typo here
        const moduleName = ctx.path.substring(10)
        const pkgPath = path.join(process.cwd(), 'node_modules', moduleName, 'package.json')
        const pkg = require(pkgPath)
        ctx.path = path.join('/node_modules', moduleName, pkg.module)
    }
    await next()
})

// 1.静态文件服务器,处理静态文件
app.use(async (ctx, next) => {
    await send(ctx, ctx.path, { root: process.cwd(), index: 'index.html' }) // 当前node程序运行的目录
    await next()
})

// 4. 处理单文件组件
app.use(async (ctx,next)=>{//此时ctx.body中就是单文件组件的内容，编译的时候也需要单文件组件的内容
    if(ctx.path.endsWith('.vue')){
        //ctx.body是一个流需要把流转变为字符串
        const contents = await streamToString(ctx.body)
       const {descriptor}  = compilerSFC.parse(contents)
       let code 
        if(!ctx.query.type){
            code = descriptor.script.content
            console.log(code);
        }
    }
    await next()
})

// 2.修改第三方模块的路径
app.use(async (ctx, next) => {
    if (ctx.type === 'application/javascript') {
        const contents = await streamToString(ctx.body)
        // import vue from 'vue',这种可以正常加载不需要处理
        // import App from './App.vue'，
        ctx.body = contents.replace(/(from\s+['"])(?!\.\/)/g, '$1/@modules/')
    }
    await next()
})

app.listen(3000)
console.log('server running @ http://localhost:3000');
