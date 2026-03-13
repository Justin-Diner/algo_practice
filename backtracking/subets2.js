class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const sortedNums = nums.sort((a, b) => a-b)
        const answers = [];
        
        const backtrack = (i, currentPath) => {
            if (i >= sortedNums.length) {
                return answers.push([...currentPath]);
            }
            currentPath.push(sortedNums[i]);
            backtrack(i+1, currentPath);
            while (i + 1 < sortedNums.length && sortedNums[i] === sortedNums[i + 1]) {
                i++;
            }
            currentPath.pop();
            backtrack(i+1, currentPath);
        }  
        backtrack(0, [])
        return answers;
    }
}