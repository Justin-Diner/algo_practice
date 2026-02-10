// My Solution, O(log n) time complexity, O(1) space complexity.
// Not the simplest solution, but it works. 
// Will review for best solution.
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const lowestIdx = this.findLowestIdx(nums);

        let L = 0;
        let R = nums.length - 1;

        if (target < nums[0]) {
            L = lowestIdx;
        } else if (target > nums[0]) {
            R = nums.length - 1; // Search the whole range or specific side
            if (lowestIdx > 0) R = lowestIdx - 1;
        } else {
            return 0;
        }

        while (L <= R) {
            let mid = Math.floor((R + L) / 2);

            if (nums[mid] > target) {
                R = mid - 1;
            } else if (nums[mid] < target) {
                L = mid + 1; // Fixed: was R = mid + 1
            } else {
                return mid;
            }
        }
        return -1;
    }

    findLowestIdx(nums) {
        let L = 0;
        let R = nums.length - 1;
        
        // If not rotated
        if (nums[L] <= nums[R]) return 0;

        while (L <= R) {
            let mid = Math.floor((R + L) / 2);
            if (nums[mid] > nums[mid + 1]) return mid + 1;
            if (nums[mid] < nums[mid - 1]) return mid;

            if (nums[mid] > nums[0]) {
                L = mid + 1;
            } else {
                R = mid - 1;
            }
        }
        return 0;
    }
}