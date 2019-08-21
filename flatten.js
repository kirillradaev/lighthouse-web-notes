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

const flatten = function (newArr) {
  let arr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (Array.isArray(newArr[i])) {
      let currentArr = newArr[i];
      for (let j =0; j < currentArr.length; j++) {
      arr.push(currentArr[j]);
      }  
    }
    else{
      arr.push(newArr[i]);
    }
  }
  return arr;
};

assertArraysEqual(
  flatten([1, 2, [3, 4], 5, [6]]),
  [1, 2, 3, 4, 5, 6]

  ); // => [1, 2, 3, 4, 5, 6]