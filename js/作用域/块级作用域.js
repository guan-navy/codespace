console.log("let和var的不同类比")
if(true){
var a=123
}
console.log("有效")
console.log(a)
if(true){
    let c=123
    }
    console.log("let和花括号结合生成块级作用域")
    console.log(c)