const Router = require("@koa/router");
const router = new Router();
const {
  findNoteListByType,
  findNoteDetailById,
  notePublish
} = require("../contrallers/mysqlControl.js");

const { formattedDate} = require("../config/utils.js");

router.post("/findNoteListByType", async (ctx) => {
  //拼在请求头上的参数,称为query
  const { note_type } = ctx.request.body;

  try {
    const result = await findNoteListByType(note_type);
    // console.log(result);
    ctx.body = {
      code: "8000",
      data: result,
      msg: "数据获取成功",
    };
  } catch (error) {
    ctx.body = {
      code: "8005",
      data: error,
      msg: "服务端异常",
    };
  }
});


router.post("/findNoteDetailById", async (ctx) => {
  //拼在请求头上的参数,称为query
  const { id } = ctx.request.body;
  console.log(id);
  try {
    const result = await findNoteDetailById(id);
    console.log(result, '----------');
    if (result.length) {
      ctx.body = {
        code: "8000",
        data: result,
        msg: "成功获取笔记内容",
      };
    } else {
      ctx.body = {
        code: "8001",
        data: "error",
        msg: "查找失败",
      };
    }
  } catch (error) {
    ctx.body = {
      code: "8005",
      data: error,
      msg: "服务端异常",
    };
  }
});

//发布笔记
router.post("/publishNote", async (ctx) => {
  const {note_content,title,head_img,note_type,nickname,userId} = ctx.request.body
  const c_time =  formattedDate(new Date())
  const m_time = formattedDate(new Date())
  try{
    const result = await notePublish({note_content,title,head_img,note_type,nickname,userId,c_time,m_time})
    if(result.affectedRows!==0){
      ctx.body = {
        code: '8000',
        data: result,
        msg: "发布笔记成功",
      };
    }else{
      ctx.body = {
        code: '8001',
        data: result,
        msg: "发布笔记失败",
      };
    }
    
  }
  catch(error){
    ctx.body = {
      code: "8005",
      data: error,
      msg: "服务端异常",
    };
  }
})

module.exports = router;
