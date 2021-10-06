/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

  var obj = {
    "[": "]",
    "{": "}",
    "(": ")"
  }
  let output = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
      output.push(s[i]);
    } else {
      last = output.pop();
      if (s[i] !== obj[last]) {
        return false;
      }
    }
  }
  if (output.length > 0) {
      return false;
  }
return true;
};