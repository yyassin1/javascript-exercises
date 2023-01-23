let array = [];
function removeFromArray(array, ...args) {
    arrayLength = array.length;
    let argsLength = args.length;
    for (let i = 0; i < arrayLength; i++){
        for (let j = 0; j < argsLength + 1; j++){
            if (array[i] === args[j]){
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
