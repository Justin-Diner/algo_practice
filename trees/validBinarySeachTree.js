class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        
        const dfs = (node, min, max) => {
            if (node === null) {
                return true;
            }

            if (!(min > node.val && node.val < max)) {
                return false;
            }

            const left = dfs(node.left, min, node.val);
            const right = dfs(node.right, node.val, max);

            return left && right;
        }
        return dfs(root, -Infinity, Infinity);
    }
}