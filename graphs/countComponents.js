class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adjList = new Map();

        for (let i = 0; i < n; i++) {
            adjList.set(i, []);
        }

        for (let [edge, dest] of edges) {
            adjList.get(edge).push(dest);
            adjList.get(dest).push(edge);
        }

        const visited = new Set();
        let numConnected = 0;

        const dfs = (i) => {
            if (visited.has(i)) {
                return;
            }

            visited.add(i);
            for (let neighbor of adjList.get(i)) {
                dfs(neighbor);
            }
        }

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                numConnected++;
                dfs(i);
            }
        }
        return numConnected;
    }
}