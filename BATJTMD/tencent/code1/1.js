// console.log("hello world!")

/* *
* @func 返回固定格式的电话号码
* @params array [1,2,3,4,5,6,7,9,0]
* @return (123)456-7890
* @author 2693459705@qq.com
*/
/* function phoneNumber(numbers){
 
 return "(" + numbers[0] + numbers[1] + numbers[2]
     + ")" + " " + numbers[3] + numbers[4] + numbers[5] 
     + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9] + ""
 
} */
//ees6箭头函数
//对象 函数也是对象
//变量的类型由值来决定
//简版函数 箭头函数
const phoneNumber = (numbers)=>"(" + numbers[0] + numbers[1] + numbers[2]
+ ")" + " " + numbers[3] + numbers[4] + numbers[5] 
+ "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9] + ""
// `(${number[0]}${number[1]}${number[2]})${number[3]}${number[4]}${number[5]}-${number[6]}${number[7]}${number[8]}${number[9]}`

console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]))