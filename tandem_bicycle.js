function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  const sortSpeeds = redShirtSpeeds
    .concat(blueShirtSpeeds)
    .sort((a, b) => a - b);

  return fastest
    ? sortSpeeds.slice(redShirtSpeeds.length).reduce((acc, x) => (acc += x))
    : sortSpeeds.slice(0, redShirtSpeeds.length).reduce((acc, x) => (acc += x));
}

const arr1 = [5, 5, 3, 9, 2];
const arr2 = [3, 6, 7, 2, 1];
const fastest1 = true;

tandemBicycle(arr1, arr2, fastest1); // 32 // 9 + 7 + 6 + 5 + 5
