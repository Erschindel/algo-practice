function firstDuplicateValue(arr) {
  // Write your code here.
  let ans = null;
  while (arr.length) {
    console.log(arr, ans);
    let current = arr.shift();
    if (current === ans) return ans;
    if (
      (arr.includes(current) && arr.indexOf(ans) > arr.indexOf(current)) ||
      (arr.includes(current) && !ans)
    )
      ans = current;
  }
  console.log(ans ? ans : -1);
  return ans ? ans : -1;
}

// const arr1 = [2, 1, 5, 2, 3, 3, 4];
// firstDuplicateValue(arr1); // 2
// const arr2 = [2, 1, 5, 3, 3, 2, 4];
// firstDuplicateValue(arr2); // 3
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
firstDuplicateValue(arr3); // 10
