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
export default addBigN
console.log(addBigN(9007199254740991,2));
console.log(addBigN(10000,10000));
