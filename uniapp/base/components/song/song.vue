<template>
	<view class="song">
		<image :src="data.img" mode=""></image>
		<view class="desc">title</view>
		<view class="flex-box">
			<view class="price">${{data.price}}</view>
			<view class="market-price">${{data.marketPrice}}</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'

// 定义props
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

// 创建一个响应式引用，便于在setup中使用和调试
const imageData = ref(props.data)

console.log(imageData.value) // 打印data对象
</script>

<style></style>
