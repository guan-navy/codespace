<template>
    <v-header></v-header>
    <v-sidebar ></v-sidebar>
    <div class="content-box">
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
    
    
</template>

<script lang="ts" setup >
import vHeader from '../components/Header.vue'
import vSidebar from '../components/SideBar.vue'

</script>

<style lang="ts" scoped>

</style>