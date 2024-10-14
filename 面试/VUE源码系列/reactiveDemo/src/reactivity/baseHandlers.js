const get = createGetter()
const set =  createSetter()

// {a:{c:{d:3}},e:4}
// proxy 优势 懒代理 性能

function createGetter(shollow = false) {
    //闭包 shallow

    return function get(target, key, receiver) {
        //reflect映射
        const res =Reflect.get(target, key, receiver)
        console.log('get', key)
        track(target,'get', key)
        if(isObject(res)){
            return shallow?res : res.get(res)
        }
        return res
    }
}

function createSetter() {
    return function set(target, key, value, receiver) {
        console.log('set', key, value)
        return Reflect.set(target, key, value, receiver)
    }
}

export const mutableHandlers={
    get,
    set

}


//浅一点的响应式处理
export const shallowReactiveHandlers={
    get,
    set
}