
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const window = new Set();
        let L = 0;

        for (let R = 0; R < nums.length; R++) {
            if (Math.abs(L - R) > k) {
                window.delete(nums[L]);
                L++;
            }

            if (window.has(nums[R])) {
                return true;
            }
            window.add(nums[R]);
        }
        return false;
    }
}