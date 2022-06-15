function sameBsts(arrayOne, arrayTwo) {
  // Write your code here.
  if (arrayOne[0] !== arrayTwo[0]) return false;
  let parent = arrayOne[0];
  for (let i = 1; i < arrayOne.length; i++) {
    if (arrayOne[i] > parent) {
      for (let j = 1; j < arrayTwo.length; j++) {
        if (arrayTwo[j] > parent) {
          if (arrayTwo[j] === arrayOne[i]) {
            break;
          }
          return false;
        }
      }
    } else if (arrayOne[i] < parent) {
      for (let j = 1; j < arrayTwo.length; j++) {
        if (arrayTwo[j] < parent) {
          if (arrayTwo[j] === arrayOne[i]) {
            break;
          }
          return false;
        }
      }
    }
  }
}

// Do not edit the line below.
//   exports.sameBsts = sameBsts;

const arr1 = [10, 15, 8, 12, 94, 81, 5, 2, 11];
const arr2 = [10, 8, 5, 15, 2, 12, 11, 94, 81];
sameBsts(arr1, arr2); // true
