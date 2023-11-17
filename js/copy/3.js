let obj={
    age:18,
    like:{
       a: 'coding'
    }
}
function shalldowCopy(obj){
    let objCopy = {}
    for (const key in obj) {
        if (Object.hasOwnProperty( key)) {
            obj[key] = objCopy[key];//obj.key会被判断称给obj中创建一个属性
            
        }
        
    }
    return objCopy
}
let newObj  = shalldowCopy(obj)
console.log(newObj)
obj.age = 19
console.log(newObj)
obj.like.a='washing feet'
console.log(newObj)

function shalldowCopyPlus(obj){
 /*    let objCopy = {}
    if(obj instanceof Array){
        objCopy = []
    } */
    //原始数据类型
    if(typeof obj !=='object' || obj ==null) return 
    let objCopy = obj instanceof Array ? [] : {}
    for (const key in obj) {
        if (Object.hasOwnProperty( key)) {
            obj[key] = objCopy[key];//obj.key会被判断称给obj中创建一个属性
            
        }
        
    }
    return objCopy
}
