const koa = require('koa');
const app = new koa();
const main = (ctx,next)=>{
    ctx.body = 'hello world';
    const cb = ctx.query.cb;
    const data = '给前端的数据'
    const str = `${cb}('${data}')`
    ctx.body = str
}

app.use(main);
app.listen(3000,()=>{
    console.log('server is running at 3000');
});