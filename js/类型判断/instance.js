//递归
// function myInstanceof(obj,Obj){
// if(obj.__proto__ === obj.prototype){
//     return true
// }
// else{
//     myInstanceof(obj.__proto__,Obj) 
// }
// }
// obj={}
// console.log(myInstanceof(obj,Object));

//while实现instanceof方法面试题
function myInstanceof(l,r){
      l = l.__proto__
      r=r.prototype

     while(l!==null){
        if(l ===r) return true

        l = l.__proto__
     }
     return false
}
obj={}
console.log(myInstanceof(obj,Object));
console.log(Object.__proto__);
console.log(Object.prototype)