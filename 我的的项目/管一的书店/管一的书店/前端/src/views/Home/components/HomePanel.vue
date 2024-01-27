<script setup>
defineProps({
    title:String,
    subTitle:String
})
</script>


<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
         <!-- 主标题和副标题 -->
        <h3>
          文学经典<small>思考人生的意义</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <div> 
        <slot/>
    </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;
    width:80%;
    margin:0 auto;
    border-radius: 10px;
  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>