<template>
	<view class="index">
		<!-- 上方导航栏 -->
		<wyheader>
			<!-- 将内容填充到名为content的插槽中 -->
			<template v-slot:content>
				<view class="search">
					<uni-search-bar @confirm="search" @input="input" placeholder="歌曲"></uni-search-bar>
				</view>
			</template>
		</wyheader>

		<!-- menu -->
		<menuLeft />

		<!-- banner -->
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#eee" indicator-active-color="#d81e06" circular>
				<swiper-item v-for="item in state.banners" :key="item.encodeId">
					<view class="swiper-item">
						<image :src="item.pic" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- balls -->
		<view class="balls">
			<view class="ball-item" v-for="item in state.balls" key="item.id">
				<view class="icon">
					<image :src="item.iconUrl" mode="aspectFill"></image>
				</view>
				<text>{{ item.name }}</text>
			</view>
		</view>
		<!-- 专属推荐 -->
		<songList :list="state.recommendList"></songList>
	</view>
	
</template>

<script setup>
import { apiGetBanner, apiGetBall,apiGetRecommendList } from '@/api/index.js';
import { onLoad } from '@dcloudio/uni-app';
import { reactive } from 'vue';

const state = reactive({
	banners: [],
	balls: [],
	recommendList:[]
});

onLoad(() => {
	getBanner();
	getBall();
	getRecommendList()
});
//获取banner图
const getBanner = () => {
	apiGetBanner({ type: 2 }).then((res) => {
		// console.log(res.data.banners);
		state.banners = res.data.banners;
	});
};
//获取列表
const getBall = () => {
	apiGetBall().then((res) => {
		// console.log(res);
		state.balls = res.data.data;
		// console.log(state.balls);
	});
};
//推荐歌单
const getRecommendList =async()=>{
	const res = await apiGetRecommendList()
	state.recommendList = res.data.data.dailySongs;
	console.log(res);
	console.log(state.recommendList);
}
</script>

<style lang="scss" scoped>
.index {
	padding: 0 15rpx;
	.search {
		width: 500rpx;
		height: 60rpx;
		:deep(.uni-searchbar) {
			height: 100%;
			padding: 0;
			.uni-searchbar__box {
				height: 100%;
				padding: 0;
			}
		}
	}
	.banner {
		.swiper-item {
			height: 100%;
			border-radius: 10px;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.balls {
		display: flex;
		overflow-x: scroll;
		margin: 30rpx 0;
		.ball-item {
			flex: 0 0 20%;
			font-size: 20rpx;
			text-align: center;

			.icon {
				//图标风格
				background: $uni-primary-color;
				border-radius: 50%;
				//位置
				margin: 0 auto;
				margin-bottom: 10rpx;
				//大小
				width: 70rpx;
				height: 70rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	
}
</style>
