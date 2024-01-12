<template>
  <el-popover 
      popper-style="max-width:auto;padding:0"
      v-model:visible="showSearchView"
  >
      <template #reference>
          <el-input 
              placeholder="搜索音乐、MV、歌单"
              :prefix-icon="Search"
              clearable
              @input="searchInput"
              @focus="showSearchView=true"
              @focusout="showSearchView=false"
              v-model="searchKeyWord"
          />
      </template>
      <div class="h-96">
          <el-scrollbar>
              <div class="pb-2.5">
                  <div v-if="showHot">
                      <div class="pt-2 pb-1.5 px-2.5">热门搜索</div>
                      <div>
                          <div 
                              v-for="(item, index) in searchHot"
                              :key="item.searchWord"
                              class="py-2.5 px-2.5 hover-text cursor-pointer flex justify-between items-center text-xs"
                              @click="hotClick(item.searchWord)"
                          >
                              <div>
                                  <span class="mr-1">{{ index + 1 }}</span>
                                  <span>{{item.searchWord}}</span>
                              </div>
                              <div class="text-red-300 text-xs">{{item.score.numberFormat()}}</div>
                          </div>
                      </div>
                  </div>
                  <SearchSuggest v-else />
              </div>
          </el-scrollbar>
      </div>
  </el-popover>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Search} from '@icon-park/vue-next'
// 基本上组件里没什么状态
import { useSearchStore } from '@/stores/search'
import { storeToRefs } from 'pinia';
import { debounce } from 'lodash';
import { getSearchHotDetail } from '@/api/index'
import type { SearchHotDetail } from '@/models/search'
import SearchSuggest from './SearchSuggest.vue'

const { showSearchView, searchKeyWord, showHot } = storeToRefs(useSearchStore())
const { suggest }  = useSearchStore()

const searchInput = debounce(() => suggest(), 30)
const searchHot = ref<SearchHotDetail[]>([])
onMounted(async () => {
  searchHot.value = await getSearchHotDetail()
})
const hotClick = (text :string) => {
  searchKeyWord.value = text;
  suggest()
  showSearchView.value = true;
}
</script>

<style scoped>

</style>