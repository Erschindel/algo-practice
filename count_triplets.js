// You are given an array and you need to find number of tripets of indices (i, j, k) such that the elements at those indices are in geometric progression for a given common ratio r and (i < j < k).

// unsolved: TOO SLOW

function countTriplets(arr, r) {
  // check for 0s in arr
  // check for length of arr > 2
  let ans = 0,
    first = 0,
    second = 0,
    third = 0,
    map = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % r) || arr[i] === 1) {
      first = i;
      const remainingFirst = arr.slice(first + 1, arr.length);
      if (
        remainingFirst.includes(arr[first] * r) &&
        remainingFirst.includes(arr[first] * r * r) &&
        arr.indexOf(arr[first] * r) < arr.indexOf(arr[first] * r * r)
      ) {
        // for (let j = first; j < arr.length; j++) {
        second = arr.indexOf(arr[first] * r);
        third = arr.indexOf(arr[first] * r * r);
        const remainingSecond = arr.slice(second + 1, arr.length);
        // find occs of third in remSecond, occs of second in remFirst, occs
        // console.log(`[${arr[first]}, ${arr[second]}] ---`, remainingSecond);
        const key = `${first},${second},${third}`;
        if (!map.includes(key)) {
          map.push(key);

          console.log(map);
          ans++; // add in number of occurences of
          i--;
        }

        // }
      }
    }
  }
  console.log("\n");
}

const arr1 = [1, 4, 16, 64];
const r1 = 4;
countTriplets(arr1, r1); // 2 ([1,4,16], [4,16,64])

const arr2 = [1, 3, 9, 9, 27, 81];
const r2 = 3;
countTriplets(arr2, r2); // 6 ([1,3,9], [1,3,9], [3,9,27], [3,9,27], [9,27,81], [9,27,81])

const arr3 = [1, 1, 1, 4, 4, 4, 16, 16, 16];
const r3 = 4;
countTriplets(arr1, r1); // 27

const arr4 = [1, 1, 1, 4, 4, 16, 4, 16, 16];
const r4 = 4;
countTriplets(arr1, r1); // 24
