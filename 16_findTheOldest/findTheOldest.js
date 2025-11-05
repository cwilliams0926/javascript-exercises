const findTheOldest = function(arr) {
    return arr.reduce((obj, value) => {
        if(value.yearOfDeath === undefined) {
            value.yearOfDeath = new Date().getFullYear();
        }

        value.age = value.yearOfDeath - value.yearOfBirth;
        if(obj.age === undefined) return value;
        if(value.age > obj.age) return value;
        return obj;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
