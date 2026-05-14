lengthOfLIS(nums) {
    const memo = new Map();
    const dfs = (i) => {
        if (i === nums.length - 1) {
            return 1;
        }

        if (memo.has(i)) {
            return memo.get(i);
        }

        let longest = 1;
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                longest = Math.max(1 + dfs(j), longest);
            }
        }
        memo.set(i, longest);
        return memo.get(i);
    }

    let answer = 0;

    for (let i = 0; i < nums.length; i++) {
        answer = Math.max(answer, dfs(i));
    }

    return answer;
}