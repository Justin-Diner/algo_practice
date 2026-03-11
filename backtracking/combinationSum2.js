class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const answers = [];
        const sortedCandidates = candidates.sort((a,b) => a - b);
        const backtrack = (i, currentPath, currentSum) => {
            if (currentSum === target) {
                answers.push([...currentPath]);
                return;
            } else if (i >= candidates.length || currentSum > target) {
                return;
            } else {
                currentPath.push(sortedCandidates[i]);
                backtrack(i+1, currentPath, currentSum + sortedCandidates[i]);
                currentPath.pop();
                while (i+1 < sortedCandidates.length && sortedCandidates[i] === sortedCandidates[i+1]) {
                    i++;
                }
                backtrack(i+1, currentPath, currentSum);
            }
        }
        backtrack(0, [], 0);
        return answers;
    }
}
