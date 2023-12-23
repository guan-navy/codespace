import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 10 * 1000;
axios.defaults.maxBodyLength = 5 * 1024 * 1024;
axios.defaults.withCredentials = true;

// 响应拦截
axios.interceptors.response.use(
  (response) => response,
  function (error) {
    // 在这里处理错误，比如弹出提示或者记录日志
    return Promise.reject(error);
  }
);

// 接口定义
interface Http {
  // 返回值是 AxiosResponse<T>
  get<T>(url: string, params?: unknown): Promise<AxiosResponse<T>>;
}

const http: Http = {
  get<T>(url: string, params?: unknown): Promise<AxiosResponse<T>> {
    return axios.get<T>(url, { params });
  },
};

export default http;
