// var a=1
// function foo(){
//     var a=2
//     function bar(){
//         console.log(a)
//     }
    
// }

// foo()
//                                  //报错函数执行完之后释放内存也就不存在bar的定义了
// bar()
var a=1
function foo(){
    var a=2
    function bar(){
        console.log(a)
    }
    bar()
}
//可以执行
foo()

