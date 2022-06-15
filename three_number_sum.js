function threeNumberSum(array, targetSum) {
  // Write your code here.
  if (array.length < 3) return [];
  const sortedArr = array.sort((a, b) => a - b);

  let solutions = [];
  for (let x of sortedArr) {
    if (x > targetSum) {
      break;
    }
    let left = sortedArr.indexOf(x) + 1;
    let right = sortedArr.length - 1;

    while (left < right) {
      if (sortedArr[left] + sortedArr[right] + x === targetSum) {
        solutions.push(
          [sortedArr[left], sortedArr[right], x].sort((a, b) => a - b)
        );
        left++;
      } else if (sortedArr[left] + sortedArr[right] + x > targetSum) {
        right--;
      } else if (sortedArr[left] + sortedArr[right] + x < targetSum) {
        left++;
      }
    }
  }
  //   console.log(solutions);
  return solutions;
}

// Do not edit the line below.
// exports.threeNumberSum = threeNumberSum;

const arr1 = [12, 3, 1, 2, -6, 5, -8, 6]; // [-8, -6, 1, 2, 3, 5, 6, 12]
const val1 = 0;
threeNumberSum(arr1, val1); // [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
