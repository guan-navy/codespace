//浅拷贝
let arr = [1,2,3,{a:1}]
let newArr = [].concat(arr)
let newArr1 = arr.slice(0)
let newArr2 = [...arr]
arr.push(4)
console.log(newArr)
console.log(newArr1)
arr.a=100
console.log(newArr)
console.log(newArr1)

