const repeatString = function(string, num) {
    newString = '';
    if (num < 0) {
        newString = 'ERROR'
    } else if (num === 0) {
        newString = newString;
    } else if (num === 1) {
        newString = string;
    } else {
        for (i = 0; i < num; i++) {
            newString = newString + string;
        }
    }
    return newString;
};

repeatString('hey', -3)
// Do not edit below this line
module.exports = repeatString;
