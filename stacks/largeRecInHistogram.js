class Solution {
    largestRectangleArea(heights) {
        // define maxArea
        let maxArea = 0;
        // define Stack
        const stack = [];

        // for loop through heights
        for (let i = 0; i < heights.length; i++) {
            // define start index
            let start = i;
            // while loop to check if current  height is < last height on stack
            while (stack.length > 0 && heights[i] < stack[stack.length -1][1]) {
                // abstract [index, height] by popping to evaluate last highest col
                const [index, height] = stack.pop();
                // get the maxArea Math.max(maxArea, height * (i - index))
                maxArea = Math.max(maxArea, height * (i - index));
                // make start the previous highest point start = index
                start = index;
            }
            // push last item onto stack with new start.
            stack.push([start, heights[i]]);
        }
        // loop through remaining stack items. 
        for (const [index, height] of stack) {
            // Check if any reminaing areas are max
            maxArea = Math.max(maxArea, height * (heights.length - index));
        }

        // return maxArea
        return maxArea;
    }
}

const solution = new Solution();
console.log(solution.largestRectangleArea([2,1,5,6,2,3]));