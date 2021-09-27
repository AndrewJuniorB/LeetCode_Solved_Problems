/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
var limit = Math.pow(2,31);
var temp = "" + x;
   temp = temp.split("").reverse();

  if (x < 0) {
   temp.pop();
   temp = parseInt(temp.join(''));
   console.log("PARSE", temp)
   if (temp > limit || temp < -limit) {
     return 0;
   }
   return temp *= -1;
  } else if (Number(temp.join('')) > limit || Number(temp.join('')) < -limit) {
     return 0;
   }
  return Number(temp.join(''));

};