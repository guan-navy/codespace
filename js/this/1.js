console.log(this)


function identify(){
    return this.name.toUpperCase()//报错

}
function speek(){
    var greeting="hello,I'm"+identify.call(this)
    console.log(greeting)
}
var me={
    name:"Tom"
}
var you={
    name:"Jerry"
}

speek.call(me)