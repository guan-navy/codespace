import { createStore,createLogger } from "vuex";
import cart from './modules/cart';
import products from './modules/products';

// 返回一个单一状态树
export default createStore({
    modules:{
        cart,
        products,
    },
    plugins: [createLogger()],
})