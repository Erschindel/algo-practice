function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let ans = [],
    smallest = Infinity;

  arrayOne.forEach((x) => {
    for (let y of arrayTwo) {
      if (Math.abs(x - y) < smallest) {
        smallest = Math.abs(x - y);
        ans = [x, y];
      }
    }
  });
  console.log(ans);
  return ans;
}

const arr1 = [-1, 5, 10, 20, 28, 3];
const arr2 = [26, 134, 135, 15, 17];
smallestDifference(arr1, arr2); // [28, 26]
