<template>
    <div class="bgc">

        <div class="panel" :style="{
            boxShadow: 'var(--el-box-shadow-light)',
        }">
            <div class="left">
                <img src="../../assets/static/pic/QC[N{HC4`$JRVLWCZQXJ4LY.png" alt="">
            </div>
            <div class="right">
                <div class="title">
                    <div class="font-login" @click="loginOrRegister" :class="{ fontselected: showPanel }">登入</div>
                    <div class="font-line"><i class="iconfont icon-fengexian"></i></div>
                    <div class="font-register" @click="loginOrRegister" :class="{ fontselected: !showPanel }">注册</div>
                </div>
                <div class="login" v-show="showPanel">

                    <input type="text"  v-model="Name" class="username" placeholder="请输入用户名">
                    <input type="password" v-model="Password"  class="password" placeholder="请输入密码">
                    <div class="forget"><a href="">忘记密码</a></div>
                    <div class="submit">
                        <div class="check">
                            <el-button color="#c98181" style="width: 120px;" size="large" 
                            @click="submitLogin"
                                plain>登录</el-button>
                        </div>
                        <div class="cancel" >
                            <el-button style="width: 120px;" color="#c98181" size="large" 
                            :disabled="isNull"
                            @click="loginCancel"
                                plain>清空</el-button>
                        </div>
                    </div>

                </div>
                <div class="register" v-show="!showPanel">
                    <input type="text" v-model="newName" class="username" placeholder="请输入新用户名">
                    <input type="password" v-model="newPassword" class="password" placeholder="请输入密码">
                    <div class="submit">
                        <div class="check">
                            <el-button color="#c98181" style="width: 120px;" size="large" type="primary"
                            @click="submitRegister"
                                
                                plain>注册</el-button>
                        </div>
                        <div class="cancel">
                            <el-button style="width: 120px;" color="#c98181" size="large" type="primary"
                            @click="test"
                                plain >清空</el-button>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    </div>
</template>

<script setup>
import axiosObj from '@/api/index'
import { ref ,computed} from 'vue'
import { ElMessage } from 'element-plus'
import router from '@/router';

const showPanel = ref(true)
const loginOrRegister = () => {
    showPanel.value = !showPanel.value
}



//注册数据
const newName = ref('')
const newPassword = ref('')

//todo 在用户输入一段时间后使用正则表达式数据检验
// watch(newPassword,()=>{
//     if (newPassword.value!= '') {
//     setTimeout(console.log(1),1000)
//     console.log(newPassword.value);
//     if (checkPasswordComplexity(newPassword.value)==false) {
        
//     }
// }
// })
const test =()=>{
    ElMessage({
        message: '注册成功',
        type: 'success',
        duration: 2000,
      });
      
}

// function checkPasswordComplexity(password) {
//     // 定义正则表达式来匹配规则
//     const complexityRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

//     // 使用正则表达式测试密码是否符合规则
//     if (complexityRegex.test(password)) {
//         return true; // 密码通过验证
//     } else {
//         return false; // 密码未通过验证，需要提示用户修改密码
//     }
// }


//登录数据

const Name = ref('')
const Password = ref('')
const loginCancel = () => {
    console.log('清空',Name.value,Password.value);
    Name.value = ''
    Password.value = ''
}
//计算属性
const isNull = computed(()=>{
    return Name.value.length==0&&Password.value.length==0
})

const submitLogin =async()=>{
    const password =Password.value
    const username =Name.value

    if(password.length==0||username.length==0){//用户名密码不能为空
        ElMessage({
            message: '密码或用户名不能为空',
            type: 'warning',
            duration: 2000,
          
        })
    }
    else{//发送请求
        const res =  await axiosObj.post('/login',{
        username:username,
        password:password
    })
    console.log('后端返回数据',res);
    sessionStorage.setItem('token',JSON.stringify(res.data.username))
    localStorage.setItem('token', res.token);

    setTimeout(()=>{
        router.push('/')
    },500)
    
    }
  
    
}
const submitRegister = async()=>{
    const password =newPassword.value
    const username =newName.value

    if(password.length==0||username.length==0){//用户名密码不能为空
        ElMessage({
            message: '密码或用户名不能为空',
            type: 'warning',
            duration: 2000,
          
        })
    }
    else{//发送请求
        const res =  await axiosObj.post('/register',{
            username:username,
            password:password
        })
        
        console.log('后端返回数据',res);
        sessionStorage.setItem('token',JSON.stringify(res.data))
    setTimeout(()=>{
        router.push('/')
    },500)
       
    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}


//字体选中高亮
.fontselected {
    color: #c98181;

}

//input输入框的样式
input:focus {
    outline: none;

}

input {

    background-color: #f8f8f8;
    margin: 8px;
    border: none;
    padding-left: 5px;
    /* 或使用 border-width: 0; */
    display: inline-block;
    border-radius: 5px;
}

.bgc {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .panel {
        width: 50%;
        height: 45%;
        border-radius: 26px;
        background-color: rgb(255, 255, 255);
        overflow: hidden;
        margin: 0 auto;
        display: flex;

        .left {
            flex: 1;
            background-color: #c98181;

            img {
                width: 100%;
                height: 100%;
            }

        }

        .right {
            flex: 1.3;
            background-color: #ffffff;

            display: flex;
            flex-direction: column;

            .title {
                font-size: 20px;
                flex: 0.5;
                padding: 18px;
                display: flex;
                justify-content: center;

                .font-login {
                    cursor: pointer;
                }

                .font-register {
                    cursor: pointer;
                }
            }

            .login {
                .forget {

                    margin: 0;
                    width: 60%;
                    text-align: right;

                    a {
                        font-size: 12px;
                        color: #7b7a7a;
                        text-decoration: none
                    }
                }

                .submit {
                    margin-top: 10px;
                    width: 60%;
                    height: 100%;
                    flex: 0.5;
                    // background-color: #c98181;
                    display: flex;
                    justify-content: center;

                    .check {
                        flex: 1;
                        width: 50px;
                        height: 50px;
                    }

                    .cancel {

                        flex: 1;
                        width: 50px;
                        height: 50px;
                    }
                }
            }

            .register {
                .submit {

                    margin-top: 30px;
                    width: 60%;
                    height: 100%;
                    flex: 0.5;
                    // background-color: #c98181;
                    display: flex;
                    justify-content: center;

                    .check {
                        flex: 1;
                        width: 50px;
                        height: 50px;
                    }

                    .cancel {

                        flex: 1;
                        width: 50px;
                        height: 50px;
                    }
                }
            }

            .login,
            .register {
                flex: 3;
                display: flex;
                flex-direction: column;
                align-items: center;

                .username {

                    width: 60%;
                    height: 20%;
                }

                .password {

                    width: 60%;
                    height: 20%;
                }
            }



        }
    }
}
</style>