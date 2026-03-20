lengthOfLongestSubstring(s) {
    // create longest
    let longest = 0;
    // create l = 0
    let l = 0;
    // create seen map
    const seen = new Map();

    // for loop with r as long its less than s.length
    for (let r = 0; r < s.length; r++) {
        // if map does not have s[r] add s[r] i 
        if (!seen.has(s[r])) {
            seen.set(s[r], r);
        } else {
            // if it does
            // increament l to map[r] + 1
            l = Math.max(l, seen.get(s[r]) + 1);
            // update map[r] = to r
            seen.set(s[r], r);
        }
        // update longest if window is larger than longest. 
        longest = Math.max(longest, (r - l) + 1);
    }
    // return longest
    return longest;
}

// My solution
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let window = new Set();
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            if (window.has(c)) {
                while (s[l] !== c) {
                    window.delete(s[l]);
                    l++;
                }
                window.delete(s[l]);
                l++;
            } 
            window.add(c);
            longest = Math.max(longest, window.size);
        }
        return longest;
    }
}``