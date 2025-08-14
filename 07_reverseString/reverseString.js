const reverseString = function(reverseFlash) {

    let newString = ""
    let length = reverseFlash.length

    for (let i = length - 1; i >= 0; i--){

        newString += reverseFlash[i];
    
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
