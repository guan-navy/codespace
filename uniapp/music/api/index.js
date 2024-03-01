// 跟首页相关的接口
import baseUrl from './request.js'


export  const apiGetBanner = (data)=>{
	return uni.request({
		url:baseUrl+'/banner',
		method:'GET',
		data:data,
		
	})
}

export  const apiGetBall= ()=>{
	return uni.request({
		url:baseUrl+'/homepage/dragon/ball',
		method:'GET'
	})
}


export  const apiGetRecommendList= ()=>{//推荐歌单
	return uni.request({
		url:baseUrl+'/recommend/songs',
		method:'GET'
	})
}