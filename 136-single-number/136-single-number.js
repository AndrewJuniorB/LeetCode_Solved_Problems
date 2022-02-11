/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = nums.filter((num) => nums.indexOf(num) === nums.lastIndexOf(num))
   return result;
};