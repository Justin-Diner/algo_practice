const uniquePaths = (m, n) => {
    let row = new Array(n).fill(1);

    for (let i = 0; i < m - 1; i++) {
        let currentRow = new Array(n).fill(1);

        for (let j = n - 2; j >= 0; j--) {
            currentRow[j] = currentRow[j + 1] + row[j];
        }
        row = currentRow;
    }
    return row[0];
}