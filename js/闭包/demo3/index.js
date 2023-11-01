function bar(){
 console.log(myName)
}
function foo(){
 var myName = "龙龙"
 bar()//打印君君,词法作用域易错,bar的作用域应该是全局作用域
}
var myName='君君'
foo()