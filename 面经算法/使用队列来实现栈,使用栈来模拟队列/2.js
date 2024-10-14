//用栈来模拟队列
class MyQueue {
    constructor(){
        this.Enstack=[]
        this.Destack=[]
    }
    Enqueue(value){
        this.Enstack.push(value)
    }
    Dequeue(){
        if(this.Destack.length===0){
           if(this.Enstack.length!==0)
           {
            while(this.Enstack.length!==0){
                this.Destack.push(this.Enstack.pop())
            }
            return this.Destack.pop()
           }else{//队列为空
            return
           }
    }else{
        return this.Destack.pop()
    }
}
}

let myqueue = new MyQueue()

myqueue.Enqueue(3)
myqueue.Enqueue(4)
myqueue.Enqueue(1)
myqueue.Enqueue(2)

console.log(myqueue.Dequeue());
console.log(myqueue.Dequeue());

console.log(myqueue.Dequeue());

console.log(myqueue.Dequeue());
console.log(myqueue);



