import axios from 'axios'
import { ElMessage } from 'element-plus';

//创建一个axios实例
const axiosObj = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2000
})
// 这段代码是为了让axios发送post请求时，自动加上请求头
axios.defaults.headers.post["Content-Type"] = "application/json";

// 响应拦截,响应中间件
axiosObj.interceptors.response.use((res)=>{

    if(res.status!=200){
      ElMessage({
        message: '服务端异常',
        type: 'error',
        duration: 5000,
        offset:100,
        showClose: true
      
      });
      
    }else{
      if(res.data.code!='8000'){
        //如果返回的code不是8000，就弹出错误信息,并且停在这里
        ElMessage({
          message: res.data.msg,
          type: 'error',
          duration: 5000,
          offset:100,
          showClose: true
        
        })
        return Promise.reject(res.data)
      }
      //其他情况继续走
      ElMessage({
        message: res.data.msg,
        type: 'success',
        duration: 500,
        offset:100,
       
      
      })
        return res.data
    }
}

)

export default axiosObj