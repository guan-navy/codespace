const Router = require('@koa/router')
const router = new Router()
const {userLogin,userFind,userRegister} = require('../contrallers/mysqlControl.js')

//定义登入接口
router.post('/login', async(ctx) => {
    //获取到前端传递的账号和密码,去数据库中校验账号密码的正确性
    const { username, password } = ctx.request.body
    try{
        const result = await userLogin(username, password)
        
        console.log(result);
        if(result.length === 0){
            ctx.body = {
                code:'8001',
                data:'error',
                msg:'账号或密码错误'
            }
        }
        else{
            let data ={
                id:result[0].id,
                username:result[0].username,
                nickname:result[0].nickname,
            }
            ctx.body={
                code:'8000',
                data,
                msg:'登录成功'
            }
        }
        

    }
    catch(e){
        console.log(e)
        ctx.body = {
            code:'8005',
            data:'error',
            msg:'服务器异常'
        }
    }
   
})
//定义注册接口
//get请求的参数会拼接在url后面,不安全
//post请求的参数会拼接在body后面,相对安全
router.post('/register', async(ctx) => {
    //拿到前端传过来的username password nickname
    //在数据库中校验 username 是否存在如果不存在
    //往数据库中植入一条新的数据
    const { username, password, nickname } = ctx.request.body
    if(!username || !password || !nickname){
        ctx.body = {
            code:'8001',
            data:'error',
            msg:'账号密码昵称不能为空'
        }
        return
    }
    try{
          //判断用户名是否存在
    const findRes = await userFind(username)
    if(findRes.length > 0){
        ctx.body = {
            code:'8003',
            data:'error',
            msg:'此用户名已被占用'
        }
        return
    }
    //不存在的话,植入数据
    const registerRes = await userRegister(username, password, nickname)
    console.log(registerRes);
    if(registerRes.affectedRows !==0){
        ctx.body = {
            code:'8000',
            data:'success',
            msg:'注册成功'
        }
    }
    else{
        ctx.body = {
            code:'8004',
            data:'error',
            msg:'注册失败'
        }
    }
    }catch(e){
        ctx.body = {
            code:'8005',
            data:'error',
            msg:'服务器异常'
        }
    }
    
    
})
module.exports = router