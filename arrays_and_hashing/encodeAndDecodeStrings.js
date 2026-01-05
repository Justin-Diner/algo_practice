class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs)  {
        let encoded = '';

        for (let word of strs) {
            encoded += `${word.length}#${word}`;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const answer = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const length = parseInt(str.substring(i, j));
            i = j+1;
            j = i + length;
            answer.push(str.substring(i, j));
            i = j;
        }
        return answer;
    }
}