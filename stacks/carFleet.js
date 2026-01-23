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