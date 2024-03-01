<template>
    <div class="mask">
        <div class="login-form">
            <van-cell-group inset>
                <!-- 输入用户名 -->
                <van-field v-model="value" label="" placeholder="请输入用户名" />
                  <!-- 输入密码 -->
  <van-field v-model="password" type="password" label="" placeholder="请输入密码"/>
            </van-cell-group>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
const value = ref('');

</script>

<style lang="less" scoped>

    .mask{
        width: 100vh;
        height: 100vh;
        box-sizing: border-box;
        .mask {
            margin: 0 auto;
            
        }
    }
</style>