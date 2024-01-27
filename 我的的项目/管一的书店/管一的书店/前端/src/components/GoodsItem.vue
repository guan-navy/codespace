<script setup>
import { inject } from 'vue';
defineProps({
   good:{
    type:Object,
    default:()=>{}
   } ,
   

})
const path = inject("path")
</script>
<template>
     <RouterLink :to="path" class="goods-item">
      <div class="pic"><img src="https://imgservice.suning.cn/uimg1/b2c/image/QOJb5xRpYFFrRmKZhv110g.jpg" alt="" /></div>
              
             
              <div class="price">&yen;测试</div>
            </RouterLink>
</template>
<style lang="scss" scoped>
a{
  text-decoration: none
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