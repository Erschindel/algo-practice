function subarraySort(array) {
  // Write your code here.
  let [left, right] = [-1, -1];
  for (let i = 0; i < array.length; i++) {
    const remainingLeft = array.slice(i, array.length);
    const leftMin = Math.min(...remainingLeft);
    // console.log(leftMin);
    if (array[i] > leftMin) {
      //   console.log("in");
      left = i;
      for (let j = remainingLeft.length - 1; j > 0; j--) {
        const remainingRight = remainingLeft.slice(0, j + 1);
        const rightMax = Math.max(...remainingRight);

        if (remainingLeft[j] < rightMax) {
          right = j + i;
          console.log([left, right]);

          return [left, right];
        }
      }
    }
  }
  console.log([left, right]);

  return [left, right];
}

const arr1 = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
subarraySort(arr1); // [3,9]

const arr2 = [1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19];
subarraySort(arr2); // [4, 9]

const arr3 = [1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19];
subarraySort(arr3); // [4, 6]
