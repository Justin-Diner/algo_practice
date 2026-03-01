/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0;

        const dfs = (rootNode) => {
            if (rootNode === null) {
                return 0;
            }

            const left = dfs(rootNode.left);
            const right = dfs(rootNode.right);

            diameter = Math.max(diameter, left + right);
            return 1 + Math.max(left, right);
        }
        dfs(root);
        return diameter;
    }
}