const sumAll = function(start,end) {
    const startTime = performance.now(); // START TIMING HERE
    
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if (start < 0 || end < 0) return "ERROR";
    let multiplier = start -1;
    let sum = 0 ; 

    if (end>start){
    for (let i = start; i <= end ; i++){

    
        sum = sum + i
        //console.log("current number is " + i)
        //console.log("current sum is " + sum)
        //console.log("---")
        //if (sum >= 40000){for(let i = 0; i < sum*2; i++) {console.log(sum);}}

    }

    const endTime = performance.now(); // END TIMING HERE
    console.log(`Execution time: ${endTime - startTime} milliseconds`);
    return sum;
    }   

    else {
    for (let i = end; i <= start ; i++){

    
        sum = sum + i
       // console.log("current number is " + i)
       // console.log("current sum is " + sum)
      //  console.log("---")

    }
    const endTime = performance.now(); // END TIMING HERE (for else branch too)
    console.log(`Execution time: ${endTime - startTime} milliseconds`);
    return sum;
    
    }
    
};

//console.log(sumAll(1, 300));   

// Do not edit below this line
module.exports = sumAll;