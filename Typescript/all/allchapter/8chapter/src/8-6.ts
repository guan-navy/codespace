//条件类型
// 联合类型交集
type Test86 =string|number |boolean extends string | number ? string : never

//下面写法和上面写法的区别
//从联合类型中拿出一个类型和extends后面的联合类型比较
type ConTyp<T> = T extends string | number ? string : never
type TestTyp86 = ConTyp<string|number |boolean>


//复杂应用,为一个接口添加类型
// 使用映射类型
//在遍历属性名的时候使用联合类型添加进去新的属性名
type AppAttrToObj<T,K extends string,V>={
    [P in keyof T | K]: P extends keyof T ? T[P]:V
}
interface Customer86{
    name:string,
    degree:number,
    phone:string,
}
type NewCustomer=AppAttrToObj<Customer86,'address',string>

