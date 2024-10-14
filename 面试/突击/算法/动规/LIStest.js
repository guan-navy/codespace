const nums = [10, 9, 2, 5, 3, 7, 101, 18];

function LIS(arr) {
  const len = arr.length;
  if (len <= 1) return len;
  const dp = new Array(len).fill(1);
  let result = 1; // 初始结果为 1，因为每个元素本身就是一个子序列
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
        //递增的
      if (arr[j] < arr[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    result = Math.max(result, dp[i]);
  }
  return result;
}

console.log(LIS(nums));
