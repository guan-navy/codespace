function* gen() {
  const num1 = yield request(1);
  const num2 = yield request(num1);
  const num3 = yield request(num2);
  return num3;
}

function request(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 10);
    }, 1000);
  });
}
//模拟async
function generatorToAsync(generatorFn) {
  //把generatorFn变更成具有async功能的函数
  return function () {
    //要使得还是一个函数
      const gen = generatorFn();
 
    return new Promise((resolve, reject) => {
     //递归


     function loop(key,arg){
        let res =null
        res = gen[key](arg) //gen.next(arg) //{value:Promise,done:false}
        const {value,done} = res
        if(done){
            return resolve(res);
        }else{
         Promise.resolve(value).then((res) => {  //Promise.resolve()接受一个Promise对象为参数会直接读取resolve()中的值
           loop('next',res)
         },(err) => {
           reject(err)
         })
        }
     }
       loop('next')
    });
  };
}
const asyncFn = generatorToAsync(gen);
console.log(asyncFn); // Promise对象{}

//最后效果
asyncFn().then((result) => {
  console.log(result);
});
