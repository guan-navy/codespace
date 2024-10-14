//generator 函数中的yield 语句，可以暂停函数的执行，每次调用next()方法，可以返回yield语句后面表达式的值。

// function* foo() {
//   yield 'a'
//   yield 'b'
//   yield 'c'
//   return 'end'
//   yield 'd' //不生效
// }



function* foo() {
    var o = 1
  yield o++ //进入到这一步但是是先看后加
  yield 
  o = 5
  o++
  yield o++
}

let gen = foo() //相当于new了一下函数得到一个对象
let genner = foo() //一个新的对象
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());







