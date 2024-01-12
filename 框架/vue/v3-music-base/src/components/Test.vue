<template>
    <div>
        <!-- 组件内部可以被外部定制 -->
        <slot name="header"/>
        test
        <slot/>
        <slot name="footer"/>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>

</style>