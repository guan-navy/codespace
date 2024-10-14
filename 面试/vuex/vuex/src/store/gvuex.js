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

        //会进行深度的响应式
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
    // type 是一个字符串，代表你想要触发的 mutation 的类型。
    // payload 是一个灵活的数据载体，它可以是任何你需要传递给 mutation 或 action 的额外参数。
    //执行mutation中的方法
    commit = (type, payload)  => {
        const entry = this._mutations[type]
        //使用短路运算符,确保找到了才执行,更加简洁,运行速度更快
        entry && entry(this.state, payload)
    }

    //执行action中的方法
    dispatch(type, payload) {
        const entry = this._actions[type]
        return entry && entry(this, payload)
    }

    //该方法也就是在 main.js当中app.use(store)实际上就是调用该方法
    install(app) {
        // console.log(a)
        // 电台   发布者
        app.provide(STORE_KEY, this)
    }
}


export { createStore, useStore }