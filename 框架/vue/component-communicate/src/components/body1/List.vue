<template>
  <div>
    <ul>
      <li v-for="(item, index) in lists" :key="index">{{item}}</li>
    </ul>
    <button @click="changeProps">修改props</button>
  </div>
</template>

<script>
  export default {
    props:['lists'],
    data() {
      return {
        messge:''
      }
    },
    methods:{
      changeProps(){
        this.lists[0] = 'HTML'
      }
    }
  }
</script>

<style lang="css" scoped>

</style>