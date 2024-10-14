//infer的使用

// 拿到函数类型中的类型
interface Customer81
{
    custname:string
    buymoney:number
}
type CustFn = (cust:Customer81)=>string
//只要满足条件能获取到infer位置的类型,顺序不能调换,不用知道函数的具体就能拿到一些参数的类型
type CustParaTyp1 = CustFn extends(params :infer P)=>number?P:never
type CustParaTyp2 = CustFn extends(params :any)=>infer R?R:CustFn

// 拿到泛型类型中函数参数的类型
type ParamsTyp<T> = T extends (params:any)=>infer R?R:T 

type CustParaTyp3 = ParamsTyp<CustFn>

//数组泛型
type EleOfArr<T> = T extends Array<infer E>?E:never
type EleOfArrTyp = EleOfArr<Array<string>>
