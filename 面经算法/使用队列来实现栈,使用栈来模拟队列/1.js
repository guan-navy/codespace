//使用数组模拟队列

//先进先出,那么就是这两个方法unshift()和pop()
// 使用一个队列来模拟栈

class MyStack {
  constructor() {
    this.queue = [];
   
  }
  push(value) {
    this.queue.push(value);
  }
  pop() {
  
      if (this.queue.length !== 0) {
        let count = this.queue.length
        while(count > 1) {
           
            this.queue.push(this.queue.shift())
            count--
        }
        return this.queue.shift()
      }else{
        //两个队列为空
        return;
      }
    
  }
}
let a = new MyStack()
a.push(1)
a.push(2)
console.log(a.pop())
console.log(a.pop())
