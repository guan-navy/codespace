

function format(num){
if(typeof num !== 'number') return ''
num += ''//数字变字符串
//分隔整数和小数部分
let [integer,decimal] = num.split('.')  //数组的形式:[整数,小数]

function separate(str,isInt=true){
    str=str.split('')
    const res = []
if(isInt) {
     str.reverse()
}
for(let i= 0;i<str.length;i++){
    if(i!==0&&i%3===0){ //在四的倍数之前
        res.push(',')
    }
    res.push(str[i])
}
if(isInt){
    res.reverse()
}
return res.join('')
}
integer = separate(integer)
decimal = separate(decimal)
return integer+(decimal===''?'':'.'+decimal)
}

console.log(format(123456789.123));