// function productSum(array) {
//   // Write your code here.
//   return productSumHelper(array, 1, 0);
// }

// function productSumHelper(array, depth, sum) {
//   let sameLevel = 0;
//   for (let x of array) {
//     if (!Array.isArray(x)) {
//       sameLevel += x;
//       console.log(sameLevel);
//     } else {
//       //   sum += sameLevel * depth;
//       //   console.log("total:", sum);
//       console.log(x);
//       sameLevel += productSumHelper(x, depth + 1, sum);
//     }
//   }
//   sum += depth * sameLevel;
//   console.log("end:", sum);
//   return sum;
// }

function productSum(array) {
  // Write your code here.
  return productSumHelper(array, 1, 0);
}

function productSumHelper(array, depth, sum) {
  let sameLevel = 0;
  for (let x of array) {
    if (!Array.isArray(x)) sameLevel += x;
    else sameLevel += productSumHelper(x, depth + 1, sum);
  }
  sum += depth * sameLevel;
  console.log("end:", sum);
  return sum;
}

const arr1 = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
productSum(arr1); // 12
