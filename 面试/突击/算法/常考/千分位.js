//输入一个数字实现千分位分隔
//首先获取到两个部分：整数部分和小数部分
//使用数组解构

function format(number){
    //先判断是否为数字
    if(typeof number !== 'number')return ''
    //转化为字符串
    number +=''
    let [integer,decimal] = number.split('.')
   
// console.log(integer,decimal);
    //定义分隔逻辑函数
    function separate(str,isInt=true){
        str = str.split('')
        //这里的逻辑,默认从左往右遍历
        //但是整数部分需要从右往左,所以反转
        if(isInt){
            str.reverse()
        }
        const res = []
        for (let i = 0; i <str.length; i++) {
            //分隔符=是在index = 3的数字前面位置,添加逗号
            if(i!==0&&i%3===0){
                res.push(',')
            }
            //普通字符
            res.push(str[i])
        }
        if(isInt){
            res.reverse()
        }

        return res.join('')
    }
   integer =  separate(integer)
    decimal = separate(decimal,false)
    return integer + (decimal===''?'':'.'+decimal)
}

console.log(format(1234567890.123456789));