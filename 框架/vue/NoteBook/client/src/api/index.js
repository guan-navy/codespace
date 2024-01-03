import axios from "axios";
import { showSuccessToast, showFailToast } from "vant";

axios.defaults.baseURL = "http://localhost:3000";
// 这段代码是为了让axios发送post请求时，自动加上请求头
axios.defaults.headers.post["Content-Type"] = "application/json";

//请求拦截

//响应拦截
axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    //程序错误
    showFailToast("服务端异常");//vant提示组件
  }else{
    if(res.data.code!==8000){
        showFailToast(res.data.msg);
        // Promise.reject(res)
        return res.data
    }
    return res.data
  
  }
});

export default axios
