<template>
  <div class="note-list">
    <ul v-if="state.noteList.length">
      <li
        v-for="item in state.noteList"
        :key="item.id"
        @click="goNoteDetail(item.id)"
      >
        <div class="img">
          <img :src="item.head_img" alt="" />
        </div>
        <p class="time">{{ item.c_time }}</p>
        <p class="title">{{ item.title }}</p>
      </li>
    </ul>
    <p v-else>当前分类下还没有文章</p>
  </div>
</template>

<script setup>
//在set up中直接写await也可以
//页面加载中发请求,拿到当前分类的数据
import { useRouter, useRoute } from "vue-router";
import { onBeforeMount, onMounted, reactive } from "vue";
const router = useRouter(); //整个路由对象
const route = useRoute(); //代表当前路由的详情
console.log(router.currentRoute.value);
console.log(route.query.title);
import axios from "../../api/index";
// onBeforeMount(() => {

// })

//将数据变成响应式数据
const state = reactive({
  noteList: [],
});

onMounted(async () => {
  //发送请求获取分类数据
  const { data } = await axios.post("/findNoteListByType", {
    note_type: route.query.title,
  });
  console.log(data);
  state.noteList = data;
});

const goNoteDetail = (id) => {
  router.push({ path: "/noteDetail", query: { id } });
};
</script>

<style lang="less" scoped>
.note-list {
  width: 100%;
  padding: 0.8rem 0.667rem 0 ;
  box-sizing: border-box;
  // ul{
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: space-between;
  //     li{
  //         padding:0  10px;
  //         box-sizing: border-box;
  //         width: 50%;
  //         img{
  //             width: 100%;
  //         }
  //     }
  // }

  // ul {
  //     overflow: auto;
  //     li {
  //         float: left;
  //         padding: 0 10px;
  //         box-sizing: border-box;
  //         width: 33%;

  //         img {
  //             width: 100%;
  //         }
  //     }

  // }
  //网格布局,适合9宫格布局
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 50px; //间距
    grid-row-gap: 30px;

    li {
      img {
        width: 100%;
        height: 4rem;
        border-radius: 0.27rem;
      }

      .time {
        font-size: 0.37rem;
        color: rgb(16, 16, 16, 1);
        margin: 10px 5px 0;
      }

      .title {
        width: 4rem;
        font-size: 0.37rem;
        color: rgb(16, 16, 16, 1);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
