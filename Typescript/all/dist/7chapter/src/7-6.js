import { quickSort } from "./7-4";
function strSelfSort(str) {
    const arr = str.split('');
    const strSortArr = quickSort(arr);
    return strSortArr.join('');
}
console.log(strSelfSort('ayuamna'));
