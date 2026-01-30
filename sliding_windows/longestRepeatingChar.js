characterReplacement(s, k) {
    // establish longest
    let longest = 0
    // establish new charSet
    let charSet = new Set(s); O(n)

    // loop through charset O(m)
    for (let char of charSet) {
        // establish l = 0
        let l = 0;
        // establish count = 0
        let count = 0;
        // loop through r = 0
        for (let r = 0; r < s.length; r++) { // O(n)
            // determine whether to increase count or not
            if (s[r] === char) {
                count++;
            }
            // check if valid or invalid. 
            while (r - l + 1 - count > k) { // O(n)
                // if invalid 
                // check if l is char. If it is decrease count
                if (s[l] === char) {
                    count--;
                }
                // l++
                l++;
            }
            longest = Math.max(longest, r - l + 1)
        }
    }
    return longest;
}

// O(n*m) time, O(m) space