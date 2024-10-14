const Router = require('koa-router')
const router = new Router()
router.post('/post',(ctx)=>{
    //拿到post请求的参数
    
    console.log(ctx.request.body)

    ctx.body = [
        {
            id:1,
            name:'张三'
        },
        {
            id:2,
            name:'李四'
        }
    ]

})
router.get('/get',(ctx)=>{
    console.log('get')
    ctx.body = ['管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅','管海军好帅']
})
const fs  = require ('fs')

router.get('/sse', async ctx => {
    ctx.status = 200;
    ctx.set('Content-Type', 'text/event-stream');
    ctx.set('Cache-Control', 'no-cache');
    ctx.set('Connection', 'keep-alive');
  
    const txt = fs.readFileSync('./测试.txt', 'utf8');
    const arr = txt.split('');
  
    let i = 0;
  
    ctx.res.write('retry: 1000\n\n');
  
    const sendChunk = () => {
      if (i === arr.length) {
        ctx.res.end(); // 当所有数据发送完毕后关闭连接
        return;
      }
  
      ctx.res.write(`data: ${arr}\n\n`);
  
      i++; // 在每次发送后递增索引
  
      console.log(i);
      console.log(arr.length);
  
      setTimeout(sendChunk, 1000);
    };
  
    sendChunk();
  });
module.exports = router