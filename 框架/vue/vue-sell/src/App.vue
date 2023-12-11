<template>
 <!-- <link rel="stylesheet" href="./common/style/reset.css"> -->

 <v-header></v-header>
 <router-view></router-view>
</template>


<script>
import Header from '@/components/header/Header.vue'
export default{
  components:{
    'v-header':Header
  }

}

</script>


<style lang="less">

</style>
