const reverseString = function(string) {
    // create array and make string into array
    const stringArray = [];
    for(let i = 0; i < string.length; i++) {
        stringArray[i] = string.charAt(string.length - i - 1);
    }
    // reverse the array
    // return string of all the indeces concatenated
    let reversedString = "";
    for(let i = 0; i < stringArray.length; i++) {
        reversedString += stringArray[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
