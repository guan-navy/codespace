// undefined 和 null 的细节
//在ts当中使用一个没有初始化的变量会报错的
//但是如果将类型增加undefined的话，就不会报错了
//同样在tsconfig.json配置文件当中，将strictNullChecks设置为false，就不会报错了（做法不值得提倡）


    let a: number|undefined;
    console.log(a);
    //函数参数增加可选 可选符号的行为
    //1. 会将函数参数的类型增加一个联合类型undefined
    //2 .而且这个参数也可以不传
    function fn(a?:number){
        console.log(a);
    }
    function fn1(a:number){
        console.log(a);
    }
    //可选参数在处理的时候
    function fn2182(a?:string){
        a!.toString ()
        if(a){
            a.toString()
        }
    }
    fn()
    fn1(1)
    fn2182()
    // 报错
    // fn1(undefined)


    //哪些数据类型可以接受undefined，面试题
