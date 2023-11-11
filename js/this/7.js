
/* var obj={
    name:"TOM",
    show:function(){
        // console.log(this)
        var bar=function(){
            console.log(this.name);
        }
        bar()
    }
    
}
obj.show() */
var obj={
    name:"TOM",
    show:function(){
        // console.log(this)
        var bar=()=>{
            console.log(this.name);
        }
        bar()
    }
    
}
obj.show()