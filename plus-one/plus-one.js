/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let length = digits.length - 1;
    for (var i = length; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
  return [1,...digits]
};