const sortArray = require("../src/No 2");

describe("Sorting Problem", () => {
  it("Can sort ascending", () => {
    const arr = [0, 5, 2, -8, 6, -1, -8, -8, 201];
    expect(JSON.stringify(sortArray(arr, "asc"))).toBe(
      JSON.stringify([...arr].sort((a, b) => a - b))
    );
  });

  it("Can sort descending", () => {
    const arr = [0, 5, 2, -8, 6, -1, -8, -8, 201];
    expect(JSON.stringify(sortArray(arr, "desc"))).toBe(
      JSON.stringify([...arr].sort((a, b) => b - a))
    );
  });
});
