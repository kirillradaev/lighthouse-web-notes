const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
// assertEqual(eqArrays([1, 2, 3], [2, 2, 3]), false);
// assertEqual(eqArrays([], []), true);
// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3,]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  }),

  it("returns true for [5, 5, 5] and [5, 5, 5]", () => {
    assert.strictEqual(eqArrays([5, 5, 5], [5, 5, 5]), true); 
  }),

  it("returns false for [5, 7, 6] and [5, 2, 4]", () => {
    assert.strictEqual(eqArrays([5, 7, 6], [5, 2, 4]), false); 
  });
});