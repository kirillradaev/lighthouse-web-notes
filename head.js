const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed:${actual} === ${expected}`);
  } else {
   console.log(`😞Assertion Failed:${actual} !== ${expected}`);
  }
};

assertEqual('Lighhouse Labs', 'Bootcamp');
assertEqual(1, 1);

const head = function (array) {
    return array[0];
}
assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");