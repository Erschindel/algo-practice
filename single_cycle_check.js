function hasSingleCycle(array) {
  // Write your code here.

  const effectiveArr = array.map((x) => {
    while (x >= array.length) {
      x -= array.length;
    }
    while (x < 0) {
      x += array.length;
    }
    return x;
  });

  if (effectiveArr.includes(0)) return false;

  const visited = [];
  let nextInd = effectiveArr[0];

  // [2, 3, 1, 2, 2, 2];

  for (let i = 0; i < effectiveArr.length; i++) {
    visited.push(nextInd); // [2, 3, 5, 1]
    nextInd += effectiveArr[nextInd];
    if (nextInd >= effectiveArr.length) nextInd -= effectiveArr.length;
  }

  const compare = effectiveArr.map((_, i) => i);
  const found = compare.every((r) => visited.includes(r));

  console.log(found);
  return found;
}

const arr1 = [2, 3, 1, -4, -4, 2];
// hasSingleCycle(arr1); // true
const arr2 = [1, 1, 1, 1, 2];
hasSingleCycle(arr2); // false
