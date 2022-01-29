/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // Error handling
     if (nums === null || !nums.length) return null;
    
    let midPoint = Math.floor(nums.length / 2);
    let node = new TreeNode(nums[midPoint]);
 
    node.left = sortedArrayToBST(nums.slice(0, midPoint));
    node.right = sortedArrayToBST(nums.slice(midPoint+1, nums.length));

    return node;
     
};