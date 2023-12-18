import { createStore } from 'vuex'
//创建
const store = createStore({
    state() {//公共数据源data
        return {
            lists: ['html', 'css', 'js']
        }
    },
    mutations: {//methods 修改数据源
        //第一个形参,代表stste
        listAdd(state, val) {
            console.log(123);
            state.lists.push(val)
        }
    }
})
//抛出
export default store 
