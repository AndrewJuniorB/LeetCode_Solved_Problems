/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
if (nums.length === 0 || target === undefined) {
  return 0;
}
    
  for (var i = 0; i < nums.length; i ++ ) {
    //console.log(nums[i])
    if (nums[i] === target || nums[i] > target) {
      return i;
    } 
  }
    
return nums.length;
};