<template>
    <Component :is="icon" :theme="theme" :size="size" :spin="spin" :fill="fill" :strokeLinecap="strokeLinecap"
               :strokeLinejoin="strokeLinejoin" :strokeWidth="strokeWidth"/>
  </template>
  
  <script setup >
//   定义父组件传过来的参数
//   import { defineProps } from 'vue';
// vue 组件的一件声明方式,本来是由各种图标,Component + is="" 入侵式组件声明方式
//   子组件使用父组件传过来的props声明才能用为了安全
  defineProps(['icon', 'theme', 'size', 'spin', 'fill', 'strokeLinecap', 'strokeLinejoin', 'strokeWidth','iconsize','strokeWidth'])
  </script>

<style scoped>

</style>