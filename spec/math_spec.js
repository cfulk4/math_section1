//tell the test where to mind the code
var math = requre('../math');  //folder in the parent directory of folder currently in

describe("A simple program that does arithmetic", function() {
  it("contains spec with an expectation", function() {
    expect(math.add(3,5)).toBe(8);
  });
});

