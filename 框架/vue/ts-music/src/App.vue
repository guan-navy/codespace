<script setup lang="ts">
import { onMounted, toRefs } from 'vue';
import { useBannerStore } from './store/banner';
import { usePersonalizedStore } from './store/personalized';

const { banners } = toRefs(useBannerStore());
const { getBanners } = useBannerStore();

const { personalizedMv } = toRefs(usePersonalizedStore());
const { getPersonalized } = usePersonalizedStore();


onMounted(async () => {
  await getBanners()
  await getPersonalized()
})
</script>
<template>

  <ul>
    <li v-for="banner in banners" :key="banner.targetId">
      <img :src="banner.pic">
    </li>
  </ul>

  <ul>
    <li v-for="mv in personalizedMv" :key="mv.id">
      <img :src="mv.picUrl">
    </li>
  </ul>

</template>

<style scoped></style>