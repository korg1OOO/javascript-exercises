const palindromes = function (str) {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversed = "";
    reversed = cleanStr.split('').reduce((reversed, char) => char + reversed, '');

    if(reversed === cleanStr) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
