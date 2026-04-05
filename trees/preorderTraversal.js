class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */

    preorderTraversal(root) {
        const answer = [];
        const dfs = (node) => {
            if (node === null) {
                return null;
            }

            answer.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);
        return answer;
    }

}
