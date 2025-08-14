const convertToCelsius = function(inFarh) {
  let outCel = ((inFarh - 32)/1.8)
  console.log(outCel)
  console.log(typeof outCel)
  return Number(outCel.toFixed(1))

};

const convertToFahrenheit = function(inCel) {
  let outFarh = (inCel * 1.8) + 32
  console.log(typeof outFarh.toFixed(1))
  return Number(outFarh.toFixed(1))
  
};

console.log(convertToCelsius(-100))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

