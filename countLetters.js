const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤠🤠🤠Assertion Passed:${actual} === ${expected}`);
  } else {
   console.log(`😡😡😡Assertion Failed:${actual} !== ${expected}`);
  }
};

let allLetters = '';
let letters = allLetters.split('');


const countLetters = function(allLetters) {

  const letters = allLetters.split(' ').join('').toLowerCase();
  const results = {};
  
  for (const item of letters) {
      if (results[item]) {
        results[item] += 1;
      } else { 
        results[item] = 1;
    }
  }
  return results;
};

const countedLetters = countLetters("lighthouse in the house");

assertEqual(countedLetters['e'], 3);
assertEqual(countedLetters['t'], 2);
assertEqual(countedLetters['l'], 5);