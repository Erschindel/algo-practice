function mergeOverlappingIntervals(arr) {
  // Write your code here.
  const sorted = arr.sort((a, b) => a[0] - b[0]);
  const ans = [];
  let left = sorted[0][0],
    right = sorted[0][1];

  for (let i = 0; i < sorted.length; i++) {
    if (i + 1 == sorted.length) {
      ans.push([left, right]);
      break;
    }
    if (right > sorted[i + 1][1]) {
      // skip next pair
      continue;
    }
    if (right < sorted[i + 1][0]) {
      // end current pair
      ans.push([left, right]);
      left = sorted[i + 1][0];
      right = sorted[i + 1][1];
      // i++ ???
      continue;
    }
    right = sorted[i + 1][1];
  }
  console.log(ans);
  return ans;
}

const arr1 = [
  [3, 5],
  [4, 7],
  [6, 8],

  [1, 2],
  [9, 10],
];
mergeOverlappingIntervals(arr1); // [[1, 2], [3, 8], [9, 10]]
