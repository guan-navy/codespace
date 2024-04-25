//vue3 源码两次使用泛型约束
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
type ObjTyp = {name:string,age:number};
type ObjKeysType<T extends object,K > = K extends keyof T?K:never
type TestObjKeysTyp = ObjKeysType<ObjTyp,'name'|'age'|'sex'>
const obj66 = new ObjectRefImpl<ObjTyp,"age">({
    name:'zhangsan',
    age:18
},'age')
console.log(obj66.value)
