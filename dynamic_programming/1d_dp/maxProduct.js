// O(n^2 solution)

maxProduct(nums) {
    const visited = new Map();
    const dfs = (i) => {
        if (i === nums.length) {
            return -Infinity;
        }

        if (visited.has(i)) {
            return visited.get(i);
        }

        let max = -Infinity;
        let product = 1;
        for (let j = i; j < nums.length; j++) {
            product *= nums[j];
            max = Math.max(max, product);
        }

        const currentLargest = Math.max(max, dfs(i+1));
        visited.set(i, currentLargest);
        return visited.get(i);
    }

    return dfs(0);
}