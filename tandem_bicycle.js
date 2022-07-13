function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  if (!redShirtSpeeds.length) return 0;
  const sortAllSpeeds = redShirtSpeeds
    .concat(blueShirtSpeeds)
    .sort((a, b) => a - b)
    .slice(redShirtSpeeds.length)
    .reduce((acc, x) => (acc += x));

  const sortedRed = redShirtSpeeds.sort((a, b) => a - b);
  const sortedBlue = blueShirtSpeeds.sort((a, b) => a - b);

  const slowest = [];
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    sortedRed[i] > sortedBlue[i]
      ? slowest.push(sortedRed[i])
      : slowest.push(sortedBlue[i]);
  }

  return fastest ? sortAllSpeeds : slowest.reduce((acc, x) => (acc += x));
}

const arr1a = [5, 5, 3, 9, 2];
const arr1b = [3, 6, 7, 2, 1];
const fastest1 = true;
tandemBicycle(arr1a, arr1b, fastest1); // 32 // 9 + 7 + 6 + 5 + 5

const arr2a = [5, 5, 3, 9, 2];
const arr2b = [3, 6, 7, 2, 1];
const fastest2 = false; // have to pair and take the largest of each pair
tandemBicycle(arr2a, arr2b, fastest2); // 25 // (9 || 7) + (5 || 6) + (5 || 3) + (3 || 2) + (2 || 1) = 9 + 6 + 5 + 3 + 2
