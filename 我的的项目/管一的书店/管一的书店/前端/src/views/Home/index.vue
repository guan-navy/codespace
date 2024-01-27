<template>
  <div class="home">
    <div class="header" v-show="route.name=='default'">
      <Banners />
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script setup>

import Banners from '../Home/components/Banners.vue'
import {useRoute} from 'vue-router'
const  route = useRoute()


</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

.home {
  box-sizing: border-box;
  height: 100%;
  background-color: #f9bec7;
  display: flex;
  flex-direction: column;

  .header {
    margin: 0 auto;
    width: 70%;
  }

  .content {
    
  }

  .top-bar {
    position: fixed;
  }
}
</style>
