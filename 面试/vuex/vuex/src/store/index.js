// import {createStore} from 'vuex'
// 全局共享状态 组件组件树 状态树
// store.state.goods.item
// 单例模式

import {createStore} from './gvuex.js'
const store = createStore({
state(){
    return{
        count:1
    }
},
getters:{
    double(state){
        return state.count*2
    }
},
mutations:{ 
    add(state){
        state.count++;
    }
},
actions:{
    asyncAdd({commit}){
        setTimeout(()=>{
            commit('add')
        },1000)
    }
}
})

export default store