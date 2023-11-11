let obj={
a:3,
b:4
}
obj.a=0

//快捷方式批量修改
with(obj){
    a=1,
    b=2
}

//
function foo(){
    with(obj){
        
    }
}