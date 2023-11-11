/* var a=1
function foo(){
    console.log(this.a)//在浏览器上不出错,this代指window,外层作用域
}
foo() */


/*  //1.默认绑定悖论
var a=1
function foo(){
    var a=2;
    bar()
}

function bar(){
    
    console.log(this.a)//输出1
}
foo()  */


//练习,this默认绑定需要找到函数生效的词法作用域,这种情况下都是全局作用域
    var a=1
    function foo(){
        var a=2
        function bar(){
            baz()
        }
        function baz(){
            console.log(this.a)
        }
       bar()
    }
    foo()