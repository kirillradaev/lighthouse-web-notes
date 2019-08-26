const assertEqual = require('./assertEqual');

const tail = function(arr) {
  return arr.slice(1);
}

// assertEqual(tail([5,6,7]), 6);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
// assertEqual(words.length, 3);

module.exports = tail;