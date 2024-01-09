<template>
    <div class="note-detail">
        <div class="note-img">
            <img :src="refVarible.head_img
" alt="" v-if="refVarible">
        </div>
        <div class="note-content">
            <div class="tab">
                <span class="note-type" v-if="refVarible">{{refVarible.note_type}}</span>
                <span class="author"> 管海军</span>
            </div>
            <p v-if="refVarible">{{refVarible.m_time}}</p>
            <div class="content" v-html='state.noteContent.note_content'></div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, reactive,ref } from "vue";
import { useRoute,useRouter } from 'vue-router';
import axios from "../../api/index.js";

const route = useRoute()
console.log(route.query.id);

const state = reactive({
  noteContent: {},
});


//使用ref创建响应式变量
const refVarible = ref(null)


//请求这个id的笔记具体内容
onMounted(async () => {
  //发送请求获取分类数据
  const { data } = await axios.post("/findNoteDetailById", {
    id: route.query.id,
  });
  // console.log(检验获取数据,data);
  state.noteContent = data;
  // console.log(state.noteContent);
  refVarible.value = data
  // console.log("ref方法定义响应式数据",refVarible.value);
});

</script>

<style lang="less" scoped>
.note-detail{
  .note-img{
    width: 100%;
    height: 5rem;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .note-content{
    padding: 0.667rem;
    .tab{
      display: flex;
      justify-content: space-between;
      color: rgba(16, 16, 16, 0.7);
      font-size: 0.48rem;
      span{
        padding-bottom: 4px;
        border-bottom: 2px solid #e51c23;
      }
    }
    .title{
      margin: .5333rem 0;
      line-height: 1.3;
      color: rgba(16, 16, 16, 1);
      font-size: 0.8rem;
    }
    .content{
      line-height: 1.5;
      color: rgba(16, 16, 16, 1);
      font-size: 0.3733rem;
    }
  }
}
</style>