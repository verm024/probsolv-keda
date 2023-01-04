const fishBash = (n) => {
  let returnedArray = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      returnedArray[i] = "fish bash";
      console.log("fish bash");
    } else if (i % 5 === 0) {
      returnedArray[i] = "bash";
      console.log("bash");
    } else if (i % 3 === 0) {
      returnedArray[i] = "fish";
      console.log("fish");
    } else {
      returnedArray[i] = i;
      console.log(i);
    }
  }
  return returnedArray;
};

module.exports = fishBash;
