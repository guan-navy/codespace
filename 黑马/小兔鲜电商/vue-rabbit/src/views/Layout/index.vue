<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { onMounted } from 'vue'
import  {usecategoryStore} from '@/stores/category'
 //触发获取导航数据的action
 const category = usecategoryStore()
  onMounted(() => {
    //获取导航数据
    category.getCategopry()
  })
</script>

<template>
   
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>