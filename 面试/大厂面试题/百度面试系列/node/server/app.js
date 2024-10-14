
const http = require('http');
const server = http.createServer((req,res)=>{
    //跨域是浏览器不接受后端的响应
    //想个办法让浏览器不得不接受
    // res.writeHead(200,{
    //     'Access-Control-Allow-Origin':'http://127.0.0.1:5500',//白名单,控制浏览器
      
        
    // });
    let data = {
        name:'zhangsan',
        age:18
    }
    res.end(JSON.stringify(data));
});
server.listen(3000,()=>{
    console.log('server is running at 3000');
});
