{//函数的返回值类型,写在括号后面
    function fun(p1:string|null):void{
        console.log(p1?.length);//防止变量为空报错
        
    }
    function fun1(p1?:string|null):void{
        console.log(p1?.length);//防止变量为空报错
        
    }
    function fun2(p1?:string|null):never{
        console.log(p1?.length);//防止变量为空报错
        throw new Error();
    }
    let arrowFun = (p1:string|null):void=>{
        console.log(p1?.length);//防止变量为空报错
        
    }
    arrowFun('123')
    fun(null)
    fun1()
    fun1("123")
    fun2()


    //函数特有的内容,函数的重载
    function fun3(p1:string):void;
    function fun3(p1:number):void;
    function fun3(p1:any):void{
        console.log(p1);
    }
    //一个函数两个重载标签
    function fun4(a1:string,a2?:number):void
    function fun4(a1:string):void
    function fun4(a1:string,a2?:any):void{
        console.log(a1,a2);
    }

    
}
