const removeFromArray = function(array, ...args) {
    let index;
    for(let i = 0; i < args.length; i++) {
        index = array.indexOf(args[i]);
        if(array[index] === args[i]) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
