isValid(s) {
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    const stack = [];

    for (let bracket of s) {
        if (bracket === '(' || bracket === '{' || bracket === '[') {
            stack.push(bracket);
        }
        if (bracket === ')' || bracket === '}' || bracket === ']') {
            const top = stack.pop();
            if (top !== bracketMap[bracket]) {
                return false;
            }
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
}