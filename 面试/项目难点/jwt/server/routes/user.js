const KoaRouter = require('koa-router'); // 修正导入语句（假设你使用的是 koa-router）
const  jwt = require('../utils/jwt');
const router = new KoaRouter(); // 创建一个新的路由实例

router.post('/login', async (ctx) => {
    let user = ctx.request.body;
    console.log(ctx.request.body);
    //取数据库中查看是否存在user中一样的账号密码
    if(1){
        //创建一个token
      let jwtToken  =   jwt.sign({id:1,username:user.name,admin:true})
      console.log(jwtToken);
        ctx.body = {
            code: 0,
            msg: '登录成功',
            data: `你好${user.username}`,
            token:jwtToken
        };
    }else{
        ctx.body = {
            code: 400,
            msg: '登录失败',
            error: '账号或密码错误'
        };
    }
});

//校验一下前端传来的token
//第二个参数校验,如果校验成功,则执行第三个参数的函数
router.post('/home',jwt.verify(),(ctx)=>{

    ctx.body ={
        code:0,
        msg:'ok',
        data:'首页'
    }
})

module.exports = router; // 将 router 正确导出