/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
let sorted = nums.sort();
    let result = sorted.filter((num) => sorted.indexOf(num) === sorted.lastIndexOf(num))
   return result;
};