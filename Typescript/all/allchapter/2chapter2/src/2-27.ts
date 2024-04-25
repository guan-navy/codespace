{
    //在结构的时候呢相当于说明文字说明变量的含义
        
        let [name, age, ...rest]: [name:string, age:number,...any[]] = ["Tom", 18];
        console.log(name, age, rest);
        
}