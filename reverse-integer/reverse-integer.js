/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
//Approach 1
var limit = Math.pow(2,31);
let result = x < 0 ?
    parseInt(Math.abs(x).toString().split('').reverse().join('')) * -1
    :
    parseInt(x.toString().split('').reverse().join(''))
return Math.abs(result) < limit ? result : 0
    
//Approach 2
/*
var temp = "" + x;
 temp = temp.split("").reverse();
  if (x < 0) {
    temp.pop();
    temp = parseInt(temp.join(''));

      if (temp > limit || temp < -limit) {
       return 0;
      }
  return temp *= -1;
  } else if (Number(temp.join('')) > limit || Number(temp.join('')) < -limit) {
     return 0;
   }
  return Number(temp.join(''));
  */

};