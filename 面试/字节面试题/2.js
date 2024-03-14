let a = (2**53).toString()
let b = '234324'

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

console.log(sum(a,b)==9007199254975316)
