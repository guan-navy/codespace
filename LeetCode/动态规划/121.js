// 分水岭考得最多的一道题目
const maxProfit = function(price){
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

let price = [7,1,5,3,6,4]
console.log(maxProfit(price));