class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const col = new Set();
        const posDiag = new Set();
        const negDiag = new Set();

        const answers = [];
        const currentBoard = new Array(n).fill(null).map(() => new Array(n).fill('.'));

        const backtrack = (r) => {
            if (r === n) {
                answers.push(currentBoard.map((row) => row.join('')));
                return;
            }

            for (let c = 0; c < n; c++) {
                if (col.has(c) || posDiag.has(r+c) || negDiag.has(r-c)) {
                    continue;
                }
                col.add(c);
                posDiag.add(r+c);
                negDiag.add(r-c);
                currentBoard[r][c] = 'Q';

                backtrack(r+1);

                col.delete(c);
                posDiag.delete(r+c);
                negDiag.delete(r-c);
                currentBoard[r][c] = '.';
            }
        }
        backtrack(0);
        return answers;
    }
}