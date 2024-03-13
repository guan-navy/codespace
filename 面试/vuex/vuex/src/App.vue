<script setup>
import { computed } from 'vue';
// hooks 
import { useStore }  from './store/gvuex';

let store = useStore();
let count = computed(() => store.state.count);
let double = computed(() => store.getters.double);

function add() {
  store.commit('add')
}
function asyncAdd() {
  store.dispatch('asyncAdd')
}
</script>

<template>
<div>
  {{count}} * 2 = {{double}}
  <br>
  <button @click="add">add</button>
  <button @click="asyncAdd">async add</button>
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
