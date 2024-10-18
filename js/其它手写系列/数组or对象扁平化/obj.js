const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};


// keys,entries
function flattenObj(obj,parent='',res={}) {
    function isObject(obj) {
        if (typeof obj === 'object' && obj !== null) return true
        else false
    }
    if (isObject(obj)) {//对象
       
        Object.keys(obj).forEach((key) => {
            const newKeyName = parent?`${parent}.${key}`:key
            if (isObject(obj[key])){
                flattenObj(obj[key],newKeyName,res)
            }else{
                res[newKeyName]  =obj[key]
            }
         })
         return res
    } else {
        return {}
    }
}
console.log(flattenObj(obj));
