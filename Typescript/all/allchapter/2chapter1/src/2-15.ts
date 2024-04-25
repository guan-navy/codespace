//可索引签名：可索引签名需要去兼容已经归定的属性
{
    interface P {
        name: string
        age: number
        //大部分写成这种字符串的形式
        [x: string]: any
        // 这种写法之后[]内只支持symbol类型
        // [x: symbol]: any
    }
    let myAny:any = {};
    let p15: P= {
        name: '张三',
        age: 18,
        sex: '男',
        //属性名并不一定为string在上述的接口的规定下
        //这种写法支持数字，数组内部，布尔值
        //[]内部的值的属性需要为字符串，symbol，数字，any类型
        1: '1',//非常少见
        true:'',
        ['']: '1',
        [123]:'1',
        [myAny]:'1',
        [Symbol('123')]:'1',
       
    }
    console.log(p15);
}
