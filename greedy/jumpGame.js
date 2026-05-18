// Dynamic Programming Solution O(n^2) Time and O(n) Space
canJump(nums) {
    const memo = new Map();
    const dfs = (i) => {
        if (memo.has(i)) {
            return memo.get(i);
        }
        if (i === nums.length - 1) {
            return true;
        }

        if (nums[i] === 0) {
            return false;
        }

        const n = nums[i];
        for (let j = 1; j <= n; j++) {
            const result = dfs(i+j);
            memo.set(i, result);
            if (result) {
                return true;
            }
        }
        memo.set(i, false);
        return memo.get(i);
    }
    return dfs(0);
}

// Greedy Solution O(n) Time and O(1) Space
canJump(nums) {
    let goal = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }
    return goal === 0;
}