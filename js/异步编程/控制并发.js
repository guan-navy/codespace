class Scheduler {
    constructor(limit) {
      this.queue = [];  // 任务队列
      this.maxCount = limit;  // 并发任务的上限
      this.runningCount = 0;  // 当前运行中的任务数
    }
  
    add(promiseCreator) {
      return new Promise(resolve => {
        this.queue.push(() => promiseCreator().then(resolve));
        this.runTask();  // 尝试执行任务
      });
    }
  
    runTask() {
      if (this.runningCount < this.maxCount && this.queue.length > 0) {
        this.runningCount++;
        const task = this.queue.shift();  // 从队列中取出第一个任务
        task().then(() => {
          this.runningCount--;
          this.runTask();  // 执行下一个任务
        });
      }
    }
  }
  
  const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
  });
  
  const scheduler = new Scheduler(2);  // 并发数为 2
  const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => console.log(order));
  };
  
  addTask(1000, '1');
  addTask(500, '2');
  addTask(300, '3');
  addTask(400, '4');
  