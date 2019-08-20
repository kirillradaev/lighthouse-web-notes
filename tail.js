const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed:${actual} === ${expected}`);
  } else {
   console.log(`😞Assertion Failed:${actual} !== ${expected}`);
  }
};
assertEqual('Lighhouse Labs', 'Bootcamp');
assertEqual(1, 1);

const tail = function(arr) {
  return arr.slice(1);
}

assertEqual(tail([5,6,7]), 6);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);