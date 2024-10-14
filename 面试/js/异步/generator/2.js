function* g(){
    let a = 1
    let b = yield  a++
    console.log(b)
    let c = yield a++
    console.log(b)
    console.log(a);
}
let gen  = g()
console.log( gen.next()); // 读取到1,然后在释放当前yield
console.log( gen.next());//next 可以接受参数,用于指定被我触发的yield
console.log( gen.next());//next 可以接受参数,用于指定被我触发的yield


function* g1(){
    yield 1
    yield 2
    yield 3
}
let gen2 = g1()
// for (const iterator of gen2) {
//     console.log(iterator);
// }
//

/*
Generator 函数开始执行，a 被初始化为 1。
第一次调用 gen.next()，执行到第一个 yield 表达式 let b = yield a++，此时 a 值为 1，然后函数暂停，返回 { value: 1, done: false } 给调用方。
第二次调用 gen.next()，再次执行 Generator 函数，继续执行到下一个 yield 表达式，即 let b = yield a++。但是，这次没有给 gen.next() 提供参数，因此 yield a++ 的结果为 undefined。同时，a 的值被递增为 2。然后函数暂停，返回 { value: 2, done: false } 给调用方。
第三次调用 gen.next()，再次执行 Generator 函数，执行到函数结束。在这一步中，输出 b 的值，但由于在第二次调用中，并没有从调用方传入一个值给 yield 表达式，因此 b 的值为 undefined。接着，输出 a 的值为 3。
*/