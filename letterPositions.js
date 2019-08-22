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

const assertArraysEqual = function(arr1,arr2){
  if(eqArrays(arr1,arr2)){
    console.log(`😀Assertion Passed:${arr1} === ${arr2}`);
  }else{
    console.log(`😞Assertion Failed:${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  const letters = sentence.toLowerCase();
  for (let i = 0; i < letters.length; i++) {
    if (results[letters[i]]){
      results[letters[i]].push(i);
    } else {
      results[letters[i]] = [i];
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);