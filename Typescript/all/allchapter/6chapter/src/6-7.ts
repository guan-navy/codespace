//vue3 源码两次使用泛型约束
{
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
    // type ObjTyp = {name:string,age:number};
 //这里没有使用泛型而是通过反向推断获得类型
//  但是我们给了一个错误的值也是会报错的
    const obj66 = new ObjectRefImpl({
        name:'zhangsan',
        age:18
    },'age')
    console.log(obj66.value)
}

