<template>
  <div class="layout">
    <top-bar class="top-bar hidden"></top-bar>
    <top-bar class="top-bar"></top-bar>
    <right-bar class="right-bar">
      <div class="grainPlace"></div>
      
      <div class="cart" @click="showCartContent">
        <el-button type="primary" circle plain size="large" color="#f9bec7" style="height: 60px; width: 60px">
          <i class="iconfont icon-gouwuche"></i>
        </el-button>
      </div>
      <div class="rightBarContent" v-show="isShowRightBarContent" ref="target">
        <el-scrollbar>
          <div class="title">{{ username }}的购物车</div>
          
          <div class="contralShow" v-if="bookstore.cartInfo.List != null && bookstore.cartInfo.List.length != 0">
            <div class="scrollbar-demo-item" v-for="item in bookstore.cartInfo.List" :key="item.id">
              <div class="cartItem">
                <div class="bookName">{{ item.name }}</div>
                <div class="bookTotalNum">X{{ item.num }}</div>
                <div class="bookTotalPrice">{{ item.total_amount }}</div>

                <div class="addOrreduce">
                  <div class="add"><i @click='bookstore.addCart(item.BookID, username, item.empty_field)'
                      class="iconfont icon-Rrl_s_088"></i></div>
                  <input class="number" v-model="item.empty_field">
                  <div class="reduce"><i @click='bookstore.reduceCart(item.BookID, username, item.empty_field)'
                      class="iconfont icon-jianshao1"></i></div>
                  <div class="close" @click=" bookstore.deleteBookRecord(item.BookID, username)">
                    <i class="iconfont icon-ai54"></i>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="contentBottom"></div>
          <div class="totalPrice" v-if="bookstore.cartInfo.Amount != null && bookstore.cartInfo.Amount.length != 0">
            总计:{{ bookstore.cartInfo.Amount[0].total_amount }}元
          </div>
          <div class="buyed">
            <el-button circle type="primary" color="#f9bec7" style="height: 60px; width: 60px"><i
                class="iconfont icon-xiadan"></i></el-button>
          </div>
          <div class=" clearCart" @click="bookstore.clearCart(username)">
            <el-button type="primary" color="f9bec7" size="large" plain circle ><i
              @click='bookstore.reduceCart(item.BookID, username, item.empty_field)' class="iconfont icon-shanchu"></i></el-button>
          </div>
        </el-scrollbar>
      </div>
    </right-bar>
    <Home />
  </div>
</template>

<script setup>
import TopBar from '../Layout/components/TopBar.vue'
import Home from '../Home/index.vue'
import rightBar from '../Layout/components/RightBar/RightBar.vue'
import { ref, onMounted } from 'vue'
import { useBookStore } from '@/stores/index'


const bookstore = useBookStore()
const username = ref(JSON.parse(sessionStorage.getItem('token')))
const target = ref(null)

const showCartContent = async () => {
  isShowRightBarContent.value = !isShowRightBarContent.value //展示购物面板
  bookstore.getCartInfo(username.value)
}
const isShowRightBarContent = ref(false)
//购物车的逻辑


//发送接口请求获取该用户的购物车信息
onMounted(async () => {

  bookstore.getCartInfo(username.value)
})






</script>

<style lang="scss" scoped>
input {
  text-align: center;
}

.layout {
  box-sizing: border-box;
}

.right-bar {
  // width: 10%;
  height: 100vh;
  // background-color: #c48989;
  position: fixed;
  right: 0;
  top: 90px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: aliceblue;

  .cart,
  .bookshell {
    margin: 16px;

    .iconfont {
      font-size: 32px;
    }
  }

  .rightBarContent {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    border-radius: 10px;
    top: 300px;
    width: 300px;
    height: 400px;
    position: fixed;
    right: 80px;
    background-color: #fff;

    .contentItem {
      width: 100%;
      height: 25%;
    }

    .title {
      margin-top: 10px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 18px;
      color: black;
    }

    .clearCart {
      position: absolute;
      bottom: 15px;
      right: 40px;
      z-index: 999 ;
      .icon-shanchu {
        color: #f9bec7
      }
    }

    .scrollbar-demo-item {

      height: 60px;
      margin: 10px;

      border-radius: 4px;
      background: #fad1d9;
      color: #ffffff;

      .cartItem {
        position: relative;
        padding-top: 16px;
        display: flex;
        justify-content: space-between;

        .bookName {
          flex: 4;
          text-align: center;
        }

        .bookTotalNum {
          flex: 2;
          text-align: center;
        }

        .bookTotalPrice {
          flex: 2;

        }


        .addOrreduce {

          display: flex;
          flex: 4;
          justify-content: space-between;

          .iconfont {

            font-size: 18px;
            color: #ffffff;

            &:hover {
              cursor: pointer;
              color: #afafaf;
            }
          }

          .add {
            text-align: center;
            flex: 1;
          }

          .number {
            padding-left: 1px;
            padding-right: 1px;

            text-align: center;
            all: unset;
            /* CSS Reset for modern browsers */
            flex: 1;
            width: 100%;
            border-radius: 10px;
            border: solid;
            outline: none;
            font-size: inherit;
            font-family: inherit;

            /* Removes some default styles in some browsers */
            display: block;
          }

          .reduce {
            flex: 1;
            text-align: center;
          }

          .close {
            position: absolute;
            top: -11px;
            // background-color: #605f5f;
            right: -7px;


            .iconfont {

              color: rgb(168, 167, 167);

              &:hover {
                color: #424040;
              }
            }
          }
        }
      }


    }

    .contentBottom {
      width: 100%;
      height: 100px;
    }

    .totalPrice {
      background-color: #fff;
      font-size: 20px;
      line-height: 40px;
      color: rgb(78, 87, 87);
      text-align: center;
      position: absolute;
      bottom: 60px;
      width: 100%;
      height: 40px;
    }

    .buyed {
      border-radius: 10px;
      background-color: #fff;
      width: 100%;

      position: absolute;

      text-align: center;
      bottom: 0;
      /* 固定在底部 */
      left: 0;
      /* 根据需求调整左右位置 */

      width: 100%;

      .icon-xiadan {
        font-size: 25px;
        color: rgb(255, 255, 255);
        text-align: center;
      }
    }
  }
}

.hidden {
  position: fixed;
  top: 0;
  z-index: 100;
}
</style>
