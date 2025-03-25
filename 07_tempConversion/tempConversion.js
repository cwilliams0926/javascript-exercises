const convertToCelsius = function(temperature) {
    newTemp = (temperature - 32) * (5 / 9);
    return +newTemp.toFixed(1);
};

const convertToFahrenheit = function(temperature) {
    newTemp = (temperature * (5 / 9) + 32);
    return +newTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
