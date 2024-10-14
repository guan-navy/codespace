const n1 = '123456789'
const n2 = '123456789'

function addBigNum(n1,n2){
    if(typeof n1==='string' &&typeof n2==='string'){
        const maxLen  =(n1.length,n1.length)
        const str1 = n1.padStart(maxLen,'0')
    const str2 = n2.padStart(maxLen,'0')
        const arr1 = str1.split('').reverse().map((item)=>Number(item))
        const arr2 = str2.split('').reverse().map((item)=>Number(item))
        let add = 0
        let res = []
        for(let i  =0 ;i<maxLen ;i++){
   const sum = arr1[i]+arr2[i]+add
            if(sum>9){
                add =1
                res.push(sum%10)
            }else{
                add =0
                res.push(sum)
            }
        }
if(add){
    res.push(add)
}
        return res.reverse().join('')
    }
}
console.log(addBigNum(n1,n2));
const sum = BigInt(n1)+BigInt(n2)
const sum1  = sum.toString()
console.log(sum.toString());

console.log(addBigNum(n1,n2) == sum1);

