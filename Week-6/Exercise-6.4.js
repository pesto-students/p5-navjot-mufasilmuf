const maxProfit = (prices) => {
    let l = prices.length;
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < l; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
}

console.log(maxProfit([7, 6, 4, 3, 1]))


//time complexity - 0(n)
//space complexity - 0(1)