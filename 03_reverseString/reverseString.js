const reverseString = function(string) {
    stringArray = [];
    stringReversed = "";

    for (let i = 0; i  < string.length; i++) {
        stringArray[i] = string.charAt(i);
    }

    stringArray.reverse();
    for (let i = 0; i < string.length; i++) {
        stringReversed = stringReversed + stringArray[i]
    }
    return stringReversed;
};

string = 'hello there';

console.log(reverseString(string))

// Do not edit below this line
module.exports = reverseString;
