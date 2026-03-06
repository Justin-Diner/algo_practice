
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    totalGoodNodes = 0;
    goodNodes(root) {
        const dfs = (node, highest) => {
            if (node === null) {
                return;
            }
            
            if (node.val >= highest) {
                this.totalGoodNodes++;
                highest = node.val;
            }

            dfs(node.left, highest);
            dfs(node.right, highest);
        }
        dfs(root, -Infinity);
        return this.totalGoodNodes;
    }
}
