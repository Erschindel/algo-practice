// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

// unsolved: TOO SLOW

function minimumBribes(q) {
  // Write your code here
  if (q.length <= 1) return 0;
  let count = 0,
    swapped = {},
    chaotic = false;
  for (let i = 0; i < q.length; i++) {
    if (q[i] !== i + 1) {
      if (q[i] !== i + 2 && q[i] !== i + 3) {
        // minor optimization
        chaotic = true;
        break;
      }
      const shift = q.slice(i, q.indexOf(i + 1)); // these items need to update in swapped
      shift.forEach((x) => {
        swapped[x] ? swapped[x]++ : (swapped[x] = 1);
        count++;
        if (swapped[x] > 2) chaotic = true;
      });

      if (chaotic) break;
      const swap = q.splice(q.indexOf(i + 1), 1)[0];
      q.splice(i, 0, swap);
      i--;
    }
  }
  console.log(chaotic ? "Too chaotic" : count);
  return chaotic ? "Too chaotic" : count;
}

const arr1 = [1, 2, 3, 5, 4, 6, 7, 8];
minimumBribes(arr1); // 1
const arr2 = [4, 1, 2, 3];
minimumBribes(arr2); // "Too chaotic"
const arr3 = [1, 2, 5, 3, 4, 7, 8, 6];
minimumBribes(arr3); // 4
const arr4 = [1, 2, 5, 3, 7, 8, 6, 4];
minimumBribes(arr4); // 7
const arr5 = [2, 1, 4, 7, 5, 3, 6]; // 124.., 1247356, 1243756, 1234756, 1234576, too chaotic (7)
minimumBribes(arr5); // Too chaotic
const arr6 = [2, 1, 4, 5, 7, 3, 6]; // 124.., 1245376, 1243576, 1234576, 1234567
minimumBribes(arr6); // 5
const arr7 = [3, 4, 5, 6, 7, 1, 2];
minimumBribes(arr7); // 10
