/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    return !!(nums.filter((el,i) => nums.includes(el, i+1))).length;
    
};