<template>
    <div class="login">
        <h1>注册</h1>
        <div class="login-wrapper">
            <div class="avatar">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F07%2F20181107103350_V8nTe.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1706790830&t=17831db3ab5a2ef617e0b77a54b5c2fd"
                    alt="">
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="state.nickname" name="用户名" 
                        label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="state.username" name="昵称" label="昵称" placeholder="昵称"
                        :rules="[{ required: true, message: '请填写昵称' }]" />
                    <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block color="purple" native-type="submit">
                        注册
                    </van-button>
                    <p class="login" @click = 'login'>已有账号,点击登入</p>
                </div>
            </van-form>


        </div>
        
    </div>
</template>

<script setup>
import { showSuccessToast, showFailToast } from 'vant';
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import axios from'../../api'
const state = reactive({ //将对象变成响应式
    username: '',
    nickname: '',
    password: ''
})

/* 
使用ref一个一个写,ref的性能更好,ref源码里让引用类型变成相应式数据会调用reactive
const username = ref('')
const password = ref('')
 */
const onSubmit = async() => {
    // console.log(state.username, state.password)
    // 发请求将信息发给后端
    const data =  await axios.post('/register',{
        username: state.username,
        password: state.password,
        nickname: state.nickname

    })
    console.log(data);
    showSuccessToast(data.msg);
    setTimeout(() => {
        router.push('/login')
    }, 1500)
    
    
}
const  login = () => {
    router.push('/login')
}
const router = useRouter()



</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    h1 {
        height: 0.6933rem;
        text-align: center;
        margin-top: 1.12rem;
        font-size: 0.48rem;
    }

    .login-wrapper {
        width: 7.44rem;
        height: 10.77rem;
        border: 1px solid rgba(187, 187, 187, 1);
        margin: 0 auto;
        margin-top: 1.7rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);

        .avatar {
            width: 2.4rem;
            height: 2.4rem;
            overflow: hidden;
            border-radius: 50%;
            margin: 1rem auto 0.77rem;

            img {
                width: 100%;
            }
        }
    }

    .login {
        position: absolute;
        bottom: 30px;
        width: 80%;
        left: 50%;
        text-align: center;
        font-size: 0.374rem;
        transform: translateX(-50%);
        height: 0.6rem;
        line-height: 0.6rem;
        color: rgba(16, 16, 16, 1);
    }
}
</style>
<style>
.van-cell-group van-cell-group--inset {
    width: 45px;
}
</style>