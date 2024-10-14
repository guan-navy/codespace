//1,234,567
// 国外货币


function fn(num){
    if (typeof num != 'number'){
        return
    }
    num+= ''
    let [interger,decimal] = num.split('.')
    //内部函数封装,被整数倍分和小数部分复用,整数部分和小数部分都要千分位
    const doSplit =(num,isInteger=true)=>{
        if (num === ''){
            return ''
        }

        if(isInteger) num = num.split('').reverse()
        let str = []
    for (let i = 0; i < num.length; i++) {
       if (i!==0 && i%3===0) {
        str.push(',')
       }
       str.push(num[i])
        
    }
    if(isInteger) return str.reverse().join('')
    }
interger = doSplit(interger)
decimal = doSplit(decimal,false)
return interger + '.' + decimal

}
console.log(fn(1000.99));