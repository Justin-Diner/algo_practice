class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const targetRowIdx = this.findRow(matrix, target);
        console.log(targetRowIdx);
        if (targetRowIdx === false) {
            return false;
        }

        const targetRow = matrix[targetRowIdx];

        let left = 0;
        let right = targetRow.length - 1;

        while (left <= right) {
            let mid = Math.floor((right + left) / 2);
            if (target < targetRow[mid]) {
                right = mid - 1;
            } else if (target > targetRow[mid]) {
                left = mid + 1;
            } else {
                return true;
            }
        }
        return false
    }

    findRow(matrix, target) {
        let left = 0;
        let right = matrix.length - 1;

        while (left <= right) {
            const mid = Math.floor((right + left) / 2);
            const currentRow = matrix[mid];
            if (target < currentRow[0]) {
                right = mid - 1;
            } else if (target > currentRow[currentRow.length - 1]) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return false;
    }
}