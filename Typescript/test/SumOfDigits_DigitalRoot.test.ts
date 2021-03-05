import solution = require("../src/SumOfDigits_DigitalRoot");
import { assert } from "chai";
describe("solution", function () {
  it("should work for basic tests", () => {
    assert.equal(solution.digitalRoot(16), 7);
    assert.equal(solution.digitalRoot(456), 6);
  });
});
