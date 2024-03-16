

// 函数拷贝

let fn = function() {
    console.log('fn');
    console.log(this.a);
  }
  let a = {
    a: 1,
    fn
}

  function copy(fn) {
    return new Function('return ' + fn.toString()).call(fn)
    
  }
// console.log(fn());
a.fn()

//  foo()