// shop
// 当我们在做一个大型项目的时候 会将项目分成各模块
// index.js 代表入口
// 每个模块都有自己的接口文件

// vuex ：对数据的读|写 读可以随便读 但是不能随便修改，要遵守一个流程
// 当出现A和B两个竞争关系 同时访问_products 如果没有中央的vuex 就会出现问题
// 这个流程是通过 -> action(api)来触发 -> mutations(回溯，记账一样)
// vuex本质是一种设计模式 后来被pinia取代，但是考点主要围绕上述的vuex
// _开头命名代表该数据私有，只在本模块内使用

const _products = [
    { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
    { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
    { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

export default {
    // 阅读后端接口文档，actions要调用的方法
    getProducts(cb) {
        // 模拟异步请求 要花时间
        setTimeout(() => {
            // 回调函数
            cb(_products)
        }, 100)
    },
    buyProducts(products, cb, errorCb) {
        setTimeout(() => {
            // 抛硬币
            (Math.random() > 0.5)? cb() : errorCb()
        },100)
    },
}

