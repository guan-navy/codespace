<template>
   <ul>
    <li
      v-for="product in products"
      :key="product.id"
    >
      <router-link :to="{ name: 'product', params: { id: product.id }}">
        {{ product.name }}
      </router-link>
    </li>
  
   </ul>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()//拿到状态树
//这里computed的作用是把products从store中拿到
//当products改变的时候，computed会重新计算
const products = computed(() => store.state.products.all)
console.log(products);
</script>

<style lang="less" scoped>

</style>