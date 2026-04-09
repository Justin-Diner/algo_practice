class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinPriorityQueue();
        for (let num of nums) {
            this.minHeap.enqueue(num);
        }

        while (this.minHeap.size() > k) {
            this.minHeap.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.minHeap.size() < this.k) {
            this.minHeap.enqueue(val); // O (log n)
        } else {
            if (val > this.minHeap.front()) { // O(1)
                this.minHeap.dequeue(); // O(log n)
                this.minHeap.enqueue(val); // O(log n)
            }
        }
        return this.minHeap.front(); // O(1)
    }
}

// MinPriorityQueue of size k. 
// This contains the largest k elements. 
// The root would be the k element. 
// You can peek the largest K element in O(1)
// Adding takes O(log n) due to percolate up in a balanced tree. 

// If val > this.minHeap.peek();