// 非常规深拷贝拷贝,消息管道,异步处理
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        e: 4,
        f: 5,
        g: 6
    }
}

function deepCopy(obj) { // 需要传入待拷贝的对象
    return new Promise((resolve, reject) => {
        const { port1, port2 } = new MessageChannel();

        port2.onmessage = function(event) { // 监听 port2 的 message 事件
            resolve(event.data); // 当接收到消息时，将数据传递给 resolve 函数
        };

        port1.postMessage(obj); // 通过 port1 发送对象
        // port2.onmessage = null; 
    })
}

(async function() {
    let res = await deepCopy(obj); // 调用 deepCopy 时需要传入 obj
    console.log(res);
})();