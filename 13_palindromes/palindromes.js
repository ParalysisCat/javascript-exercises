const palindromes = function (stringpal) {
let reduced = stringpal.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('')
let redpal = []

//console.log(reduced)
for (let i = reduced.length -1  ; i >= 0 ; i--) {
    redpal.push(reduced[i]);
    console.log(i + " " + reduced[i]);
    
    console.log(redpal)


}
console.log("REDPAL " + redpal)
console.log("REDUCED " + reduced)
if (reduced.join('') == redpal.join('')) return true
else {return false}

};

console.log(palindromes("racecar!"))
// Do not edit below this line
module.exports = palindromes;
