const assertEqual = require('./assertEqual');

const head = function (array) {
    return array[0];
}
// assertEqual(head([5,6,7]), 6);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;