/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // start from last nums in each binary number
  let result = '';
  let carry = 0;

  while(a || b || carry) {
    let add = +a.slice(-1) + +b.slice(-1) + carry;
    
    if (add > 1) {
      result = add%2 + result;
      carry = 1;
    } else {
      result = add + result;
      carry = 0;
    }
    a = a.slice(0,-1);
    b = b.slice(0,-1);
  }

  return result;  
    
};