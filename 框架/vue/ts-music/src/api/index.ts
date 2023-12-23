// ts 有完整的编译阶段

// 没有使用也会警告
import http from './http'; // 文件扩展名应为 .ts
import type { Banner } from '../models/banner';

export async function useBanner() {
  // 前端也有数据校验,对于后端的数据进行校验
  // http.get<>泛型 限制了返回值的类型是Banner数组
  const { data } = await http.get<Banner[]>('/banner', { type: "yourType" }); // 替换 "yourType" 为你的实际值
  return data;
}
