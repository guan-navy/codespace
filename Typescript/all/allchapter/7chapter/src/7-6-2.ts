import {strSelfSort} from './7-6';
import { quickSort } from './7-4';
import { isChinese, chineseSort } from './7-5';
var chineseArr762:Array<string> = ['张三','李四','王五','赵六','孙七','周八','吴九','郑十','王二','张三']
var str762:string = 'defgabc';
var arr762:Array<number> = [1,2,7,8,9,10,3,4,5,6];
// 重载声明
export function sort<T>(data: T[]): Array<any> |  undefined;
export function sort(data: string): string | undefined;
export function sort<T>(data:T):Array<any>|string|undefined{
    if(data instanceof Array){
        if(isChinese(data)){
            return chineseSort(data);
        }else {//todo:英文数组的当中字符串排序
           let temp:Array<string> =  data.map(item=>{
                if(typeof item === 'string'){
                   return strSelfSort(item);
                }
                return item;
            })
            return  quickSort<string>(temp);
        }
    }else if(typeof data === 'string'){
        return strSelfSort(data);
    }
    return
}
console.log(sort(str762))
console.log(sort(arr762))
console.log(sort(chineseArr762));
