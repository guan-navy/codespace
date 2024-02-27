// /**
//  * @param {string} s
//  * @param {string[]} dictionary
//  * @return {string}
//  */
// var findLongestWord = function (s, dictionary) {
//   const sLen = s.length;
//   const arrLen = dictionary.length;
//   let resStr = "";
//   for (let i = 0; i < arrLen; i++) {
//     //最外层的for循环

// console.log('for',i,'dictionary[i]=',dictionary[i]);
// console.log('循环开始resStr是',resStr)
//     const str = dictionary[i];
//     const len = str.length;

//     if (resStr.length > len) continue; //直接跳过比resStr短的子元素

//     let left = 0;
//     let right = 0;
//     let count = 1
//     while (left < sLen && right < len) {

//         console.log('NO ',count++,'while','left',left,'right',right);
//         // 字符串s的范围更大，字符串数组的元素长度更小
//       if (s[left] === str[right]) {
//         right++;
//         left++
//       } else if (s[left] !== str[right]) {
//         left++;

//       }
//     }
//     if (right === len) {
//         console.log('开始更换resStr,');
//       if (len > resStr.length) {
//         console.log('更长');
//         resStr = str;
//       } else if (len == resStr.length) {
//         if (resStr > str) {
//           //str 的字母序比resStr更大
//           console.log('字母序更小');
//           resStr = str;
//         }
//       }
//     }
    
//     console.log('本次循环结束resStr=',resStr);
//     console.log('\n');
//   }
//   return resStr;
// };
// console.log(findLongestWord("abpcplea",["ale","apple","monkey","plea", "abpcplaaa","abpcllllll","abccclllpppeeaaaa"]));//预期应该是a

console.log("aaple"<"abple");
console.log(Number("apple"));
https://www.bilibili.com/video/BV1ew41127W2/?spm_id_from=333.337.search-card.all.click&vd_source=8c3d35b33d83704b6df7abb02e2718c0