<template>
	<view>about page</view>
	<view class="btn">
		<button type="default">按钮</button>
		<view class="iconfont">
			&#xe60c;
		</view>
	</view>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
	const reTask = uni.request({
		url: 'https://mock.mengxuegu.com/mock/65a9e051c4cd67421b34c901/movie/',
		method: 'GET',
		success: (res) => {
			console.log(res);

			uni.setStorage({
				key: 'movieName',
				data: res.data.data.movieList[0].nm,
				success() {
					uni.showToast({
						title: '保存成功',
						duration: 2000,
						icon: 'success'
					});
				}
			});
		}
	});
	// reTask.abort()不再发送请求
});
</script>

<style lang="scss">
	.btn{
		button{
			width: 750 rpx;//rpx是根据屏幕宽度制定的响应式单位,量到多少就写多少
		}
	}
</style>
