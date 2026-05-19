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

// Dynamic Programming - O(n^2) time and O(n) Space
jump(nums) {
    const map = new Map();
    const dfs = (i) => {
        if (i === nums.length - 1) {
            return 0;
        }

        if (i >= nums.length ) {
            return Infinity;
        }

        if (map.has(i)) {
            return map.get(i);
        }

        let min = Infinity;
        for (let j = 1; j <= nums[i]; j++) {
            min = Math.min(min, 1 + dfs(i + j));
        }

        map.set(i, min);
        return map.get(i);
    }

    return dfs(0);
}