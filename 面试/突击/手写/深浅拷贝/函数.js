// 



function a() {
    console.log('hello world');
  }
  
  function copy(fn) {
  
    let foo = fn.toString();
 
    return new Function(`return ${foo}`).call(fn)
  
   
  } 
  let foo = copy(a)
  console.log(foo.toString());

  foo()