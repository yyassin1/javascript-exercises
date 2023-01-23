function reverseString(string) {
    stringLength = string.length;
    let addString = [];
    let j = stringLength;
    for (let i = 0; i < stringLength; i++){
        addString[j - 1] = string[i];
        j--;
    }
    return addString.join('');
}

// Do not edit below this line
module.exports = reverseString;
