function leapYears(year) {
    if (year % 4 == 0 && year % 400 == 0){
        return true;
    }
    if (year % 4 == 0 && year % 100 != 0){
        return true;s
    }
    else {
        return false;
    }
};
// Do not edit below this line
module.exports = leapYears;
