/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * Algorithm Inorder(tree)
 *  1. Traverse the left subtree, i.e., call Inorder(left-subtree)
 *  2. Visit the root.
 *  3. Traverse the right subtree, i.e., call Inorder(right-subtree)
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
let output = []

        let inOrdTraverse = (root) => {
            if(root!==null) {
                //Traverse the left subtree, i.e., call Inorder(left-subtree)
                inOrdTraverse(root.left);
                // Visit the root and push
                output.push(root.val);
                //Traverse the right subtree, i.e., call Inorder(right-subtree)
                inOrdTraverse(root.right);
            }
        }
    inOrdTraverse(root);
return output;
};