const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤠🤠🤠Assertion Passed:${actual} === ${expected}`);
  } else {
   console.log(`😡😡😡Assertion Failed:${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
    } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
      return false;
      }
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
   if (Object.keys(object1).length !== Object.keys(object2).length) {
     return false; 
    }
    for(const item in object1){
      if(object1[item] !== object2[item]) {
        return false;
      } 
    } 
    return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "3", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

module.exports = eqObjects;