<template>
    
    <div class="flex items-center justify-between h-14">
        <div class="flex items-center pl-5">
        <IconPark 
        :icon = "Left" 
        :size="iconsize"
        :stroke-width="2"
        class="icon-button"
        @click=" router.back()"
        />
        <IconPark 
        :icon = "Right" 
        :size="iconsize"
        :stroke-width="2"
        class="icon-button"
        @click=" router.back()"
        />
        <div class="search ml-2">
            <SearchPop/>
        </div>
    </div>
    </div>
    
</template>

<script setup lang="ts">
//使用vue-router提供的hook函数
import { useRouter } from "vue-router";
import {Left,Right} from '@icon-park/vue-next'
import SearchPop from '../header/SearchPop.vue'
const iconsize = 22

const router = useRouter()
</script>

<style scoped>

</style>