var uniqueRandomArray = require('unique-random-array');
var starWarsName = require('./starwars-names.json');

module.exports = {
    all:starWarsName,
    random:uniqueRandomArray(starWarsName)
};