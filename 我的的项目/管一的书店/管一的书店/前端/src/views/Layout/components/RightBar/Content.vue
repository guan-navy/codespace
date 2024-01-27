<template>
    <div class="rightBarContent">
        <div class="title">你的购物车</div>
        <div class="contentItem">1</div>
        <div class="contentItem">2</div>
        <div class="contentItem">3</div>
        <div class="contentItem">3</div>
    </div>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>
.rightBarContent{
    border-radius: 10px;
       display: flex; 
       flex-direction: column;
       position: absolute;
       
       width:400px;
       height: 500px;
       background-color: #beb5b5;
       .title{
        margin: 0 auto;
        align-self: center;
        width: 80px;
        height: 80px;
        text-align: center;
        line-height: 80px;
       }
       .contentItem{
        margin: 10px;
        background-color: #983c3c;
       }
    }
</style>