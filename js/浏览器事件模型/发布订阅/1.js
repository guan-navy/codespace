class ExentEmitter{
    constructor(){
        this._events = {}
    }
    on(eventName,cb){
        const cbs = this._events[eventName]||[]
        cbs.push(cb)
        this._events[eventName]=cbs
    }
    emit(eventName,...args){
        const cbs = this._events[eventName]||[]
        // 逐个触发
        cbs.forEach(cb=>cb(...args))
    }
    off(eventName,cb){
        const cbs = this._events[eventName]||[]
        const newCbs = cbs.filter((fn)=>fn!==cb)
        this._events[eventName] = newCbs
    }
    once(eventName,cb){
        const fn=(...args)=>{
            cb(...args)
            this.off(eventName,fn)
        }
        const cbs = this._events[eventName]||[]
        cbs.push(fn)
        this._events[eventName] = cbs

    }
}
// 测试
const e = new ExentEmitter()
const fn = (...args)=>{
    console.log(args);
}

e.on('test',fn)
e.once('test1',fn)
console.log(e);

e.emit('test',1,2,3)
e.off('test',fn
)
e.emit('test1',1,2,3)
console.log(e);

