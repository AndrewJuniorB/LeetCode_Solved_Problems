/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let output = 0;
    for (let i = 0; i < sentences.length; i++) {
        output = Math.max(output, sentences[i].split(' ').length)
    }
    console.log(output);
    return output;
};