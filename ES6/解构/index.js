//快速赋值
let [x,y,z] = ['a', 'b', 'c', 'd', 'e']
console.log(x,y,z);//等价于x=a,y=b,z=c


//数组解构
console.log('数组解构');
let arr = [1,2,3]
let newArray =[0]
console.log([...arr,...newArray])


//对象解构
// let {name:myName,age:myAge} = {name:'浪哥', age:19}

// console.log(myName,myAge)
let {name,age,默认值=1} = {name:'浪哥', age:19}

console.log(name,age,默认值)