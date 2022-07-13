function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1,
    middle;

  while (left < right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      console.log(middle);
      return middle;
    } else if (arr[middle + 1] === target) {
      console.log(middle + 1);
      return middle + 1;
    }
    console.log(middle, arr[middle]);

    if (arr[middle] > target) {
      right = middle;
      // arr = arr.slice(middle, right);
    } else {
      left = middle + 1;
      // arr = arr.slice(left, middle);
    }
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
const arr3 = [1, 5, 23, 111];
const val3 = 111;
const val4 = 35;
binarySearch(arr3, val3); // 3
binarySearch(arr3, val4); // 4
