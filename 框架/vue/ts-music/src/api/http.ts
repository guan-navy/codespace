import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 10 * 1000;
axios.defaults.maxBodyLength = 5 * 1024 * 1024;
axios.defaults.withCredentials = true;

// 响应拦截
axios.interceptors.response.use(
    (response) => response,
    function (error) {
        return Promise.reject(error)
    }
)

interface Http {
    // ? 代表可选 类型unknown
    // 一定得有返回值————Promise 是TS的难点、亮点 eg:tailwind hooks编程 typesrict
    get<T>(url: string, params?: unknown): Promise<T>
}
const http: Http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, { params })
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err.data);
                })
        })
    }
}

export default http;