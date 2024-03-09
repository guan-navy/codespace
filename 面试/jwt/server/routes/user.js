const KoaRouter = require('koa-router'); // 修正导入语句（假设你使用的是 koa-router）

const router = new KoaRouter(); // 创建一个新的路由实例

router.post('/login', async (ctx) => {
    let user = ctx.request.body;
    console.log(ctx.request.body);
    //取数据库中查看是否存在user中一样的账号密码
    if(1){
        ctx.body = {
            code: 200,
            msg: '登录成功',
            data: `你好${user.username}`,
            token:
        };
    }else{
        ctx.body = {
            code: 400,
            msg: '登录失败',
            data: '账号或密码错误'
        };
    }
});

module.exports = router; // 将 router 正确导出