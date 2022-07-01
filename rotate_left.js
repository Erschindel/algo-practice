function rotLeft(a, d) {
  // Write your code here
  for (let i = 0; i < d; i++) {
    a.push(a.shift());
  }
  return a;
}

const val1 = 4;
const arr1 = [1, 2, 3, 4, 5];
rotLeft(arr1, val1); // [5,1,2,3,4]
