// Sorting approach
// O(n log n) time O(n) space

const topKFrequentSorting = (nums, k) => {
    const frequents = new Map();
    for (let i = 0; i < nums.length; i++) {
        frequents.set(nums[i], (frequents.get(nums[i]) ?? 0) + 1);
    }

    const items = [];
    for (const [num, count] of frequents.entries()) {
        items.push([num, count]);
    }

    items.sort((a, b) => {
        return b[1] - a[1]
    });

    return items.slice(0, k).map((item) => item[0]);
}

// Heap approach
// O(n log k) time O(n + k) space
const topKFrequentHeap = (nums, k) => {
    const count = {};
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    const heap = new MinPriorityQueue((x) => x[1]);
    for (const [num, cnt] of Object.entries(count)) {
        heap.enqueue([num, cnt]);
        if (heap.size() > k) heap.dequeue();
    }

    const res = [];
    for (let i = 0; i < k; i++) {
        const [num, cnt] = heap.dequeue();
        res.push(num);
    }
    return res;
}