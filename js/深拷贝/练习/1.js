function deepClone(value,hash = new WeakMap()){
    // 处理基本数据类型直接返回
    if(typeof value !=='object'||value===null)return value
    // 特殊对象
    if(hash.has(value))return hash.get(value)
    // 正则
    if(value instanceof RegExp) return new RegExp(value.source,value.flags)
    // 日期
    if(value instanceof Date) return new Date(value)
    // map
    if(value instanceof Map){
        const cloneMap = new Map()
        for(const  item of value){
            const [key,val] =item
            cloneMap.set(deepClone(key,hash),deepClone(val,hash))
        }
        return cloneMap
    }
    // set
    if(value instanceof Set){
        const cloneSet = new Set()
        for(const item of value){
            cloneSet.add(deepClone(item,hash))
        }
        return cloneSet
    }
    // weakmap和weakset的话不支持遍历
// 其它对象可能存在循环引用
const clone = Array.isArray(value)?[]:{}
hash.set(value,clone)
const keys = Object.keys(value)
keys.forEach((item)=>{
clone[item] = deepClone(value[item],hash)
})
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
        value:original,
        enumerable:true
    }
)
console.log(deepClone(original));
