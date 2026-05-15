canPartition(nums) {
    const total = nums.reduce((a, b) => a + b);
    if ((total % 2) !== 0) {
        return false;
    }

    const target = total / 2;
    const dfs = (i, target) => {
        if (target === 0) {
            return true;
        }

        if (target < 0 || i >= nums.length) {
            return false;
        }

        return dfs(i+1, target - nums[i]) || dfs(i+1, target);
    }
    return dfs(0, target);
}