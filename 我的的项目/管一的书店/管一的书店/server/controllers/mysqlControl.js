// 和数据连接的相关操作
const mysql = require('mysql2');
const  config = require('../config/index.js');


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
        //pool连接数据库
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    //连接成功之后执行sql语句
                    connection.query(sql,values,(err,result)=>{
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


//登录功能
const userLogin = (username,password)=>{
    let _sql = `select * from user where username='${username}' and password='${password}';`
    return allService.query(_sql);
}

//注册功能
const useRegister = (username,password)=>{
    let _sql = `insert into user(username,password) values('${username}','${password}');`
    return allService.query(_sql);
}
module.exports = {
    userLogin,
    useRegister
}