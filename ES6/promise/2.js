function xq (){
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            console.log('龙哥相亲了!')
            resolve('相亲成功了')
        }, 2000);

        
    })

}


function marry (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('龙哥结婚了!')
            resolve('结婚成功')
        }, 1000);
    })
    
}
/* xq().then((res)=> {
    
    marry().then((res)=>{
        baby
    })
}) */
xq().then((res)=> {
    console.log(res)
    return marry()

})//.then能够返回一个默认promise对象,写了return一个promise对象会覆盖掉,不写就用自己默认的
.then((res2)=>{
    console.log(res2)
        baby()
})
function baby (){
    setTimeout(() => {
      console.log('小龙女出生')  
    },500 );
}

function babay2 (){
    setTimeout(() => {
        console.log('小龙仔出生');
    }, 300);
}

