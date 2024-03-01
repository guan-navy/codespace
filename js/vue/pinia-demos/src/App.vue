<template>
  <div>
    <TodoList 
    :todos="todoStore.todos"
    :addTodo="todoStore.addTodo"
    />
    <Item />
    <Bang :title="作者榜" :item="authors" />
  </div>
</template>

<script setup>
// 以组件为开发单元
import TodoList from './components/TodoList.vue'
import {ref} from 'vue'
// const todos = ref([
//   {text:'haha'}
// ])
//todos 来到 vuex mapState pinia
import {useTodoStore} from './store/todos.js'
const {todos,addTodo} = useTodoStore()
console.log(addTodo,todos);
</script>

<style scoped>

</style>