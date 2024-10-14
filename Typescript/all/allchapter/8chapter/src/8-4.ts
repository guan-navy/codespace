//vue3 当中的类型体操
//预备知识,for in可以拿到对象的键名 in keyof的话 可以拿到键名
//泛型递归
interface Customer84{
    name:string;
    age:number;
    phone:string;
}
type CustomerKeys = {
    [key in keyof Customer84]:Customer84[key]
}
type CustomerKeys2 = {
    //Customer84[key]这种写法可以获取到Customer84的键值类型
    [key in "name" | "age" | "phone"]:Customer84[key]
}
//实现一个通用的对象类型解析类型
type types84<T> =  T extends object ? {[key in keyof T]:T[key]} : never
type CustomerKeys3 = types84<Customer84>