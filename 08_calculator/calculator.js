const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(sums) {
  let total = 0;
	for (let i = 0; i < sums.length; i++){
    total = total + sums[i];
  } 
  return total;
};

const multiply = function(mult) {
  let total = 1;
	for (let i = 0; i < mult.length; i++){
    total = total * mult[i];
  } 
  return total;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let result = 1;
	for (let fac = a; fac >= 1; fac--){
    result *= fac;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
