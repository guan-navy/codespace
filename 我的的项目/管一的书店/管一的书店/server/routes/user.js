const Router = require("@koa/router");
const router = new Router();
const { userLogin, useRegister } = require("../controllers/mysqlControl.js");

//定义登入接口
router.post("/login", async (ctx) => {
  //获取到前端传递的账号和密码,去数据库中校验账号密码的正确性
  const { username, password } = ctx.request.body;
  try {
    const result = await userLogin(username, password);
    console.log("输入", username, password);
    console.log("数据库查询结果是", result);
    if (result.length === 0) {
      ctx.body = {
        code: "8001",
        data: "error",
        msg: "账号或密码错误",
      };
    } else {
      let data = {
        username: result[0].username,
        nickname: result[0].nickname,
      };
      ctx.body = {
        code: "8000",
        data,
        msg: "登录成功",
      };
    }
  } catch (e) {
    console.log(e);
    ctx.body = {
      code: "8005",
      data: "error",
      msg: "服务器异常",
    };
  }
});

//定义注册接口
router.post("/register", async (ctx) => {
  try {
    const { username, password } = ctx.request.body;
    const result = await useRegister(username, password);
    console.log(result);
    if (result.affectedRows === 1) {
      ctx.body = {
        code: "8000",
        data: username,
        msg: "注册成功",
      };
    }
    if (result.affectedRows === 0) {
      ctx.body = {
        code: "8001",
        data: "error",
        msg: "注册失败",
      };
    }
  } catch (e) {
    console.log(e);
    if (e.code =="ER_DUP_ENTRY") {
      ctx.body = {
        code: "8002",
        data: "error",
        msg: "该账号已存在",
      };
    } else {
      ctx.body = {
        code: "8005",
        data: "error",
        msg: "服务器异常",
      };
    }
  }
});
module.exports = router;
