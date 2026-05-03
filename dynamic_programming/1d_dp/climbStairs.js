climbStairs(n) {
    const cache = new Map();
    const dfs = (i) => {
        if (i >= n) return i === n;
        if (cache.get(i)) return cache.get(i);
        cache.set(i, dfs(i+1) + dfs(i+2)) ;
        return cache.get(i);
    }
    return dfs(0);
}