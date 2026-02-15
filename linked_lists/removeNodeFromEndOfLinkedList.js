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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let size = 0;
        let cur = head;

        while (cur) {
            size++;
            cur = cur.next;
        }
        
        let i = 0;
        cur = head;
        const dummy = new ListNode(null, head);
        let prev = dummy;
        const target = (size - n)
 
        while (cur) {
            if (i === target) {
                prev.next = cur.next;
                break;
            }
            prev = cur;
            cur = cur.next;
            i++;
        }
        return dummy.next;
    }
}