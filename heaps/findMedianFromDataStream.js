class MedianFinder {
    constructor() {
        this.count = 0;
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.count++;
        if (this.maxHeap.isEmpty() || num <= this.maxHeap.front()) {
            this.maxHeap.enqueue(num);
        } else {
            this.minHeap.enqueue(num);
        }

        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.count % 2 === 1) {
            return this.maxHeap.front();
        } else {
            const a = this.maxHeap.front();
            const b = this.minHeap.front();
            return (a + b) / 2;
        }
    }
}