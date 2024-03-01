<template>
	<view class="header">
		<uni-icons type="bars" size="24" @click="showMenu"></uni-icons>
		<view class="content">
			<!-- 添加一个插槽 -->
			<slot name="content"></slot>
		</view>
		<uni-icons :type="icon" size="24"></uni-icons>
			
	</view>
	<view class="box">
		
	</view>
	
</template>

<script setup>
	import {useStore} from 'vuex'
	const store =useStore()
	const showMenu =()=>{
		store.commit('changeIsShowMenu',true)
	}
	defineProps({
		icon:{
			type:String,
			default:'mic'
		}
	})
</script>

<style lang="scss" scoped>
.header{
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:0  15px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	box-sizing: border-box;
}
.box{
	height: 100rpx;
}
</style>