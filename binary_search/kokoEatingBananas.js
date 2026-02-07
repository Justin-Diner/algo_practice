class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let largestPile = Math.max(...piles);
        let left = 1;
        let right = largestPile;
        let res = largestPile;

        while (left <= right) {
            let mid = Math.floor((right + left) / 2);
            let currentRate = 0;
            for (let i = 0; i < piles.length; i++) {
                currentRate += Math.ceil(piles[i] / mid);
            }
            if (currentRate <= h) {
                res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }
}