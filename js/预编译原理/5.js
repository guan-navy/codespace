/* 
go{         
    global u  100
    fn     f
}
ao{
    global u 200 300
}
 */
global=100
function fn(){
    console.log(global)
    global=200
    console.log(global)
    var global=300
}
fn(

)
var global