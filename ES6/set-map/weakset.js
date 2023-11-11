let obj ={
    name:'德玛西亚'
}
//obj就被销毁了
let ws = new WeakSet()
ws.add(obj)//weakset对对象的引用

/* obj=null//告诉垃圾回收机制可以被回收
console.log(obj);//空对象 */
console.log(ws);

