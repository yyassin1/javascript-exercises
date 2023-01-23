function sumAll(firstNum, lastNum) {
    let sum = 0;
    if (firstNum <= 0 || lastNum <= 0 || typeof firstNum != 'number' || typeof lastNum != 'number' )
    {
        return 'ERROR';
    }
    if (firstNum < lastNum){
        for (let i = firstNum; i <= lastNum; i++){
            sum = sum + i;
        }
    }
    else {
        for (let i = firstNum; i >= lastNum; i--){
            sum = sum + i;
        }
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
