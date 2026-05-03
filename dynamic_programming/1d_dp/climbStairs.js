climbStairs(n) {
    const cache = new Map();
    const dfs = (i) => {
        if (i > n) return 0;
        if (i === n) return 1;
        if (cache.has(i)) return cache.get(i);
        cache.set(i, dfs(i+1) + dfs(i+2)) ;
        return cache.get(i);
    }
    return dfs(0);
}