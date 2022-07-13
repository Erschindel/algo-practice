function selectionSort(arr) {
  // Write your code here.
  let ans = [];
  while (arr.length) {
    const min = Math.min(...arr);
    ans.push(arr.splice(arr.indexOf(min), 1)[0]);
  }
  console.log(ans);
  return ans;
}

const arr1 = [8, 5, 2, 9, 5, 6, 3];
selectionSort(arr1); // [2, 3, 5, 5, 6, 8, 9]
