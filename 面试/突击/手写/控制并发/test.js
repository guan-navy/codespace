function task(num,time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`task${num}`);
            resolve()
        },time)
    })
}
class superTask{ //任务调度器
    constructor(maxRunTaskCount = 2){ //默认支持两个任务并行
        this.task = []//任务列表用于存储任务的
        this.maxRunTaskCount = maxRunTaskCount //最大任务并发数量
        this.runTaskCount =0 //此时的任务并发数量
    }
    add(task){
        return new Promise((resolve,reject)=>{
            this.task.push({
                task,
                resolve,
                reject
            })
            this._run()
        })
    }
    _run(){
        if(this.runTaskCount<this.maxRunTaskCount&&this.task.length>0){
            this.runTaskCount++;
            const {task,resolve,reject} = this.task.shift()
            task().then(resolve,reject).finally(()=>{
                this.runTaskCount--
                this._run()
            })
        }
    }
}
const taskController = new superTask(2)
function add(num, time) {
    
    taskController.add(() => task(num, time)).then(() => {
        console.log(`task${num}完成`)
    })
}

let count = 1; // 移到 add 函数外部，并初始化
add(1,10000)
add(2,1000)
add(3,2000)
add(4,8000)
add(5,3000)

