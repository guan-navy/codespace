const koa = require('koa');
const app = new koa();
// 后端路由
// 中间件middleware 洋葱模型
app.use(async ctx =>{
  //上下文请求+响应对象
  //
    const {request:{url,query}} = ctx 
    if(url ==='/'){
        ctx.type = 'text/html'
        let content =fs.readFile
    }
})
app.listen(5173,()=>{
    console.log('server is running at 5173');
})