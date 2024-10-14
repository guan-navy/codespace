import axios from 'axios'
import { ElMessage } from 'element-plus';

//创建一个axios实例
const axiosObj = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2000
})



// 请求拦截
axiosObj.interceptors.request.use(config => {
  console.log('请求拦截',config);
  let token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})
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
          duration: 500,
          offset:100,
         
        
        })
        // return Promise.reject(res.data)
      }
      //其他情况继续走
      else if(res.data.code=='8000'){
        //如果返回的code是8000，就弹出成功信息，然后继续走
        ElMessage({
          message: res.data.msg,
          type: 'success',
          duration: 500,
          offset:100,
         
        
        })
       
      }
      return res.data
       
    }
}

)

export default axiosObj