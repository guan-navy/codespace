<template>
  <!-- 用户体验的直觉,element-plus 用户体验的直觉 滚动的列表,详情页 -->
  <ElScrollbar>
    <div class="mt-10 pl-6 pr-6 space-y-1.5" v-for="menuItem in menus">
      <div class="menu-title text-main">{{ menuItem.name }}</div>
      <div class="menu-item hover-b-mian text-main" v-for="menu in menuItem.menus" :key="menu.key"
        :class="{ 'active': currentKey === menu.key }" @click="changeMenu(menu)">
        <!-- 生成图表的标签 -->
        <IconPark :icon="menu.icon" size="18" :theme="menu.theme" />
        <span class="ml-1">
          {{ menu.name }}
        </span>
      </div>
    </div>
  </ElScrollbar>
</template>
  
<script setup>

import IconPark from '@/components/common/IconPark.vue';
//模块化 hooks 编程 ,将想要的数据从组件中导入进来
//数据分离离开组件
//范式,use开头,函数式编程
import {useMenu} from './useMenu.js'
const {menus,currentKey,changeMenu} = useMenu()

</script>
  
<style scoped>
/* 将一些类集合起来 */
.menu-title {
  @apply text-xs pl-4 pr-4 pb-2;
}

.menu-item {
  @apply text-sm pl-4 pr-4 pt-1.5 pb-1.5 rounded cursor-pointer transition-colors flex items-center;
}

.active {
  @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default
}
</style>
  