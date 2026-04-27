class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const copyMap = new Map();

        const dfs = (node, oldToNew) => {
            if (node === null) {
                return null;
            }

            if (oldToNew.has(node)) {
                return oldToNew.get(node);
            }

            const copy = new Node(node.val);
            oldToNew.set(node, copy);
            for (const neighbor of node.neighbors) {
                copy.neighbors.push(dfs(neighbor, oldToNew));
            } 
            return copy;
        }

        return dfs(node, copyMap)
    }
}
