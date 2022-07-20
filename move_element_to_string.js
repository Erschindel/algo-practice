// should mutate the input array

function moveElementToEnd(array, toMove) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== toMove) {
      const swap = array.splice(i, 1)[0];
      array.unshift(swap);
    }
  }
  console.log(array);
  return array;
}

const arr1 = [2, 1, 2, 2, 2, 3, 4, 2];
const val1 = 2;
moveElementToEnd(arr1, val1); // [1, 3, 4, 2, 2, 2, 2, 2]
