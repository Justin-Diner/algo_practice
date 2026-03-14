class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const answers = [];
        
        const backtrack = (currentPath, open, close) => {
            if (currentPath.length === n*2) {
                const solution = currentPath.join("")
                answers.push([solution]);
            }

            if (open < n) {
                currentPath.push('(')
                backtrack(currentPath, open + 1, close);
                currentPath.pop();
            }

            if (close < open) {
                currentPath.push(')')
                backtrack(currentPath, open, close+1)
                currentPath.pop();
            }
        }
        backtrack([], 0, 0)
        return answers;
    }
}