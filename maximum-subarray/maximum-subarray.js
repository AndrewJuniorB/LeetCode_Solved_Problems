/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let prev = 0;
  let max = - Number.MAX_VALUE;

    for (let i = 0; i < nums.length; i++) {
      // pick max and compare curr + prev with prev, and compare max
      prev = Math.max(prev + nums[i], nums[i]);
      max = Math.max(max, prev)
    }
    return max;
};