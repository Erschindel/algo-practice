function isMonotonic(array) {
  // Write your code here.
  if (array.length <= 2) return true;
  let direction = "empty";

  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) continue;
    if (direction === "empty") {
      direction = array[i] > array[i - 1];
      continue;
    }
    if (array[i] > array[i - 1] !== direction) {
      console.log("false");
      return false;
    }
  }
  console.log("true");

  return true;
}

const arr1 = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
isMonotonic(arr1); // true
const arr2 = [1, 2, 0];
isMonotonic(arr2); // false
