/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let len = nums.length;

  if (len === 3) {
    return nums[0] + nums[1] + nums[2];
  }
  nums.sort((a, b) => a - b); //升序排列
  console.log("排序之后的数组是", nums);
  let res = 0;
  let min = Infinity; //通过维护一个变量min来存储最接近target的三数之和

  // len-3 len-2 len-1
  for (let i = 0; i < len - 2; i++) {
    console.log("第", i, "循环固定点为", nums[i]);
    let count = 0;
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      //双指针动态寻找
      
      let sum = nums[i] + nums[left] + nums[right];
      let diff = Math.abs(sum - target);
      console.log("NO", count++, "left:", left, "right:", right, "sum:", sum,'min',min);
      if (diff < min) {
        //差距更小
        min = diff;
        res = sum;
      }
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else if ((sum = target)) {
        return sum;
      }
    }
    console.log("这个固定点循环最后的结果是res",res);
  }
  return res;
};
const arr =[4,0,5,-5,3,3,0,-4,-5];
console.log(threeSumClosest(arr, -2));
