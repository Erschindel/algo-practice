function binarySearch(array, target) {
  // Write your code here.
  let left = 0,
    right = array.length - 1,
    middle = Math.floor((left + right) / 2),
    leftDist,
    rightDist;

  while (left < middle) {
    console.log("left:", left, " middle:", middle, " right:", right);
    if (target === array[middle]) {
      console.log(middle);
      return middle;
    }
    leftDist = Math.abs(array[left] - target);
    rightDist = Math.abs(array[right] - target);
    if (leftDist > rightDist) left += middle;
    else right -= middle;
    middle = Math.floor((left + right) / 2);
  }
  console.log(-1);
  return -1;
}

// Do not edit the line below.
//   exports.binarySearch = binarySearch;

const arr1 = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const val1 = 33;
const val2 = 3;
binarySearch(arr1, val1); // 3
// binarySearch(arr1, val2); // -1
