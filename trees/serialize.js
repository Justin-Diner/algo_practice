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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const list = [];
        const dfs = (node) => {
            if (node === null) {
                list.push("N");
                return;
            }
            list.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);
        return list.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {

        const dataArr = data.split(',');
        let i = 0;
        
        const dfs = () => {
            if (dataArr[i] === 'N') {
                i++
                return null;
            }
            
            const node = new TreeNode(parseInt(dataArr[i]));
            i++;
            node.left = dfs();
            node.right = dfs(); 
            return node;
        }
        return dfs();
    }
}