const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed:${actual} === ${expected}`);
  } else {
   console.log(`😞Assertion Failed:${actual} !== ${expected}`);
  }
};
// assertEqual('Lighhouse Labs', 'Bootcamp');
// assertEqual(1, 1);

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 3]), false);


const assertArraysEqual = function(arr1,arr2){
  if(eqArrays(arr1,arr2)){
    //print something here
  }else{
    //print they are equal 
  }
}