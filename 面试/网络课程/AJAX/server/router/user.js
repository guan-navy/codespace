const Router = require('koa-router')
const router = new Router()
router.post('/post',(ctx)=>{
    //拿到post请求的参数
    
    console.log(ctx.request.body)

    ctx.body = {
        code: 200,
        msg: 'success',
        data: 'post'
    }

})
router.get('/get',(ctx)=>{
    console.log('get')
    ctx.body = {
        code: 200,
        msg: 'success',
        data: 'get'
    }
})
module.exports = router