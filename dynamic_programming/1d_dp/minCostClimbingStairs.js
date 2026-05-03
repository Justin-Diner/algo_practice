minCostClimbingStairs(cost) {
    const cache = new Array(cost.length).fill(-1);
    const dfs = (i) => {
        if (i >= cost.length) {
            return 0;
        }

        if (cache[i] !== -1) {
            return cache[i]
        }

        const minCost = cost[i] + Math.min(dfs(i+1), dfs(i+2));
        cache[i] = minCost;
        return cache[i];
    }

    dfs(0);
    return Math.min(cache[0], cache[1]);
}