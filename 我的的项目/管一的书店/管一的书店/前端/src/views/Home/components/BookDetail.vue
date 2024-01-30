<template>
    <div>
        <div class="BreadCrumb">
        <el-breadcrumb :separator-icon="ArrowRight" class="elBreadCrumb">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item >详情</el-breadcrumb-item>
    
  </el-breadcrumb>
      </div>
       <home-panel>
       </home-panel>
    </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import HomePanel from './HomePanel.vue';
</script>

<style lang="scss" scoped>
.BreadCrumb{
    
   margin: 20px;
    .elBreadCrumb{
        position: relative;
        
        left: 170px;
        font-size: 20px;
       
    }
}
</style>