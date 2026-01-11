    // Two Pointers technique. 
    // O(n) time, O(1) space.
    // establish l and r pointers. 
    // Compute sum of numbers[l] + numbers[r]
    // if target is less than sum DECREMENT r
    // if target is less than sum INCREMENT l. 
    // Guaranteed to have the solution
    // Return [l +1 , r+1]

    // Note: Import Array is sorted
    // The invariant is that all valid pairs must stay within the current left and right pointers; moving a pointer safely eliminates impossible values because the array is sorted.
    // O(1) space constriction
    // Cannot use same element twice.

twoSumII(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        const sum = numbers[l] + numbers[r];
        if (target > sum) {
            l++;
        } else if (target < sum) {
            r--;
        } else {
            return [l+1, r+1]
        }
    }
}