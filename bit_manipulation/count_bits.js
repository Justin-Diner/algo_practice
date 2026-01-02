const countBits = (n) => {
    const answer = [];

    for (let i = 0; i <= n; i++) {
        let count = 0;
        for (let j = 0; j < 32; j++) {
            if ((i & (1 << j)) != 0) {
                count++;
            }
        }
        answer.push(count);
    }

    return answer;
}