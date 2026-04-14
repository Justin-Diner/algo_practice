class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const frequencyMap = new Map();
        for (let task of tasks) {
            frequencyMap.set(task, frequencyMap.has(task) ? frequencyMap.get(task) + 1 : 1);
        }
        
        const maxHeap = new MaxPriorityQueue();
        for (let value of frequencyMap.values()) {
            maxHeap.enqueue(value);
        }

        let time = 0;
        const queue = [];

        while (maxHeap.size() > 0 || queue.length > 0) {
            time++;
            if (maxHeap.size() > 0) {
                let current = maxHeap.dequeue();
                current--;
                if (current > 0) {
                    queue.push([current, time + n]);
                }
            }

            if (queue.length > 0 && queue[0][1] === time) {
                const item = queue.shift();
                maxHeap.enqueue(item[0])
            }

        }
        return time;
    }
}
