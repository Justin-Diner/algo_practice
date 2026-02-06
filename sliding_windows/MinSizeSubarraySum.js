class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let smallest = Infinity;
        let curSum = 0;
        
        let L = 0;
        for (let R = 0; R < nums.length; R++) {
            curSum += nums[R];

            while (curSum >= target) {
                if ((R - L) + 1 < smallest) {
                    smallest = (R - L ) + 1;
                }
                curSum -= nums[L];
                L++;
            }
        }
        return smallest === Infinity ? 0 : smallest;
    }
}