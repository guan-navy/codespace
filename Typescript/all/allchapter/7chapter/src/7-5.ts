//泛型函数重载准备经典复杂排序器
// import { quickSort } from "./7-4";
var Arr75 = ['武汉','石家庄','郑州','太原','沈阳','大连']

//预备知识
let cnStr1 = '南昌'
let cnStr2 = '杭州'
//比较开头拼音字母的序号,大于为-1,小于的话为1
console.log(cnStr1.localeCompare(cnStr2,'zh-CN'))
export function chineseSort(arr: Array<string>): Array<string> {
    return arr.sort((a,b)=>{ //升序排列
        return a.localeCompare(b)
    })
}
console.log(chineseSort(Arr75));
//判断是否是中文
export function isChinese(str:Array< string>): boolean {
   let pattern = /^[\u4E00-\u9FA5]+$/
   return str.some(item=>{
       return pattern.test(item)
   })
}

console.log(isChinese(Arr75));


