class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const adjList = new Map();

        for (let [src, dest] of edges) {
            adjList.set(src, []);
            adjList.set(dest, []);
        }

        const dfs = (i, parent, visiting) => {
            if (visiting.has(i)) return true;

            visiting.add(i);
            for (let neighbor of adjList.get(i)) {
                if (neighbor === parent) {
                    continue;
                }

                if (dfs(neighbor, i, visiting)) return true; 
            }
            return false;
        }

        for (let [nodeA, nodeB] of edges) {
            adjList.get(nodeA).push(nodeB);
            adjList.get(nodeB).push(nodeA);
            if (dfs(nodeA, -1, new Set())) {
                return [nodeA, nodeB];
            }
        }
    }
}