
/************************执行上下文出栈************************************ */
function foo() {
    var myName='旭旭'
    let test1 = 1
    let test2 = 2
    var innerBar={
        getName:function() {
            console.log(test1)
            return myName
        },
        setName:function(newName) {
            myName=newName
        }
    }
    return innerBar
}
var bar=foo()
//有两个函数不受foo的掌控,且调用了foo的参数所以,foo执行后会保留这两个参数
//称为闭包
bar.setName('浪哥')
console.log(bar.getName())