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