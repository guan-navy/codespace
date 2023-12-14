//用栈模拟队列
//头进尾出


// void push(int x) 将元素 x 推到队列的末尾
// int pop() 从队列的开头移除并返回元素
// int peek() 返回队列开头的元素
// boolean empty() 如果队列为空，返回 true ；否则，返回 false


//使用两个栈
//存入的时候放第一个存入栈
//取出的时候将第一个栈里的元素拿出放到第二个栈里面
//如果第二个栈也就是取出栈不为空,那么就直接从第二个栈里面拿
var MyQueue = function() {
this.stack1 = []
this.stack2 = []
};


MyQueue.prototype.push = function(x) {
this.stack1.push(x)
};


MyQueue.prototype.pop = function() {
if(this.stack2.length ==0){
    while(this.stack1.length!=0){
        this.stack2.push(this.stack1.pop()) 
    }
}
return this.stack2.pop()
};


MyQueue.prototype.peek = function() {
    let temp = this.pop() 
    this.stack2.push(temp)
    return temp

};


MyQueue.prototype.empty = function() {
 if(!this.stack1.length&&!this.stack2.length)  return true
 else return false
};

let queue = new MyQueue
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */