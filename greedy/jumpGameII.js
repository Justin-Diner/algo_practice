// Greedy - O(n) time and O(1) Space
jump(nums) {
    let left = 0;
    let right = 0;
    let minJumps = 0;

    while (right < nums.length - 1) {
        let furthestReacahble = 0;
        for (let i = left; i <= right; i++) {
            furthestReacahble = Math.max(furthestReacahble, i + nums[i]);
        }
        left = right + 1;
        right = furthestReacahble;
        minJumps++;
    }
    return minJumps;
}