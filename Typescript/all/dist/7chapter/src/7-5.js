var Arr75 = ['武汉', '石家庄', '郑州', '太原', '沈阳', '大连'];
let cnStr1 = '南昌';
let cnStr2 = '杭州';
console.log(cnStr1.localeCompare(cnStr2, 'zh-CN'));
export function chineseSort(arr) {
    return arr.sort((a, b) => {
        return a.localeCompare(b);
    });
}
console.log(chineseSort(Arr75));
export function isChinese(str) {
    let pattern = /^[\u4E00-\u9FA5]+$/;
    return str.some(item => {
        return pattern.test(item);
    });
}
console.log(isChinese(Arr75));
