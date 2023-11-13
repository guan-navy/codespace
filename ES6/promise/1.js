/* let flag = false

function a ( ){
    setTimeout(() => {
        console.log('阿臻');
        flag = true;
    },1000)
}

function b (){
    setTimeout(() => {
        console.log('10亩地');     
    }, 2000);
    
}

if(flag){
     b()
}
  */


//回调解决
function a ( callback){
    setTimeout(() => {
        console.log('阿臻');
        callback()
    },1000)
}
//当callback调用了,没执行完,a也会出栈




function b (){
    setTimeout(() => {
        console.log('10亩地');     
    }, 2000);
    
}

a(b)