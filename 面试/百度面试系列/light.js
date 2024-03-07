
function red() {
  const currentTime = new Date();
  console.log("红灯亮", currentTime.toLocaleString);
}
function green() {
    const currentTime = new Date();
    console.log("绿灯亮", currentTime.toLocaleString);
  }
  function yellow() {
    const currentTime = new Date();
    console.log("黄灯灯亮", currentTime.toLocaleString);
  }
  function Light(cb,wait) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            cb();
            resolve()
        },wait)
    })
    
  }

  function lightStep() {
    //没有起始函数
    Promise.resolve()
    .then(()=>{
       return Light(red,3000)
    }).then(()=>{
       return Light(yellow,2000)
    }).then(()=>{
        return Light(green,1000)
    }).finally(()=>{
        //递归
        return lightStep()
    })
  }
  lightStep()
 