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

// Sort the array so duplicates are adjacent.
// This lets us skip duplicate branches cleanly.

// Create the answers array to store all unique subsets.

// Define backtrack(i, currentPath):
// i is the current index we are making a decision about.
// currentPath is the subset built so far.

// Base case:
// If i reaches the end of the array, we have made all decisions,
// so copy currentPath into answers.

// Choice 1:
// Include sortedNums[i], recurse to the next index,
// then undo the choice with pop().

// Choice 2:
// Exclude sortedNums[i].
// Before exploring this branch, advance i past all duplicates
// of the current value so we do not generate duplicate subsets.
// Then recurse from the next distinct index.

// Return answers at the end.

// Time: O(n * 2^n)
// Auxiliary space: O(n)
// Space including output: O(n * 2^n)