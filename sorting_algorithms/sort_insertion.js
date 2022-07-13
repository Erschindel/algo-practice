function insertionSort(arr) {
  // Write your code here.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      //   console.log(arr[i]);
      const removed = arr.splice(i, 1)[0];
      arr.splice(i - 1, 0, removed);
      i = 0;
      console.log("swap", arr);

      //   for (let j = i; j >= 0; j--) {
      //     if (arr[j] >= arr[j - 1] || !arr[j - 1]) {
      //       console.log(arr[j]);
      //       const removed = arr.splice(i, 1)[0];
      //       arr.splice(j, 0, removed);
      //       //   j = i;
      //       i = 0;
      //       console.log("swap", arr);
      //       break;
      //     }
      //   }
    }
  }
  console.log("end", arr);

  return arr;
}

// Do not edit the line below.
//   exports.insertionSort = insertionSort;

const arr1 = [8, 5, 2, 9, 5, 6, 3];
insertionSort(arr1); // [2, 3, 5, 5, 6, 8, 9]
