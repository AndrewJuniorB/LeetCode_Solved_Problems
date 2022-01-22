/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
if (!root) return true;
    function mirror(a,b) {
        if (!a && !b) return true;
        
        if (!a || !b) return false;
        
        return a.val === b.val && mirror(a.right, b.left) && mirror(a.left, b.right);
    }
return mirror(root.left, root.right);
};