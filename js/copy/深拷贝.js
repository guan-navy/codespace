let obj={
    name:'海军',
    age:18,
    like:{
       a: 'coding'
    },
    b:null,
    //拷贝不了函数体,undefined,bigint,symbol
    a:undefined,
    c:function(){},
    d:Symbol('hello'),
    e:{},
    f:123n
}
//循环引用无法处理
/* obj.c = obj.d
obj.d.m =obj.c */
//深拷贝
let newObj = JSON.parse(JSON.stringify(obj))
obj.name = 'ghj'

console.log(newObj)
obj.like.a ='eatting'
console.log(newObj)