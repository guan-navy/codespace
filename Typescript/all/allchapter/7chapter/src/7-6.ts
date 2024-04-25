//字符串的自排序


import { quickSort } from "./7-4";
// import { isChinese,chineseSort } from "./7-5";

// let Arr76 = ['武汉','石家庄','郑州','太原','沈阳','大连']
export function strSelfSort(str:string){//字符串的自排序
    //将字符串分割为数组
    const arr = str.split('')
    //快速排序解决
   const strSortArr = quickSort(arr)
   //将数组拼接成字符串
    return strSortArr.join('')

}
console.log(strSelfSort('bca'));


