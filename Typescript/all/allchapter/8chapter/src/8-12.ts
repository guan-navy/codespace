//定义对象的时候一般不用写类型注解,不然会没有提示
let obj812:object ={
    name :''
}
// 一般用于在函数限制函数参数的类型的时候写类型注解
function addObj(obj:object){
    console.log(obj);
}
type Record_= Record<"name"|"age", string|number>
let rec:Record_ ={
    name:'',
    age:0
}

//可索引签名
// type Record_2 = 
//将属性名设置类型为string,但是一些特殊的值还是可以作为属性名
//点 不出来
let rec2:Record<string, string|number> ={
    name:'',
    age:0,
    100:101,
    true:'',
    [Symbol('')]:'',
}
interface test812{
    [key:string]:string|number
    name:string
    age:number
}
let test812:test812 ={
    name:'',
    age:0,
    100:101,
    true:'',
    [Symbol('')]:'',
}



