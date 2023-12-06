<template>
    <div class="login">
      <div class="login-wrap">
  
        <div class="item">
          <span>账号：</span>
          <input type="text" v-model="account">
        </div>
        <div class="item">
          <span>密码：</span>
          <input type="text" v-model="password">
        </div>
        <div class="item">
          <button @click="login">登录</button>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
    export default {
        data(){
         return{
            //v-model双向绑定
            account: '',
            password:'',
         }
        }
        ,
        methods:{
        login(){
            //发起请求传给后端
            if(this.account===''||this.password===''){
                alert('账号或者密码不能为空')
                return
            }
            //使用js跳转
            // this.$router.push(`/home/${this.account}`)
            // this.$router.push({path: '/home',query: {user:this.account}})
            // this.$router.push({name: 'home',params: {user:this.account}})
            this.$router.push({path: 'home',hash:`#${this.account}` })


        }
     } 
    }
  </script>
  
  <style lang="less" scoped>
  .login{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d4d4d4;
    .login-wrap{
      width: 400px;
      height: 300px;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0 0 100px #fff;
      padding: 20px;
      // box-sizing: border-box;
      font-size: 25px;
      .item{
        display: flex;
        margin-top: 30px;
        span{
            font-size: 26px;
            font-family: "helvetica neue", tahoma, "PingFang SC", "microsoft yahei", arial, "hiragino sans gb", sans-serif;
            margin: 0;
        }
        input{
          flex: 1;
          padding: 0 10px;
        }
        button{
            font-size: 27px;
            flex: 1;
            border-radius: 8px;
            background-color: rgb(17, 221, 149);
            border: none;
           padding: 5px 0;
           cursor:pointer;
        }
      }
    }
  }
  input:focus {
  outline: none;
}

  </style>