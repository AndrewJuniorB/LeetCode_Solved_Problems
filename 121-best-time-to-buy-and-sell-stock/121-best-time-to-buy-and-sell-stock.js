/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // declare output variable
    let output = 0;
    //declare min as first index in array
    let min = prices[0];
    // traverse through array
    for (var i = 1; i < prices.length; i ++) {
         
        // each iteration compare min with next index
        min = Math.min(min, prices[i]);
        console.log(min);
        
        // reassign output by comparing Max and subtraction amount 
        output = Math.max(output, prices[i]-min);
    }
       
    
    //return output
    return output;
    
};