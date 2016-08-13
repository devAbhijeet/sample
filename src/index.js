var uniqueRandomArray = require('unique-random-array');
var starWarsName = require('./starwars-names.json');

var getRandomItem = uniqueRandomArray(starWarsName);

module.exports = {
    all:starWarsName,
    random:random
};

function  random(number){
    if(number==undefined){
        return getRandomItem();
    }else{
        var randomItems = [];
        for(var i=0;i<number;i++){
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}