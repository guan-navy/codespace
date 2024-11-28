const Router = require("@koa/router");

const router = new Router();
const {
  userLogin,
  useRegister,
  getCartInfo,
  getCartAmount,
  insertCartInfo,
  deleteRecord,
  deleteUserAllRecord,
  deleteUserBookRecord,
} = require("../controllers/mysqlControl.js");

//定义登入接口
router.post("/login", async (ctx) => {
  //获取到前端传递的账号和密码,去数据库中校验账号密码的正确性
  const { username, password } = ctx.request.body;

  // console.log(token);
  try {
    const result = await userLogin(username, password);
    console.log("输入", username, password);
    // console.log("数据库查询结果是", result);
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
        token
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
    // console.log(result);
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
    if (e.code == "ER_DUP_ENTRY") {
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

//定义获取用户购物信息
router.get("/getCart", async (ctx) => {
  console.log('执行获取购物车');
  // ctx.body={
  //   code: "8000",
  //   data: "success",
  //   msg: "获取成功",
  // };
  
  try {
    const username = ctx.query.username; //获取前端传递的参数
    console.log('要查询的购物车用户名是',username);
    const cartInfo = await getCartInfo(username);
    const cartAmount = await getCartAmount(username);
    console.log(cartInfo);
    if (cartInfo.length === 0) {
      console.log('购物车为空');
      ctx.body = {
        code: "8001",
        data: {
          List: cartInfo,
          Amount: cartAmount,
        },
        msg: "该用户购物车为空",
      };
    console.log(ctx.body);

    } else {
      console.log('购物车不为空');
      ctx.body = {
        code: "8000",
        data: {
          List: cartInfo,
          Amount: cartAmount,
        },
        msg: "获取成功",
      };
    console.log(ctx);

    }
  } catch (error) {
    console.log(error);
    ctx.body = {
      code: "8005",
      data: "error",
      msg: "服务器异常",
    };
    console.log(ctx);

  }
});

//插入新的购物车记录
router.post("/insertCart", async (ctx) => {
  try {
    const { username, bookId, amount, isBuyed } = ctx.request.body;
    const result = await insertCartInfo(username, bookId, amount, isBuyed);
    console.log(result);
    if (result.affectedRows === 1) {
      ctx.body = {
        code: "8000",
        data: username,
        msg: "添加成功",
      };
      console.log("添加成功");
    }
    if (result.affectedRows === 0) {
      ctx.body = {
        code: "8001",
        data: "error",
        msg: "添加失败",
      };
      console.log("添加失败");
    }
  } catch (error) {
    console.log(error);
    ctx.body = {
      code: "8005",
      data: "error",
      msg: "服务端异常",
    };
  }
});

//删除购物车记录
router.post("/deleteCart", async (ctx) => {
  try {
    const { username, bookId } = ctx.request.body;
    const result = await deleteRecord(username, bookId);
    console.log(result);
    if (result.affectedRows === 1) {
      ctx.body = {
        code: "8000",
        data: username,
        msg: "删除成功",
      };
    } else {
      ctx.body = {
        code: "8001",
        data: "error",
        msg: "本书不在购物车中",
      };
    }
  } catch (error) {
    console.log(error);
    ctx.body = {
      code: "8005",
      data: "error",
      msg: "服务端异常",
    };
  }
});
//清空该用户的购物车
router.post("/clearCart", async (ctx) => {
  try {
    const { username } = ctx.request.body;
    const res = await deleteUserAllRecord(username);
    console.log(res);
    if (res.affectedRows > 0) {
      ctx.body = {
        code: "8000",
        data: res,
        msg: "成功清空",
      };
    } else if (res.affectedRows == 0) {
      ctx.body = {
        code: "8001",
        data: "error",
        msg: "该用户购物车为空",
      };
    }
  } catch (error) {
    ctx.body = {
      code: "8005",
      data: "error",
      msg: "服务器错误",
    };
    console.log(error);
  }
});
//删除该用户的某本书的购物车
router.post("/deleteBookRecord", async (ctx) => {
  try {
    const { username, bookId } = ctx.request.body;
    const res = await deleteUserBookRecord(username, bookId);
    console.log(res);
    if (res.affectedRows > 0) {
      ctx.body = {
        code: "8000",
        data: "success",
        msg: "成功删除该购物记录",
      };
    } else if (res.affectedRows == 0) {
      ctx.body = {
        code: "8001",
        data: "error",
        msg: "该用户无该该购物记录",
      };
    }
  } catch (error) {
    ctx.body = {
      code: "8005",
      data: "error",
      msg: "服务器错误",
    };
    console.log(error);
  }
});
module.exports = router;
