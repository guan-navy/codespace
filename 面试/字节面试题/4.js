Object.prototype[Symbol.iterator] = function(){
return Object.values(this)[Symbol.iterator]()
}

var [a,b] = {a: 1, b: 2};//解构语法
console.log(a, b)
