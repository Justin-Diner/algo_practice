class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = new Set();
        const queue = []
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === 0) {
                    queue.push([i, j, 0]);
                }
            }
        }

        while (queue.length > 0) {
            const [r, c, distance] = queue.shift();
            const key = `${r}-${c}`;
            if (
                Math.min(r, c) < 0 ||
                r >= ROWS ||
                c >= COLS ||
                grid[r][c] === -1 ||
                visited.has(key)
            ) {
                continue;
            }

            visited.add(key);
            for (let direction of directions) {
                const [nr, nc] = direction;
                queue.push([r + nr, c + nc, distance +1]);
            }

            grid[r][c] = distance;
        }
        return grid;
    }
}
