<template>
    <div>
        JMain
        <div v-for="user in users">
            <JItem :user="user"/>
        </div>
    </div>
</template>

<script setup >
import { ref } from 'vue'
import JItem from './JItem.vue';
//提供数据模型

let users = ref([])
setTimeout(( )=>{
    users.value = [...users.value,'Yiko']
},2000)
fetch('https://k9gtiz.laf.run/get-list')
.then(res=>res.json())
.then(data =>{
    users.value = data.data.map(item => item.txt)
})
</script>

<style scoped>

</style>