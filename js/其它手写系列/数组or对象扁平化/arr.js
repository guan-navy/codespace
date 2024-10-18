// const nestedArray = [1, [2, [3, 4], 5], 6];

// [1,[2,3]]
// 递归
const nestedArray = [1, [2, [3, 4], 5], 6];
function recursionFlat(arr){
    if(!Array.isArray(arr)){
        return arr
    }else{
        let res =[]
      arr.forEach((item)=>{
       res = res.concat(recursionFlat(item))
      })
       return res
    }
}
// 迭代法
function iterationFlat(arr){
    if(!Array.isArray(arr)) return 
    const stack =[...arr]
    const res =[]
    while(stack.length){
        const curItem  = stack.pop()
        if(Array.isArray(curItem))stack.push(...curItem)
            else res.push(curItem)
    }
    return res.reverse()
}

// 使用reduce递归
function reduceFlat(arr){
    if(!Array.isArray(arr)) return 
   return  arr.reduce((acc,cur)=>{
        if(Array.isArray(cur)){
            acc = acc.concat(reduceFlat(cur))
        }else{
            acc.push(cur)
        }
        return acc
    },[])
}

console.log(iterationFlat(nestedArray));

console.log(recursionFlat(nestedArray));
console.log(reduceFlat(nestedArray));



// 迭代