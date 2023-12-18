<template>
    <div>
        <Head @add="handle"/>
        <List  :addlists="lists"/>
     
    </div>
  </template>
  
  <script>
  import Head from '@/components/body3/Head.vue';
  import List from '@/components/body3/List.vue';
    export default {
        components:{
            Head,
            List
        },
      data() {
        return {
         
        lists:['html','css']
        }
      },
      methods: {
        //什么时候子组件抛出来了该函数就会被触发
        handle(val){
            this.lists.push(val)
        }
      },
      
    }
  </script>
  
  <style lang="css" scoped>
  
  </style>