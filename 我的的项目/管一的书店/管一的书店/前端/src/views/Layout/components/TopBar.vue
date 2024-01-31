<template>
  <div class="top-bar">
    <div class="left">
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" background-color="#e8afb8"
        active-text-color="#ffd04b" text-color="#fff" @select="handleSelect" style="height: 100px">
        <el-menu-item index="1"><router-link to="/">首页</router-link> </el-menu-item>
        <el-sub-menu index="2">
          <template #title>多级菜单展示</template>
          <el-menu-item index="2-1">一级菜单1</el-menu-item>
          <el-menu-item index="2-2">一级菜单2</el-menu-item>
          <el-menu-item index="2-3">一级菜单3</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>一级菜单4</template>
            <el-menu-item index="2-4-1">二级菜单1</el-menu-item>
            <el-menu-item index="2-4-2">二级菜单2</el-menu-item>
            <el-menu-item index="2-4-3">二级菜单3</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" @click="bookStore.moveTo(bookStore.targetNovel)">文学</el-menu-item>
        <el-menu-item index="4" @click="bookStore.moveTo(bookStore.targetTechnology)">技术</el-menu-item>
        <el-menu-item index="5">关于</el-menu-item>


      </el-menu>
    </div>
    <div class="right">
      <div class="search">
        <div class="search-element">
          <el-input v-model="inputValue" class="w-50 m-2 el-search-input" placeholder="搜索你感兴趣的书籍或作者" style="height: 40px"
            maxlength="30">
            <template #suffix>
              <div class="search-icon">
                <el-icon class="el-input__icon cancel" v-show="showCancel" @click="clearInputContent">
                  <CircleCloseFilled />
                </el-icon>
                <el-icon class="el-input__icon" @click="searchBarRequest">
                  <Search />
                </el-icon>

              </div>
            </template>
          </el-input>
        </div>
      </div>
      <div class="avatar">
        <div class="avatar-wrap" @mouseover="isShowUserPanel = true" @mouseout="isShowUserPanel = false">

          <el-avatar class="el-avatar" :size="20"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc5f6153c-589f-4b46-a371-705652eeb8ec%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1708657544&t=ba1c2a0cccc2285de2b8e5392b06ff62"
            :fit="cover"></el-avatar>
          <div class="userPanel" v-show="isShowUserPanel">
            <div class="name">{{ username }}</div>
            <div class="logout"><el-button @click="logout" class="elBtnLogout" type="success" tag="div">退出登录</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Search, CircleCloseFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import router from '@/router';
import { useBookStore } from '@/stores';
const username = JSON.parse(sessionStorage.getItem('token'))
const bookStore = useBookStore()
const route = useRouter()
const searchBarRequest = () => {
  if (inputValue.value !== '') {
    console.log('搜索');
    console.log(inputValue.value);
    bookStore.getBookByName(inputValue.value)
    bookStore.getBookByAuthor(inputValue.value)
    route.push({
      path:'/search',
    })
  }


}
const showCancel = computed(() => {

  return inputValue.value.length > 0;
})
const inputValue = ref('')
const clearInputContent = () => {
  inputValue.value = '';
}
//退出登录
import { ElMessage, ElMessageBox } from 'element-plus'


const logout = () => {
  ElMessageBox.confirm(
    '您确定要退出登录吗?',
    {
      confirmButtonText: '退出登录',
      cancelButtonText: '取消',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '成功退出登录',
      })
      sessionStorage.removeItem('token')
      setTimeout(() => {
        router.go('login')
      }, 500)
    })

    .catch(() => {
      ElMessage({
        type: 'success',
        message: '已取消',
        duration: 700,
        offset: 100
      })
    })
}
//用户信息面板
const isShowUserPanel = ref(false)

</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
}
//输入框样式
.el-search-input {
  --el-color-primary: #f0f0f0;
  /* 假设这是输入框背景色 */
}


img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.top-bar {
  background-color: #e8afb8;
  // box-sizing: border-box;
  width: 100%;
  display: flex;

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
    display: flex;

    .search {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .search-icon {
        display: flex;

        .cancel {
          margin-right: 18px;
        }
      }

      .search-icon:hover {
        cursor: pointer;
      }
    }

    .avatar {
      flex: 1;
      height: 100%;

      // background-color: #945858;
      .avatar-wrap {

        box-sizing: border-box;
        margin-top: 10px;
        height: 85px;
        width: 85px;
        transform: translateX(230px);

        // background-color: #fff;
        .el-avatar {
          width: 100%;
          height: 100%;
          cursor: pointer;
          position: fixed;
          z-index: 101;
        }

        .userPanel {
          border-radius: 10px;
          position: fixed;
          top: 70px;
          right: -40px;
          width: 180px;
          height: 200px;
          background-color: #fff;
          z-index: 100;
          .name{
            margin-top: 20px;
            text-align: center;
          }
          .logout {
            position: absolute;
            bottom: 0;
            height: 40px;
            width: 100%;
            text-align: center;

            .elBtnLogout {

              height: 100%;
              width: 80%;

            }
          }
        }

      }

    }


  }
}
</style>
