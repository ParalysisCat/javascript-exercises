const add = function(firstadd, secondadd) {
	let add = firstadd + secondadd
  return add
};

const subtract = function(firstsub, secondsub) {
	let sub = firstsub - secondsub
  return sub
};

const sum = function(numbers) {
	let sum = 0 
  for (i = 0 ; i <= numbers.length - 1; i++){
    sum = sum + numbers[i];
    //console.log(sum) 
  }
  return sum 
};

const multiply = function(firstmul) {
  let multiply = 1
for (let i = 0; i < firstmul.length; i++) {
  multiply = multiply * firstmul[i];
  //console.log("current iteration = " + i)
  //console.log("current multiplication = " + multiply)
}
//console.log(multiply)
return multiply 
};

const power = function(firstpow,secondpow) {
	let power = firstpow ** secondpow
  return power
};

const factorial = function(firstfac) {
  
  let fact = 1
	for (let i = 1 ; i <= firstfac ; i++){
    fact = fact * i; 
    //console.log(fact)
    }
    return fact
};

//console.log(multiply([3,4]))
//console.log(sum([8,9,10]))
//console.log(factorial(4))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
