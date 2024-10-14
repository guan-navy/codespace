{
    //! 断言强制取消非空报错
    let str:string |null= '123';
    // str = "hello";
    let strLength:number = str!.length
    console.log(strLength);
    //? 可选连运算符(js在2020新增了该运算符)
    type student = {
        name:string,
        age?:{
            length:number
         } //?表示可选属性
    }
    let obj1:student = {
        name:"张三"
    }
    let age = obj1.name?.length
    console.log(age);
    // 空值运算符??
    let b : number |null = null;
    console.log(b??0);
    
}