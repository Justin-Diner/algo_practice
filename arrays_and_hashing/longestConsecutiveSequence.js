// O(n) time complexity O(n) space complexity for the map. 
// You iterate through the array once. 
// You're using a map to store the length of the sequence for each number. 
// You only really care about the sequence numbers behind and in front of you. 
// Once you iterate all the way through, you will know what was the longest sequence. 
longestConsecutive(nums) {
    const mp = new Map();
    let res = 0;

    for (let num of nums) {
        if (!mp.has(num)) {
            mp.set(
                num,
                (mp.get(num - 1) || 0) + (mp.get(num + 1) || 0) + 1,
            );
            mp.set(num - (mp.get(num - 1) || 0), mp.get(num));
            mp.set(num + (mp.get(num + 1) || 0), mp.get(num));
            res = Math.max(res, mp.get(num));
        }
    }
    return res;
}

// Set
// O*n) time complexity O(n) space complexity for the set. 
// A couple things to remember. Create the set immediately from nums. 
// You iterate through the set once. 
// You're really only looking for numbers that don't have a left neightbor because they start the sequence.
// You find the length of the sequence from there with your loop. 
// Return the longest. 
// If you're part of the sequence, we don't care about evaluating you because we're only looking for numbers that don't have a left neightbor because they start the sequence.
longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
        if (!numSet.has(num -1)) {
            let length = 1;
            while (numSet.has(num + length)) {
                length++;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest;
}