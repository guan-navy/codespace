/* function foo() {
    var a=1
    setTimeout(function(){
        console.log(this.a)
    },1000)
}
foo() */
var a='外部'
function foo() {
    var a='内部'
    function bar (){
        console.log(this)
        console.log(this.a)
    }
   var baz= bar.bind(foo)
   setTimeout(baz,1000)
}

foo() 