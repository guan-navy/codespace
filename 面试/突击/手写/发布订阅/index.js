class EventEmitter {
  constructor() {
    this.event = {}; //使用对象存储事件,每个时间都是
  }
  on(type, cb) { //订阅事件注册函数
    if (!this.event[type]) {
      this.event[type] = [cb];
    } else {
      this.event[type].push(cb);
    }
  }
  emit(type, ...args) {//发布事件触发回调
    if (!this.event[type]) return;
    this.event[type].forEach((cb) => {
      cb(...args);
    });
  }
  once(type, cb) {
    //订阅一次
    const fn = (...args) => {
      cb(...args); //触发完之后就将其删除
      this.off(type, fn);
    };
    this.on(type, fn);
  }
  off(type, cb) { //使用过滤器来过滤掉取消的回调
    if (!this.event[type]) return;
    this.event[type] = this.event[type].filter((item) => item !== cb);
  }
}
function test() {
  console.log("test");
}
let ev = new EventEmitter();
ev.on("打印", (a) => {
  console.log("打印", a);
});
ev.once("打印", (a) => {
  console.log("打印一次后失效", a);
});
ev.on("打印", test);
ev.off("打印", test);
ev.emit("打印", 1);

console.log(ev);
// 发布订阅来处理异步
function fast() {
    console.log('同步代码执行结果');
}
function slow(){
    setTimeout(() => {
        console.log('异步代码执行结果');
        ev.emit('处理异步')
      }, 1000);
}
ev.on('处理异步', fast);
slow()


