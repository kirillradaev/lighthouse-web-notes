const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

// assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
// assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);

describe("#eqArrays", () => {
it("should return true if the arrays are equal", () => {
  assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
}),

it("should return fasle if the arrays are not equal", () => {
  assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); 
});

});