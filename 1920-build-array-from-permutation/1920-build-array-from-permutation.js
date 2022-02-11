/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let result = [];
        nums.forEach((num,i,arr) => result[i] = arr[arr[i]])
    return result;
};