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

// Optimal Time and Optimal Space O(n) time, O(1) space
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
        let fast = head.next;
        let slow = head;

        // find middle point
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // slow is end of first list
        // reverse second list.

        let secondHead = slow.next;
        slow.next = null;
        let prev = null;

        while (secondHead !== null) {
            let next = secondHead.next;
            secondHead.next = prev;
            prev = secondHead;
            secondHead = next;
        }

        let firstList = head;
        let secondList = prev;
        while(secondList !== null) {
            let firstNext = firstList.next;
            let secondNext = secondList.next;
            firstList.next = secondList;
            secondList.next = firstNext;
            firstList = firstNext;
            secondList = secondNext;
        }
        return head;
    }
}
