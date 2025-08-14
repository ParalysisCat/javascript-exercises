const fibonacci = function(integer) {
if (integer < 0) { return "OOPS"} 
let final = []
for (let i = 0; i <= integer ; i++){
    if ( i == 0 ) { final.push(i)
        console.log(i)
        console.log(final)

    }
    else if (i == 1) {final.push(i) 
        console.log(i)
        console.log(final)}
    else {
        final.push(final[i-1] + final[i-2])
        console.log(final)
    }
    
}
return final[integer]
};
console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
