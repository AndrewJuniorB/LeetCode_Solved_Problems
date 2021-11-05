/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
let out = 0;
  for (var i = 0; i < nums.length; i ++ ) {
    //console.log(nums[i])
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    } 
  }
return nums.length;
};