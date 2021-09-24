/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (!Array.isArray(nums) || target === undefined || nums === undefined){
        return [];
    }

    let result = [];

    for (var i = 0; i < nums.length; i ++) {


        for (var j = i + 1; j < nums.length; j ++ ) {

            if ((nums[i] + nums[j]) === target ){
                result.push(i);
                result.push(j);
                return result;
            }
            
        }
        
    }
    return "No mathes to target in this array";
};