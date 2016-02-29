//tell the test where to mind the code
var math = require('../math');  //folder in the parent directory of folder currently in

describe("A simple program that does arithmetic", function() {
  it("can add two numbers", function() {
    expect(math.add(3,5)).toBe(8);
  });

  it("can subtract two numbers", function() {
  	expect(math.subtract(3,5)).toBe(-2);
  });

it("can multiply two numbers", function() {
    expect(math.multiply(3,5)).toBe(15);
  });

  it("can divide two numbers", function() {
  	expect(math.divide(6,3)).toBe(2);
  });
});
