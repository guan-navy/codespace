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

//获取全部的图书信息
const getAllBook = ()=>{
    let _sql = `select * from book;`
    return allService.query(_sql);
}
//查询某一类图书的信息
const getBookByType = (type)=>{
    let _sql = `select * from book where type='${type}';`
    return allService.query(_sql)
}






//获取用户购物车信息和总金额
const getCartInfo = (username)=>{
   
    let _sql = `select * from cartInfo where username='${username}';`
    
    return allService.query(_sql)

}
const getCartAmount = (username)=>{
    let _sql = `select * from cart_total_amount where username='${username}';`
    return allService.query(_sql)
}

//插入新的购物车记录
const insertCartInfo = (username,bookId,amount,isBuyed)=>{
    let _sql = `insert into cart(username,BookId,num,isBuyed) values('${username}','${bookId}','${amount}','${isBuyed}');`
    return allService.query(_sql)
}
// 一条一条删除用户最新记录
const deleteRecord = async (username,bookId) => {
    // 首先找出conditionField字段值最大的记录
    let _sql1 = `SELECT * FROM cart 
    WHERE username='${username}' AND BookID='${bookId}' 
    ORDER BY time DESC 
    LIMIT 1;`;
    
    const result = await allService.query(_sql1);
    if (result.length > 0) {
        // 获取到最新的记录后，根据其主键（假设为id）进行删除
        let latestRecord = result[0];
        let _sql2 = `DELETE FROM cart 
                WHERE id=${latestRecord.id} 
                AND BookID='${bookId}' 
                AND username='${username}'`;

        return allService.query(_sql2);
    } else {
        return Promise.resolve("没有该用户的购书记录");
    }
};

//删除某个用户所有的购物车记录
const deleteUserAllRecord = (username) => {
    let _sql = `DELETE FROM cart WHERE username='${username}'`;
    return allService.query(_sql);
};
//删除某个用户的某本书的购物记录
const deleteUserBookRecord = (username, BookID) => {
    let _sql = `DELETE FROM cart WHERE username='${username}' AND BookID='${BookID}'`;
    return allService.query(_sql);
};
module.exports = {
    userLogin,
    useRegister,
    getAllBook,
    getCartInfo,
    getCartAmount,
    insertCartInfo,
    deleteRecord,
    deleteUserAllRecord,
    deleteUserBookRecord,
    getBookByType
}