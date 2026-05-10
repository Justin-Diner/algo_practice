var tribonacci = function(n) {
    const memo = new Map();
    const dfs = (i) => {
        if (memo.has(i)) {
            return memo.get(i);
        }
        if (i === 2 || i === 1) {
            return 1;
        }

        if (i === 0) {
            return 0;
        }

        const trib = dfs(i-1) + dfs(i-2) + dfs(i-3);
        memo.set(i, trib);
        return trib;
    }

    return dfs(n);
    
};