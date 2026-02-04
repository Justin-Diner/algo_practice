class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let sum = 0;
        let res = 0;

        for (let i = 0; i < k; i++) {
            sum += arr[i]
        };

        if ((sum / k) >= threshold) {
            res += 1;
        }

        let L = 0;
        for (let R = k; R < arr.length; R++) {
            sum += arr[R];
            sum -= arr[L];
            L++;
            if ((sum / k) >= threshold) {
                res++
            }
        }
        return res;
    }
}