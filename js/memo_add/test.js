var fib = function(n) {

    var fibonacci = function(n) {
       
        return n < 2? n : fibonacci(n - 1) + fibonacci(n - 2); 
    }
    
    function memorize(f) {
        if (typeof f !== 'function') return;
        var cache = {} // 空间换时间 自由变量   
        return function() {
            var key = arguments.length + 
                Array.prototype.join.call(arguments, ",")
            // add 
            if (key in cache) {
                return cache[key]
            } else {
                return cache[key] = f.apply(this, arguments)
                 
            }
        }
    }
    fibonacci = memorize(fibonacci)
    return  fibonacci(n)

    };
   