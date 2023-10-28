function fn(a){
    console.log(a);//function(){}
    var a=123
    console.log(a);//123
    function a(){}//函数声明
    console.log(a);//123
    var b=function(){}//
    console.log(b);//function(){}
    var d=a
    console.log(d);//123

}

//编译函数后生成AO对象用v8的内存对象存储
// - 1.编译一个函数都会为函数创建一个AO对象(action object)
// - 2.找形参和变量声明,将变量声明和形参的作为AO的属性名,值为undefined
// - 3.将形参和和实参的值统一
// - 4.在函数体内找函数声明,将函数名作为AO对象的属性名,值赋予函数体
AO:{
    a:;//undefined 1 function a(){}, 赋值123
    b:;//undefined  赋值function
    d:;//undefined  赋值 123
}
//之后再来执行
fn(1)