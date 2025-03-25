const removeFromArray = function(array, ...args) {
    let index;
    for(let i = 0; i < args.length; i++) {
        let currentArg = args[i];
        index = array.indexOf(currentArg);
        // Ensure that the types match
        if(array[index] === currentArg) {
            array.splice(index, 1);
            // Decrement i so that we look for other instances of
            // the currentArg in the array
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
