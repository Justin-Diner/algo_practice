class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const combinations = [];
        const backtrack = (i, currentPath, currentSum) => {
            if (currentSum === target) {
                return combinations.push([...currentPath]);
            } else if (currentSum > target || i >= nums.length) {
                return;
            } else {
                currentPath.push(nums[i]);
                backtrack(i, currentPath, currentSum + nums[i]);
                currentPath.pop();
                backtrack(i+1, currentPath, currentSum);
            }
        } 
        backtrack(0, [], 0);
        return combinations;
    }
}
