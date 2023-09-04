const reverseString = function(word) {
    let wordArray = word.split("")
    wordArray = wordArray.reverse();
    return wordArray.join("");
};

reverseString("hello there");
// Do not edit below this line
module.exports = reverseString;
