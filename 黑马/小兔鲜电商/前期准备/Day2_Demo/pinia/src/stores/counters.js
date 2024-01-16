//导入defineStore

import {defineStore} from 'pinia';
import { ref } from 'vue';
import axios from 'axios'
const API_URL = 'http://geek.itheima.net/v1_0/channels'




//第一个参数为该模块的标识
export const useCounterStore=defineStore('counter',()=>{
    const count = ref(0);
    const increment = ()=>{
        count.value++;
    }
    const list =ref([])
    const getList = async()=>{
    const res =   await axios.get(API_URL)
    list.value = res.data.data.channels
    console.log(list);
    }

    return{
        count,
        increment,
        getList,
        list
    }
})