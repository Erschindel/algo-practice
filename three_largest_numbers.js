function findThreeLargestNumbers(array, ans = []) {
  // Write your code here.
  if (ans.length === 3) return ans;

  const maxVal = Math.max(...array);
  array.splice(array.indexOf(maxVal), 1);
  ans.push(maxVal);
  console.log(ans);
  return ans.length < 3
    ? findThreeLargestNumbers(array, ans)
    : ans.sort((a, b) => a - b);
}

//   // Do not edit the line below.
//   exports.findThreeLargestNumbers = findThreeLargestNumbers;

// const arr1 = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]; // [18, 141, 541]
const arr2 = [10, 5, 9, 10, 12];
findThreeLargestNumbers(arr2);
