class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let minimum = nums[0];

        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let mid = Math.floor((r + l) / 2);
            if (nums[mid] >= minimum) {
                l = mid + 1;
            } else if (nums[mid] < minimum) {
                minimum = nums[mid];
                if (nums[mid -1 ] > nums[mid] && nums[mid+1] > nums[mid]) {
                    return minimum;
                } else {
                    r = mid -1
                }
            }
        }
        return minimum;
    }
}

// ========================================
// CLEARER VERSION - Standard Binary Search Approach
// ========================================
class SolutionClear {
    /**
     * Find minimum in rotated sorted array using binary search
     * Time: O(log n), Space: O(1)
     * 
     * Key Insight: In a rotated sorted array, one half is always sorted.
     * The minimum is in the unsorted half, or we're already looking at it.
     * 
     * Example: [4,5,6,7,0,1,2]
     *           ^       ^ minimum (pivot point)
     * 
     * @param {number[]} nums - rotated sorted array with unique elements
     * @return {number} - minimum element in the array
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        
        // If array is not rotated or has only one element
        if (nums[left] <= nums[right]) {
            return nums[left];
        }
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            
            // Compare mid with the rightmost element to determine which half is sorted
            if (nums[mid] > nums[right]) {
                // Left half [left...mid] is sorted
                // Minimum must be in right half [mid+1...right]
                // Example: [4,5,6,7,0,1,2], mid=7, right=2
                //          7 > 2, so minimum is to the right
                left = mid + 1;
            } else {
                // Right half [mid...right] is sorted
                // Minimum is either at mid or in left half [left...mid-1]
                // Example: [6,7,0,1,2,4,5], mid=1, right=5
                //          1 < 5, so minimum is at mid or to the left
                right = mid;
            }
        }
        
        // When left == right, we've found the minimum
        return nums[left];
    }
}

// ========================================
// TEST CASES
// ========================================
const solution = new SolutionClear();

console.log("Test 1: [3,4,5,1,2] =>", solution.findMin([3,4,5,1,2])); // Expected: 1
console.log("Test 2: [4,5,6,7,0,1,2] =>", solution.findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log("Test 3: [11,13,15,17] =>", solution.findMin([11,13,15,17])); // Expected: 11 (not rotated)
console.log("Test 4: [2,1] =>", solution.findMin([2,1])); // Expected: 1
console.log("Test 5: [1] =>", solution.findMin([1])); // Expected: 1