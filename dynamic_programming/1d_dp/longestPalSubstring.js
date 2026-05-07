class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resLen = 0;
        let resIdx = 0;
        const n = s.length;

        const dp = Array.from({length: n}, () => new Array(n).fill(false));

        for (let i = n - 1; i >= 0; i--) {
            for (let j = i; j < n; j++) {
                if (s[i] === s[j] && ((j - i) <= 2 || dp[i+1][j-1] === true)) {
                    dp[i][j] = true;
                    if ((j - i +1) > resLen) {
                        resLen = (j-i+1);
                        resIdx = i;
                    }
                }
            }
        }
        return s.slice(resIdx, resIdx + resLen);
    }
}