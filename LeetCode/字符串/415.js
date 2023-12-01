var addStrings = function (num1, num2) {
    //只能来模拟数学的进位计算
    //区分最大最小数组
    console.log(num1);
    console.log(num2);
    let maxNum = (num1.length >= num2.length ? num1 : num2).split('').map(Number)
    let minNum = (num2.length <= num1.length ? num2 : num1).split('').map(Number)
    //定义指针
    console.log(maxNum);
    console.log(minNum);
    let n = minNum.length - 1
    let m = maxNum.length - 1
    let count = 1
    while (n >= 0) {
        //从末尾开始相加
        let sum = maxNum[m] + minNum[n]
        console.log('第', count++, '次拿到的上下位是', maxNum[m], minNum[n], 'n的值为', n, 'm的值为', m);
        //如果和大于10需要进位
        if (sum >= 10) {
            console.log('开始进位');
            maxNum[m] = sum % 10
            console.log('本位值是', +maxNum[m]);
            //开始进位
            let temp = m - 1
            if (temp == -1) {

                maxNum.unshift(1)
                m++

            }
            while (temp >= 0) {

                let sum1 = maxNum[temp] + 1
                if (sum1 >= 10) {
                    maxNum[temp] = sum1 % 10
                    //在最前面进位添加了一个1
                    if (temp == 0) {
                        maxNum.unshift(1)
                        m++
                    }
                }
                else {
                    maxNum[temp] = sum1
                    break
                }
                temp--

            }
        } else {
            maxNum[m] = sum
            console.log('本位值是', +maxNum[m]);
        }
        console.log('minNum为', minNum[0]);
        m--
        n--

    }
    console.log(maxNum);
    let res = ''
    for (let i = 0; i < maxNum.length; i++) {
        res += maxNum[i]
    }
    return res
};
let num1 = '99'
let num2 = '9'
console.log(addStrings(num1, num2));