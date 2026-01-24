carFleet(target, position, speed) {
    const cars = position.map((p, i) => [p, speed[i]]);
    
    // Sort by position descending (closest to target first)
    cars.sort((a, b) => b[0] - a[0]);

    const stack = [];

    for (const [pos, spd] of cars) {
        const time = (target - pos) / spd;

        // If current car takes longer, it forms a new fleet
        if (
            stack.length === 0 ||
            time > stack[stack.length - 1]
        ) {
            stack.push(time);
        }
        // else: it merges into the fleet ahead
    }

    return stack.length;
}

// My solution
// O(n log n) time, O(n) space
class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, i) => {
            return [p, speed[i]];
        }).sort((a, b) => b[0] - a[0]);

        const stack = [];
        for (let car of cars) {
            const [pos, s] = car;
            const timeToTarget = (target - pos) / s;
            if (stack.length > 0 && (timeToTarget <= stack[stack.length -1])) {
                continue;
            }
            stack.push(timeToTarget);
        }
        return stack.length;
    }
 }

 // timeToTarget = (target - position) / speed
 // combine the arrays with position and speed into [position[i], speed[i]]
 // sort the array in descending order. This is because the last position will be furthest along
 // but will also lead the pack. If it is the slowest, everyone else is stuck behind it. 
 // loop through the array with the positions first
 // calculate timeToTarget for that and push onto stack. 
 // on next item, if time to target <= than stack[stack.length -1], its stuck. It will join that fleet.
 // if its more, add it to stack. 
 // return stack.length 

