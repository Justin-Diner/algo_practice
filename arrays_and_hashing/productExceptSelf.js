// Product of Array Except Self
// O(n^2) time O(n) space
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pre = [];
        const post = [];

        for (let i = 0; i < nums.length; i++) {
            let prefix = 1;
            let postfix = 1;
            for (let j = 0; j < nums.length; j++) {
                if (j < i) {
                    prefix *= nums[j];
                }

                if (j > i) {
                    postfix *= nums[j];
                }
            }
            pre.push(prefix);
            post.push(postfix);
        }

        const answer = [];

        for (let i = 0; i < nums.length; i++) {
            answer.push(pre[i] * post[i]);
        }

        return answer;
    }
}

// O(n^2) time O(n) space, optimized for space
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const answer = new Array(nums.length);

        for (let i = 0; i < nums.length; i++) {
            let pre = 1;
            for (let j = 0; j < nums.length; j++) {
                if (j < i) {
                    pre *= nums[j]; 
                }
            }
            answer[i] = pre;
        }

        for (let i = 0; i < nums.length; i++) {
            let post = 1;
            for (let j = 0; j < nums.length; j++) {
                if (j > i) {
                    post *= nums[j]; 
                }
            }
            answer[i] *= post;
        }

        return answer;
    }
}

// O(n) time O(n) space
productExceptSelf(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }

    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    return res;
}