<template>
  <div class="layout">
    <top-bar class="top-bar hidden"></top-bar>
    <top-bar class="top-bar"></top-bar>
    <right-bar class="right-bar">
      <div class="grainPlace"></div>
      <div class="bookshell">
        <el-button type="primary" circle plain size="large" color="#f9bec7" style="height: 60px; width: 60px">
          <i class="iconfont icon-shujia"></i>
        </el-button>
      </div>
      <div class="cart" @click="showCartContent">
        <el-button type="primary" circle plain size="large" color="#f9bec7" style="height: 60px; width: 60px">
          <i class="iconfont icon-gouwuche"></i>
        </el-button>
      </div>
      <div class="rightBarContent" v-show="isShowRightBarContent" ref="target">
        <el-scrollbar >
        <div class="title">标题</div>
        
        <div class="scrollbar-demo-item">1</div>
        <div class="scrollbar-demo-item">2</div>
        <div class="scrollbar-demo-item">3</div>
        <div class="scrollbar-demo-item">4</div>
        <div class="scrollbar-demo-item">5</div>
        <div class="scrollbar-demo-item">1</div>
        <div class="scrollbar-demo-item">2</div>
        <div class="scrollbar-demo-item">3</div>
        <div class="scrollbar-demo-item">4</div>
        <div class="scrollbar-demo-item">5</div>
      </el-scrollbar>
      </div>
    </right-bar>
    
    <Home />
  </div>
</template>

<script setup>
import TopBar from '../Layout/components/TopBar.vue'
import Home from '../Home/index.vue'
import rightBar from '../Layout/components/RightBar/RightBar.vue'
import {ref,onUnmounted} from  'vue'
import { onClickOutside } from '@vueuse/core'

const target = ref(null)


const showCartContent =()=>{
  isShowRightBarContent.value = true
  console.log(isShowRightBarContent.value);
  const clickOutsideHandler = onClickOutside(target, (event)=>{
  console.log(event)
  isShowRightBarContent.value=false
  clickOutsideHandler()
  })

}

const isShowRightBarContent =ref(false)
onUnmounted(() => {
 
  })
</script>

<style lang="scss" scoped>
// 滚动条
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

.layout {
  box-sizing: border-box;
}

.right-bar {
  // width: 10%;
  height: 100vh;
  // background-color: #c48989;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: aliceblue;

  .cart,
  .bookshell {
    margin: 16px;

    .iconfont {
      font-size: 32px;
    }
  }
  .rightBarContent{
    border-radius: 6px;
    top: 300px;
    width: 270px;
    height: 380px;
    position:fixed;
    right: 90px;
    background-color: #fff;
    .contentItem{
      width: 100%;
      height: 25%;
    }
  }
  
}
.hidden {
 position: fixed;
 top: 0;
 z-index: 100;
 
}

</style>
