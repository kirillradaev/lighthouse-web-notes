const assertEqual = function(actual, expected) {
   if (actual === expected) {
     console.log('🙌Assertion Passed: [actual] === [expected]');
   } else {
   console.log('😥Assertion Failed: [actual] !==  [expected]');
   }
};

assertEqual('Lighhouse Labs', 'Bootcamp');
assertEqual(1, 1);