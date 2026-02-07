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