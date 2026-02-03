checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false; 
    }

    let s1Count = new Array(26).fill(0);
    let windowCount = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        windowCount[s2.charCodeAt(i) - 97]++;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === windowCount[i]) {
            matches++;
        }
    }

    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
        if (matches === 26) {
            return true;
        }

        let index = s2.charCodeAt(r) - 97;
        windowCount[index]++;
        if (s1Count[index] === windowCount[index]) {
            matches++;
        } else if (s1Count[index] + 1 === windowCount[index]) {
            matches--;
        }

        index = s2.charCodeAt(l) - 97;
        windowCount[index]--;
        if (s1Count[index] === windowCount[index]) {
            matches++;
        } else if (s1Count[index] - 1 === windowCount[index]) {
            matches--;
        }
        l++;
    }
    return matches === 26;
}
