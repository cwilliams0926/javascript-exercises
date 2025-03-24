const reverseString = function(string) {
    const stringArray = [];
    for(let i = 0; i < string.length; i++) {
        stringArray[i] = string.charAt(string.length - i - 1);
    }
    
    let reversedString = "";
    for(let i = 0; i < stringArray.length; i++) {
        reversedString += stringArray[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
