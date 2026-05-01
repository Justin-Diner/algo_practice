class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const neighbors = new Map();

        for (let i = 0; i < n; i++) {
            neighbors.set(i, []);
        }

        for (const [curr, next] of edges) {
            neighbors.get(curr).push(next);
            neighbors.get(next).push(curr);
        }

        const visited = new Set();
        const dfs = (i, prev) => {
            if (visited.has(i)) {
                return false;
            } 

            visited.add(i);
            for (const neighbor of neighbors.get(i)) {
                if (prev === neighbor) {
                    continue;
                }
                if (!dfs(neighbor, i)) {
                    return false;
                };
            }
            return true;
        }
        return dfs(0, -1) && visited.size === n 
    }
}