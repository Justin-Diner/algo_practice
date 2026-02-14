// My solution, O(n) time complexity, O(n) space complexity.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;
        const stack = [];

        let slow = head;
        let fast = head;

        while (fast && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let mid = slow.next;
        slow.next = null;
        while (mid !== null) {
            stack.push(mid);
            mid = mid.next;
        }


        let cur = head;
        while (cur && cur.next !== null && stack.length > 0) {
            const nextNode = stack.pop();
            const temp = cur.next;
            cur.next = nextNode;
            nextNode.next = temp;
            cur = temp;
        }

        return head;
    }
}