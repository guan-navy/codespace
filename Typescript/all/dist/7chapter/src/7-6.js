import { quickSort } from "./7-4";
export function strSelfSort(str) {
    var arr = str.split('');
    var strSortArr = quickSort(arr);
    return strSortArr.join('');
}
console.log(strSelfSort('bca'));
