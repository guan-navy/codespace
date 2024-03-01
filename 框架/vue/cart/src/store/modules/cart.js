const state = {
    all:[]
}

const getters = {
}

const actions = {
    //以下这段代码
    getAllProducts({commit}){
       shop.getProducts(products=>{
           commit('setProducts',products)
       })
        }
    }



//仓库管理员
const mutations = {
    setProducts(state,products){
        state.all = products
    },
}

// state.cart.state 
export default {
    namespaced: true, // 支持命名空间 
    state,
    getters,
    actions,
    mutations
}