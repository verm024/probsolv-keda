const fishBash = require("../src/No 1");

describe("Fish Bash Problem", () => {
  const resultArray = fishBash(100);

  it("Can print 'fish bash' when the number is completely divided by 15", () => {
    expect(resultArray[30]).toBe("fish bash");
  });

  it("Can print 'bash' when the number is completely divided by 5", () => {
    expect(resultArray[100]).toBe("bash");
  });

  it("Can print 'fish' when the number is completely divided by 3", () => {
    expect(resultArray[6]).toBe("fish");
  });

  it("Can print itself when the number is not completely divided by 3, 5, and 15", () => {
    expect(resultArray[4]).toBe(4);
  });
});
