class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let output = [];

        for (let i = 0; i <= nums.length - k; i++) {
            let maxi = nums[i];
            for (let j = i; j < i + k; j++) {
                maxi = Math.max(maxi, nums[j]);
            }
            output.push(maxi);
        }

        return output;
    }
}

// My solution O(n * k)

class Solution {
    maxSlidingWindow(nums, k) {
      const answer = [];
      if (k <= 0 || nums.length === 0) return answer;
  
      let queue = nums.slice(0, k);
      let max = this.determineMax(queue);
      answer.push(max); // first window
  
      for (let R = k; R < nums.length; R++) {
        queue.shift();          // remove leftmost of current queue (represents window)
        queue.push(nums[R]);    // add new rightmost
        max = this.determineMax(queue);
        answer.push(max);
      }
      return answer;
    }
  
    determineMax(arr) {
      let max = -Infinity;
      for (let i = 0; i < arr.length; i++) max = Math.max(max, arr[i]);
      return max;
    }
  }