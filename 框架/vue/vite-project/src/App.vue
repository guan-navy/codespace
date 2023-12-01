<script setup>

// import Rate from './components/Rate.vue'
import JAdver from './components/JAdver.vue';
import JHead from './components/JHead.vue';
import JMain from './components/JMain.vue';
import JSide from './components/JSide.vue';
import JItem from './components/JItem.vue';
</script>

<template>
  <div class="header">
  <JHead/>
  </div>
  <div class="body">
    <div class="aside">
      <JSide/>
    </div>
    <div class="main">
    <JMain/>
    </div>
    <div class="right">
    <JAdver/>
    </div>
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
