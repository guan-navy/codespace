// 分水岭考得最多的一道题目
const maxProfit1 = function(price){
    // 流程 自顶向下 递归
    // 当天卖
    //每个dp[i]表示在该天的获利
    const dp = new Array(price.length).fill(0)
    let min = price[0]
    for (let i = 1; i < price.length; i++) {
        min=Math.min(min,price[i])
        dp[i] =Math.max(price[i] -min,dp[i-1])
    
    }
    console.log(dp);
    return dp [dp.length - 1]
}
//贪心算法
const maxProfit2 = function(price){
    // 将两次的比较放在一个循环当中
    let min = price[0]
    let res = 0
    for (let i = 1; i < price.length; i++) {
        const element = price[i];
        //通过两个变量来保存选中元素前面的最小值,和最大的差值
        min = Math.min(min,price[i])
        res = Math.max(res,price[i]-min)
    }
    return res
}
let price = [7,1,5,3,6,4]
console.log(maxProfit2(price));