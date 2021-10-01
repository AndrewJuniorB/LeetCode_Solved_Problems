/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var result = 0;
  let variants = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  for (var i = 0; i < s.length; i++) {
      
    if (variants[s[i]] < variants[s[i + 1]]) {
      result -= variants[s[i]];
    } else {
      result += variants[s[i]];
    }
      
  }

  return result;
};