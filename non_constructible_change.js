/* eslint-disable no-unused-vars */
function nonConstructibleChange(coins, memo = {}) {
  // Write your code here.

  // if (!coins.length || !coins.includes(1)) return 1;
  // const target = memo[1] ? Object.keys(memo).length : 2;
  // function findCombo(arr) {
  //   // return false if combo doesn't exist, or array if it does
  //   return Object.keys(memo).map((x) => {
  //     memo[target - 1];
  //   });
  // }
  // if (findCombo(coins)) {
  //   memo[target] = findCombo(coins);
  //   return nonConstructibleChange(coins, memo);
  // }
  // return target;

  if (!coins.length || !coins.includes(1)) return 1;
  const sortedCoins = coins.sort((a, b) => a - b);
  let greatest = 1;

  for (let coin of sortedCoins) {
    console.log(greatest);
    if (coin > greatest + 1) return greatest;
    greatest += coin;
  }
  console.log(greatest);
  return greatest + 1;

  // let ans = 1;

  // for (let i = 1; i < sum; i++) {
  //   if (sortedCoins.includes(i)) {
  //     continue;
  //   } else {
  //     let left = 0;
  //     let right = sortedCoins.length - 1;
  //     let found = false;
  //     while (left < right) {
  //       if (sortedCoins[left] + sortedCoins[right] === i) {
  //         found = true;
  //         console.log(sortedCoins[left], sortedCoins[right]);
  //         break;
  //       }
  //       console.log("here", i);
  //       if (sortedCoins[left] + sortedCoins[right] > i) right--;
  //       if (sortedCoins[left] + sortedCoins[right] < i) left++;
  //     }
  //     ans = i;
  //     if (!found) break;
  //   }
  // }
  // loop one at a time
  // take everything to the left of the index
  // loop until you can't find or sum to the index
  // return the value
  // console.log("ans:", ans);
  // return ans;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;

const arr1 = [5, 7, 1, 1, 2, 3, 22]; // 20
const arr2 = [1, 2, 5]; // 4
const arr3 = [5, 7, 1, 1, 2, 3, 15]; // 20
nonConstructibleChange(arr3);
