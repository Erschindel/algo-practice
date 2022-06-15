// // O(n**3)
function kadanesAlgorithm(array) {
  // Write your code here.
  let currentMax = -Infinity;
  array.forEach((x, i) => {
    const arrPortion = array.slice(i);
    for (let j = arrPortion.length - 1; j >= 0; j--) {
      const relevantPortion = arrPortion.slice(0, j + 1);
      const sum = relevantPortion.reduce((acc, y) => acc + y);
      if (sum > currentMax) currentMax = sum;
    }
  });
  console.log(currentMax);
  return currentMax;
}

// function kadanesAlgorithm(array) {
//   // Write your code here.
//   let currentMax = -Infinity;
//   let left = 0;
//   let right = array.length;
// //   while (left < right) {
// //     const arrPortion = array.slice(left, right);
// //     const sum = arrPortion.reduce((acc, y) => acc + y);
// //     if (sum > currentMax) currentMax = sum;

// //   }
//   // if()
//   // array.forEach((x, i) => {
//   //   const arrPortion = array.slice(i);
//   //   for (let j = arrPortion.length - 1; j >= 0; j--) {
//   //     const relevantPortion = arrPortion.slice(0, j + 1);
//   //     const sum = relevantPortion.reduce((acc, y) => {
//   //       return acc + y;
//   //     }, 0);
//   //     if (sum > currentMax) currentMax = sum;
//   //   }
//   // });
//   console.log(currentMax);
//   return currentMax;
// }

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;

const arr1 = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
const arr2 = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];

kadanesAlgorithm(arr1); // 19 --- [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]
kadanesAlgorithm(arr2); // -1 --- [-1]
