const findTheOldest = function(people) {
    
    let agecal = 0
    let max = 0
    let slot = 0
    for (let i = 0; i < people.length; i++ ){ 
        if (people[i].hasOwnProperty('yearOfDeath')){
            agecal = people[i].yearOfDeath - people[i].yearOfBirth
            if (agecal >= max) { 
                max = agecal
                slot = i
            }
        }
        else {
            agecal = new Date().getFullYear() - people[i].yearOfBirth
            if (agecal >= max) { 
                max = agecal
                slot = i
            }
        }
        
    }
    return people[slot]
};

// Do not edit below this line
module.exports = findTheOldest;
