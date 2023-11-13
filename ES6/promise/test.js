function foo(){

     let a= 1 
     return function bar(){
        console.log(a);
     }
}

let baz = foo()

baz()