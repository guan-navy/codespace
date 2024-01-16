<script setup>
import{useCounterStore} from '../src/stores/counters'
import { onMounted } from 'vue';
 const store = useCounterStore()
onMounted(() => {
   store.getList()
   
})

</script>

<template>
  <div>
     <button @click="store.increment()">{{ store.count }}</button>
     <ul>
      <li v-for="(item, index) in store.list" :key="index">{{ item.name}}</li>
     </ul>
  </div>
</template>

<style lang="css" scoped>
  
</style>
