const nums = [10,9,2,5,3,7,101,18]
const lengthOfLIS = (nums) => {
    let dp = Array(nums.length).fill(1);
    let result = 1;

    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
        result = Math.max(result, dp[i]);
    }

    return result;
};
console.log(lengthOfLIS(nums));