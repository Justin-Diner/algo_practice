// O(n^2) time complexity O(1) or O(n) space complexity depending on sorting algorithm. 
// You iterate through the array once.
// You use two pointers to find the three numbers that sum to zero.
// You skip duplicate numbers.
// You return the three numbers that sum to zero.
threeSum(nums) {
    nums.sort((a, b) => {
        return a -b
    })

    const res = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const total = nums[i] + nums[l] + nums[r];
            if (total > 0) {
                r--;
            } else if (total < 0) {
                l++;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while (l < r && nums[l] === nums[l-1]) {
                    l++;
                }
            }
        }
    }
    return res;
}