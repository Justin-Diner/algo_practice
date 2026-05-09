class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const dp = Array.from({length: s.length}, () => new Array(s.length).fill(false));
        let count = 0;
        for (let i = s.length -1; i >= 0; i--) {
            for (let j = s.length - 1; j >= i; j--) {
                const currentS = s.slice(i, j+1);
                if (s[i] === s[j] && (currentS.length <= 3 || dp[i+1][j-1] === true )) {
                    dp[i][j] = true;
                    count++;
                }
            }
        }

        return count;
    }
}