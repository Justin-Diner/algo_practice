class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits === "") {
            return [];
        }
        const digitMap = new Map();
        digitMap.set('2', ['a', 'b', 'c']);
        digitMap.set('3', ['d', 'e', 'f']);
        digitMap.set('4', ['g', 'h', 'i']);
        digitMap.set('5', ['j', 'k', 'l']);
        digitMap.set('6', ['m', 'n', 'o']);
        digitMap.set('7', ['p', 'q', 'r', 's']);
        digitMap.set('8', ['t', 'u', 'v']);
        digitMap.set('9', ['w', 'x', 'y', 'z']);
        
        let answer = [];
        let current = [];

        const backtrack = (i) => {
            if (i === digits.length) {
                answer.push(current.join(""))
                return;
            }
            const currentNum = digits[i];

            const letters = digitMap.get(currentNum);
            for (let letter of letters) {
                current.push(letter);
                backtrack(i+1);
                current.pop();
            }
        }
        backtrack(0);
        return answer;
    }
}
// i = 0
// letters = ['d', 'e' 'f']
// "34" length = 2