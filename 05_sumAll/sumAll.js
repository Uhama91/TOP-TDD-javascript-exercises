const sumAll = function(firstNum, secondNum) {
    if(firstNum>secondNum){
        [firstNum, secondNum] = [secondNum, firstNum];
    }
    if(firstNum < 0 || firstNum < 0) return 'ERROR';
    
    if(!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return 'ERROR';
    
    if(typeof firstNum !== "number" || typeof secondNum !== "number"){
        return 'ERROR';
    }

    if(Array.isArray(firstNum) || Array.isArray(secondNum)){
        return 'ERROR';
    }

    let sum = 0;

    for(let i=firstNum; i<=secondNum; i++){
        sum += i;
    }

    return sum;
};

console.log(sumAll(1, 2.5));

// Do not edit below this line
module.exports = sumAll;
