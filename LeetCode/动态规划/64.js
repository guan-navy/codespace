var minPathSum = function(grid) {
    //局部最优不等于全局最优
    //创建一个二维m×n数组并初始化为0
    
    
    
    const m = grid.length  //行数
    const n = grid[0].length //列数
    console.log(m,n)
    
    let dp = new Array(m).fill(0).map(()=> new Array(n).fill(0))
    //先将第一行和第一列的元素
    console.log('初始化的数组',dp)
    
    for(let j = 0; j < n;j++){
        
        dp[0][j] = j==0?grid[0][j]:dp[0][j-1]+grid[0][j]
        console.log(dp[0][j])
    }
    console.log('初始化第一行',dp)
    
    for(let i=0;i<m;i++){
    dp[i][0] = i==0?grid[i][0]:dp[i-1][0]+grid[i][0]
    console.log(dp[i][0])
    }
    console.log('--------------')
    console.log('初始化第一列',dp)
    
    //一般情况
    for(let i = 1;i<m;i++){
        for(let j=1;j<n;j++){
          dp[i][j] =Math.min(dp[i-1][j],dp[i][j-1]) +grid[i][j]
        }
    }
    return dp[m-1][n-1]
    };
    let grid=[[1,3,1],[1,5,1],[4,2,1]]
    console.log(minPathSum(grid))