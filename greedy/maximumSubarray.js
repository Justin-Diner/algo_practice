// Top Down Dynamic Programming O(n) Time and O(n) space
maxSubArray(nums) {
    let largest = -Infinity;

    const dfs = (i) => {
        if (i === nums.length - 1) {
            largest = Math.max(largest, nums[i]);
            return nums[i];
        }

        const current = Math.max(
            nums[i],
            nums[i] + dfs(i + 1)
        );
        largest = Math.max(largest, current);

        return current;
    } 

    dfs(0);
    return largest;
}

// Kadane's Algorithm O(n) Time and O(1) space
maxSubArray(nums) {
    let largest = -Infinity;
    let curSum = 0;

    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i];
        largest = Math.max(curSum, largest);
        if (curSum < 0) {
            curSum = 0;
            continue;
        }
    }
    return largest;
}