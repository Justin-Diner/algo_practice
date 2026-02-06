class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return '';

        let countT = {};
        let window = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0,
            need = Object.keys(countT).length;
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            let c = s[r];
            window[c] = (window[c] || 0) + 1;

            if (countT[c] && window[c] === countT[c]) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                window[s[l]]--;
                if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
                    have--;
                }
                l++;
            }
        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}

// My Solution
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
        minWindow(s, t) {
            if (t === '' || t.length > s.length) {
                return '';
            }

            let matches = 0;
            let tCount = new Map();
            let window = new Map();
            let smallestLength = Infinity;
            let res = [-1, -1]

            for (let c of t) {
                tCount.set(c, (tCount.get(c) || 0) + 1);
            }

            let L = 0;
            for (let R = 0; R < s.length; R++) {
                window.set(s[R], (window.get(s[R]) || 0) + 1);

                if (window.get(s[R]) === tCount.get(s[R])) {
                    matches++;
                }

                while (matches === tCount.size) {
                    if ((R - L) + 1 < smallestLength) {
                        smallestLength = (R - L)+1
                        res = [L, R];
                    }
                    
                    window.set(s[L], (window.get(s[L]) - 1));
                    if (tCount.has(s[L]) && window.get(s[L]) < tCount.get(s[L])) {
                        matches--;
                    }
                    L++;
                }
            }
        return smallestLength === Infinity ? "" : s.slice(res[0], res[1] + 1)
    }
}