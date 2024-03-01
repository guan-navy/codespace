// todo 数据管理模块 state actions
import { ref } from 'vue'
import { defineStore } from 'pinia'
//vue3.0 hook 函数
export const useTodoStore = defineStore("todo",()=>{
    const todos = ref([
        {txt:'年前发财'} 
    ])
    
    const addTodo =()=>{
        todos.value.push({txt:'吃饭'})
    }
    return{
        todos ,
        addTodo
    }
})