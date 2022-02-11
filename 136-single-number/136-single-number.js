/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // return nums.filter((num) => nums.indexOf(num) === nums.lastIndexOf(num))
    let sortedNums = nums.sort();
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] !== sortedNums[i-1] && sortedNums[i] !== sortedNums[i+1]) return sortedNums[i];
    }
};