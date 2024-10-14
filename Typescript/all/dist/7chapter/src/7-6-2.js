import { strSelfSort } from './7-6';
import { quickSort } from './7-4';
import { isChinese, chineseSort } from './7-5';
var chineseArr762 = ['张三', '李四', '王五', '赵六', '孙七', '周八', '吴九', '郑十', '王二', '张三'];
var str762 = 'defgabc';
var arr762 = [1, 2, 7, 8, 9, 10, 3, 4, 5, 6];
export function sort(data) {
    if (data instanceof Array) {
        if (isChinese(data)) {
            return chineseSort(data);
        }
        else {
            var temp = data.map(function (item) {
                if (typeof item === 'string') {
                    return strSelfSort(item);
                }
                return item;
            });
            return quickSort(temp);
        }
    }
    else if (typeof data === 'string') {
        return strSelfSort(data);
    }
    return;
}
console.log(sort(str762));
console.log(sort(arr762));
console.log(sort(chineseArr762));
