const Router = require('@koa/router');
const  router = Router()
const  {getAllBook,getBookByType,getBookByAuthor,getBookByName}  = require('../controllers/mysqlControl')


router.get('/books',async(ctx)=>{
    try {
      const res =   await getAllBook()
    //   console.log(res);
    ctx.body = {
        code: "8000",
        msg: '刷新成功',
        data: res
       }
    }
     catch (error) {
       ctx.body = {
        code: "8005",
        msg: '服务端异常',
        data: error
       }
    }
})

//查询某一类的图书信息
router.get('/getBookByType',async(ctx)=>{
  try{
    const type = ctx.query.type;
    const res = await getBookByType(type);
    console.log(res);
    if(res.length>0){
      ctx.body = {
        code: "8000",
        msg: '刷新成功',
        data: res
      }
    }
    else{
      ctx.body = {
        code: "8001",
        msg: '不存在该分类',
        data: res
      }
    }
    
  }
  catch (error) {
    console.log(error);
    ctx.body = {
      code: "8005",
      msg: '服务端异常',
      data: error
    }
  }

})
//按照书名搜索图书
router.get('/getBookByName',async(ctx)=>{
try{

  const res = await getBookByName(ctx.query.name);
  console.log(res);
  if(res.length>0){
    ctx.body = {
      code: "8000",
      msg: '刷新成功',
      data: res
    }
  }
  else{
    ctx.body = {
      code: "8001",
      msg: '不存在该图书',
      data: res
    }
  }
}
catch(error){
  console.log(error);
 ctx.body = {
  code: "8005",
  msg: '服务端异常',
  data: error
 }
}
})
//按照作者搜素图书
router.get('/getBookByAuthor',async(ctx)=>{
try{
  const res = await getBookByAuthor(ctx.query.author);
  console.log(res);
  if(res.length>0){
    ctx.body = {
      code: "8000",
      msg: '刷新成功',
      data: res
    }
  }
  else{
    ctx.body = {
      code: "8001",
      msg: '不存在该作者',
      data: res
    }
  }
  
}
catch(error){
  console.log(error);
 ctx.body = {
  code: "8005",
  msg: '服务端异常',
  data: error
 }
}
})
module.exports = router;