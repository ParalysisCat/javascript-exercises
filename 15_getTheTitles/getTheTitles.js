const getTheTitles = function(tbooks) {

    let ntitles = []

    for (i = 0; i < tbooks.length ; i++ ) {
        ntitles.push(tbooks[i].title)
        console.log(ntitles)
    }
    return ntitles
};

console.log(getTheTitles([{title: 'Book',author: 'Name'},{title: 'Book2',author: 'Name2'}]))
// Do not edit below this line
module.exports = getTheTitles;
