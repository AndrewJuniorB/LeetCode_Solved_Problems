/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    if (s.length <= 1) return true;
    
    let regExp = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/' ']/gi;
    
    let lettersOnly = s.replace(regExp, '').toLowerCase();
    

    let reversedS = lettersOnly.split('').reverse().join('');
    
    return (lettersOnly === reversedS);
    
};