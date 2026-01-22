dailyTemperatures(temperatures) {
    // create a stack with [temp[0], 0] 
    const stack = [[temperatures[0], 0]]
    const result = new Array(temperatures.length).fill(0);
    // loop through temperatures with temp + i
    for (let i = 1; i < temperatures.length; i++) {
        const current = temperatures[i];
        while (stack.length > 0 && current > stack[stack.length-1][0]) {
            const lower = stack.pop();
            const stackIdx = lower[1];
            const diff = i - stackIdx;
            result[stackIdx] = diff;
        } 
        stack.push([temperatures[i], i]);
    }
    return result;
    // create [temp, i];
    // check if temp[i] > stack[stack.length -1][0];
    // if it is take i - stack[stack.length -1][1] and populate result[stack[stack.length -1][1]] 
    // pop off of the stack. 
    // check if anything is in the stack.length > 0, if so, repeat.
    // if temp is less than stack[stack.length -1][0] add [temp, i] to the stack 
    // once complete if stack.length > 0 fill each result[1] with 0

}