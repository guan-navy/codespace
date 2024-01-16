import { getCategoryAPI } from "@/apis/layout";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usecategoryStore = defineStore("category", () => {
  //导航列表数据
  const  categoryList= ref([]);
  const getCategopry = async () => {
    const res = await getCategoryAPI();
  
    categoryList.value = res.result;
    
  };

  return {
    categoryList,
    getCategopry
   
  };
});
