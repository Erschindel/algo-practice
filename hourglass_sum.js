function hourglassSum(arr) {
  // Write your code here
  let ans;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      if (i === 0 && j === 0) {
        ans = sum;
      }

      if (sum > ans) ans = sum;
    }
  }
  console.log(ans);
  return ans;
}

const arr1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
hourglassSum(arr1); // 19
