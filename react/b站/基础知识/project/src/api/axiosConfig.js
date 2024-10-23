import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // 你的基础 API URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  }
});


export default axiosInstance;
