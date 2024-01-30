const koa = require('koa');
const app = new koa();
const  bodyParser = require('koa-bodyparser');//让koa能够解析post参数
const  user =require('./routes/user.js')
const book = require('./routes/book.js')
//解决跨域问题
const cors = require('koa2-cors') 
app.use(cors());


app.use(bodyParser())

app.use(user.routes(),user.allowedMethods());//使用路由,并且让路由对象都生效 
app.use(book.routes(),book.allowedMethods());

// 监听项目是否启动
app.listen(3000, () => {
    console.log('服务已启动在3000端口');
});