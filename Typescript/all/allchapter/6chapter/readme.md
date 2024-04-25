# 泛型 入门
## 定义
定义时不明确的类型，在实例化的时候确定类型(泛型的宽泛)
编译期间惊醒数据类型检查的数据类型(泛型的严谨)
## 应用

## 泛型默认值
在使用的时候不给值的话
= 默认类型
## 泛型约束
使用extends 约束泛型赋值
### keyof
表示获取一个类或者是对象类型,或者是一个接口的所有属性名[key]组成的联合类型
### vue3源码中的应用

## extends keyof+keyof的联合应用
```ts
class ObjectRefImpl<T extends object,K extends keyof T>{
    public readonly __V_isRef = true;
    constructor(public readonly _object:T,public readonly _key:K){}
    get value(){
        return this._object[this._key];
    }
    set value(newValue){
        this._object[this._key] = newValue;
    }
}
```
## 泛型的反向赋值
```ts
    // type ObjTyp = {name:string,age:number};
 //这里没有使用泛型而是通过反向推断获得类型
//  但是我们给了一个错误的值也是会报错的
    const obj66 = new ObjectRefImpl({
        name:'zhangsan',
        age:18
    },'age')
    console.log(obj66.value)

```
