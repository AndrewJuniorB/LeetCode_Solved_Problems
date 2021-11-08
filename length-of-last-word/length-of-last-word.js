/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s.length >= 1 && s.length <= Math.pow(10,4)) {
    let str = s.split(' ');
    let output = [];

    str.forEach(element => {
      if (element !== '') {
        output.push(element)
      }
     });
  
  output = output.reverse();

  return output[0].length;
 }
return 0;
};