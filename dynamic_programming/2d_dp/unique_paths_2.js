// Unique Paths 2 - With Obstacles 

// dfs with memoization

uniquePathsWithObstacles(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const cache = new Map();

    const dfs = (r, c) => {
        if (
            r >= ROWS
            || c >= COLS
            || grid[r][c] === 1
        ) {
            return 0;
        }

        if (r === ROWS -1 && c === COLS-1) {
            return 1;
        }

        if (cache.has(`${r}-${c}`)) {
            return cache.get(`${r}-${c}`);
        }

        const answer = dfs(r+1, c) + dfs(r, c+1);
        cache.set(`${r}-${c}`, answer);
        return answer;
    }
    return dfs(0, 0);
}