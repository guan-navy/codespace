//泛型函数工厂函数类型

export default class CommercialBank{
    public address:string ='beijjing'
    public name:string ='wuhan'
    static count:number
    constructor(name:string,address:string){
        this.name =name
        this.address = address
    }
    loan():void{
        console.log('贷款')
    }
}
//  CommercialBank是个构造函数对象变量
//代表任意一个类的构造函数的类型
type ConstructorTyp79 = new (name:string,address:string  ) =>  CommercialBank
// ConstructorTyp代表任意一个类的构造函数的类型
// type ConstructorTyp = new (...args: any   ) => any
//此时的类作为对象赋值
let CommercialBankInstance:ConstructorTyp79 = CommercialBank
//这里作为构造函数使用
let cbIntance = new CommercialBankInstance('wuhan','beijing')
console.log(cbIntance);
