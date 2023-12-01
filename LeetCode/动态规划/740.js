var deleteAndEarn = function(nums) {
    //可以转化为打家劫舍问题
    //将数组每个数字的出现次数存储起来for of循环
    //定义一个哈希表
    let count = new Map()
    for(const num of nums)
     {
        count.set(num,(count.get(num)||0)+1)
     }
     console.log(count);
     //去重之后的升序排列数组
    let mySet = new Set()
    for(const num of nums){
        mySet.add(num)
    }
    let uniques = [...mySet].sort((a,b)=>a-b)
    console.log(uniques);
    let dp = []
    dp[0] = uniques[0]*count.get(uniques[0])
    
    for(let i =1;i<uniques.length;i++){
        const cur =uniques[i]
        const pre =uniques[i-1]
        console.log('第',i,'次',pre,',',cur);
     if(cur == pre+1){
        console.log('进入if');
         dp[i] = Math.max(cur*count.get(cur)+(dp[i-2]||0),dp[i-1])
         console.log(dp[i]);
     }else{
        console.log('进入else');
         dp[i]=cur*count.get(cur)+dp[i-1]
         console.log(dp[i]);
        }
        console.log(dp);
    
    }
    return dp[dp.length-1]
    };
    let nums =[2,2,3,3,3,4]
    console.log(deleteAndEarn(nums));