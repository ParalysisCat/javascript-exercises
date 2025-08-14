const removeFromArray = function(group, ...removed) {



for (let i = group.length - 1; i >= 0; i --){

    if (removed.includes(group[i])) {
        group.splice(i,1)
        console.log(i);
    }
}

return group 


};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
