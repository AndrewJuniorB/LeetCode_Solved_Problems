/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let result;
    if (x >= 0 || x < Math.pow(2,31)) {
      result = Math.sqrt(x)
    }
  return Math.floor(result);
};