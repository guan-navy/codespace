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
const userLogin = (username,password)=>{
    let _sql = `select * from users where username='${username}' and password='${password}';`
    return allService.query(_sql);
}

module.exports = {
    userLogin
}