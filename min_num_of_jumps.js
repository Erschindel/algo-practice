function minNumberOfJumps(array) {
  // Write your code here.
  if (array.length === 1) return 0;
  let count = 0,
    position = 0;
  console.log("position", position, "count", count);
  while (position < array.length - 1) {
    if (array.length <= position + array[position]) {
      console.log("here");
      console.log(count);
      return count;
    }
    count++;
    let bestJump = 0,
      distance = 0,
      relevant = array.slice(position + 1, array[position] + position + 1);
    // console.log(relevant);
    for (let i = 0; i < relevant.length; i++) {
      //   console.log("distance", distance);
      if (relevant[i] - (relevant.length - i) >= distance) {
        distance = relevant[i] - (relevant.length - i);
        bestJump = i + 1;
        // console.log("distance", distance, "- bestJump", bestJump);
      }
    }
    if (bestJump === 0) return Infinity;
    position += bestJump;
  }

  console.log("count", count);
  return count;
}

const arr1 = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3];
const arr2 = [1, 1, 1];
const arr3 = [2, 1, 2, 3, 1];
const arr4 = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 6, 2, 1, 1, 1, 1];

// minNumberOfJumps(arr1); // 4
// minNumberOfJumps(arr2); // 2
minNumberOfJumps(arr3); // 2
minNumberOfJumps(arr4); // 5
