<template>
  <div class="note-publish">
    <div class="back" @click="back"><van-icon name="arrow-left" /></div>
    <div class="note-wrap">
      <div class="note-cell">
        <van-field
          v-model="state.title"
          label="标题"
          placeholder="请输入标题"
        />
      </div>
      <div class="note-cell">
        <van-field v-model="label" label="最多上传两张图片">
          <template #button>
            <van-uploader v-model="state.picture" multiple :max-count="2" />
          </template>
        </van-field>
      </div>
      <div class="note-cell">
        <div class="sort" @click="() => (state.show= true)">
          <span>选择分类</span>
          <span>{{ state.note_type }}<van-icon name="arrow" /></span>
        </div>
        <van-action-sheet
          v-model:show="state.show"
          :actions="actions"
          cancel-text="取消"
          @select="onSelect"
        />
      </div>
    </div>
    <div class="editor">
      <QuillEditor
        theme="snow"
        placeholder="请输入内容"
        v-model:content="state.content"
        content-type="html"
        @textChange="contentChange"
      />
    </div>
    <div class="btn" @click="onSubmint">
      <van-button type="primary" size="large">发布笔记</van-button>
    </div>
   
  </div>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { reactive } from "vue";
import {useRouter} from "vue-router"
import axios from "../../api/index";
import { showSuccessToast } from "vant";
const router = useRouter()

const actions = [
  { name: "美食" },
  { name: "旅行" },
  { name: "恋爱" },
  { name: "学习" },
  { name: "摄影" },
  { name: "技术" },
];
const state = reactive({
  content: "",
  title: "",
  picture: [],
  show: false,
  note_type:'美食'
});
const onSelect = (item) => {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      state.show = false;
     
      state.note_type = item.name
    };
const back = ()=>{
    router.push( "/noteclass")
    console.log('返回');
}
const onSubmint=async()=>{
  const nickname = JSON.parse(sessionStorage.getItem('userInfo')).nickname
  const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
  const res = await axios.post('/publishNote',{
    note_content:state.content,
    title:state.title,
    head_img:state.picture[0].content,
    note_type:state.note_type,
    nickname,
    userId
  })
  console.log(1);
  console.log(res);
  showSuccessToast(res.msg)
  setTimeout(()=>{
    router.push({ path: "/noteList",query: { 'title': state. note_type }});
  },1000)
}
</script>

<style lang="less" scoped>
.note-publish {
  min-height: 100vh;
  position: relative;

  .note-wrap {
    margin-top: 20px;

    .note-cell {
      border-bottom: 1px solid #d1d5db;

      .sort {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 3;
        padding: 10px 16px;
        color: #323233;
      }
    }
  }

  .btn {
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    position: sticky;
    bottom: 10px;
  }
}
</style>

<style>
.ql-container.ql-snow {
  height: 200px;
}
.back{
    padding: 0.4rem 0.4rem;
    width: 100%;
    height: 0.5rem;
    box-sizing: border-box;
    font-size: 0.6rem;
}
</style>
