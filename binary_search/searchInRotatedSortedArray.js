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

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
    * @return {number}
    */
    search(nums, target) {
        let l = 0;
        let r = nums.length -1;

        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        const pivot = l;

        const result = this.binarySearch(nums, target, 0, pivot - 1);
        if (result !== -1) {
            return result
        }

        return this.binarySearch(nums, target, pivot, nums.length - 1);
    }

    binarySearch(nums, target, l, r) {
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (nums[mid] > target) {
                r =  mid - 1;
            } else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const sIdx = this.binarySearchForLowest(nums);

        if (target === nums[sIdx]) {
            return sIdx;
        }

        let pivot = sIdx;
        let l = 0;
        let r = nums.length -1;

        if (target >= nums[pivot] && target <= nums[r]) {
            l = pivot;
        } else {
            r = pivot - 1;
        }

        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (nums[m] === target) {
                return m;
            } else if (nums[m] < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return -1;
    }

    binarySearchForLowest(nums) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }
}

// One Pass
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0,
            r = nums.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (target === nums[mid]) {
                return mid;
            }

            if (nums[l] <= nums[mid]) {
                if (target > nums[mid] || target < nums[l]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                if (target < nums[mid] || target > nums[r]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
        return -1;
    }
}