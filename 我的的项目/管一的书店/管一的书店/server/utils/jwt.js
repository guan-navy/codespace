const jwt = require("jsonwebtoken");
function sign(option) {
  return  jwt.sign(option,'管海军的网站',{
        expiresIn: 60*60*24 //token的有效时长
    })
}
const verify = () => (ctx, next) => {
  let token = ctx.request.header.authorization;
  console.log(token);
  if (token) {//如果token存在
    jwt.verify(token, "管海军的网站", (err, data) => {
      console.log(data);
      if (err) {
        ctx.body = {
          code: 8003,
          data: err,
          msg: "token过期",
        };
      }else{
        next()
      }
    });
  }else{
    ctx.body = {
      code: 8003,
      data: "token为空",
      msg: "请提供token",
    };
  }
};

module.exports = {
  sign,
  verify
};
