class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxQueue = new MaxPriorityQueue();
        for (let stone of stones) {
            maxQueue.enqueue(stone);
        }

        while (maxQueue.size() > 1) {
            const stoneY = maxQueue.dequeue();
            const stoneX = maxQueue.dequeue();

            if (stoneX !== stoneY) {
                const newStone = stoneY - stoneX;
                maxQueue.enqueue(newStone);
            }
        }

        return maxQueue.size() === 1 ? maxQueue.front() : 0;
    }
}