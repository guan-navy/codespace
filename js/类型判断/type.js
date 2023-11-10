
let str='hello' //string
let num= 123
let flag=false
let und=undefined
let nu= null

let big = 123n //bigInt 大整形
let s = Symbol('hello')//用于定义独一无二的值

let obj = {}
let arr = []
let fn = function() {}
let date = new Date()

//判断类型
console.log(typeof nu)//obj历史久远的bug
// instance判断
console.log(arr instanceof Array)//true
console.log(str instanceof String)//false
console.log(fn instanceof Object)//true

    function test(obj){
        if(obj instanceof Object){
            return obj.name
        }

    }
    console.log(test(['hello']))