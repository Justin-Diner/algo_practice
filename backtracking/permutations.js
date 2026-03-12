class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const answers = [];
        const used = new Array(nums.length).fill(false);

        const backtrack = (curr) => {
            if (curr.length === nums.length) {
                answers.push([...curr])
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue;
                used[i] = true;
                curr.push(nums[i]);
                backtrack(curr);
                curr.pop();
                used[i] = false;
            }
        }
        backtrack([]);
        return answers;
    }
}