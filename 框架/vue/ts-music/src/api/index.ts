// 没有使用也会警告
import type { Banner } from '../models/banner.ts';
import type { Personalized } from '../models/Personalized.ts'; // es6引入类型
import http from './http.ts';

// ts 有完整的编译阶段 ts -> js -> 
// 后端api 业务代码，负责后端数据的接入
// 广告位 banner type用于承接不同页面的banner位
export async function useBanner() {
    // 前端也有数据校验了，要对数据照单全收说不，因为要对用户负责 这就是 ts 接口
    // 在http.get<> 泛型 约束这个泛值banners返回值的类型应该是 Banner数组
    // resolve()
    const { banners } = 
        await http.get<{ banners:Banner[] }>('/banner',{type:1})
    return banners
}

// 看接口文档 亮点 使用 JSDOC 生成 后端写给前端看的 前后端 分离
// api/index.ts 中加一个业务方法
// 为了大型项目,做前端模型层 这样后端的数据就不怕不规范了 参考文档＋前端需求
export async function usePersonalized() {
    const { result } = 
        await http.get<{ result: Personalized[] }>('/Personalized')
    return result
}