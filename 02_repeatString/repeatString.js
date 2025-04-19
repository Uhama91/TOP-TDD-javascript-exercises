const time = Math.floor(Math.random()*1001)

const repeatString = function(str, time) {
    if(typeof str !== "string") return false;
    
    if(time < 0) return "ERROR";

    if(str === '') return '';

    let newStr = "";
    for(let i = 0; i < time; i++){
        if(time === 0) newStr === " ";
        newStr += str;
    }

    return newStr;
}

// Do not edit below this line
module.exports = repeatString;
