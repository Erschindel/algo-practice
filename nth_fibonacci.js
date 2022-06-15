// VERSION 1, O(n) = 2 ^ n
// function getNthFib(n) {
//   if (n === 0 || n === 1) return 0;
//   if (n === 2) return 1;
//   console.log(getNthFib(n - 1) + getNthFib(n - 2));
//   return getNthFib(n - 1) + getNthFib(n - 2);
// }

function getNthFib(n) {
  // Write your code here.
  return fibHelper(n, { 0: 0, 1: 0, 2: 1 });
}

function fibHelper(n, memo) {
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;
  if (!memo[n]) {
    memo[n] = fibHelper(n - 1, memo) + fibHelper(n - 2, memo);
  }
  console.log(memo[n]);
  return memo[n];
}

// Do not edit the line below.
// exports.getNthFib = getNthFib;

const val1 = 3;
const val2 = 6;
const val3 = 10;

// getNthFib(val1); // 1

// getNthFib(val2); // 5
getNthFib(val3); // 34
