// function foo(){

// }
var a=1
// var bar=function(){
// console.log(this.a)
// }
bar()
//箭头函数里面是没有this关键字
var baz = () => {
console.log(this.a)
}
baz()