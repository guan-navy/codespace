<template>
  <div>
    <!-- 动画标签 -->
    <Transition name="move" >
      <router-view></router-view>
    </Transition>
    

  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
//动画进行时
.move-enter-active,.move-leave-active{
    transition: all 0.5s ease-out;
}

//该页面出现前的状态
.move-enter-from,.move-leave-to{
    opacity: 0;
    transform: translateX(20px);
}



</style>