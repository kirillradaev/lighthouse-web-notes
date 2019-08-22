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

//assertObjetEqual takes in 2 objects , obj1 obj2
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if(eqObjects(object1, object2)){
    console.log(`🤠🤠🤠Assertion Passed:${inspect(object1)} === ${inspect(object2)}`);
  }else{
    console.log(`😡😡😡Assertion Failed:${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false
