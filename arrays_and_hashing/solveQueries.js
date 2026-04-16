/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    const n = nums.length;
    const positions = new Map();
    const best = new Array(n).fill(-1);

    const getDist = (a, b) => {
        const direct = Math.abs(a - b);
        return Math.min(direct, n - direct);
    };

    // Build value -> list of indices
    for (let i = 0; i < n; i++) {
        if (!positions.has(nums[i])) {
            positions.set(nums[i], []);
        }
        positions.get(nums[i]).push(i);
    }

    // Precompute best answer for every index
    for (const indexes of positions.values()) {
        if (indexes.length === 1) continue;

        const m = indexes.length;

        for (let i = 0; i < m; i++) {
            const curr = indexes[i];
            const left = indexes[(i - 1 + m) % m];
            const right = indexes[(i + 1) % m];

            best[curr] = Math.min(getDist(curr, left), getDist(curr, right));
        }
    }

    // Answer queries in O(1)
    return queries.map(query => best[query]);
};