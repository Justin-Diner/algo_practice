longestCommonSubsequenceBottomUp = (text1, text2) => {
    const dpArr = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));

    for (let i = text1.length -1; i >= 0; i--) {
        for (let j = text2.length -1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                dpArr[i][j] = 1 + dpArr[i + 1][j + 1];
            } else {
                dpArr[i][j] = Math.max(dpArr[i][j + 1], dpArr[i+1][j]);
            }
        }
    }
    return dpArr[0][0]
}


const longestCommonSubsequenceDFS = (text1, text2) => {
    const memo = new Map();

    const dfs = (i, j) => {
        if (i === text1.length || j === text2.length) {
            return 0;
        }

        if (memo.has(`${i}-${j}`)) {
            return memo.get(`${i}-${j}`);
        }

        if (text1[i] === text2[j]) {
            const spotVal = 1 + dfs(i+1, j+1);
            memo.set(`${i}-${j}`, spotVal);
        } else {
            const spotVal = Math.max(dfs(i+1, j), dfs(i, j+1));
            memo.set(`${i}-${j}`, spotVal);
        }

        return memo.get(`${i}-${j}`)
    }
    
    return dfs(0, 0)
}

const longestCommonSubsequenceBottomUpSpaceOptimized = (text1, text2) => {
    if (text1.length < text2.length) {
        [text1, text2] = [text2, text1];
    }

    const dp = new Array(text2.length + 1).fill(0);

    for (let i = text1.length - 1; i >= 0; i--) {
        let prev = 0;
        for (let j = text2.length - 1; j >= 0; j--) {
            let temp = dp[j];
            if (text1[i] === text2[j]) {
                dp[j] = 1 + prev;
            } else {
                dp[j] = Math.max(dp[j], dp[j + 1]);
            }
            prev = temp;
        }
    }

    return dp[0];
}