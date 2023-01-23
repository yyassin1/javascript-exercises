function  convertToCelsius(temperature) {
    let celsius = (temperature - 32) * (5/9);
    let answer = Math.round(celsius * 10) / 10;
    return answer;
};

function convertToFahrenheit(temperature) {
  let fahrenheit = (temperature * (9/5)) + 32;
  let answer = Math.round(fahrenheit * 10) / 10;
  return answer;
};
console.log(convertToCelsius(100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
