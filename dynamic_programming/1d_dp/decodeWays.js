numDecodings(s) {
    const memo = new Map();

    const dfs = (i) => {
        if (i === s.length) {
            return 1;
        }

        if (s[i] === "0") {
            return 0;
        }

        if (memo.has(i)) {
            return memo.get(i);
        }

        let ways = dfs(i+1);

        if (i + 1 < s.length) {
            const twoDigit = Number(s.slice(i, i+2));
            if (twoDigit >= 10 && twoDigit <= 26) {
                ways += dfs(i+2)
            }
        }
        memo.set(i, ways);
        return ways;
    }
    return dfs(0);
}