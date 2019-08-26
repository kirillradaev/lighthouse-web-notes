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


const source = [];
const itemsToRemove = [];

const without = function (source, itemsToRemove) {
  let newArr = [];
   for (let i = 0 ;i < source.length; i++){
     let found = false; 
     for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]){
        found=true;
        }
      } 
      if(!found) {
        newArr.push(source[i]); 
      }
    }
    return newArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2,3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']); // => ["1", "2"]

module.exports = without;