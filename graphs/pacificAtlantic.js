//  Naive solu tion O(m*n)^2
class Solution {
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const answer = [];

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const searchForAtlantic = (r, c, parentVal, visited) => {
            if (r >= ROWS || c >= COLS) return true;
            if (r < 0 || c < 0) return false;

            const key = `${r}-${c}`;
            if (visited.has(key)) return false;
            if (heights[r][c] > parentVal) return false;

            visited.add(key);

            for (const [dr, dc] of directions) {
                if (searchForAtlantic(r + dr, c + dc, heights[r][c], visited)) {
                    return true;
                }
            }

            return false;
        };

        const searchForPacific = (r, c, parentVal, visited) => {
            if (r < 0 || c < 0) return true;
            if (r >= ROWS || c >= COLS) return false;

            const key = `${r}-${c}`;
            if (visited.has(key)) return false;
            if (heights[r][c] > parentVal) return false;

            visited.add(key);

            for (const [dr, dc] of directions) {
                if (searchForPacific(r + dr, c + dc, heights[r][c], visited)) {
                    return true;
                }
            }

            return false;
        };

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                const canReachAtlantic = searchForAtlantic(i, j, heights[i][j], new Set());
                const canReachPacific = searchForPacific(i, j, heights[i][j], new Set());

                if (canReachAtlantic && canReachPacific) {
                    answer.push([i, j]);
                }
            }
        }

        return answer;
    }
}

// Optimized solution O(m*n) time O(m*n) space
class Solution {
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const pacific = new Array(ROWS).fill(0).map(() => new Array(COLS).fill(false));
        const atlantic = new Array(ROWS).fill(0).map(() => new Array(COLS).fill(false));
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];
        const result = [];

        const dfs = (r, c, ocean) => {
            ocean[r][c] = true;
            for (let [dr, dc] of directions) {
                let nr = r + dr;
                let nc = c + dc;

                if (
                    nr >= 0 &&
                    nr < ROWS &&
                    nc >= 0 &&
                    nc < COLS &&
                    !ocean[nr][nc] &&
                    heights[nr][nc] >= heights[r][c]
                ) {
                    dfs(nr, nc, ocean);
                }
            }
        }


        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pacific);
            dfs(ROWS - 1, c, atlantic);
        }

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pacific);
            dfs(r, COLS -1, atlantic)
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    result.push([r, c]);
                }
            }
        }
        return result;
    }
}