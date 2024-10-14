

// 字符串有一个方法
// padStart() padEnd()


function sum  (a, b) {
  const maxlen=  Math.max(a.length, b.length)
  a = a.padStart(maxlen,'0')
  b = b.padStart(maxlen,'0')
  let res = ''
  let add  = 0 
  for (let i = maxlen-1; i >=0; i--) {
    //显式转换
    //也可以进行隐式转换
   let aN = Number(a[i])
   let bN = Number(b[i])
   let sum = aN + bN +add
   if (sum > 9) {
     add = 1
     sum = sum - 10
    }else {
      add = 0
    }
    res = sum + res
    
   
    
  }
  if(add === 1) res = '1' + res
  return Number(res)
}
//1.将数字转化为字符串
//2. 对字符串进行补零
//3. 使用变量进行进位存储

function addBigN(num1, num2) {
  num1 += ''
  num2 += ''
  const maxLen = Math.max(num1.length, num2.length)
  num1 = num1.padStart(maxLen, '0')
  num2 = num2.padStart(maxLen, '0')
  let res = ''
  let add = 0
  for(let i =  maxLen-1; i >=0; i--){
      let n1 = Number(num1[i])
      let n2 = Number(num2[i])
      const sum = n1+n2+add
      if(sum>=10){
          res = sum%10+res
          add = 1
      }else{
res = sum+res
add = 0

      }
      
  }
  return add==1?Number(1+res):Number(res)
}


console.log(sum(9007199254740991+'',2+''))
