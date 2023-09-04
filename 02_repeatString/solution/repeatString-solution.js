const repeatString = function(chooseWord, repeatTimes) {
    if (repeatTimes < 0) return "ERROR";
    let string = "";
    for(let i = 0; i < repeatTimes; i++){
        string += chooseWord;
    }
    return string;
}

// Do not edit below this line
module.exports = repeatString;
