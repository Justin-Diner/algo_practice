// Top Down DFS with memoization
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
// Bottom Up Approach
climbStairs(n) {
    const answer = [0, 1]

    for (let i = 0; i < n; i++) {
        let tmp = answer[1];
        answer[1] = answer[0] + answer[1];
        answer[0] = tmp;
    }
    return answer[1];
}