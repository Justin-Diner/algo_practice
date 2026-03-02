/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (p === null && q !== null) return false;
        if (q === null && p !== null) return false;
        
        const pQueue = [p];
        const qQueue = [q];

        while (pQueue.length > 0 && qQueue.length > 0) {
            const pCurrent = pQueue.shift();
            const qCurrent = qQueue.shift();
            if (pCurrent === null && qCurrent === null) continue;

            if (
                pCurrent === null ||
                qCurrent === null || 
                pCurrent.val !== qCurrent.val
            ) {
                return false;
            }

            pQueue.push(pCurrent.left);
            pQueue.push(pCurrent.right);
            qQueue.push(qCurrent.left);
            qQueue.push(qCurrent.right);
        }
        if (pQueue.length > 0 || qQueue.length > 0) {
            return false;
        }
        return true;
    }
}


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) {
            return true;
        }

        if (p && q && p.val === q.val) {
            return (
                this.isSameTree(p.left, q.left) &&
                this.isSameTree(p.right, q.right)
            )
        } else {
            return false;
        }
    }
}