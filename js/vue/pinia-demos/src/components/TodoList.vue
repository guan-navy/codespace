<template>
    <div>
        <ul>
        <li v-for="(item,index) in todos" :key="index">{{item.txt}}</li>
    </ul>
    <button type="button" @click="addTodo">添加</button>
    </div>
    
</template>

<script setup>
const props=defineProps(['todos','addTodo'])
</script>

<style scoped>

</style>