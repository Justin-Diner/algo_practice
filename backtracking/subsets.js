class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const answer = [];

        const backtrack = (i, currentPath) => {
            if (i === nums.length) {
                return answer.push([...currentPath]);
            }

            currentPath.push(nums[i]);
            backtrack(i+1, currentPath);
            currentPath.pop();

            backtrack(i+1, currentPath);
        }
        backtrack(0, [])
        return answer;
    }
}
