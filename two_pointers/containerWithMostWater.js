// O(n) solution, O(1) space. Only two pointers and one variable. 
maxArea(heights) {
    // l = 0
    let l = 0;
    // r = heights.length - 1;
    let r = heights.length - 1;
    // max = 0;
    let max = 0;

    // while l < r
    while (l < r) {
    // compute container size = (r - l) * Math.min(heights[l], heights[r])
        const containerSize = (r - l) * Math.min(heights[l], heights[r]);
        // if containerSize > max - max = containerSize
        if (containerSize > max) {
            max = containerSize;
        }
        // if (heights[l] > heights[r]) r--
        if (heights[l] > heights[r]) {
            r--
        } else {
            l++
        }
    // else l++
    }
    // return max 
    return max;
}