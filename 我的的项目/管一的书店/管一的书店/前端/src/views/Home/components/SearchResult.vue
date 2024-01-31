<template>
    <div>
        <HomePanel type="书名" subTitle='按照书名搜索'>
            <div class="panelContent">
        <div class="wrapper" >
          <div class="goods-item" v-for="item in bookStore.searchByName" :key="item.id">
            <div class="pic"><img :src="item.imgUrl" alt="" /></div>
            <div class="name">{{ item.name }}</div>
            <div class="author">{{ item.author }}</div>
            <div class="price">&yen;&nbsp;{{ item.price }}</div>
            <div class="addToCart">
              <div class="add" @click="bookStore.addCart(item.id, username, 1)">
                <i class="iconfont icon-Rrl_s_088"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
        </HomePanel>
        <HomePanel type="作者"  subTitle='按照作者搜索'>
            <div class="panelContent">
        <div class="wrapper" >
          <div class="goods-item" v-for="item in bookStore.searchByAuthor" :key="item.id">
            <div class="pic"><img :src="item.imgUrl" alt="" /></div>
            <div class="name">{{ item.name }}</div>
            <div class="author">{{ item.author }}</div>
            <div class="price">&yen;&nbsp;{{ item.price }}</div>
            <div class="addToCart">
              <div class="add" @click="bookStore.addCart(item.id, username, 1)">
                <i class="iconfont icon-Rrl_s_088"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
        </HomePanel>
      
    </div>
</template>

<script setup>
import HomePanel from './HomePanel.vue';
import { useBookStore} from '../../../stores/index.js'
import { onMounted } from 'vue'

const bookStore = useBookStore();
const username = JSON.parse(sessionStorage.getItem('token'))
onMounted(() => {
   
  
    console.log(bookStore.bookList);
    console.log(bookStore.resByName);
})
</script>

<style lang="scss" scoped>
.goods-item {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  height: 300px;
  padding: 20px 30px;
  text-align: center;
  transition: all 0.5s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  .pic {
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
.panelContent {
  
  .wrapper{
    padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  }
}
.addToCart {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  color: #898686;

  .iconfont {
    font-size: 28px;
  }

  .add {
    transform: translateX(19px);

    text-align: center;
    margin-right: 35px;

    &:hover {
      color: #e8afb8;
      cursor: pointer;
    }
  }
}
</style>