# token (令牌)

- cookie 是浏览器的内存空间, 但是受后端的掌控,后端将登录令牌保存在cookies中,所有被保存在cookies中的数据,都是在http请求中是自动被携带在请求头中的.大约只有4kb,所有一般就是存储令牌

- 由   头部 - 负载 - 签名



两次登入token不一样,而且只认证最新的token

登录接口一般是校验token,校验token也没有啥意义,因为是空的


 - 校验的表达
 前端登录之后,后端,校验账号密码成功之后,靠jwt来生成一个token,并将给token返回给前端,前端在接受到token后将token保存在==浏览器本地缓存==,封装了axios,在axios的拦截器中,将token添加到请求头中Authrization字段,这样就不用每次请求都手动添加token了,后端获取到请求头中的token并进行校验,如果token合法则返回数据,否则则返回401状态码==(http)==tokens失效,(http)

   - 坑
     - http状态码
     - 浏览器的本地缓存
     
# websocket
后端实时通知前端


## axios二次封装

- 让每次请求中的请求头中加上token的问题
如果直接使用default的话只会在vue实例第一次加载的时候生效
但是使用请求拦截的话就不不生效了



