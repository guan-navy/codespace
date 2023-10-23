var b=1
function foo(a,b){
    console.log(b)
    console.log(a+b)
}
                        //函数当中的b没有传值显示为undefined
foo(2)

function foo2(){
    let c=4
    console.log(c)
    // let c=4                //当为var时不报错,以后都是用let
}
console.log("foo2结果")
foo2()



console.log("暂时性死区,局部变量和全局变量有相同名字定义时,不会去读取全局变量即先使用后后定义")
let d=6
function foo3(){
    console.log(d)
    let d=7
}
foo3()