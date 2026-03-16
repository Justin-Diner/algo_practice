class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const part = [];

        const isPalindrome = (word) => {
            let l = 0;
            let r = word.length - 1;
            while (l <= r) {
                if (word[l] !== word[r]) {
                    return false;
                }

                l++;
                r--;
            }
            return true;
        }

        const backtrack = (i, j) => {
            if (j >= s.length) {
                if (i === j) {
                    res.push([...part]);
                }
                return;
            } 

            const partition = s.substring(i, j+1);
            if (isPalindrome(partition)) {
                part.push(partition);
                backtrack(j+1, j+1);
                part.pop();
            }
            backtrack(i, j+1);
        }
        backtrack(0, 0)
        return res;
    }
}