<script setup>

defineProps({
   goods:{
    type:Object
   }
})



</script>
<template>

    <div :to="path" class="goods-item" v-for="item in goods" :key="item.id" >
      <div class="pic"><img :src="item.imgUrl" alt="" /></div>
      <div class="name">{{ item.name }}</div>
      <div class="author">{{ item.author }}</div>
    <div class="price">&yen;&nbsp;{{ item.price }}</div>
    
    <slot v-bind:child-data="item.id"/>
    </div>
   
 
     
</template>
<style lang="scss" scoped>
a{
  text-decoration: none;
  color: #595757;
}
.goods-item {
  background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 220px;
      height: 300px;
      padding: 20px 30px;
      text-align: center;
      transition: all .5s;
      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }
      .pic{
  overflow: hidden;
        margin: 0 auto;
        width: 90%;
        height: 80%;
        img {
       height: 100%;
        object-fit: covery;
      }
      }
      p {
        padding-top: 10px;
      }

      .name {
        font-size: 16px;
      }

      .desc {
        color: #999;
        height: 29px;
      }

      .price {
        color: #595757;
        font-size: 20px;
      }
    
    }
</style>