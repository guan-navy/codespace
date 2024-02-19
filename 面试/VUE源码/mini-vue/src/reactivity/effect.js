//这是一个 Map 对象，用于存储目标对象和它们的依赖关系映射。每个目标对象都有一个对应的映射，其中键是对象的属性，值是依赖该属性的副作用函数集合。
const targetMap = new Map();


//这是一个全局变量，用于存储当前正在执行的副作用函数。在 effect 函数执行期间，它会被设置为当前的 effectFn。
let activeEffect = null;



export function effect(fn, options = {}) {
    const effectFn = () => {
        try {
            activeEffect = effectFn;
            return fn();
        } finally {
            activeEffect = null;
        }
    };

    if (!options.lazy) {
        effectFn();
    }

    return effectFn;
}


//收集对该属性的依赖函数
export function track(target, key) {
    // 获取或初始化depsMap
    let depsMap = targetMap.get(target);

    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }

    // 获取或初始化deps
    let deps = depsMap.get(key) || new Set();

    // 添加当前副作用函数到deps
    if (!deps.has(activeEffect) && activeEffect) {
        deps.add(activeEffect);
    }

    depsMap.set(key, deps);
}

//当值改变时触发依赖函数
export function trigger(target, key) {
    // 获取depsMap
    const depsMap = targetMap.get(target);

    if (!depsMap) {
        return; // 没有副作用函数依赖于该对象
    }

    // 获取deps
    const deps = depsMap.get(key);

    if (!deps) {
        return; // 该属性没有依赖
    }

    // 遍历触发所有依赖的副作用函数
    deps.forEach(effectFn => effectFn());
}
