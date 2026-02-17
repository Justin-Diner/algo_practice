// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const answer = [];
        let locations = new Map();

        let cur = head;
        let i = 0;
        while (cur && cur !== null) {
            const newNode = new Node(cur.val);
            answer.push(newNode);
            locations.set(cur, i);
            cur = cur.next;
            i++;
        }
        answer.push(null);

        cur = head;
        i = 0;
        while (cur && cur !== null) {
            const next = answer[i+1];
            answer[i].next = next;

            let randomNode = cur.random;
            let randomNodeCopy = null;
            if (randomNode !== null) {
                randomNodeCopy = answer[locations.get(randomNode ?? null)]
            }

            answer[i].random = randomNodeCopy;
            i++;
            cur = cur.next;
        }
        return answer[0];
    }
}