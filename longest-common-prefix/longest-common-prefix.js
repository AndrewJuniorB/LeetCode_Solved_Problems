/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
var common = '';
    for (var i = 0; i < strs[0].length; i ++) {
        var match = strs[0][i];
        for (var j = 1; j < strs.length; j ++) {
            if (match !== strs[j][i]) {
                return common;
            }
        }
        //otherwise 
        common += match;
    }
    return common;
//   strs.sort( (a,b) => {
//     return a.length - b.length;
//   });
//   var result = {};
//   var common = '';

//   //iterate over first word only 
//   for (var i = 0; i < strs[0].length; i ++) {
//     var match = strs[0][i];
//     for (var j = 1; j < strs[0].length; j++) {
//       if (strs[j].indexOf(match) > 0) {
//         result[match] = true;
//       } else {
//         result[match] = false;
//       }
//     }
//   }
//   for (var key in result) {
//     if (result[key]) {
//       common += key;
//     }
//   }
//   return common;
};