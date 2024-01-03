const Router = require('@koa/router')
const router = new Router()
const {userLogin} = require('../contrallers/mysqlControl.js')

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
// router.post('/register', async(ctx) => {
//     //拿到前端传过来的username password nickname
//     //在数据库中校验 username 是否存在如果不存在
//     //往数据库中植入一条新的数据
//     const { username, password, nickname } = ctx.request.body
    

module.exports = router