class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        if (tokens.length <= 1) {
            return tokens[0];
        }
        const operands = ['+', '-', '*', '/'];
        // create stack - default [0], [1]
        const stack = [tokens[0], tokens[1]];
        // loop through tokens starting at i = 2
        for (let i = 2; i < tokens.length; i++) {
            const current = tokens[i];
            if (operands.includes(current)) {
                const a = parseInt(stack.pop());
                const b = parseInt(stack.pop());
                // if statement for +
                if (current === '+') {
                    const sum = a+b;
                    stack.push(sum);
                } else if (current === '-') {
                    const num = b - a;
                    stack.push(num);
                } else if (current === '*') {
                    const num = a * b;
                    stack.push(num);
                } else {
                    const num = Math.trunc(b / a);
                    stack.push(num);
                }
            } else {
                stack.push(current);
            }
        }
        return stack.pop();
    }
}

