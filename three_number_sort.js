function threeNumberSort(array, order) {
  // Write your code here.
  for (let i = 0; i < order.length; i++) {
    if (!array.includes(order[i])) {
      continue;
    }
    for (let j = 0; j < array.length; j++) {
      if (array[j] === order[i]) {
        array.push(array.splice(j, 1));
        j--;
      }
    }
  }
  return array.map((x) => x[0]);
}

// Do not edit the line below.
//   exports.threeNumberSort = threeNumberSort;

const arr1 = [1, 0, 0, -1, -1, 0, 1, 1];
const order1 = [0, 1, -1];

threeNumberSort(arr1, order1);

// first loop through order
// if order[i] is in arr1, splice it out and push it back in
