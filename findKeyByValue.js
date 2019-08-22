const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed:${actual} === ${expected}`);
  } else {
   console.log(`😞Assertion Failed:${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  crime: 'The Sopranos'
};

const findKeyByValue = function (object, value){
   for (const item in object) {
     if (object[item]){
      if (object[item] === value ) {
        return item;
      }
     }
   }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Sopranos"), "crime");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sci_fi");



