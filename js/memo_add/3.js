let count = 0;
var fibonacci = function(n) {
    count++;
    return n < 2? n : fibonacci(n - 1) + fibonacci(n - 2); 
}

function memorize(f) {
    if (typeof f !== 'function') return;
    var cache = {} // 空间换时间 自由变量   
    return function() {
        var key = arguments.length + ','
            Array.prototype.join.call(arguments, ',')
        // add 
        if (key in cache) {
            return cache[key]
        } else {
            //如果没有该值执行函数获取值,拿这个值在哈希表当中创建该键值对
            return cache[key] = f.apply(this, arguments)
             
        }
    }
}
console.time("fibonacci")
fibonacci = memorize(fibonacci)
console.log(fibonacci(3000))
console.log(count)
console.timeEnd('fibonacci')