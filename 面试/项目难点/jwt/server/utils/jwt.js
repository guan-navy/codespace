const jwt = require('jsonwebtoken');
//生成token
function sign(option) {
  return  jwt.sign(option,'(*^▽^*)',{
        expiresIn: 60*60*24 //token的有效时长
    })
}
//校验token的有效性
const verify =()=> (ctx, next) =>{
    let jwtToken = ctx.req.headers.authorization
    if (jwtToken) {
      // 校验
      jwt.verify(jwtToken, '666', (err, decode) => {
        if (err) {  // 前端传过来的token有问题
          ctx.body = {
            status: 401,
            message: 'token失效'
          }
        } else {
          next()
        }
      })
    } else {
      ctx.body = {
        status: 401,
        message: '请提供token'
      }
    }
  } 
module.exports ={
    sign
    ,verify
}