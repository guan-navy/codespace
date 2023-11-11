let str='abcdefg'
console.log(str[2])
console.log(str.at(2))
console.log(str.startsWith('ab'))



//对象转字符串
let obj = {
    a:2,
    b:3
}
console.log(obj)
let str1 = JSON.stringify(obj)
console.log(str1)
console.log(JSON.parse(str1))