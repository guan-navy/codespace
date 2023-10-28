/* 
 # 预编译发生在全局的时候(三部曲)
 1.创建GO对象(Global Object)
 2.找变量声明,将变量声明作为GO的属性名
 3.在全局找函数声明,将函数名作为Go对象的属性名,值赋予函数体

全局上下文执行对象
 go{                 执行
    global u         100
    fn     f
 }

 函数执行上下文对象
 ao{
     
 }
  */
var global=100
function fn(){
    console.log(global)
}
fn()