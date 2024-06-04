const removeFromArray = function(array, num, num2 = 0, num3 = 0, num4 = 0) {
    i = 0;
    isTrue = true;
    while(isTrue)
        if (array.length === 0 || i > array.length) {
            isTrue = false;
        } else if (array[i] === num || array[i] === num2 || array[i] === num3 || array[i] === num4) {
            array.splice(i, 1)
            i = 0;
        } else {
        i++;
        }
    return array;
};

array = [1, 2, 3, 4]

console.log(removeFromArray(array, 1, 2));

// Do not edit below this line
module.exports = removeFromArray;
