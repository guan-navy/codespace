<template>
 <!-- <link rel="stylesheet" href="./common/style/reset.css"> -->

 <v-header></v-header>
 <router-view></router-view>
</template>


<script>
import Header from '@/components/header/Header.vue'
import {getSeller}  from '@/api';
export default{
  components:{
    'v-header':Header
  },
  created(){
  getSeller().then(res =>{
    console.log(res);
  })
}
}



</script>


<style lang="less">

</style>
