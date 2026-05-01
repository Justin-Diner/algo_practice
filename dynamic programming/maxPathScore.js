// Max Path Score
var maxPathScore = function(grid, k) {   

   const ROWS = grid.length;
    const COLS = grid[0].length;
    const NEG = -1;

    // You can never visit more than ROWS + COLS - 1 cells
    k = Math.min(k, ROWS + COLS - 1);

    const getCost = (val) => val === 0 ? 0 : 1;

    let dp = Array.from({ length: COLS }, () => new Int32Array(k + 1).fill(NEG));

    for (let r = 0; r < ROWS; r++) {
        const newDp = Array.from({ length: COLS }, () => new Int32Array(k + 1).fill(NEG));

        for (let c = 0; c < COLS; c++) {
            const value = grid[r][c];
            const cellCost = getCost(value);

            if (r === 0 && c === 0) {
                if (cellCost <= k) {
                    newDp[c][cellCost] = value;
                }
                continue;
            }

            for (let used = cellCost; used <= k; used++) {
                const prevUsed = used - cellCost;

                let bestPrev = NEG;

                // from top
                if (r > 0) {
                    bestPrev = Math.max(bestPrev, dp[c][prevUsed]);
                }

                // from left
                if (c > 0) {
                    bestPrev = Math.max(bestPrev, newDp[c - 1][prevUsed]);
                }

                if (bestPrev !== NEG) {
                    newDp[c][used] = bestPrev + value;
                }
            }
        }

        dp = newDp;
    }

    let answer = -1;
    for (let used = 0; used <= k; used++) {
        answer = Math.max(answer, dp[COLS - 1][used]);
    }

    return answer;
};