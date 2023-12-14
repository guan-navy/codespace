var count = 0
var fibonacci = function(n){
    count++
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
// 计算执行时间
console.time('fibonacci');
fibonacci(31);  
console.log('函数一共执行次数',count);
console.timeEnd('fibonacci');
