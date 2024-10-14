let obj ={
    a:1,
    b:0,
    c:{
        n:2
    }
}

let n = obj.a

Object.defineProperty(obj,'a',{ //数据劫持
get(){
console.log('get');
return n
},
set(newValue){
    n = newValue
   
},
enumerable:true,  //是否可枚举
// writable:false,
// value:100
})

// obj.a = 1
console.log(obj.a);
for (const key in obj) {
    console.log(key);
}