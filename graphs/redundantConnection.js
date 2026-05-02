// Time Complexity: O(E * (V + E))
// Space Complexity: O(V + E)
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

// Improved Solution:
findRedundantConnection(edges) {
    const adjList = new Map();

    const dfs = (src, target, visited) => {
        if (src === target) return true;
        if (visited.has(src)) return false;

        visited.add(src);

        for (const neighbor of adjList.get(src) ?? []) {
            if (dfs(neighbor, target, visited)) {
                return true;
            }
        }

        return false;
    };

    for (const [nodeA, nodeB] of edges) {
        if (!adjList.has(nodeA)) adjList.set(nodeA, []);
        if (!adjList.has(nodeB)) adjList.set(nodeB, []);

        // If nodeA can already reach nodeB,
        // adding nodeA-nodeB creates a cycle.
        if (dfs(nodeA, nodeB, new Set())) {
            return [nodeA, nodeB];
        }

        adjList.get(nodeA).push(nodeB);
        adjList.get(nodeB).push(nodeA);
    }
}