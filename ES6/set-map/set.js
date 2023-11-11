/*  let arr = [1,1,2,3,3]
let obj ={

}  */
let set = new Set([1,2,3,4])
console.log(set[0]);//undefined
set.add(5)
set.add(5)
console.log(set);
console.log(set.size);

//数组去重,字节面试(set去不了引用数据类型)
var arr = [1,2,3,4,1,1,2,2]

function unique(arr){
    // return Array.from((new Set(arr)))
    return [...new Set(arr)]
}
var unique1=(arr) =>[...new Set(arr)]
console.log(unique(arr));
console.log(unique1(arr));

set.forEach((item,index,set)=>{
    console.log(item,index,set)
})


//判断有没有存在该值
console.log(set.has(2))

//keys获取所有的键值的对象

//set有迭代器属性


for(let item of set)
{
    console.log(item);
}
//字符串也有迭代器属性
let str='hsgdvja'
for(let item of str){
    console.log(item)
}