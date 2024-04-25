
// function foo (x) {
//     return x;
// }
// let obj = {username:"wangwu",age:23}
// let username = 'username'
// obj[username]
function foo (x:any){
    return x;
}
let obj = {username:"wangwu",age:23}
const username = 'username'
obj[username]


//属性初始化
class Person34 {
    username?:string;
    age!:number;
   
}
//返回值检查
function foo1 (x:number){
    if(x>0){
        return x;
    }else if(x== 0 ){
        return 0
    }
    return 1
}
function foo2 (x:number):void{
    if(x>0){
        return undefined
    }else if(x== 0 ){
     
    }
}
// let tset:void = undefined
// let tset1:undefined = null
// let tset2:null = undefined