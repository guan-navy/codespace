// hooks 函数式编程思想
import { defineStore } from "pinia";
import { ref } from 'vue'
import type { Banner } from "../models/banner";
import { useBanner } from "../api";
// 引入 defineStore ，这个 defineStore 就可以创建仓库的分支 ,里面专门放banner
// 专注于数据编程
export const useBannerStore = defineStore("banner", () => {
    const banners = ref<Banner[]>([])
    const getBanners = async () => {
        if(banners.value.length) return 
        banners.value = await useBanner()
    }
    return {
        banners,
        getBanners,
    }
})