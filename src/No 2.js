const sortArray = (arr, method = "asc") => {
  let positive = [];
  let negative = [];
  for (const num of arr) {
    if (num >= 0) {
      positive[num] = (positive[num] || 0) + 1;
    } else {
      negative[-num] = (negative[-num] || 0) + 1;
    }
  }
  let sorted = [];
  if (method === "asc") {
    for (const key in negative) {
      let temp = negative[key];
      for (let i = 0; i < temp; i++) {
        sorted = [-key, ...sorted];
      }
    }
    for (const key in positive) {
      let temp = positive[key];
      for (let i = 0; i < temp; i++) {
        sorted = [...sorted, +key];
      }
    }
  } else if (method === "desc") {
    for (const key in positive) {
      let temp = positive[key];
      for (let i = 0; i < temp; i++) {
        sorted = [+key, ...sorted];
      }
    }
    for (const key in negative) {
      let temp = negative[key];
      for (let i = 0; i < temp; i++) {
        sorted = [...sorted, -key];
      }
    }
  }
  return sorted;
};

module.exports = sortArray;
