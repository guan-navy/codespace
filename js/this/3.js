
//反默认规则,隐式绑定
function foo() {
    console.log(this.a)
}
var obj={
    a:2,
    foo:foo
}
var obj2={
    a:1 ,
    obj:obj
}

obj.foo()
obj2.obj.foo()//还算obj在调用foo()
//变式练习
/* function foo() {
    console.log(this.a)
}
var obj={
    a:2,
    foo:foo()
}
console.log(obj.foo )*/