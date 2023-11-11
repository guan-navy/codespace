global.gc()//强制垃圾回收机制
console.log(process.memoryUsage());//计算node中内存占用情况

let obj ={
    name:'德玛西亚',
    age:new Array(5*1024*1024)
}
let ws = new WeakSet()
ws.add(obj)


obj = null//指明可以被清理

global.gc()
console.log(process.memoryUsage())