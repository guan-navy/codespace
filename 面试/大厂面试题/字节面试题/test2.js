

function sum(a, b) {
  a = a.toString()
  b = b.toString()
  console.log(a);

  const len = Math.max(a.length, b.length)
  a = a.padStart(len, '0')
  b = b.padStart(len, '0')

  let result = ''
  let carry = 0
  for (let i = len - 1; i >= 0 ; i--) {
    // a[i] b[i]  2   4
    const n = (+a[i]) + (+b[i]) + carry    // Number(a[i]) + Number(b[i])  18
    carry = Math.floor(n / 10)
    result = (n % 10) + result
  }
  if (carry) {
    result = '1' + result
  }

  return Number(result)
} 

console.log(sum(9007199254740990,));