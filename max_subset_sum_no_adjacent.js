function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  // they're already positive integers

  if (!array.length) return 0;
  let skip = 0;
  return array.reduce((acc, x, i, a) => {
    if (skip) {
      skip--;
      console.log("skipped");
      return acc;
    }
    if (a[i + 1]) {
      if (
        altSum(array.slice(i, array.length)) >=
        altSum(array.slice(i + 1, array.length))
      ) {
        skip++;
        console.log(acc + x);
        return acc + x;
      }
      console.log(acc);
      return acc;
    }
    console.log("end", acc + x);
    return acc + x;
  }, 0);

  //     if (a[i + 3]) {
  //       if (x + a[i + 2] >= a[i + 1] + a[i + 3]) {
  //         skip++;
  //         console.log(acc + x);
  //         return acc + x;
  //       } else if (x + a[i + 3] >= a[i + 1] + a[i + 2]) {
  //         skip += 2;
  //         console.log(acc + x);
  //         return acc + x;
  //       }
  //       console.log(acc);
  //       return acc;
  //     }
  //     if (a[i + 2]) {
  //       if (x + a[i + 2] > a[i + 1]) {
  //         skip++;
  //         console.log(acc + x);
  //         return acc + x;
  //       }
  //       console.log(acc);
  //       return acc;
  //     } else if (a[i + 1]) {
  //       if (x > a[i + 1]) {
  //         skip++;
  //         console.log(acc + x);
  //         return acc + x;
  //       }
  //       console.log(acc);

  //       return acc;
  //     }
  //     console.log(acc + x);

  //     return acc + x;
  //   }, 0);
}

function altSum(arr) {
  //   console.log(arr.reduce((acc, x, i) => (i % 2 ? acc : acc + x)));
  return arr.reduce((acc, x, i) => (i % 2 ? acc : acc + x));
}

const arr1 = [75, 105, 120, 75, 90, 135];
// maxSubsetSumNoAdjacent(arr1); // 330 (75 + 120 + 135)

const arr2 = [30, 25, 50, 55, 100, 120];
// maxSubsetSumNoAdjacent(arr2); // 205 (30 + 55 + 120)

const arr3 = [4, 3, 5, 200, 5, 3];
maxSubsetSumNoAdjacent(arr3); // 207 (4 + 200 + 3)

const arr4 = [7, 10, 12, 7, 9, 14, 15, 16, 25, 20, 4]; // 11 items
// maxSubsetSumNoAdjacent(arr4); // 72 (7 + 12 + 9 + 15 + 25 + 4)
// altSum(arr4);

// you never want to skip unless the sum from skipping is greater than the sum from staying

// [1, 1, 1, 1, 1, 1, 1, 1, 1]
