const memoized = require('./memo.js')

var count = 0n
var fibonacci = function(n){
    count++
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoized(fibonacci);  // 使用 memoized 函数

// 计算执行时间
console.time('fibonacci');
memoizedFibonacci(31);  // 调用 memoizedFibonacci 而不是 fibonacci
console.log(count);
console.timeEnd('fibonacci');
