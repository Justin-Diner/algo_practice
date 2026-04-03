class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let maxPathSum = -Infinity;
        const dfs = (node) => {
            if (node === null) {
                return 0;
            }

            const leftMax = Math.max(0, dfs(node.left));
            const rightMax = Math.max(0, dfs(node.right));

            maxPathSum = Math.max(maxPathSum, (leftMax + rightMax + node.val))
            
            return node.val + Math.max(leftMax, rightMax);
        }
        dfs(root);
        return maxPathSum;
    }
}