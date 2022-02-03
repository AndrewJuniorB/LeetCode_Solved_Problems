/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let output = 0;

    let min = prices[0];
   
    for (var i = 1; i < prices.length; i ++) {
        
        min = Math.min(min, prices[i]);
         
        output = Math.max(output, prices[i]-min);
    }
       
    return output;   
};