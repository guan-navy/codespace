//模块,前后端,交流 数据模块封装
//localhost:3000/banner //轮播图 axios
import http from './http.js';

export async function getBanner(){
    //get 统一的http
    const{banners} = await http.get('/banner',{type:1})
    return banners
}
export async function getSearchSugget(keywords) {
	const { result } = await http.get('/search', { keywords })
	return result
}