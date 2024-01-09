//和数据库连接的相关操作
const mysql = require('mysql2');
const config = require('../config');


//创建线程池
const pool = mysql.createPool({
    host: config.database.HOST,
    port: config.database.PORT,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    connectionLimit: 10,
    multipleStatements: true
});

//连接mysql
const allService = {
    query:function(sql,values){
        //pool连接
        return new Promise((resolve,reject)=>{
            pool.getConnection(function(err,connection){
                if(err){
                    reject(err);
                }else{
                    //执行sql语句
                    connection.query(sql,values,function(err,result){
                        if(err){
                            reject(err);
                        }else{
                            resolve(result);
                        }
                        connection.release(); //释放连接
                    });
                }
            });
        });
    }
}


//登录的功能
//sql语句中等号两边不能有空格,否则会报错
const userLogin = (username,password)=>{
    let _sql = `select * from users where username='${username}' and password='${password}';`
    return allService.query(_sql);
}
//注册校验
const userFind = (username)=>{
    let _sql = `select * from users where username='${username}';`
    //下面这段代码的作用是返回一个Promise对象,所以需要使用then方法获取返回值
    return allService.query(_sql); 
}
//将用户提交的信息提交到数据库注册
const userRegister = (values)=>{
    //那么values中的属性顺序就不能写乱,要和sql语句一一对应
    let _sql = `insert into users (username,password,nickname) values ('${values.username}','${values.password}','${values.nickname}');`
    


    return allService.query(_sql,values);
}

//根据前端传入的笔记类型查找笔记
const findNoteListByType = (note_type)=>{
    let _sql = `select * from note where note_type='${note_type}';`
    return allService.query(_sql);
}
//根据前端传入的笔记id查找笔记内容
const findNoteDetailById = (note_id)=>{
    let _sql = `select * from note where id='${note_id}';`
    return allService.query(_sql);
}

//发布笔记
const notePublish =(values)=>{
        let _sql = `insert into note(note_content,title,head_img,note_type,nickname,userId,c_time,m_time)values('${values.note_content}','${values.title}','${values.head_img}','${values.note_type}','${values.nickname}','${values.userId}','${values.c_time}','${values.m_time}');`
        return allService.query(_sql);
}
module.exports = {
    userLogin,
    userFind,
    userRegister,
    findNoteListByType,
    findNoteDetailById,
    notePublish
}