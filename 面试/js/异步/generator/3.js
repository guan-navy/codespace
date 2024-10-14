let count = 0
function a(){
setTimeout(()=>{
    console.log('a完成');
},1000)
}
function b(){

    console.log('b完成');

}


function* g(){
    yield a()
    yield b()
}
let gen =g()
function run(fn){
    let gen  = fn()
    function next(err,data){
        let result = gen.next(data)
        if(result.done) return 
    }
    result.value.next()
}



