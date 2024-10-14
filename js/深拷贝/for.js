let arr = [1,2,3]
// for of不能遍历普通对象
for (let item of arr){
    console.log(item);
}

let obj = {
    name:'阿伟',
    age:18,
    like:{
        type : 'coding'

    }
}
let obj1 =Object.create(obj)
 obj1 = {
    a:1,
    b:2
}
//for in 能遍历隐式原型上的属性
for (let key in obj){
    console.log(obj[key])
}
for (let key in arr){
    console.log(obj[arr])
}
//解决for in中遍历到隐式原型上的属性问题
for (let key in obj1){
    if(obj.hasOwnProperty){
        console.log(key);
    }
}