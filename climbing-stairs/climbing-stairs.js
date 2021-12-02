/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
// 1
    /*
    let i = 1;
    let result = 0;
    let carryPrev = 0;
    let carryNew = 1;
    
    while(i <= n) {
        result = carryPrev + carryNew;
        carryPrev = carryNew;
        carryNew = result;
        i += 1;
    }
    return result
    */
// 2
    let testArr = [0, 1, 2, 3]
    
    if (n < 4) {
        return testArr[n]
    }
    for (let i = 4; i <= n; i++) {
        testArr[i] = testArr[i-1] + testArr[i-2];
    }
    return testArr[n]
};