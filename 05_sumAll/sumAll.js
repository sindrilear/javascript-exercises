const sumAll = function(num1, num2) {
    largeNumber = 0;
    smallNumber = 0;
    if (Number.isInteger(num1) === false || Number.isInteger(num2) === false) {
        return('ERROR')
    } else if (num1 < 0 || num2 < 0) {
        return('ERROR')
    } else if (num1 > num2) {
        largeNumber = num1;
        smallNumber = num2;
    } else {
        largeNumber = num2;
        smallNumber = num1;
    }
    sum = smallNumber
    for (i = smallNumber + 1; i < largeNumber + 1; i++) {
        sum = sum + i;
    }
    return (sum);
};

console.log(sumAll("90", 4));
// Do not edit below this line
module.exports = sumAll;
