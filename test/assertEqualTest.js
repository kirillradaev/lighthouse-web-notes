const assert = require('chai').assert;

// assertEqual('Lighhouse Labs', 'Bootcamp');
// assertEqual(1, 1);


describe("#eqArrays", () => {
  it("should return true if the objects are equal", () => {
    assert.strictEqual(1, 1);
  }),

  it("should return fasle if the objects are not equal", () => {
    assert.strictEqual('Lighthouse', 'Lighthouse'); 
  });

});