/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x > Math.pow(2,31)) {
        return 0;
    }
    x = x.toString();
    let leftIndex = (x) => {
        return x.slice(0,1);
    }
    let endIndex = (x) => {
        return x.slice(-1);
    }
    let shrink = (x) => {
        return x.slice(1,-1)
    }
    if (x.length < 2) {
        return true;
    }
    if (leftIndex(x) === endIndex(x)) {
        return isPalindrome(shrink(x));
    }
    return false;
};