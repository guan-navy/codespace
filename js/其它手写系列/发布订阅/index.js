
class eventEmitter{
    events = {}

    on(event,fn){
        if(!this.events[event]){
            this.events[event] = new Set()
            
        }
        this.events[event].add(fn)
    }
    emit(event){
        if(!this.events[event])return
        for(const fn of this.events[event]){
            fn()
        }

    }
    off(event,fn){
        // 不存在直接返回
        if(!this.events[event])return
        else{
            this.events[event].delete(fn)
            // 删除该事件
            if(this.events[event].size===0) delete this.events[event]
        }
    }
    once(event,fn){
        if(!this.events[event]){
            this.events[event] =new Set()
        }
        const wrapFn =()=>{
            fn()
            this.off(event,wrapFn)
        }
        this.events[event].add(wrapFn)
    }
}

const a = new eventEmitter()
a.on('test1',()=>{
    console.log('123');
    
})
a.on('test1',()=>{
    console.log(1234);
    
})
a.emit('test1')
a.emit('test1')
a.once('2',()=>{
    console.log('once');
    
})
a.emit('2')
a.emit('2')
a.emit('2')
function foo(){
    console.log('foo');
    
}
a.on('1',foo)
a.off('1',foo)
a.emit('1')
