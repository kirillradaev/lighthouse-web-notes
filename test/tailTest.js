const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 6 for [5, 6, 7]", () => {
    assert.deepEqual(tail([5,6,7]), [6, 7]);
  }),

  it("returns 'Lighthouse' for [Hello, Lighthouse, Labs", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", 'Labs']);
  });
});

// assertEqual(tail([5,6,7])[0], 6);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");

// describe("#middle", () => {
//   it("returns [2] for [1, 2, 3]", () => {
//     assert.deepEqual(middle([1, 2, 3]), [2]);
//   }),

//   it("returns [] for [1]", () => {
//     assert.deepEqual(middle(['1']), []); 
//   });
// });
