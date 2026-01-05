class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs)  {
        let code = '';

        for (let word of strs) {
            let encodedWord = '';
            if (!word) {
                encodedWord = `0#`
            } else {
                const length = String(word.length);
                encodedWord = `${length}#${word}`
            }
            code += encodedWord;
        }
        return code;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }

            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;

            decoded.push(str.substring(i, j))
            i = j;
        }
        return decoded;
    }
}
