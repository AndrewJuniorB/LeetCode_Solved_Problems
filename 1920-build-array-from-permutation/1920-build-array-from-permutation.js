/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let result = [];
        nums.forEach((num,i) => result[i] = nums[num])
    return result;
};