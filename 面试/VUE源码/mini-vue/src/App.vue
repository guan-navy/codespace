<template>
  <div>
    
    <p>{{state.count}}</p>
    {{ num }}
    <button @click="()=>state.count++">增加</button>
  </div>
</template>

<script setup>
import {ref,reactive,computed,watch} from 'vue'
const state = reactive({
  count: 0,
  msg:2

})
const num = computed(()=>{
  return state.count*10

}) 
watch (()=>state.count,(newVal,oldVal)=>{
  console.log(newVal,oldVal)
})
</script>

<style lang="css" scoped>

</style>