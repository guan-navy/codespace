const koa = require('koa');
const user = require('./router/user');
const app = new koa()
//使用cors解决跨域
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
app.use(cors());
app.use(user.routes(),user.allowedMethods());
app.listen(3000, ()=>{
    console.log('server is running at 3000')
})