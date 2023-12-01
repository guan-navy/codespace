var minCostClimbingStairs = function(cost) {

    //定义动态状态数组
    let dp = []
    dp[0] = cost[0]
    dp[1] = cost[1]
    console.log(dp.join(' ,'));
    for(let i=2;i<cost.length;i++ ){
    
     dp[i]= Math.min(dp[i-1]+cost[i],dp[i-2]+cost[i])
    }
    console.log(dp.join(','));
    return dp[dp.length-1]>dp[dp.length-2]?dp[dp.length-2]:dp[dp.length-1]
    };
    let arr=[1,100,1,1,1,100,1,1,100,1]
    console.log(minCostClimbingStairs(arr));