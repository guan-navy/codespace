// 数组上的map遍历,callback 返回值 新的数组
/* 
parseInt(1,0,[1,2,3]) 没有0进制,默认以十进制运行
parseInt(2,1,[1,2,3])  有一进制,但是一进制没有2,NaN
parseInt(3,2,[1,2,3])   二进制但是没有3
*/
console.log([1,2,3].map(parseInt))