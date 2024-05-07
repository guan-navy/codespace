module.exports = {
  root: true,

  env: { // 定义环境,定义浏览器环境的话一些全局变量就不会报错了
    node: true,
    es2021: true
  },
  //如果规范不想写的话可以继承
  extends: [
    
  ],
  //解析配置
  parserOptions: {
    //es版本
   ecmaVersion:6,
   //模块类型
   sourceType:"module",
   ecmaFeatures:{
      //jsx语法
      jsx:true
   }
  },
  //具体的检查细节 可以在eslint官网查
  rules: {
    //是否允许使用console,0允许,1警告,2禁止
    'no-console': 2
}
}