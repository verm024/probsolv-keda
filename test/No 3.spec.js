const checkPalindrome = require("../src/No 3");

describe("Palindrome Problem", () => {
  it("Will return true when used for palindrome string with odd number of characters", () => {
    const str = "kasur nababan rusak";
    expect(checkPalindrome(str)).toBe(true);
  });

  it("Will return true when used for palindrome string with even number of characters", () => {
    const str = "araara";
    expect(checkPalindrome(str)).toBe(true);
  });

  it("Will return true when used for string with 1 number of character", () => {
    const str = "t";
    expect(checkPalindrome(str)).toBe(true);
  });

  it("Will return true when used for string with 0 number of character", () => {
    const str = "";
    expect(checkPalindrome(str)).toBe(true);
  });

  it("Will return false when the palindrome string has lettercase missmatch", () => {
    const str = "Kasur nababan rusak";
    expect(checkPalindrome(str)).toBe(false);
  });

  it("Will return false when used for non palindrome string", () => {
    const str = "unit test";
    expect(checkPalindrome(str)).toBe(false);
  });
});
