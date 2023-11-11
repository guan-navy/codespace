let obj = {
    a : 1,
    b :2
}
// 只能用字符串作为key,对象的限制
var arr = []
obj [arr] = 3

console.log(obj);




//map对象,可以任意值作为key
console.log('-------------map--------------');

//初始化加入默认值
let map = new Map([
    ['name','老王']
])

//加入值
map.set({a:1},'hello')
console.log(map);

//取值
let obj1 ={ a:1}
map.set(obj,'hello')
console.log(map);
console.log(map.get(obj1));


//遍历
console.log('遍历');
map.forEach((value,key,map)=>{
    console.log(value,key,map);
})