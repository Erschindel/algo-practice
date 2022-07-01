// You're running a store. You are given an array of item ids (arr) and a minimum number of item removals (m). Return the maximum number of combinations of unique (?) ids you can have after deleting m items from arr.

// not enough info to solve this, but
// we can compare the left and the right ends of the sorted array to optimize
// could we remove duplicates and then, if the length of the original - the length of the smaller <= m, return all combinations of ?
// how many items in unique arrays?
//

function uniqueItems(arr, m) {
  if (arr.length < 3) return 0;
  if (arr.length < 4) return 1;
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);
}

const arr1 = [1, 1, 5, 5];
const m1 = 2;
uniqueItems(arr1, m1); // 1 (only deleting a 1 and a 5 leaves you with a unique combination [1,5])

const arr2 = [1, 1, 1, 5];
const m2 = 2;
uniqueItems(arr2, m2); // 1 (only deleting two 1s leaves you with a unique combination [1,5])
