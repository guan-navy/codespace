<template>
  <div>
<!-- 所有配置了路由的.vue文件都展示展示在这个位置 -->
<router-view ></router-view>
  </div>
  
</template>



<script>
  export default {
    data(){
      return{}
    }
  }
</script>

<!-- scope样式私有化 -->
<style lang="css" >
*{
  margin: 0;
  padding: 0;
}
</style>