const palindromes = function (str) {
    str = str
        .toLowerCase()
        .trim()
        .replaceAll(" ", "")
        .replaceAll("!", "")
        .replaceAll(".", "")
        .replaceAll(",", "");
    const reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
