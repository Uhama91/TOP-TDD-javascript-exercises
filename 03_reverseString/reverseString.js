const reverseString = function(str) {
    let reverseStr = "";
    let arrayStr = str.split('');
    const length = arrayStr.length;
    
    for(let i=0; i<length; i++){
        reverseStr += arrayStr.pop();
    }

    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
