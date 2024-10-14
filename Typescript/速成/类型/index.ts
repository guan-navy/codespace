let str: string = "Hello World";
let unknown:unknown = 1
let num:number = 1;
// num = unknown
if(typeof unknown === "number"){
    num = unknown
}
console.log(str);
//never类型
let fun1=()=>{
    while(true){
        console.log("hello world")
    }
}
let fun2=()=>{
    throw new Error("error")
}
{
    const a = 1
    // let a = 1,如果这里是let的话就是可变的b的类型判断就会有
    if(a!==1){
        const b = a
    }
}
