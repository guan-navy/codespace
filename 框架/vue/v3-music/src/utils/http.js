import axios from 'axios'
// fetch xhr vue应用的时候，自己写一个axios是为了可以复用、 并且我们做的是App而不是页面方便统一管理
// 它会在所有的请求前面加上baseURL地址
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 10 * 1000; //超时时间设置为 n * 1000 毫秒
axios.defaults.maxBodyLength = 5*1024*1024; //图片上传的大小

const http = {
    get(url,params={}){
        // 能 await 
        return new Promise((resolve,reject) => {
            // 前端有 xhr fetch 但是用axios React封装的http也是用的axios
            // 请求的抽象
            axios
                .get(url,{params})
                .then((res) => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    }
}

export default http;