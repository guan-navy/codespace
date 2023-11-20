console.log(process.argv[process.argv.length - 1]);//获取最后一个指令

let player = process.argv[process.argv.length -1]
//电脑生成一个
let arr = ['rock','scissors','paper']
let index = Math.floor(Math.random() * 3)
let computer = arr[index]
console.log(computer);
// 比较
if (arr[index] ===player) {
     console.log('平局')
}else if(computer ==='rock'&& player ==='paper'||
 computer ==='paper'&&player ==='scissors'||
  computer ==='scissors'&&player ==='rock'){
    console.log('赢了');
  }
  else{
    console.log('输了');
  }