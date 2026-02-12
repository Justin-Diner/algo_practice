class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    middleNode(head) {
        let fast = head;
        let slow = head;

        while (fast && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next
        }
        return slow;
    }
}