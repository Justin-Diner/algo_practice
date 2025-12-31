const hammingWeight = (n) => {
    let count = 0;

    for (let i = 0; i < 32; i++) {

        if ((1 << i) & n) {
            console.log(((1 << i) & n).toString(2))
            count++;
        }
    }
    return count;
}

const value = 0b1011;

console.log(hammingWeight(value));

