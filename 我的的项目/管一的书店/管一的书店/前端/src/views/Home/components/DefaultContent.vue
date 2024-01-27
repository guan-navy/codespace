<template>
    <div>
        <home-panel>
        
        <div class="panelContent">
          <item />
          <item />
          <item />
          <item />
          <item />
          <item />
          <item />
          <item />
        </div>
      </home-panel>
    </div>
</template>

<script setup>
import {provide} from 'vue'
import HomePanel from './HomePanel.vue';
import Item from '../../../components/GoodsItem.vue'
provide('path','detail')
</script>

<style lang="scss" scoped>
.panelContent {
      padding: 0;
      display: flex;
      flex-wrap: wrap;
    justify-content: space-around;
      width: 100%;
      height: 100%;
    }
</style>