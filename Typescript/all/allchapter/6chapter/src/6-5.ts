class Order{
    orderid!:number
    ordername!:string
    static count:number
    printOrd(){}
    static getCount(){}
}
type OrderType = Order["orderid"]
//获取一个对象的所有属性名,然后组成一个联合属性
// 使用extends 来约束T
type InstancePropkeys<T extends object> = keyof T
type OrderPropkeys = InstancePropkeys<Order>