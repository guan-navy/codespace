class TaskStack {
    constructor(limit) {
        this.limit = limit;
        this.taskQueue = [];
        this.runningCount = 0;
    }

    async run(fn, resolve, ...args) {
        this.runningCount++;
        try {
            const result = await fn(...args);
            console.log(result);
            resolve(result);
        } catch (error) {
            console.error('Task failed:', error);
            resolve(error);
        } finally {
            // 该任务执行完毕之后，无论任务成功或者是失败，开启下一个任务
            this.next();
        }
    }

    next() {
        this.runningCount--;
        if (this.taskQueue.length > 0 && this.runningCount < this.limit) {
            this.taskQueue.shift()();
        }
    }

    enqueue(fn, ...args) {
        return new Promise(resolve => {
            this.taskQueue.push(this.run.bind(this, fn, resolve, ...args));
            if (this.runningCount < this.limit && this.taskQueue.length > 0) {
                this.taskQueue.shift()();
            }
        });
    }
}

const taskStack = new TaskStack(2);
const addTask = (time, order) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(order);
            resolve();
        }, time);
    });
};

Promise.all([
    taskStack.enqueue(addTask, 2000, '1'),
    taskStack.enqueue(addTask, 500, '2'),
    taskStack.enqueue(addTask, 300, '3'),
    taskStack.enqueue(addTask, 400, '4'),
    taskStack.enqueue(addTask, 500, '5'),
    taskStack.enqueue(addTask, 600, '6'),
    taskStack.enqueue(() => {
        throw new Error('出错了');
    })
]).catch(err => console.error('Promise.all failed:', err));
