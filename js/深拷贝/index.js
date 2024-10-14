function deepClone(value,hash = new WeakMap()){
    // 基本数据类型直接返回
    if(typeof value !== 'object' || value === null) return value
    // 引用数据类型
    if(hash.has(value)) return hash.get(value) // 防止循环引用
    if(value instanceof RegExp) return new RegExp(value.source,value.flags)
    if(value instanceof Date) return new Date(value.getTime()) // 注意getDate是获取日期，而不是时间戳
    if(value instanceof Set ) {
        const cloneSet = new Set()
        value.forEach((item)=>cloneSet.add(deepClone(item,hash)))
        return cloneSet
    }
    if(value instanceof Map){
        const cloneMap = new Map()
        value.forEach((val, key)=>{
            cloneMap.set(deepClone(key,hash),deepClone(val,hash))
        })
        return cloneMap
    }
    // 处理普通对象和数组
    const clone = Array.isArray(value) ? [] : {}
    hash.set(value,clone) // 存储防止循环引用
    for(let key in value){
        if(Object.hasOwn(value,key)){
            clone[key] = deepClone(value[key],hash)
        }
    }
    return clone
}

const original = {
        a: new Date(),
        b: /abc/g,
        c: new Map([[1, 'one'], [2, 'two']]),
        d: new Set([1, 2, 3]),
        e: {
            f: null,
            g: [1, 2, { h: 3 }]
        }
    };
    Object.defineProperty(original,
        "i",{
            value:original
        }
    )
console.log(deepClone(original));
const obj ={}
Object.defineProperty(obj, 'name', {
    value: 'John',
   enumerable:true
});
console.log(obj);

