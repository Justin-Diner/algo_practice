maxProfit(prices) {
    // Must buy in past, sell in future. 
    // create i = 0 
    // create k = 1
    // create maxProfit = 0
    let i = 0;
    let k = 1;
    // Can choose to do nothing, which would result in 0. 
    let maxProfit = 0;

    // while k < profits.length
    while (k < prices.length) {
        // compare if profits[k] < profts[i] {i=k}
        if (prices[k] < prices[i]) {
            i = k;                
        } else {
            // else Math.max(maxProfit, profits[k] - profits[i]) k++
            maxProfit = Math.max(maxProfit, prices[k] - prices[i]);
        }
        k++;
    }
    // return maxProfit
    return maxProfit;
}