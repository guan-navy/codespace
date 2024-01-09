const Koa = require('koa');
const app = new Koa ()
const user = require('./routes/user.js')
const note = require('./routes/note.js')
const bodyParser = require( 'koa-bodyparser')//让koa能够解析post参数
//这段代码用于解决跨域问题
const cors = require('koa2-cors') 
app.use(cors());
app.use(bodyParser())//让解析能力生效


//主要逻辑

app.use(user.routes(),user.allowedMethods())//使所有路由生效,并且允许所有类型请求
app.use(note.routes(),note.allowedMethods())
app.listen(3000, () => {
  console.log('server is running on port 3000')
})