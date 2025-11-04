const getTheTitles = function(arr) {
    return arr.reduce((titleArr, obj) => {
        titleArr.push(obj.title);
        return titleArr;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
