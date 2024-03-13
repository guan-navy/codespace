// import{inject, reactive} from 'vue'
// const STORE_KEY = '_store_'
// class Store{
//     constructor(options){//构造函数s
//         this.$options = options//这里的options就是在使用createStore实例化的时候的仓库对象
//          //将状态对象封装成响应式对象
//         this._store = reactive({//下划线属性,私有对象
//             data:options.state()
//         })
//         this._mutations = options.mutations
//         this._actions = options.actions
//         this._getters = {}

//         //getters的实现,先将输入对象中的getters中的每一个函数复制到store对象上
//         Object.keys(options.getters).forEach(name=>{
//            const fn = options.getters[name]
//            this.getters[name] = computed(()=>fn(this.state))
//         })

//         commit = (type,playoad)=>{
//             const entry = this._mutations[type]

//             entry && entry(this.state,playoad)

//         }
//         dispatch = (type,playoad)=>{
//             const entry = this._actions[type]
//             return entry&&entry(this.dispatch,this.state,playoad)
//         }
//     }
//     get state(){ //保护数据的读取
//         return this._store.data
//     }
   
//     install(app){
//     //     console.log(app);
//     //电台 发布者
//     app.provide(STORE_KEY,this)
//     }
// }
// //单一状态树
// function createStore(options) {
//  return new Store(options);
// }
// function useStore(){
//     return inject(STORE_KEY)
// }
// export{createStore,useStore}
import { inject, reactive, computed } from 'vue'

const STORE_KEY = '__store__'
// vue 3.0 版本 
function useStore() {
    return inject(STORE_KEY)
}

class Store {
    constructor(options) {
        this.$options = options
        // 私有的 
        // store.state.   proxy 
        this._state = reactive({
            data: options.state()
        })
        this._mutations = options.mutations
        this._actions = options.actions
        this.getters = {}

        Object.keys(options.getters).forEach(name => {
            const fn = options.getters[name]
            // store.getters.double 
            this.getters[name] = computed(() => fn(this.state))
        })
    }
    // store.state.
    get state() {
        // get 
        return this._state.data
    }
    commit = (type, payload)  => {
        const entry = this._mutations[type]
        entry && entry(this.state, payload)
    }

    dispatch(type, payload) {
        const entry = this._actions[type]
        return entry && entry(this, payload)
    }

    install(app) {
        // console.log(a)
        // 电台   发布者
        app.provide(STORE_KEY, this)
    }
}
// 单一状态树对象
function createStore(options) {
    return new Store(options);
}

export { createStore, useStore }