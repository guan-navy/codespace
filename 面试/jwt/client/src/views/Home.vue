<template>
  <div>
    Home page
  </div>
</template>

<script setup>
// import axios from 'axios';
import { home } from '../api/user.js'
import { onMounted } from 'vue';

onMounted(() => {
  home()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
})
</script>

<style lang="css" scoped>

</style>