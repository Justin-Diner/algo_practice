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
     * @param {TreeNode} root
     * @return {number}
     */

    maxDepth(root) {
        if (root === null) {
            return 0;
        }

        return (1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right)));
    }
}+


class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    maxDepth(root) {
        if (root === null) {
            return 0;
        }

        const stack = [[root, 1]];
        let max = 1;

        while (stack.length > 0) {
            const current = stack.pop();
            const node = current[0];
            const depth = current[1]

            if (node !== null) {
                max = Math.max(max, depth);
                stack.push([node.right, depth + 1]);
                stack.push([node.left, depth + 1]);
            }
        }
        return max;
    }
}

// BFS Solution O(n) time complexity, O(n) space complexity.
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
     * @param {TreeNode} root
     * @return {number}
     */

    maxDepth(root) {
        if (root === null) {
            return 0;
        }

        let level = 0;

        const queue = [root];

        while (queue.length > 0) {
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const current = queue.shift();
                if (current.left !== null) {
                    queue.push(current.left);
                }

                if (current.right !== null) {
                    queue.push(current.right)
                };
            }
            level++;    
        }
        return level;
    }
}