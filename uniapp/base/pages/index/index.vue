<template>
	<view class="content">
		<navigator url="/pages/about/about">去关于页面 </navigator>
		<image class="logo" src="/static/logo.png" @click="goAbout"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="name">
			<text>{{name}}</text>
		</view>
		<song :data='list.song'/>
	</view>
</template>

<script setup>
	import song from '../../components/song/song.vue'
	import { reactive, ref } from 'vue'
	const title = ref('你好')
	const name = ref(getApp().globalData.name)
	const list = reactive({
		song:{
			img:'https://img1.baidu.com/it/u=3519458463,1887460190&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
			,
			title:'卡通头像',
			price:'100',
			marketPrice:'200'
		}
	})
	
	const goAbout =()=>{
		uni.navigateTo({
			url:'/pages/about/about'
		})
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
